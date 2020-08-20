(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{44:function(e,t,n){e.exports=n(75)},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),o=n.n(c),s=n(18),i=n(34),u=n(35),l=n(41),p=n(39),m=n(11),d=Object(m.a)(),f=n(76),h=n(36),b=Object(s.b)((function(e){return e.boardItems}),(function(e){return{fetchWeather:function(t){return e({type:"GET_ALL_ITEMS",data:t})}}}))((function(e){var t=e.fetchWeather,n=e.item,c=Object(h.usePosition)(),o=c.latitude,s=c.longitude,i=Object(a.useMemo)((function(){return{latitude:o,longitude:s}}),[o,s]);Object(a.useEffect)((function(){o&&s&&t(i)}),[t,o,s,i]);var u=Object(a.useMemo)((function(){return n&&n.main.temp>-10&&n.main.temp<30?"#fff700":n&&n.main.temp>30?"#ff8c00":"#00ffff"}),[n]);return(r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-flex justify-content-center title"},r.a.createElement("h1",null,"Current Weather")),r.a.createElement("div",{className:"col-12 weather-holder"},n&&r.a.createElement("div",{className:"weather-holder__widget"},r.a.createElement("p",{className:"weather-holder__widget--tittle"},n.name),r.a.createElement("p",{className:"weather-holder__widget--temp",style:{color:u}},n.main.temp,r.a.createElement("span",null,"\u2103"))))))})),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",component:b})))},E=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{history:d},r.a.createElement("main",{className:"container"},r.a.createElement(f.a,{component:v}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(7),j=(n(54),n(40)),O=n(42),g={item:void 0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_ITEMS_SUCCESS":return{item:Object(O.a)({},t.response)};default:return e}},x=Object(w.combineReducers)({boardItems:_}),y=n(8),S=n.n(y),T=n(12),k=n(37),L=n(38),I=n.n(L),M="".concat("https://api.openweathermap.org/data/2.5"),C=I.a.create({baseURL:M,headers:{"Content-Type":"application/json"}}),N=function(e){return C(e).then((function(e){return e.data})).catch((function(e){return e&&e.response&&e.response.data,Promise.reject(e.response.data)}))},W={getWeather:function(e){return Object(k.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N({url:"weather?&units=metric&lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&appid=8b1cb9daef8e2166d79cbe69546160f4"),method:"GET"});case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),!(t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.detail)){t.next=10;break}throw Error(t.t0.response.data.detail);case 10:throw Error("Oops, something is wrong");case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},G=S.a.mark(R),A=S.a.mark(U);function R(e){var t,n;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.data,a.prev=1,a.next=4,Object(T.b)(W.getWeather,t);case 4:return n=a.sent,a.next=7,Object(T.c)({type:"GET_ALL_ITEMS_SUCCESS",response:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(T.c)({type:"GET_ALL_ITEMS_ERROR",error:a.t0});case 13:case"end":return a.stop()}}),G,null,[[1,9]])}function U(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=T.a,e.next=3,Object(T.d)("GET_ALL_ITEMS",R);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),A)}var B=S.a.mark(F);function F(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([U()]);case 2:case"end":return e.stop()}}),B)}var J=Object(j.a)();n(73),n(74);var P=function(e){var t=[J],n=[w.applyMiddleware.apply(void 0,t)],a=w.compose.apply(void 0,n),r=Object(w.createStore)(x,e,a);return J.run(F),r}();o.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.c997fb75.chunk.js.map