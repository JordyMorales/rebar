(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1384:function(e,n,a){"use strict";a.r(n);var t=a(1367),l=a(0),s=a.n(l),i=a(10),o=a(1370),r=a(1457),u=a(606),c=a(1454),d=a(22);const p=function(){return a(627)};function y(e,n,a){const t=e.get(n.id),l=d.ConnectionHandler.getConnection(t,"EnsayoList_Ensayos");l&&d.ConnectionHandler.deleteNode(l,a)}var m={commit:function(e,n,a){return Object(i.commitMutation)(e,{mutation:p,variables:{input:{id:a.id}},updater(e){const a=e.getRootField("EnsayoDelete");y(e,n,a.getValue("deletedId"))},optimisticUpdater(e){y(e,n,a.id)}})}};const E=function(){return a(628)};var _={commit:function(e,n,a,t,l){return Object(i.commitMutation)(e,{mutation:E,variables:{input:{id:n.id,Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}},optimisticResponse:()=>({EnsayoUpdate:{Ensayo:{id:n.id,Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}}})})}},h=a(212);var g=Object(i.createFragmentContainer)(class extends s.a.Component{constructor(e,n){super(e,n),this._handle_Update_Properties=e=>{const{Ensayo_Title:n,Ensayo_Description:a,Ensayo_Content:t}=e,{relay:l,Ensayo:s}=this.props;_.commit(l.environment,s,n,a,t)},this._handle_Close_Properties=()=>{this.setState({propertiesIsOpen:!1})},this.handleClickListItem=e=>{this.setState({menuIsOpen:!0,anchorEl:e.currentTarget})},this._handle_Menu_onClick_Edit=e=>{this.setState({menuIsOpen:!1,propertiesIsOpen:!0})},this._handle_Menu_onClick_Delete=e=>{this.setState({menuIsOpen:!1});const{relay:n,Viewer:a,Ensayo:t}=this.props;m.commit(n.environment,a,t)},this.handleRequestClose=()=>{this.setState({menuIsOpen:!1})},this.state={anchorEl:void 0,menuIsOpen:!1,propertiesIsOpen:!1}}render(){const{Ensayo_Title:e,Ensayo_Description:n,Ensayo_Content:a}=this.props.Ensayo,{propertiesIsOpen:t}=this.state;return s.a.createElement("div",null,s.a.createElement(o.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu",onClick:this.handleClickListItem},s.a.createElement(r.a,{primary:e,secondary:n})),s.a.createElement(u.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.menuIsOpen,onClose:this.handleRequestClose},s.a.createElement(c.a,{key:"edit",onClick:e=>this._handle_Menu_onClick_Edit(e)},"Edit"),s.a.createElement(c.a,{key:"delete",onClick:e=>this._handle_Menu_onClick_Delete(e)},"Delete")),t&&s.a.createElement(h.a,{Ensayo_Title:e,Ensayo_Description:n,Ensayo_Content:a,handlerUpdate:this._handle_Update_Properties,handlerClose:this._handle_Close_Properties}))}},{Viewer:function(){return a(629)},Ensayo:function(){return a(630)}});n.default=Object(i.createFragmentContainer)(class extends s.a.Component{render(){const{Viewer:e}=this.props,{Ensayos:n}=e;return s.a.createElement("div",null,s.a.createElement(t.a,null,n.edges.map(({node:n})=>s.a.createElement(g,{key:n.id,Viewer:e,Ensayo:n}))))}},{Viewer:function(){return a(631)}})},212:function(e,n,a){"use strict";var t=a(55),l=a(1356),s=a(1369),i=a(1358),o=a(1357),r=a(302),u=a(0),c=a.n(u),d=a(285),p=a.n(d),y=a(4);n.a=Object(y.a)(e=>({container:{display:"flex",flexWrap:"wrap"},richTextContainer:{width:"100%",height:300,display:"inline-block",position:"relative"}}))(class extends c.a.Component{constructor(e,n){super(e,n),this._handle_OnChange_RTE_Ensayo_Content=e=>{this.setState({Ensayo_Content_RTE:e})},this._handle_Close=()=>{this.props.handlerClose()},this._handle_OK=()=>{const{handlerClose:e,handlerUpdate:n}=this.props;n({Ensayo_Title:this.state.Ensayo_Title,Ensayo_Description:this.state.Ensayo_Description,Ensayo_Content:this.state.Ensayo_Content_RTE.toString("html")}),e()};const{Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}=this.props;this.state={Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content_RTE:p.a.createValueFromString(l,"html")}}render(){const{classes:e}=this.props,{Ensayo_Title:n,Ensayo_Description:a}=this.state;return c.a.createElement("div",null,c.a.createElement(l.a,{open:!0,onClose:this._handle_Close},c.a.createElement(o.a,null,"Ensayo"),c.a.createElement(i.a,null,c.a.createElement(r.a,{label:"Title",fullWidth:!0,value:n,onChange:e=>this.setState({Ensayo_Title:e.target.value})}),c.a.createElement(r.a,{label:"Description",fullWidth:!0,value:a,onChange:e=>this.setState({Ensayo_Description:e.target.value})}),c.a.createElement("div",{className:e.richTextContainer},null==p.a?c.a.createElement("div",null):c.a.createElement(p.a,{value:this.state.Ensayo_Content_RTE,onChange:this._handle_OnChange_RTE_Ensayo_Content}))),c.a.createElement(s.a,null,c.a.createElement(t.a,{onClick:this._handle_Close},"Cancel"),c.a.createElement(t.a,{onClick:this._handle_OK,color:"primary"},"OK"))))}})},627:function(e,n,a){"use strict";const t={kind:"Request",fragment:{kind:"Fragment",name:"EnsayoDeleteMutation",type:"Mutation",metadata:null,argumentDefinitions:l=[{kind:"LocalArgument",name:"input",type:"EnsayoDeleteInput!",defaultValue:null}],selections:s=[{kind:"LinkedField",alias:null,name:"EnsayoDelete",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"EnsayoDeletePayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"deletedId",args:null,storageKey:null}]}]},operation:{kind:"Operation",name:"EnsayoDeleteMutation",argumentDefinitions:l,selections:s},params:{operationKind:"mutation",name:"EnsayoDeleteMutation",id:null,text:"mutation EnsayoDeleteMutation(\n  $input: EnsayoDeleteInput!\n) {\n  EnsayoDelete(input: $input) {\n    deletedId\n  }\n}\n",metadata:{}}};var l,s;t.hash="d8c8d964d97d923ef7f0e6c1d21ecfcb",e.exports=t},628:function(e,n,a){"use strict";const t={kind:"Request",fragment:{kind:"Fragment",name:"EnsayoUpdateMutation",type:"Mutation",metadata:null,argumentDefinitions:l=[{kind:"LocalArgument",name:"input",type:"EnsayoUpdateInput!",defaultValue:null}],selections:s=[{kind:"LinkedField",alias:null,name:"EnsayoUpdate",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"EnsayoUpdatePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Ensayo",storageKey:null,args:null,concreteType:"Ensayo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Description",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Content",args:null,storageKey:null}]}]}]},operation:{kind:"Operation",name:"EnsayoUpdateMutation",argumentDefinitions:l,selections:s},params:{operationKind:"mutation",name:"EnsayoUpdateMutation",id:null,text:"mutation EnsayoUpdateMutation(\n  $input: EnsayoUpdateInput!\n) {\n  EnsayoUpdate(input: $input) {\n    Ensayo {\n      id\n      Ensayo_Title\n      Ensayo_Description\n      Ensayo_Content\n    }\n  }\n}\n",metadata:{}}};var l,s;t.hash="6fc4902bbb734ef3ec064c06c70a2198",e.exports=t},629:function(e,n,a){"use strict";const t={kind:"Fragment",name:"EnsayoInPlaceEditItem_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}],hash:"301c94f48041c0970afb2265a6da8b61"};e.exports=t},630:function(e,n,a){"use strict";const t={kind:"Fragment",name:"EnsayoInPlaceEditItem_Ensayo",type:"Ensayo",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Description",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Content",args:null,storageKey:null}],hash:"195136c812b1fbd8e34d1224b650e12a"};e.exports=t},631:function(e,n,a){"use strict";const t={kind:"Fragment",name:"EnsayoInPaceEditList_Viewer",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["Ensayos"]}]},argumentDefinitions:[],selections:[{kind:"LinkedField",alias:"Ensayos",name:"__EnsayoList_Ensayos_connection",storageKey:null,args:null,concreteType:"EnsayosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"EnsayosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Ensayo",plural:!1,selections:[l={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"FragmentSpread",name:"EnsayoInPlaceEditItem_Ensayo",args:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"endCursor",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"hasNextPage",args:null,storageKey:null}]}]},l,{kind:"FragmentSpread",name:"EnsayoInPlaceEditItem_Viewer",args:null}]};var l;t.hash="0264c9c908d073effc0c969d9ac3ecd2",e.exports=t}}]);