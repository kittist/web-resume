(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(18),r=a(12),o=(a(32),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),b=a(42),d=a(43),f=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={response:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Component A")}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={response:"",post:"",responseToPost:"",keyword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),i.a.createElement("div",{className:"App"},"Hello",i.a.createElement(f,null))}}]),t}(n.Component),p=a(9),O=function(){return function(e){e({type:"LOADING_ON"})}},v=function(){return function(e){e({type:"LOADING_OFF"})}},E=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-container"},i.a.createElement(h,this.props))}}]),t}(i.a.Component)),j=(Object(r.b)(function(e){return{action:e.action,data:e.data}},function(e){return Object(p.b)({enableLoading:O,disableLoading:v},e)})(E),a(37),a(11)),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),i.a.createElement("div",{className:"bit-container"},i.a.createElement("div",{className:"bit-header"},"K I T T I S T"),i.a.createElement("div",{className:"bit-section"},i.a.createElement(j.a,{title:"About me"},this.props.data.bio)),i.a.createElement("div",{className:"bit-section"},i.a.createElement(j.a,{title:"Skills"},i.a.createElement(j.c,{solid:!0},i.a.createElement("li",{className:"bit-list",id:"ff"},"Javascript (ReactJS, NodeJS, Polymer, VueJS)"),i.a.createElement("li",{className:"bit-list"},"React Native"),i.a.createElement("li",{className:"bit-list"},"Python"),i.a.createElement("li",{className:"bit-list"},"Java"),i.a.createElement("li",{className:"bit-list"},"C++"),i.a.createElement("li",{className:"bit-list"},"VB.net"),i.a.createElement("li",{className:"bit-list"},"Firebase"),i.a.createElement("li",{className:"bit-list"},"Flutter"),i.a.createElement("li",{className:"bit-list"},"WebAssembly (Novice)")))),i.a.createElement("div",{className:"bit-section"},i.a.createElement(j.a,{title:"Projects"},"Under construction")),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",null,"Feel free to contact me at"),i.a.createElement("a",{href:"mailto:kittisq@gmail.com",className:"bit-footer-icon"},i.a.createElement(j.b,{icon:"gmail"})),i.a.createElement("a",{href:"https://fb.com/kittis",className:"bit-footer-icon"},i.a.createElement(j.b,{icon:"facebook"})),i.a.createElement("a",{href:"https://github.com/kittist",className:"bit-footer-icon"},i.a.createElement(j.b,{icon:"github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/kittis/",className:"bit-footer-icon"},i.a.createElement(j.b,{icon:"linkedin"})),i.a.createElement("a",{href:"https://fb.com/kittis",className:"bit-footer-icon"},i.a.createElement(j.b,{icon:"instagram"}))))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,this.props))}}]),t}(i.a.Component),y=Object(r.b)(function(e){return{action:e.action,data:e.data}},function(e){return Object(p.b)({enableLoading:O,disableLoading:v},e)})(N),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,null,i.a.createElement("div",null,i.a.createElement(d.a,{exact:!0,path:"/",component:y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={valueA:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"ACTION_A":return a.valueA=t.payload,a;case"ACTION_INITIAL":return w;default:return e}},A={bio:{bio:{en:"Hello, my name is Kitti Sintuprasert. I\u2019m full-stack developer using React and a variety of other technologies. I am well versed in front-end technologies, making a beautiful website and mobile application UI with HTML/CSS,\xa0taking database/API from back-end and creating a user-facing functionality.",th:""},skill:[{title:"Programming Languages",list:[{name:"Python",star:5},{name:"Javascript",star:5},{name:"HTML/CSS",star:5},{name:"Java",star:4},{name:"C++",star:3}]},{title:"Technology tools",list:[{name:"Front End technolog",star:5},{name:"Back End develope",star:4},{name:"Database management",star:5},{name:"Java",star:4},{name:"C++",star:3},{name:"C++",star:3}]}]}.bio.en},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"ACTION_A":return a.valueA=t.payload,a;case"ACTION_INITIAL":return A;default:return e}},T=Object(p.c)({action:I,data:C}),L=a(22),J=Object(p.d)(T,Object(p.a)(L.a));Object(c.render)(i.a.createElement(r.a,{store:J},i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.84875cdc.chunk.js.map