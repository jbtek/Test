(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{219:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(69),u=function(t){var e=t.message,r=e.errorMsg,n=e.len,c=e.isLoading,u=0===n?a.a.createElement("div",{className:"nodata-found"},"Data records: ",n):a.a.createElement("div",{className:"error-found"},"Error fetching data: ",r);return c&&(u=a.a.createElement("div",{className:"nodata-found"},"Data is fetching.....")),u},o=r(76),s=r.n(o),i=r(97),l=r(120),f=r(164),p="get",d="post",h="put",m="delete",v=r.n(f).a.create({baseURL:"http://kaboom.rksv.net/api/",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"content-type","Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS"}}),b=function(t,e,r,n){switch(r){case p:return console.log("GET CALLED"),g(t,n);case d:return O(t,e);case h:return w(t,e);case m:return j(t,e);default:return g(t,e,n)}},g=function(){var t=Object(i.a)(s.a.mark((function t(e,r){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v({url:e,params:r,method:p}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),O=function(){var t=Object(i.a)(s.a.mark((function t(e,r){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v({url:e,method:d,data:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),w=function(){var t=Object(i.a)(s.a.mark((function t(e,r){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v({url:e,method:h,data:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(s.a.mark((function t(e,r,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v({url:e,method:m,data:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),E=function(t,e,r,a){var c=Object(n.useState)([]),u=Object(l.a)(c,2),o=u[0],f=u[1],p=Object(n.useState)(!0),d=Object(l.a)(p,2),h=d[0],m=d[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),O=g[0],w=g[1];return Object(n.useEffect)((function(){(function(){var n=Object(i.a)(s.a.mark((function n(){var c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),w(null),n.prev=2,n.next=5,b(e,t,r,a);case 5:c=n.sent,f(c.data),m(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),w(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}})()()}),[]),{isLoading:h,newData:o,errorMsg:O}},x=r(77),y=r(58);e.default=function(){var t=E(null,"historical","get",{interval:1}),e=t.isLoading,r=t.newData,n=t.errorMsg,o=r.length?Object(x.a)(r,["date","open","high","low","close","volume"]):[],s=a.a.createElement(y.TypeChooser,null,(function(t){return a.a.createElement(c.a,{type:t,data:o})}));if(n||0===r.length||e){var i={errorMsg:n,len:r.length,isLoading:e};s=a.a.createElement(u,{message:i})}return s}},69:function(t,e,r){"use strict";var n=r(12),a=r(13),c=r(15),u=r(14),o=r(0),s=r.n(o),i=r(218),l=r(216),f=r(118),p=r(87),d=r(93),h=r(58),m=r(33),v=function(t){Object(c.a)(r,t);var e=Object(u.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var t=this.props,e=t.type,r=t.width,n=t.data,a=t.ratio,c=function(t){return t.date},u=[c(Object(m.last)(n)),c(n[n.length-100])];return s.a.createElement(f.b,{height:400,ratio:a,width:r,margin:{left:50,right:50,top:10,bottom:30},type:e,seriesName:"MSFT",data:n,xAccessor:c,xScale:Object(i.a)(),xExtents:u},s.a.createElement(f.a,{id:1,yExtents:function(t){return[t.high,t.low]}},s.a.createElement(d.XAxis,{axisAt:"bottom",orient:"bottom",ticks:6}),s.a.createElement(d.YAxis,{axisAt:"left",orient:"left",ticks:5}),s.a.createElement(p.CandlestickSeries,{width:Object(m.timeIntervalBarWidth)(l.a)})))}}]),r}(s.a.Component);v.defaultProps={type:"svg"},v=Object(h.fitWidth)(v),e.a=v},77:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(95),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t.length&&!e.length)return[];var r=(t=t.map((function(t){return t&&(t=c(e,t.trim().split(","))),t}))).slice().sort((function(t,e){return Object(n.a)(t.date,e.date)}));return r},c=function(t,e){return e.reduce((function(e,r,n){var a=t[n];return a&&(e[a]="date"===a?function(t){var e=parseInt(t);return new Date(e)}(r):r),e}),{})}}}]);
//# sourceMappingURL=7.64386565.chunk.js.map