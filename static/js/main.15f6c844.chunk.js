(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={home:"style_home__2Ant8","home-left":"style_home-left__1yiOY","home-right":"style_home-right___gZUF","home-list__text":"style_home-list__text__3AfM0","home-timer__checkbox--disabled":"style_home-timer__checkbox--disabled__1uF4F","home-input":"style_home-input__1qDdb","home-list":"style_home-list__3F6Hz","home-list--disabled":"style_home-list--disabled__19fj_","home-list-container":"style_home-list-container__1ZdZb","home-list__icon":"style_home-list__icon__2dRUe"}},function(e,t,a){e.exports={"home-nav":"style_home-nav__s986D","home-nav__icons":"style_home-nav__icons__1vxCi",icon:"style_icon__1cZrc","icon--active":"style_icon--active__lMfOy","home-nav__text":"style_home-nav__text__1NqsF"}},function(e,t,a){e.exports={"countdown-timer":"style_countdown-timer__2U-B-","countdown-timer__display":"style_countdown-timer__display__3X3mw"}},function(e,t,a){e.exports={"timer-svg":"style_timer-svg__AEtXj","timer-svg__animation":"style_timer-svg__animation__2zvEe",active:"style_active__1QY4v","timer-svg__inner":"style_timer-svg__inner__3KiR7","play-icon":"style_play-icon__1fyIk","timer-svg__reset":"style_timer-svg__reset__mOxX_"}},function(e,t,a){e.exports={"input-container":"style_input-container__1xYW5",input:"style_input__2hC99",input__suffix:"style_input__suffix__3KAw0"}},function(e,t,a){e.exports={"list-item-meta-description":"style_list-item-meta-description__2R7y0"}},function(e,t,a){e.exports={"list-item-meta-title":"style_list-item-meta-title__2OqGq"}},function(e,t,a){e.exports={"list-item-meta":"style_list-item-meta__3y7tL"}},function(e,t,a){e.exports={"list-item":"style_list-item__12eBt","list-item__suffix":"style_list-item__suffix__1yuIE"}},function(e,t,a){e.exports={list:"style_list__2zj9g"}},function(e,t,a){e.exports={"checkbox-container":"style_checkbox-container__2DwyH",checkbox:"style_checkbox__1-Kab","checkbox-checkmark":"style_checkbox-checkmark__2BFj3"}},function(e,t,a){e.exports={tomatos:"style_tomatos__3gMK1",tomatos__outer:"style_tomatos__outer__3LCA_",tomatos__animation:"style_tomatos__animation__3YZqi","tomatos__in-progress":"style_tomatos__in-progress__2DyTT",tomatos__finished:"style_tomatos__finished__1jMtR"}},function(e,t,a){e.exports=a.p+"static/media/Beeper_Emergency_Call.5bb4855d.mp3"},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),r=a.n(c),s=(a(27),a(5)),o=a(3),l=a(1),m=a.n(l),u=a(2),_=a.n(u),d=a(8),h=a.n(d),f=a(9),p=a.n(f),v=_.a.bind(p.a),y=(m.a.string,m.a.array,m.a.func,function(e){var t=e.navIcons,a=e.handleNavgiation;return i.a.createElement("div",{className:v("home-nav")},i.a.createElement("div",{className:v("home-nav__icons")},t.map(function(e,t){return i.a.createElement("i",{className:v("material-icons","icon",{"icon--active":e.isActive}),key:t,onClick:function(t){return a(t,e.type)}},e.type)})),i.a.createElement("span",{className:v("home-nav__text")},"POMODORO"))}),b=a(10),g=a.n(b),k=_.a.bind(g.a),x=(m.a.number,m.a.string,function(e){var t=e.startTimeInSeconds,a=e.textType,n=Math.floor(t/60),c=Math.floor(t%60),r=function(e){return e<10?"0".concat(e):e};return i.a.createElement("div",{className:k("countdown-timer"),"data-countdown-type":a},i.a.createElement("div",{className:k("countdown-timer__display")},r(n),":",r(c)))}),E=a(11),N=a.n(E),O=_.a.bind(N.a),j=(m.a.bool,m.a.bool,m.a.oneOfType([m.a.string,m.a.number]),m.a.func,m.a.func,m.a.number,m.a.string,function(e){var t=e.isActive,a=e.isReset,c=e.seconds,r=e.toggleTimer,s=e.resetTimer,l=e.initialSeconds,m=e.timerType,u=Object(n.useState)(0),_=Object(o.a)(u,2),d=_[0],h=_[1],f=303/Number(l);return Object(n.useEffect)(function(){var e=null;if(a&&h(0),t){if(c<1)return h(0),void clearInterval(e);e=setInterval(function(){h(function(e){return e+f})},1e3)}else clearInterval(e);return function(){return clearInterval(e)}},[f,d,t,a,c,h]),i.a.createElement("div",{className:O("timer-svg"),"data-is-playing":t,"data-timer-type":m},i.a.createElement("div",{className:O("timer-svg__inner")},i.a.createElement("svg",{width:"540",height:"540",className:O("timer-svg__animation",{active:t})},i.a.createElement("circle",{cx:"50%",cy:"50%",r:"260",style:t?{strokeDashoffset:"".concat(57+d,"%")}:{}})),i.a.createElement("div",{className:O("play-icon")},i.a.createElement("i",{className:O("material-icons"),onClick:r},t?"pause_circle_filled":"play_circle_filled_white")),i.a.createElement("span",{className:O("timer-svg__reset"),onClick:s})))});j.defaultProps={isActive:!0};var w=j,T=a(4),I=a(12),S=a.n(I),A=_.a.bind(S.a);m.a.string,m.a.string,m.a.string,m.a.node,m.a.string,m.a.func,m.a.func,m.a.string;function C(e){var t=e.placeholder,a=e.inputSize,n=e.inputType,c=e.suffix,r=e.width,s=e.onKeyDown,o=e.onChange,l=e.value,m=Object(T.a)(e,["placeholder","inputSize","inputType","suffix","width","onKeyDown","onChange","value"]);return i.a.createElement("div",{className:A("input-container"),style:{width:r},"data-input-type":n},i.a.createElement("input",Object.assign({className:A("input"),type:"text",value:l,"data-input-size":a,placeholder:t,onKeyDown:function(e){return s(e)},onChange:function(e){return o(e)}},m)),i.a.createElement("div",{className:A("input__suffix")},c))}C.defaultProps={placeholder:"ADD A NEW Mission\u2026",inputSize:"regular",onKeyDown:function(){return""}};var D=C,z=a(13),M=a.n(z),R=_.a.bind(M.a);m.a.string;var K=function(e){var t=e.className,a=Object(T.a)(e,["className"]);return i.a.createElement("span",Object.assign({className:R("list-item-meta-description",t)},a))},B=a(14),P=a.n(B),Y=_.a.bind(P.a);m.a.string;var q=function(e){var t=e.className,a=Object(T.a)(e,["className"]);return i.a.createElement("h4",Object.assign({className:Y("list-item-meta-title",t)},a))},F=a(15),H=a.n(F),Z=_.a.bind(H.a);m.a.node,m.a.object,m.a.node,m.a.object,m.a.string,m.a.any;var G=function(e){var t=e.title,a=e.titleProps,n=void 0===a?{}:a,c=e.description,r=e.descriptionProps,s=void 0===r?{}:r,o=e.className,l=(e.children,Object(T.a)(e,["title","titleProps","description","descriptionProps","className","children"]));return i.a.createElement("div",Object.assign({className:Z("list-item-meta",o)},l),i.a.createElement(q,n,t),i.a.createElement(K,s,c))},W=a(16),U=a.n(W),X=_.a.bind(U.a);m.a.node,m.a.node,m.a.string,m.a.any,m.a.bool;function J(e){var t=e.prefix,a=e.suffix,n=e.className,c=e.children,r=e.hasBorder,s=Object(T.a)(e,["prefix","suffix","className","children","hasBorder"]);return i.a.createElement("li",Object.assign({className:X("list-item",n),"data-has-border":r},s),t,c,i.a.createElement("div",{className:X("list-item__suffix")},a))}J.Meta=G;var L=J,Q=a(17),$=a.n(Q),V=_.a.bind($.a);m.a.string,m.a.object;function ee(e){var t=e.className,a=e.style,n=Object(T.a)(e,["className","style"]);return i.a.createElement("ul",Object.assign({className:V("list",t),style:a},n))}ee.Item=L;var te=ee,ae=a(18),ne=a.n(ae),ie=_.a.bind(ne.a),ce=(m.a.string,m.a.string,m.a.object,m.a.string,m.a.func,m.a.number,function(e){var t=e.type,a=e.size,n=e.style,c=e.className,r=e.onChange,s=e.checkboxId,o=e.checkboxStatus;return i.a.createElement("label",{className:ie("checkbox-container",c),"data-checkbox-size":a,style:n},i.a.createElement("input",{className:ie("checkbox"),type:"checkbox","data-checkbox-id":s,onChange:function(e){return r(e)},readOnly:!0,checked:o}),i.a.createElement("span",{className:ie("checkbox-checkmark"),"data-checkbox-type":t,"data-checkbox-size":a}))});ce.defaultProps={type:"radio",size:"large",checkedStatus:!1};var re=ce,se=a(19),oe=a.n(se),le=_.a.bind(oe.a);m.a.string,m.a.array,m.a.bool,m.a.number;var me=function(e){var t=e.className,a=e.tomatos,c=e.isActive,r=e.initialSeconds,s=Object(n.useState)(0),l=Object(o.a)(s,2),m=l[0],u=l[1],_=Number(38)/Number(r);return Object(n.useEffect)(function(){var e=null;return c?e=setInterval(function(){u(m+_)},1e3):(u(0),clearInterval(e)),function(){return clearInterval(e)}},[_,m,c]),i.a.createElement("div",{className:le("tomatos",t)},a.map(function(e,t){return i.a.createElement("i",{key:t,className:le("material-icons","tomatos__finished")},"fiber_manual_record")}),c?i.a.createElement("div",{className:le("tomatos__outer")},i.a.createElement("svg",{width:"10",height:"10",className:le("tomatos__animation")},i.a.createElement("circle",{cx:"50%",cy:"50%",r:"6",className:le("tomatos__in-progress"),style:c?{strokeDasharray:"".concat(m,", 100")}:{}}))):"")},ue=a(20),_e=a.n(ue),de=_.a.bind(h.a),he=(m.a.string,function(e){var t=e.className,a=new Audio(_e.a),c=Object(n.useRef)(1500),r=Object(n.useRef)(!1),l=Object(n.useState)(c.current),m=Object(o.a)(l,2),u=m[0],_=m[1],d=Object(n.useState)([{task:"FIRST THING TO DO TODAY",id:1,checked:!1},{task:"Second THING TO DO TODAY",id:2,checked:!1},{task:"Third THING TO DO TODAY",id:3,checked:!1}]),h=Object(o.a)(d,2),f=h[0],p=h[1],v=Object(n.useState)([{type:"toc",isActive:!0},{type:"insert_chart_outlined",isActive:!1},{type:"library_music",isActive:!1}]),b=Object(o.a)(v,2),g=b[0],k=b[1],E=Object(n.useState)("default"),N=Object(o.a)(E,2),O=N[0],j=N[1],T=Object(n.useState)(!1),I=Object(o.a)(T,2),S=I[0],A=I[1],C=Object(n.useState)(!1),z=Object(o.a)(C,2),M=z[0],R=z[1],K=Object(n.useState)([1]),B=Object(o.a)(K,2),P=B[0],Y=B[1],q=Object(n.useState)(""),F=Object(o.a)(q,2),H=F[0],Z=F[1],G=Object(n.useState)(!1),W=Object(o.a)(G,2),U=W[0],X=W[1],J=Object(n.useState)(f[0].task),L=Object(o.a)(J,2),Q=L[0],$=L[1];Object(n.useEffect)(function(){var e=null;if(u<1&&(a.play(),r.current=!r.current,r.current?(c.current=300,j("primary"),_(c.current),Y([].concat(Object(s.a)(P),[1])),document.querySelector("body").dataset.homeType="primary"):(c.current=1500,j("default"),_(c.current),document.querySelector("body").dataset.homeType="default")),M){if(u<1)return R(!1),void clearInterval(e);e=setInterval(function(){_(function(e){return e-1})},1e3)}else clearInterval(e);return function(){return clearInterval(e)}},[a,300,M,u,P,1500]);var V=function(){R(!M),A(!1)},ee=function(){_(c.current),A(!0),Y([]),R(!1)},ae=function(e){var t,a=e.target.dataset.checkboxId,n=f.map(function(e){return e.id===a&&(e.checked=!0),e});p(n),(t=500,new Promise(function(e,a){R(!1),setTimeout(e,t)})).then(function(){var e=f.filter(function(e){return Number(e.id)!==Number(a)}).map(function(e){return e.checked=!1,e});p(e),$(e[0].task),X(!1),_(c.current),A(!0),Y([])})};return i.a.createElement("div",{className:de("home",t),"data-home-type":O},i.a.createElement("div",{className:de("home-left")},i.a.createElement("div",{className:de("home-input")},i.a.createElement(D,{suffix:i.a.createElement("i",{className:"material-icons",onClick:function(){p([].concat(Object(s.a)(f),[{task:H,id:Math.random(),checked:!1}])),Z("")}},"add"),inputType:O,onKeyDown:function(e){return function(e){var t={task:e.target.value,id:Math.random(),checked:!1};Z(e.target.value),13===e.keyCode&&(p([].concat(Object(s.a)(f),[t])),Z(""))}(e)},value:H,onChange:function(e){return Z(e.target.value)}})),i.a.createElement("div",{className:de("home-list","home-timer-display")},i.a.createElement(te.Item,{key:f.length>0?f[0].id:Math.random(),prefix:i.a.createElement(re,{checkboxId:f.length>0?f[0].id:Math.random(),onChange:ae,checkedStatus:!(f.length>0)||f[0].checked,className:de("home-timer-checkbox",{"home-timer__checkbox--disabled":f.length<1}),size:"large",style:{marginRight:"16px"}})},i.a.createElement(te.Item.Meta,{title:i.a.createElement("span",{style:{fontSize:"24px"},onDoubleClick:function(){f.length<1||X(!0)}},U?i.a.createElement(D,{placeholder:"\u7de8\u8f2f\u5f85\u8fa6\u4e8b\u9805",value:Q,onChange:function(e){return $(e.target.value)},onKeyDown:function(e){var t={task:e.target.value,id:f[0].id,checked:!1};if(27===e.keyCode&&X(!1),13===e.keyCode){if(!e.target.value)return;var a=f.filter(function(e){return e.id!==t.id});p([t].concat(Object(s.a)(a))),X(!1),$(f[0].task)}},inputSize:"small",type:"text"}):f.length>0?f[0].task:"Congrats! You completed all."),description:i.a.createElement(me,{tomatos:P,initialSeconds:c.current,isActive:M&&!r.current})})),i.a.createElement(x,{startTimeInSeconds:u,toggleTimer:V,textType:O,reset:ee})),i.a.createElement("div",{className:de("home-list")},i.a.createElement(te,null,i.a.createElement("div",{className:de("home-list-container")},f.slice(1).map(function(e){return i.a.createElement(te.Item,{hasBorder:!0,key:e.id,prefix:i.a.createElement(re,{onChange:ae,checkboxId:e.id,size:"regular",style:{marginRight:"6px"}}),suffix:i.a.createElement("i",{className:de("material-icons","home-list__icon"),style:{width:"24px"},onClick:function(){return function(e){var t=f.filter(function(t){return t.id!==e.id});p([e].concat(Object(s.a)(t)))}(e)}},"play_circle_outline")},e.task)}))),f.length>5?i.a.createElement("p",{className:de("home-list__text")},"More"):"")),i.a.createElement("div",{className:de("home-right")},i.a.createElement(w,{seconds:u,initialSeconds:c.current,isActive:M,isReset:S,toggleTimer:V,resetTimer:ee,timerType:O})),i.a.createElement(y,{navIcons:g,handleNavgiation:function(e,t){var a=g.map(function(e){return e.isActive=!1,e.type===t&&(e.isActive=!0),e});k(a)}}))});a(30);var fe=function(){return i.a.createElement("div",{className:"App","data-home-type":"primary"},i.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.15f6c844.chunk.js.map