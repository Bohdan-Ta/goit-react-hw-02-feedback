(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"Statistics_wrapper__2EpPh",list:"Statistics_list__3oKT7",itemLikes:"Statistics_itemLikes__fOKp7",data:"Statistics_data__3S5aC",good:"Statistics_good__18zd4",neutral:"Statistics_neutral__3mDg3",bad:"Statistics_bad__1V8Qu"}},,,function(e,t,a){e.exports={list:"Feedback_list__1suAW"}},function(e,t,a){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},function(e,t,a){e.exports={message:"Notification_message__eciZi",smile:"Notification_smile__2nRCP"}},,,,,function(e,t,a){e.exports={button:"Buttons_button__3zj_6",animate_pulse2:"Buttons_animate_pulse2__33S6v"}},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(7),i=a.n(n),r=a(8),o=a(9),l=a(10),d=a(14),b=a(12),j=a(13);var u=a(11),m=a.n(u),h=a(0);function p(e){var t=e.onIncrementFeetback,a=e.nameFeetback;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{type:"button",onClick:function(){return t(a)},className:m.a.button,style:{backgroundColor:"rgb("+Math.floor(256*Math.random())+","+(100+Math.floor(256*Math.random()))+","+(50+Math.floor(256*Math.random()))+")"},children:a})})}var _=a(4),O=a.n(_);function x(e){var t=e.options,a=e.onIncrementFeetback;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:O.a.list,children:t.map((function(e){var t=Object(j.a)(e,1)[0];return Object(h.jsx)("li",{className:O.a.item,children:Object(h.jsx)(p,{onIncrementFeetback:a,nameFeetback:t})},t)}))})})}var k=a(5),f=a.n(k);function g(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:f.a.section,children:[t&&Object(h.jsx)("h2",{className:f.a.title,children:t}),a]})}var N=a(1),v=a.n(N);function F(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,n=e.persantageGoodFeedback;return Object(h.jsxs)("ul",{className:v.a.wrapper,children:[Object(h.jsxs)("li",{className:"".concat(v.a.list," ").concat(v.a.good),children:[Object(h.jsx)("p",{className:v.a.itemLikes,children:"Good:"}),Object(h.jsx)("span",{className:v.a.data,children:t})]}),Object(h.jsxs)("li",{className:"".concat(v.a.list," ").concat(v.a.neutral),children:[Object(h.jsx)("p",{className:v.a.itemLikes,children:"Neutral:"}),Object(h.jsx)("span",{className:v.a.data,children:a})]}),Object(h.jsxs)("li",{className:"".concat(v.a.list," ").concat(v.a.bad),children:[Object(h.jsx)("p",{className:v.a.itemLikes,children:"Bad: "}),Object(h.jsx)("span",{className:v.a.data,children:s})]}),Object(h.jsxs)("li",{className:v.a.list,children:[Object(h.jsx)("p",{className:v.a.itemLikes,children:"Total: "}),Object(h.jsx)("span",{className:v.a.data,children:c()})]}),Object(h.jsxs)("li",{className:v.a.list,children:[Object(h.jsx)("p",{className:v.a.itemLikes,children:"Positive:"}),Object(h.jsxs)("span",{className:v.a.data,children:[n()," %"]})]})]})}var S=a.p+"static/media/so-so.be940cbf.png",M=a(6),y=a.n(M);function L(e){var t=e.message;return Object(h.jsxs)("p",{className:y.a.message,children:[t,Object(h.jsx)("img",{src:S,alt:"no feedbacks",className:y.a.smile})]})}var w=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.incrementFeetback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.totalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.persantageGoodFeedback=function(){var t=e.state.good,a=e.totalFeedback();return Math.trunc(t/a*100)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,s=e.bad,c=this.totalFeedback()>0;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:Object.entries(this.state),onIncrementFeetback:this.incrementFeetback})}),Object(h.jsxs)(g,{title:"Statistics",children:[c&&Object(h.jsx)(F,{good:t,neutral:a,bad:s,total:this.totalFeedback,persantageGoodFeedback:this.persantageGoodFeedback}),!c&&Object(h.jsx)(L,{message:"There is no feedback!        Make your choice"})]})]})}}]),a}(s.Component),C=w;a(20);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.8e35ee76.chunk.js.map