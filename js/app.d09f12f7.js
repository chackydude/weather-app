(function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],l=0,h=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(h.length)h.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-37e9b8bb":"60f8660e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-37e9b8bb":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-37e9b8bb":"8adf962f"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],l=i.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var h=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,r[1](h)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/weather-app/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"115a":function(e,t,r){},1185:function(e,t,r){"use strict";var n=r("115a"),a=r.n(n);a.a},2337:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HeaderBar",{on:{changeTheme:e.changeTheme}}),r("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrapper"},[r("p",{staticClass:"header-wrapper__logo logo"},[r("router-link",{staticClass:"logo__link",attrs:{to:"/"}},[e._v(" weather-app ")])],1),r("button",{staticClass:"header-wrapper__theme-changer",attrs:{tabindex:"0"},on:{click:function(t){return e.$emit("changeTheme")}}},[e._v(" change theme ")])])},u=[],s={name:"HeaderBar"},i=s,l=(r("1185"),r("2877")),h=Object(l["a"])(i,c,u,!1,null,"04dddd19",null),p=h.exports,d={name:"App",components:{HeaderBar:p},mounted:function(){this.themeSwitchLocal(localStorage.getItem("theme"))},methods:{themeSwitchLocal:function(e){"dark"===e?document.styleSheets[0].disabled=!0:"light"===e&&(document.styleSheets[1].disabled=!0)},changeTheme:function(){switch(localStorage.getItem("theme")){case"dark":localStorage.setItem("theme","light");break;case"light":localStorage.setItem("theme","dark");break;default:localStorage.setItem("theme","light")}switch(localStorage.getItem("theme")){case"light":document.styleSheets[0].disabled=!1,document.styleSheets[1].disabled=!0;break;case"dark":document.styleSheets[0].disabled=!0,document.styleSheets[1].disabled=!1;break}}}},f=d,m=(r("5c0b"),Object(l["a"])(f,a,o,!1,null,null,null)),g=m.exports,b=(r("d3b7"),r("8c4f")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-page-wrapper wrapper"},[r("div",[r("h1",{staticClass:"wrapper__page-title"},[e._v("HomePage")]),r("p",{staticClass:"wrapper__description"},[e._v(' Vue weather web-application ⛅. If you want to check application press "Get Started". ')]),r("p",{staticClass:"wrapper__navItem navItem"},[r("router-link",{staticClass:"navItem__link",attrs:{to:"/default"}},[e._v(" GET STARTED ")])],1)])])},w=[],y={name:"HomePage"},_=y,k=(r("6d69"),Object(l["a"])(_,v,w,!1,null,"49f74f5c",null)),S=k.exports;n["a"].use(b["a"]);var x=new b["a"]({mode:"hash",routes:[{path:"/",component:S},{path:"/default",component:function(){return r.e("chunk-37e9b8bb").then(r.bind(null,"6a05"))}}]}),E=r("2f62"),C=(r("99af"),r("25f0"),r("96cf"),r("1da1")),O=function(e){return function(t){t.response?(console.error("Oh, we get an error response (5xx, 4xx)"),e(t.response.data.message)):t.request?console.error("Some troubles with a network, pls check your connection"):console.error("Something went wrong, pls refresh the page")}},j=r("5530"),T=r("bc3a"),P=r.n(T),I={proxy:{protocol:"https",host:"https://my-own-proxy-server.herokuapp.com/",port:8080}},W=P.a.create(Object(j["a"])({baseURL:"",params:{APPID:"27bfdfa924c98c7f0f0664c9e7761b4b"}},I)),A=W,L={actions:{fetchWeather:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.toString(),r.next=3,A.get("data/2.5/group?id=".concat(n,"&units=metric")).then((function(t){e.commit("updateWeather",t.data)})).catch(O((function(){})));case 3:case"end":return r.stop()}}),r)})))()},fetchWeatherByName:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,A.get("/geo/1.0/direct?q=".concat(t,"&limit=1")).catch(O((function(){})));case 2:return n=r.sent,a=n.data[0],o=a.lon,c=a.lat,r.next=6,A.get("/data/2.5/weather?lat=".concat(c,"&lon=").concat(o,"&units=metric")).then((function(t){e.commit("updateCustomWeather",t.data),e.commit("updateError",void 0)})).catch(O((function(t){return e.commit("updateError",t)})));case 6:case"end":return r.stop()}}),r)})))()}},mutations:{updateWeather:function(e,t){e.weather=t},updateCustomWeather:function(e,t){e.customWeather=t},updateError:function(e,t){e.weatherError=t}},state:{weather:{},customWeather:{},weatherError:void 0},getters:{getWeather:function(e){return e.weather},getCustomWeather:function(e){return e.customWeather},getError:function(e){return e.weatherError}}};n["a"].use(E["a"]);var B=new E["a"].Store({modules:{weather:L}});n["a"].config.productionTip=!1,new n["a"]({router:x,store:B,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"6d69":function(e,t,r){"use strict";var n=r("2337"),a=r.n(n);a.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.d09f12f7.js.map