(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){"use strict";(function(e){var n=a(4),s=a(5),r=a(7),i=a(6),o=a(8),l=a(0),c=a.n(l),u=(a(37),a(38),a(39),a(14)),d=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"layout"},c.a.createElement("div",{id:"menu"},c.a.createElement("div",{className:"pure-menu"},c.a.createElement("a",{className:"pure-menu-heading",href:"#"},"Copadubo"),c.a.createElement("ul",{className:"pure-menu-list"},c.a.createElement("li",{className:"pure-menu-item"},c.a.createElement(u.b,{to:"/upload",onclick:e.dataLayer.push({event:"menupload",formLocation:"menu"}),className:"pure-menu-link"},"Upload File")),c.a.createElement("li",{className:"pure-menu-item"},c.a.createElement(u.b,{to:"/relatorio",className:"pure-menu-link"},"Reports"))))),c.a.createElement("div",{id:"main"},this.props.children))}}]),a}(l.Component);t.a=d}).call(this,a(15))},27:function(e,t,a){"use strict";(function(e){var n=a(16),s=a(20),r=a.n(s),i=a(28),o=a(4),l=a(5),c=a(7),u=a(6),d=a(2),p=a(8),m=a(0),h=a.n(m),f=a(29),v=(a(46),a(30)),g=function(t){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1},t.onFilesAdded=t.onFilesAdded.bind(Object(d.a)(t)),t.uploadFiles=t.uploadFiles.bind(Object(d.a)(t)),t.sendRequest=t.sendRequest.bind(Object(d.a)(t)),t.renderActions=t.renderActions.bind(Object(d.a)(t)),t}return Object(p.a)(a,t),Object(l.a)(a,[{key:"onFilesAdded",value:function(e){this.setState(function(t){return{files:t.files.concat(e)}})}},{key:"uploadFiles",value:function(){var t=Object(i.a)(r.a.mark(function t(){var a,n=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.dataLayer.push({event:"btn_event",formLocation:document.getElementById("carregar").id}),alert(this.state.files.length),this.setState({uploadProgress:{},uploading:!0}),a=[],this.state.files.forEach(function(e){a.push(n.sendRequest(e))}),t.prev=5,t.next=8,Promise.all(a);case 8:this.setState({successfullUploaded:!0,uploading:!1}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),this.setState({successfullUploaded:!0,uploading:!1});case 14:case"end":return t.stop()}},t,this,[[5,11]])}));return function(){return t.apply(this,arguments)}}()},{key:"sendRequest",value:function(e){var t=this;return new Promise(function(a,s){var r=new XMLHttpRequest;r.upload.addEventListener("progress",function(a){if(a.lengthComputable){var s=Object(n.a)({},t.state.uploadProgress);s[e.name]={state:"pending",percentage:a.loaded/a.total*100},t.setState({uploadProgress:s})}}),r.upload.addEventListener("load",function(s){var i=Object(n.a)({},t.state.uploadProgress);i[e.name]={state:"done",percentage:100},t.setState({uploadProgress:i}),a(r.response)}),r.upload.addEventListener("error",function(a){var i=Object(n.a)({},t.state.uploadProgress);i[e.name]={state:"error",percentage:0},t.setState({uploadProgress:i}),s(r.response)});var i=new FormData;i.append("file",e,e.name),r.open("POST","https://copadubo.appspot.com/copadubo/relatorio"),r.send(i),r.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&alert(200===r.status?"Arquivo carregado com sucesso!":"Falha ao carregar arquivo")}})}},{key:"renderProgress",value:function(e){var t=this.state.uploadProgress[e.name];if(this.state.uploading||this.state.successfullUploaded)return h.a.createElement("div",{className:"ProgressWrapper"},h.a.createElement(v.a,{progress:t?t.percentage:0}),h.a.createElement("img",{className:"CheckIcon",alt:"done",src:"baseline-check_circle_outline-24px.svg",style:{opacity:t&&"done"===t.state?.5:0}}))}},{key:"renderActions",value:function(){var e=this;return this.state.successfullUploaded?h.a.createElement("button",{id:"limpar","data-type-name":"Limpar",onClick:function(){return e.setState({files:[],successfullUploaded:!1})}},"Limpar"):h.a.createElement("button",{id:"carregar",disabled:this.state.files.length<0||this.state.uploading,onClick:this.uploadFiles},"Carregar")}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"App"},h.a.createElement("div",{className:"Card"},h.a.createElement("div",{className:"Upload"},h.a.createElement("span",{className:"Title"},"Escolher PDF"),h.a.createElement("div",{className:"Content"},h.a.createElement("div",null,h.a.createElement(f.a,{onFilesAdded:this.onFilesAdded,disabled:this.state.uploading||this.state.successfullUploaded})),h.a.createElement("div",{className:"Files"},this.state.files.map(function(t){return h.a.createElement("div",{key:t.name,className:"Row"},h.a.createElement("span",{className:"Filename"},t.name),e.renderProgress(t))}))),h.a.createElement("div",{className:"Actions"},this.renderActions()))))}}]),a}(m.Component);t.a=g}).call(this,a(15))},29:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(7),i=a(6),o=a(2),l=a(8),c=a(0),u=a.n(c),d=(a(45),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={hightlight:!1},a.fileInputRef=u.a.createRef(),a.openFileDialog=a.openFileDialog.bind(Object(o.a)(a)),a.onFilesAdded=a.onFilesAdded.bind(Object(o.a)(a)),a.onDragOver=a.onDragOver.bind(Object(o.a)(a)),a.onDragLeave=a.onDragLeave.bind(Object(o.a)(a)),a.onDrop=a.onDrop.bind(Object(o.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({hightlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"render",value:function(){return u.a.createElement("div",{className:"Dropzone ".concat(this.state.hightlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"}},u.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",multiple:!0,onChange:this.onFilesAdded}),u.a.createElement("img",{alt:"upload",className:"Icon",src:"baseline-cloud_upload-24px.svg"}),u.a.createElement("span",null,"Upload Files"))}}]),t}(c.Component));t.a=d},30:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(7),i=a(6),o=a(8),l=a(0),c=a.n(l),u=(a(47),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ProgressBar"},c.a.createElement("div",{className:"Progress",style:{width:this.props.progress+"%"}}))}}]),t}(l.Component));t.a=u},31:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),i=a.n(r),o=(a(36),a(24));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(14),c=a(11),u=a(4),d=a(5),p=a(7),m=a(6),h=a(8),f=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Bem vindo ao sistema")),s.a.createElement("div",{className:"content",id:"content"}))}}]),t}(n.Component),v=a(27),g=(a(48),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},"Relatorio")}}]),t}(n.Component));i.a.render(s.a.createElement(l.a,{basename:"/copadubo-react/"},s.a.createElement(o.a,null),s.a.createElement(c.a,{path:"/",exact:!0,component:f}),s.a.createElement(c.a,{path:"/upload",component:v.a}),s.a.createElement(c.a,{path:"/relatorio",component:g})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.ee6bf0a8.chunk.js.map