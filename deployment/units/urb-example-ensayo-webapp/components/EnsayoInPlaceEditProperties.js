'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('@material-ui/core/Button');var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _TextField = require('@material-ui/core/TextField');var _TextField2 = _interopRequireDefault(_TextField);

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRte = require('react-rte');var _reactRte2 = _interopRequireDefault(_reactRte);

var _styles = require('@material-ui/core/styles');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap' },

  richTextContainer: {
    width: '100%',
    height: 300,
    display: 'inline-block',
    position: 'relative' } });



class EnsayoInPlaceEditProperties extends _react2.default.Component













{
  constructor(props, context) {
    super(props, context);this.










    _handle_OnChange_RTE_Ensayo_Content = value => {
      this.setState({
        Ensayo_Content_RTE: value });

    };this.

    _handle_Close = () => {
      this.props.handlerClose();
    };this.

    _handle_OK = () => {
      const { handlerClose, handlerUpdate } = this.props;

      handlerUpdate({
        Ensayo_Title: this.state.Ensayo_Title,
        Ensayo_Description: this.state.Ensayo_Description,
        Ensayo_Content: this.state.Ensayo_Content_RTE.toString('html') });


      handlerClose();
    };const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props;this.state = { Ensayo_Title, Ensayo_Description, Ensayo_Content_RTE: _reactRte2.default.createValueFromString(Ensayo_Content, 'html') };}

  render() {
    const { classes } = this.props;
    const { Ensayo_Title, Ensayo_Description } = this.state;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_Dialog2.default, { open: true, onClose: this._handle_Close },
          _react2.default.createElement(_DialogTitle2.default, null, 'Ensayo'),

          _react2.default.createElement(_DialogContent2.default, null,
            _react2.default.createElement(_TextField2.default, {
              label: 'Title',
              fullWidth: true,
              value: Ensayo_Title,
              onChange: event => this.setState({ Ensayo_Title: event.target.value }) }),

            _react2.default.createElement(_TextField2.default, {
              label: 'Description',
              fullWidth: true,
              value: Ensayo_Description,
              onChange: event => this.setState({ Ensayo_Description: event.target.value }) }),

            _react2.default.createElement('div', { className: classes.richTextContainer },
              _reactRte2.default == null ?
              _react2.default.createElement('div', null) :

              _react2.default.createElement(_reactRte2.default, {
                value: this.state.Ensayo_Content_RTE,
                onChange: this._handle_OnChange_RTE_Ensayo_Content }))),





          _react2.default.createElement(_DialogActions2.default, null,
            _react2.default.createElement(_Button2.default, { onClick: this._handle_Close }, 'Cancel'),
            _react2.default.createElement(_Button2.default, { onClick: this._handle_OK, color: 'primary' }, 'OK')))));






  }}exports.default =


(0, _styles.withStyles)(styles)(EnsayoInPlaceEditProperties);
//# sourceMappingURL=EnsayoInPlaceEditProperties.js.map