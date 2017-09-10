webpackJsonp([10],{1290:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(137),s=n(c),i=r(338),d=n(i),f=r(345),p=r(71),g=r(58),m=n(g),h=r(1),_=n(h),C=r(531),y=n(C),E=function(e){return{card:{minWidth:275}}},v=function(e){function t(e,r){var n=this;a(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return l._handle_onClick_Logout=function(){var e,t,r,a;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return l.setState({currentOperation:"logging out"}),n.prev=1,e=window.location,t=e.protocol+"//"+e.hostname+":"+e.port,n.next=6,regeneratorRuntime.awrap(fetch(t+"/auth/logout",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:"{}"}));case 6:return r=n.sent,n.next=9,regeneratorRuntime.awrap(r.json());case 9:a=n.sent,console.log("LOGOUT USER RESPONSE"),console.log(a),a.success?l.setState({currentOperation:"success"}):l.setState({currentOperation:"failure",errorMessage:a.error}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),l.setState({currentOperation:"failure",errorMessage:"Did not receive proper response from server. Please try again. Message:"+n.t0.message});case 18:case"end":return n.stop()}},null,n,[[1,15]])},l._handle_onClick_CancelLogout=function(){l.setState({currentOperation:"failure",errorMessage:"User log out has been canceled"})},l._handle_onClick_TryAgain=function(){l.setState({currentOperation:"confirm",errorMessage:""})},l._handle_onClick_Continue=function(){window.location.replace("/")},l.state={currentOperation:"confirm",errorMessage:""},l}return l(t,e),u(t,[{key:"renderCreating",value:function(){var e=this.props.classes;return _.default.createElement(d.default,{className:e.card},_.default.createElement(i.CardHeader,{title:"Creating user"}),_.default.createElement(m.default,{component:"p"},"Logging out. Please wait."),_.default.createElement(f.LinearProgress,{mode:"query"}),_.default.createElement(i.CardActions,null,_.default.createElement(s.default,{onClick:this._handle_onClick_CancelLogout},"Cancel")))}},{key:"renderSuccess",value:function(){var e=this.props.classes;return _.default.createElement(d.default,{className:e.card},_.default.createElement(i.CardHeader,{title:"Logout"}),_.default.createElement(m.default,{component:"p"},"You have been logged out"),_.default.createElement(i.CardActions,null,_.default.createElement(s.default,{onClick:this._handle_onClick_Continue},"Continue")))}},{key:"renderFailure",value:function(){var e=this.props.classes,t=this.state.errorMessage;return _.default.createElement(d.default,{className:e.card},_.default.createElement(i.CardHeader,{title:"Creating user"}),_.default.createElement(m.default,{component:"p"},"Failed logging out.",_.default.createElement("br",null),"Reason: ",t),_.default.createElement(i.CardActions,null,_.default.createElement(s.default,{onClick:this._handle_onClick_TryAgain},"Try Again")))}},{key:"renderPrompt",value:function(){var e=this.props.classes;return _.default.createElement(d.default,{className:e.card},_.default.createElement(i.CardHeader,{title:"Log Out"}),_.default.createElement(m.default,{component:"p"},"You are currently logged in. Are you sure you want to log out?"),_.default.createElement(i.CardActions,null,_.default.createElement(s.default,{onClick:this._handle_onClick_Logout},"Yes, Log Out")))}},{key:"render",value:function(){var e=this.state.currentOperation;return _.default.createElement(y.default,null,"confirm"===e&&this.renderPrompt(),"logging out"===e&&this.renderCreating(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}]),t}(_.default.Component);t.default=(0,p.withStyles)(E)(v)}});