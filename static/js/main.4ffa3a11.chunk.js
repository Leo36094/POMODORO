(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={home:"style_home__2Ant8","home-left":"style_home-left__1yiOY","home-right":"style_home-right___gZUF","home-list__text":"style_home-list__text__3AfM0","home-timer__checkbox--disabled":"style_home-timer__checkbox--disabled__1uF4F","home-input":"style_home-input__1qDdb","home-list":"style_home-list__3F6Hz","home-list--disabled":"style_home-list--disabled__19fj_","home-list-container":"style_home-list-container__1ZdZb","home-list__icon":"style_home-list__icon__2dRUe","home-list__title":"style_home-list__title__3PXe6","home-mobile-timer":"style_home-mobile-timer__2MrDF","home-countdown-timer":"style_home-countdown-timer__3IVEB"}},function(e,t,a){e.exports={"home-nav":"style_home-nav__s986D","home-nav__icons":"style_home-nav__icons__1vxCi",icon:"style_icon__1cZrc","icon--active":"style_icon--active__lMfOy","home-nav__text":"style_home-nav__text__1NqsF"}},function(e,t,a){e.exports={"countdown-timer":"style_countdown-timer__2U-B-","countdown-timer__display":"style_countdown-timer__display__3X3mw"}},function(e,t,a){e.exports={"timer-svg":"style_timer-svg__AEtXj","timer-svg__animation":"style_timer-svg__animation__2zvEe",active:"style_active__1QY4v","timer-svg__inner":"style_timer-svg__inner__3KiR7","play-icon":"style_play-icon__1fyIk","timer-svg__reset":"style_timer-svg__reset__mOxX_"}},function(e,t,a){e.exports={"input-container":"style_input-container__1xYW5",input:"style_input__2hC99",input__suffix:"style_input__suffix__3KAw0"}},function(e,t,a){e.exports={"list-item-meta-description":"style_list-item-meta-description__2R7y0"}},function(e,t,a){e.exports={"list-item-meta-title":"style_list-item-meta-title__2OqGq"}},function(e,t,a){e.exports={"list-item-meta":"style_list-item-meta__3y7tL"}},function(e,t,a){e.exports={"list-item":"style_list-item__12eBt","list-item__suffix":"style_list-item__suffix__1yuIE"}},function(e,t,a){e.exports={list:"style_list__2zj9g"}},function(e,t,a){e.exports={"checkbox-container":"style_checkbox-container__2DwyH",checkbox:"style_checkbox__1-Kab","checkbox-checkmark":"style_checkbox-checkmark__2BFj3"}},function(e,t,a){e.exports={tomatos:"style_tomatos__3gMK1",tomatos__outer:"style_tomatos__outer__3LCA_",tomatos__animation:"style_tomatos__animation__3YZqi","tomatos__in-progress":"style_tomatos__in-progress__2DyTT",tomatos__finished:"style_tomatos__finished__1jMtR"}},function(e,t,a){e.exports=a.p+"static/media/Beeper_Emergency_Call.5bb4855d.mp3"},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),s=a.n(c),r=(a(27),a(5)),o=a(3),l=a(1),m=a.n(l),u=a(2),_=a.n(u),d=a(8),h=a.n(d),f=a(9),v=a.n(f),p=_.a.bind(v.a),y=(m.a.string,m.a.array,m.a.func,function(e){var t=e.navIcons,a=e.handleNavgiation,n=e.className;return i.a.createElement("div",{className:p("home-nav",n)},i.a.createElement("div",{className:p("home-nav__icons")},t.map(function(e,t){return i.a.createElement("i",{className:p("material-icons","icon",{"icon--active":e.isActive}),key:t,onClick:function(t){return a(t,e.type)}},e.type)})),i.a.createElement("span",{className:p("home-nav__text")},"POMODORO"))}),b=a(10),g=a.n(b),N=_.a.bind(g.a),k=(m.a.number,m.a.string,function(e){var t=e.startTimeInSeconds,a=e.textType,n=e.className,c=Math.floor(t/60),s=Math.floor(t%60),r=function(e){return e<10?"0".concat(e):e};return i.a.createElement("div",{className:N("countdown-timer",n),"data-countdown-type":a},i.a.createElement("div",{className:N("countdown-timer__display")},r(c),":",r(s)))}),x=a(11),E=a.n(x),O=_.a.bind(E.a),j=(m.a.bool,m.a.bool,m.a.oneOfType([m.a.string,m.a.number]),m.a.func,m.a.func,m.a.number,m.a.string,m.a.string,function(e){var t=e.isActive,a=e.isReset,c=e.seconds,s=e.toggleTimer,r=e.resetTimer,l=e.initialSeconds,m=e.timerType,u=e.className,_=Object(n.useState)(0),d=Object(o.a)(_,2),h=d[0],f=d[1],v=Object(n.useState)(75),p=Object(o.a)(v,2),y=p[0],b=p[1],g=303/Number(l);return Object(n.useEffect)(function(){var e=null;if(window.innerWidth>500&&b(260),a&&f(0),t){if(c<1)return f(0),void clearInterval(e);e=setInterval(function(){f(function(e){return e+g})},1e4)}else clearInterval(e);return function(){return clearInterval(e)}},[g,h,t,a,c,f,y]),i.a.createElement("div",{className:O("timer-svg",u),"data-is-playing":t,"data-timer-type":m},i.a.createElement("div",{className:O("timer-svg__inner")},i.a.createElement("svg",{className:O("timer-svg__animation",{active:t})},i.a.createElement("circle",{cx:"50%",cy:"50%",r:y,style:t?{strokeDashoffset:"".concat(57+h,"%")}:{}})),i.a.createElement("div",{className:O("play-icon")},i.a.createElement("i",{className:O("material-icons"),onClick:s},t?"pause_circle_filled":"play_circle_filled_white")),i.a.createElement("span",{className:O("timer-svg__reset"),onClick:r})))});j.defaultProps={isActive:!0};var w=j,T=a(4),I=a(12),S=a.n(I),A=_.a.bind(S.a);m.a.string,m.a.string,m.a.string,m.a.node,m.a.string,m.a.func,m.a.func,m.a.string;function C(e){var t=e.placeholder,a=e.inputSize,n=e.inputType,c=e.suffix,s=e.width,r=e.onKeyDown,o=e.onChange,l=e.value,m=Object(T.a)(e,["placeholder","inputSize","inputType","suffix","width","onKeyDown","onChange","value"]);return i.a.createElement("div",{className:A("input-container"),style:{width:s},"data-input-type":n},i.a.createElement("input",Object.assign({className:A("input"),type:"text",value:l,"data-input-size":a,placeholder:t,onKeyDown:function(e){return r(e)},onChange:function(e){return o(e)}},m)),i.a.createElement("div",{className:A("input__suffix")},c))}C.defaultProps={placeholder:"ADD A NEW Mission\u2026",inputSize:"regular",onKeyDown:function(){return""}};var D=C,M=a(13),z=a.n(M),R=_.a.bind(z.a);m.a.string;var B=function(e){var t=e.className,a=Object(T.a)(e,["className"]);return i.a.createElement("span",Object.assign({className:R("list-item-meta-description",t)},a))},K=a(14),P=a.n(K),F=_.a.bind(P.a);m.a.string;var Y=function(e){var t=e.className,a=Object(T.a)(e,["className"]);return i.a.createElement("h4",Object.assign({className:F("list-item-meta-title",t)},a))},q=a(15),H=a.n(q),W=_.a.bind(H.a);m.a.node,m.a.object,m.a.node,m.a.object,m.a.string,m.a.any;var Z=function(e){var t=e.title,a=e.titleProps,n=void 0===a?{}:a,c=e.description,s=e.descriptionProps,r=void 0===s?{}:s,o=e.className,l=(e.children,Object(T.a)(e,["title","titleProps","description","descriptionProps","className","children"]));return i.a.createElement("div",Object.assign({className:W("list-item-meta",o)},l),i.a.createElement(Y,n,t),i.a.createElement(B,r,c))},G=a(16),X=a.n(G),U=_.a.bind(X.a);m.a.node,m.a.node,m.a.string,m.a.any,m.a.bool;function J(e){var t=e.prefix,a=e.suffix,n=e.className,c=e.children,s=e.hasBorder,r=Object(T.a)(e,["prefix","suffix","className","children","hasBorder"]);return i.a.createElement("li",Object.assign({className:U("list-item",n),"data-has-border":s},r),t,c,i.a.createElement("div",{className:U("list-item__suffix")},a))}J.Meta=Z;var L=J,Q=a(17),V=a.n(Q),$=_.a.bind(V.a);m.a.string,m.a.object;function ee(e){var t=e.className,a=e.style,n=Object(T.a)(e,["className","style"]);return i.a.createElement("ul",Object.assign({className:$("list",t),style:a},n))}ee.Item=L;var te=ee,ae=a(18),ne=a.n(ae),ie=_.a.bind(ne.a),ce=(m.a.string,m.a.string,m.a.object,m.a.string,m.a.func,m.a.number,function(e){var t=e.type,a=e.size,n=e.style,c=e.className,s=e.onChange,r=e.checkboxId,o=e.checkboxStatus;return i.a.createElement("label",{className:ie("checkbox-container",c),"data-checkbox-size":a,style:n},i.a.createElement("input",{className:ie("checkbox"),type:"checkbox","data-checkbox-id":r,onChange:function(e){return s(e)},readOnly:!0,checked:o}),i.a.createElement("span",{className:ie("checkbox-checkmark"),"data-checkbox-type":t,"data-checkbox-size":a}))});ce.defaultProps={type:"radio",size:"large",checkedStatus:!1};var se=ce,re=a(19),oe=a.n(re),le=_.a.bind(oe.a);m.a.string,m.a.array,m.a.bool,m.a.number;var me=function(e){var t=e.className,a=e.tomatos,c=e.isActive,s=e.initialSeconds,r=Object(n.useState)(0),l=Object(o.a)(r,2),m=l[0],u=l[1],_=Number(38)/Number(s);return Object(n.useEffect)(function(){var e=null;return c?e=setInterval(function(){u(m+_)},1e3):(u(0),clearInterval(e)),function(){return clearInterval(e)}},[_,m,c]),i.a.createElement("div",{className:le("tomatos",t)},a.map(function(e,t){return i.a.createElement("i",{key:t,className:le("material-icons","tomatos__finished")},"fiber_manual_record")}),c?i.a.createElement("div",{className:le("tomatos__outer")},i.a.createElement("svg",{width:"10",height:"10",className:le("tomatos__animation")},i.a.createElement("circle",{cx:"50%",cy:"50%",r:"6",className:le("tomatos__in-progress"),style:c?{strokeDasharray:"".concat(m,", 100")}:{}}))):"")},ue=a(20),_e=a.n(ue),de=_.a.bind(h.a),he=(m.a.string,function(e){var t=e.className,a=new Audio(_e.a),c=Object(n.useRef)(1500),s=Object(n.useRef)(!1),l=Object(n.useState)(c.current),m=Object(o.a)(l,2),u=m[0],_=m[1],d=Object(n.useState)([{task:"FIRST THING TO DO TODAY",id:1,checked:!1},{task:"Second THING TO DO TODAY",id:2,checked:!1},{task:"Third THING TO DO TODAY",id:3,checked:!1}]),h=Object(o.a)(d,2),f=h[0],v=h[1],p=Object(n.useState)([{type:"toc",isActive:!0},{type:"insert_chart_outlined",isActive:!1},{type:"library_music",isActive:!1}]),b=Object(o.a)(p,2),g=b[0],N=b[1],x=Object(n.useState)("default"),E=Object(o.a)(x,2),O=E[0],j=E[1],T=Object(n.useState)(!1),I=Object(o.a)(T,2),S=I[0],A=I[1],C=Object(n.useState)(!1),M=Object(o.a)(C,2),z=M[0],R=M[1],B=Object(n.useState)([1]),K=Object(o.a)(B,2),P=K[0],F=K[1],Y=Object(n.useState)(""),q=Object(o.a)(Y,2),H=q[0],W=q[1],Z=Object(n.useState)(!1),G=Object(o.a)(Z,2),X=G[0],U=G[1],J=Object(n.useState)(f[0].task),L=Object(o.a)(J,2),Q=L[0],V=L[1];Object(n.useEffect)(function(){var e=null;if(u<1&&(a.play(),s.current=!s.current,s.current?(c.current=300,j("primary"),_(c.current),F([].concat(Object(r.a)(P),[1])),document.querySelector("body").dataset.homeType="primary"):(c.current=1500,j("default"),_(c.current),document.querySelector("body").dataset.homeType="default")),z){if(u<1)return R(!1),void clearInterval(e);e=setInterval(function(){_(function(e){return e-1})},1e3)}else clearInterval(e);return function(){return clearInterval(e)}},[a,300,z,u,P,1500]);var $=function(){R(!z),A(!1)},ee=function(){_(c.current),A(!0),F([]),R(!1)},ae=function(e){var t,a=e.target.dataset.checkboxId,n=f.map(function(e){return e.id===a&&(e.checked=!0),e});v(n),(t=500,new Promise(function(e,a){R(!1),setTimeout(e,t)})).then(function(){var e=f.filter(function(e){return Number(e.id)!==Number(a)}).map(function(e){return e.checked=!1,e});v(e),V(e[0].task),U(!1),_(c.current),A(!0),F([])})};return i.a.createElement("div",{className:de("home",t),"data-home-type":O},i.a.createElement("div",{className:de("home-left")},i.a.createElement("div",{className:de("home-input")},i.a.createElement(D,{suffix:i.a.createElement("i",{className:"material-icons",onClick:function(){v([].concat(Object(r.a)(f),[{task:H,id:Math.random(),checked:!1}])),W("")}},"add"),inputType:O,onKeyDown:function(e){return function(e){var t={task:e.target.value,id:Math.random(),checked:!1};W(e.target.value),13===e.keyCode&&(v([].concat(Object(r.a)(f),[t])),W(""))}(e)},value:H,onChange:function(e){return W(e.target.value)}})),i.a.createElement("div",{className:de("home-list","home-timer-display")},i.a.createElement(te.Item,{key:f.length>0?f[0].id:Math.random(),prefix:i.a.createElement(se,{checkboxId:f.length>0?f[0].id:Math.random(),onChange:ae,checkedStatus:!(f.length>0)||f[0].checked,className:de("home-timer-checkbox",{"home-timer__checkbox--disabled":f.length<1}),size:"large",style:{marginRight:"16px"}})},i.a.createElement(te.Item.Meta,{title:i.a.createElement("span",{className:de("home-list__title"),onDoubleClick:function(){f.length<1||U(!0)}},X?i.a.createElement(D,{placeholder:"\u7de8\u8f2f\u5f85\u8fa6\u4e8b\u9805",value:Q,onChange:function(e){return V(e.target.value)},onKeyDown:function(e){var t={task:e.target.value,id:f[0].id,checked:!1};if(27===e.keyCode&&U(!1),13===e.keyCode){if(!e.target.value)return;var a=f.filter(function(e){return e.id!==t.id});v([t].concat(Object(r.a)(a))),U(!1),V(f[0].task)}},inputSize:"small",type:"text"}):f.length>0?f[0].task:"Congrats! You completed all."),description:i.a.createElement(me,{tomatos:P,initialSeconds:c.current,isActive:z&&!s.current})})),i.a.createElement(k,{className:de("home-countdown-timer"),startTimeInSeconds:u,toggleTimer:$,textType:O,reset:ee})),i.a.createElement("div",{className:de("home-list")},i.a.createElement(te,null,i.a.createElement("div",{className:de("home-list-container")},f.slice(1).map(function(e){return i.a.createElement(te.Item,{hasBorder:!0,key:e.id,prefix:i.a.createElement(se,{onChange:ae,checkboxId:e.id,size:"regular",style:{marginRight:"6px"}}),suffix:i.a.createElement("i",{className:de("material-icons","home-list__icon"),style:{width:"24px"},onClick:function(){return function(e){var t=f.filter(function(t){return t.id!==e.id});v([e].concat(Object(r.a)(t))),ee()}(e)}},"play_circle_outline")},e.task)}))),f.length>5?i.a.createElement("p",{className:de("home-list__text")},"More"):""),i.a.createElement(w,{className:de("home-mobile-timer"),seconds:u,initialSeconds:c.current,isActive:z,isReset:S,toggleTimer:$,resetTimer:ee,timerType:O})),i.a.createElement("div",{className:de("home-right")},i.a.createElement(w,{seconds:u,initialSeconds:c.current,isActive:z,isReset:S,toggleTimer:$,resetTimer:ee,timerType:O})),i.a.createElement(y,{className:de("home-nav"),navIcons:g,handleNavgiation:function(e,t){var a=g.map(function(e){return e.isActive=!1,e.type===t&&(e.isActive=!0),e});N(a)}}))});a(30);var fe=function(){return i.a.createElement("div",{className:"App","data-home-type":"primary"},i.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.4ffa3a11.chunk.js.map