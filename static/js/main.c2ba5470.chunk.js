(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"styles_button__3E8Bc"}},11:function(t,e,n){t.exports={title:"section_title__crvBd"}},2:function(t,e,n){t.exports={good:"statistics_good__1AQbr",bad:"statistics_bad__2v2-o",neutral:"statistics_neutral__1Ot1m",item:"statistics_item__1H0rA"}},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(5),r=n.n(s),o=n(6),i=n(7),d=n(8),b=n(13),l=n(12),u=n(2),j=n.n(u),h=n(0),g=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,s=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{class:j.a.good,children:["Good:",e]}),Object(h.jsxs)("p",{class:j.a.neutral,children:["Neutral:",n]}),Object(h.jsxs)("p",{class:j.a.bad,children:["Bad:",a]}),Object(h.jsxs)("p",{class:j.a.item,children:["Total:",c]}),Object(h.jsxs)("p",{class:j.a.item,children:["Positive feedback:",s," %"]})]})},O=n(9),v=n.n(O),p=n(10),x=n.n(p),f=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("button",{class:x.a.button,type:"button",name:t,onClick:n,children:t},v.a.generate())}))})},k=n(11),m=n.n(k),_=function(t){var e=t.title,n=t.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{class:m.a.title,children:e}),n]})},F=function(t){var e=t.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:e})})},P=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),n=100*t.state.good/e;return Math.round(n)},t.onLeaveFeedback=function(e){var n=e.target.name;t.setState((function(t){return Object(o.a)({},n,t[n]+1)}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(),r=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:r,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(h.jsx)(F,{message:"No feedback given"}):Object(h.jsx)(_,{title:"Statistics",children:Object(h.jsx)(g,{good:e,neutral:n,bad:a,total:c,positivePercentage:s})})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c2ba5470.chunk.js.map