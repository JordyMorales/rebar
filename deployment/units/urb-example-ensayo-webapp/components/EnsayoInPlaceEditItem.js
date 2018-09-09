'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ListItem = require('@material-ui/core/ListItem');var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@material-ui/core/ListItemText');var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Menu = require('@material-ui/core/Menu');var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _EnsayoDeleteMutation = require('../../urb-example-ensayo-client/relay/EnsayoDeleteMutation');var _EnsayoDeleteMutation2 = _interopRequireDefault(_EnsayoDeleteMutation);
var _EnsayoUpdateMutation = require('../../urb-example-ensayo-client/relay/EnsayoUpdateMutation');var _EnsayoUpdateMutation2 = _interopRequireDefault(_EnsayoUpdateMutation);

var _EnsayoInPlaceEditProperties = require('./EnsayoInPlaceEditProperties');var _EnsayoInPlaceEditProperties2 = _interopRequireDefault(_EnsayoInPlaceEditProperties);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class EnsayoInPlaceEditItem extends _react2.default.Component










{
  constructor(props, context) {
    super(props, context);this.








    _handle_Update_Properties = EnsayoInPlaceEditProperties => {
      const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = EnsayoInPlaceEditProperties;
      const { relay, Ensayo } = this.props;

      _EnsayoUpdateMutation2.default.commit(
      relay.environment,
      Ensayo,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content);

    };this.

    _handle_Close_Properties = () => {
      this.setState({ propertiesIsOpen: false });
    };this.

    handleClickListItem = event => {
      this.setState({ menuIsOpen: true, anchorEl: event.currentTarget });
    };this.

    _handle_Menu_onClick_Edit = event => {
      this.setState({ menuIsOpen: false, propertiesIsOpen: true });
    };this.

    _handle_Menu_onClick_Delete = event => {
      this.setState({ menuIsOpen: false });

      const { relay, Viewer, Ensayo } = this.props;

      _EnsayoDeleteMutation2.default.commit(relay.environment, Viewer, Ensayo);
    };this.

    handleRequestClose = () => {
      this.setState({ menuIsOpen: false });
    };this.state = { anchorEl: undefined, menuIsOpen: false, propertiesIsOpen: false };}

  render() {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props.Ensayo;
    const { propertiesIsOpen } = this.state;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_ListItem2.default, {
            button: true,
            'aria-haspopup': 'true',
            'aria-controls': 'lock-menu',
            onClick: this.handleClickListItem },

          _react2.default.createElement(_ListItemText2.default, { primary: Ensayo_Title, secondary: Ensayo_Description })),

        _react2.default.createElement(_Menu2.default, {
            id: 'lock-menu',
            anchorEl: this.state.anchorEl,
            open: this.state.menuIsOpen,
            onClose: this.handleRequestClose },

          _react2.default.createElement(_MenuItem2.default, { key: 'edit', onClick: event => this._handle_Menu_onClick_Edit(event) }, 'Edit'),


          _react2.default.createElement(_MenuItem2.default, { key: 'delete', onClick: event => this._handle_Menu_onClick_Delete(event) }, 'Delete')),



        propertiesIsOpen &&
        _react2.default.createElement(_EnsayoInPlaceEditProperties2.default, {
          Ensayo_Title: Ensayo_Title,
          Ensayo_Description: Ensayo_Description,
          Ensayo_Content: Ensayo_Content,
          handlerUpdate: this._handle_Update_Properties,
          handlerClose: this._handle_Close_Properties })));




  }}exports.default =


(0, _reactRelay.createFragmentContainer)(EnsayoInPlaceEditItem, {
  Viewer: function () {return require('./__generated__/EnsayoInPlaceEditItem_Viewer.graphql');},




  Ensayo: function () {return require('./__generated__/EnsayoInPlaceEditItem_Ensayo.graphql');} });
//# sourceMappingURL=EnsayoInPlaceEditItem.js.map