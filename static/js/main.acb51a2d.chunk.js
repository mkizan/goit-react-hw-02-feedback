(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={message:"Notification_message__359yE"}},18:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),i=a.n(c),o=a(7),r=a(8),l=a(9),b=a(12),d=a(11),u=a(2),_=a.n(u),j=a(0),m=function(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,i=e.positivePercentage;return Object(j.jsx)(n.Fragment,{children:Object(j.jsxs)("ul",{className:_.a.list,children:[Object(j.jsxs)("li",{className:_.a.list__item,children:["Good: ",t]}),Object(j.jsxs)("li",{className:_.a.list__item,children:["Neutral: ",a]}),Object(j.jsxs)("li",{className:_.a.list__item,children:["Bad: ",s]}),Object(j.jsxs)("li",{className:_.a.list__item,children:["Total: ",c]}),Object(j.jsxs)("li",{className:_.a.list__item,children:["Positive feedback: ",i]})]})})},h=a(3),O=a.n(h),f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(j.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(j.jsx)("li",{className:O.a.list__item,children:Object(j.jsx)("button",{type:"button",onClick:function(){return a(e)},className:O.a.btn,children:e})},e)}))})},g=a(10),x=a.n(g),p=function(e){var t=e.message;return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("p",{className:x.a.message,children:t})})},k=a(5),v=a.n(k),F=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("div",{className:v.a.section,children:[Object(j.jsx)("h2",{className:v.a.section__name,children:t}),a]})},N=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100/((e.state.good+e.state.neutral+e.state.bad)/e.state.good))+"%"},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,s=e.bad;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(F,{title:"Please leave feedback",children:Object(j.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(F,{title:"Statistics",children:this.countTotalFeedback()>0?Object(j.jsx)(m,{good:t,neutral:a,bad:s,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(p,{message:"No feedback given"})})]})}}]),a}(n.Component);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={list:"Statisctics_list__bgpDL",list__item:"Statisctics_list__item__2azLq"}},3:function(e,t,a){e.exports={list:"FeedbackOptions_list__3-Kfe",list__item:"FeedbackOptions_list__item__12kQq",btn:"FeedbackOptions_btn__2IQQo"}},5:function(e,t,a){e.exports={section:"Section_section__2mYr1",section__name:"Section_section__name__Labqc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.acb51a2d.chunk.js.map