'use strict';

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);


var _getLocalIP = require('../urb-base-server/getLocalIP');var _getLocalIP2 = _interopRequireDefault(_getLocalIP);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load(); //import AppRegistryName from '../_configuration/urb-base-app/AppRegistryName'

const port = process.env.PORT;
if (port == null || typeof port !== 'string')
throw new Error('Error: update-ip requires the environment variable PORT to be set');

let IPAddress = process.argv[2];

if (IPAddress === undefined) IPAddress = (0, _getLocalIP2.default)();

if (IPAddress !== undefined) {
  console.log('IP Address:' + IPAddress);
  /*
                                          updateIPInFile(
                                            './ios/' + AppRegistryName + '/AppDelegate.m',
                                            'jsCodeLocation = [NSURL URLWithString:@"http:',
                                            '  jsCodeLocation = [NSURL URLWithString:@"http://' +
                                              IPAddress +
                                              ':8081/index.ios.bundle?platform=ios&dev=true"];',
                                            IPAddress,
                                          )
                                          updateIPInFile(
                                            './units/_configuration/urb-base-app/publicURL.js',
                                            'const publicURL',
                                            'const publicURL = \'http://' + IPAddress + ':' + port + '\'',
                                            IPAddress,
                                          )
                                          */
  updateIPInFile('./.env', 'PUBLIC_URL=', 'PUBLIC_URL=http://' + IPAddress + ':' + port, IPAddress);
  updateIPInFile('./.env', 'HOST=', 'HOST=' + IPAddress, IPAddress);
} else console.log('IP Address not specified and could not be found');

function updateIPInFile(fileName, searchString, newContentOfLine, IPAddress) {
  try {
    let fileLines = _fs2.default.readFileSync(fileName, 'utf8').split('\n');
    let index = 0;

    while (index < fileLines.length) {
      if (fileLines[index].indexOf(searchString) > -1) {
        if (fileLines[index] === newContentOfLine)
        console.log('[' + fileName + '] is already up to date');else
        {
          fileLines[index] = newContentOfLine;
          _fs2.default.writeFileSync(fileName, fileLines.join('\n'));

          console.log('[' + fileName + '] has been updated with local IP ' + IPAddress);
        }
        break;
      } else {
        index++;
      }
    }
  } catch (err) {
    console.log('[' + fileName + '] has not been been updated with local IP because ' + err);
  }
}
//# sourceMappingURL=updateIP.js.map