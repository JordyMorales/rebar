'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.Directory = exports.File = undefined;

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _util = require('util');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const readdirAsync = (0, _util.promisify)(_fs2.default.readdir);
const readFileAsync = (0, _util.promisify)(_fs2.default.readFile);
const statAsync = (0, _util.promisify)(_fs2.default.stat);

class FileBase {




  constructor(arrRelativePath) {
    this.arrRelativePath = arrRelativePath;
    this.relativePath = arrRelativePath.join('/');
    this.name = arrRelativePath[arrRelativePath.length - 1];
  }}


class File extends FileBase {}exports.File = File;



class Directory extends FileBase {



  constructor(arrRelativePath) {
    super(arrRelativePath);

    this.arrContents = [];
  }}exports.Directory = Directory;


class MasterReader {







  constructor(basePath) {
    this.basePath = basePath;

    this.directoriesByRelativePath = new Map();
    this.fileContentsByRelativePath = new Map();

    this.skipFile = () => false;
    this.arrAllFiles = [];
  }

  setSkipFile(skipFile) {
    this.skipFile = skipFile;
  }

  async initialize() {
    // And read
    this.baseDir = await this.readDirectory([]);
  }

  async readDirectory(arrRelativePath) {
    const dir = new Directory(arrRelativePath);
    this.directoriesByRelativePath.set(dir.relativePath, dir);

    const dirContent = await readdirAsync(this.basePath + '/' + dir.relativePath);
    for (let fileName of dirContent) {
      // Skip DS store iles on mac
      if (fileName === '.DS_Store') continue;

      // Skip files according to passed function
      if (this.skipFile(fileName)) {
        continue;
      }

      // Skip . and .. directories
      if (fileName.substr(0, 1) === '.') {
        continue;
      }

      const stat = await statAsync(this.basePath + '/' + dir.relativePath + '/' + fileName);

      let fileOrDirToAdd;

      if (stat.isFile()) {
        const file = new File(arrRelativePath.concat(fileName));

        fileOrDirToAdd = file;
      } else if (stat.isDirectory()) {
        const subDir = await this.readDirectory(arrRelativePath.concat(fileName));

        fileOrDirToAdd = subDir;
      } else
      throw new Error(
      'MasterReader: Neither file nor directory' + JSON.stringify(arrRelativePath));


      dir.arrContents.push(fileOrDirToAdd);
    }

    return dir;
  }

  async readFile(fileName) {
    const currentContent = this.fileContentsByRelativePath.get(fileName);

    if (currentContent) return currentContent;

    const newContent = (await readFileAsync(this.basePath + '/' + fileName, 'utf8')).toString();
    this.fileContentsByRelativePath.set(fileName, newContent);

    return newContent;
  }

  getAllFiles() {
    if (!this.baseDir) throw new Error();

    if (this.arrAllFiles.length > 0) return this.arrAllFiles;

    this.getAllFiledHelper(this.baseDir);

    return this.arrAllFiles;
  }

  getAllFiledHelper(dir) {
    for (let fileOrDirectory of dir.arrContents) {
      if (fileOrDirectory instanceof Directory) {
        // Sub-dir
        this.getAllFiledHelper(fileOrDirectory);
      } else if (fileOrDirectory instanceof File) {
        this.arrAllFiles.push(fileOrDirectory);
      }
    }
  }}exports.default = MasterReader;
//# sourceMappingURL=MasterReader.js.map