!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../../../../../../../../static/vendor/jschardet/jschardet.min.js"),require("../../../../../../../../static/vendor/xlsx/xlsx.full.min.js")):"function"==typeof define&&define.amd?define("svelte/upload",["../../../../../../../../static/vendor/jschardet/jschardet.min.js","../../../../../../../../static/vendor/xlsx/xlsx.full.min.js"],e):(t=t||self).upload=e(t.jschardet)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}));function n(){}function a(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){for(var n in e)t[n]=1;return t}function o(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n)}function i(t){t.parentNode.removeChild(t)}function c(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function u(t,e,n,a){t.addEventListener(e,n,a)}function h(t,e,n,a){t.removeEventListener(e,n,a)}function f(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function p(t,e){t.data=""+e}function v(t,e){for(var n=0;n<t.options.length;n+=1){var a=t.options[n];if(a.__value===e)return void(a.selected=!0)}}function _(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function m(){return Object.create(null)}function g(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function y(t,e){return t!=t?e==e:t!==e}function b(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var a=0;a<n.length;a+=1){var r=n[a];if(!r.__calling)try{r.__calling=!0,r.call(this,e)}finally{r.__calling=!1}}}function w(t){t._lock=!0,T(t._beforecreate),T(t._oncreate),T(t._aftercreate),t._lock=!1}function D(){return this._state}function x(t,e){t._handlers=m(),t._slots=m(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function N(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function T(t){for(;t&&t.length;)t.shift()()}var k={destroy:function(t){this.destroy=n,this.fire("destroy"),this.set=n,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:D,fire:b,on:N,set:function(t){this._set(a({},t)),this.root._lock||w(this.root)},_recompute:n,_set:function(t){var e=this._state,n={},r=!1;for(var o in t=a(this._staged,t),this._staged={},t)this._differs(t[o],e[o])&&(n[o]=r=!0);r&&(this._state=a(a({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_stage:function(t){a(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:g};function S(t,e,n){return function(t,e,n,a,r){var o={method:e,body:a,mode:"cors",credentials:n};return window.fetch(t,o).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.text()})).then((function(t){try{return JSON.parse(t)}catch(e){return console.warn("malformed json input",t),t}})).then((function(t){return r&&r(t),t})).catch((function(t){if(!r)throw t;console.error(t)}))}(t,"PUT","include",e,n)}var A=Date.now||function(){return(new Date).getTime()};var j,C={};function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"core";"chart"===t?window.__dw&&window.__dw.vis&&window.__dw.vis.meta&&(C[t]=window.__dw.vis.meta.locale||{}):C[t]="core"===t?dw.backend.__messages.core:Object.assign({},dw.backend.__messages.core,dw.backend.__messages[t])}function F(t){var e=arguments,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"core";if(t=t.trim(),C[n]||P(n),!C[n][t])return"MISSING:"+t;var a=C[n][t];return"string"==typeof a&&arguments.length>2&&(a=a.replace(/\$(\d)/g,(function(t,n){return n=2+Number(n),void 0===e[n]?t:e[n]}))),a}var M,O=dw.backend.currentChart,E=function(t,e,n){var a,r,o,s,i=0;n||(n={});var c=function(){i=!1===n.leading?0:A(),a=null,s=t.apply(r,o),a||(r=o=null)},d=function(){var d=A();i||!1!==n.leading||(i=d);var l=e-(d-i);return r=this,o=arguments,l<=0||l>e?(a&&(clearTimeout(a),a=null),i=d,s=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),s};return d.cancel=function(){clearTimeout(a),i=0,a=r=o=null},d}((function(){var t=j.get().chartData;S("/api/charts/".concat(O.get("id"),"/data"),t)}),1e3);function U(){j=this}function L(t){var e=t.changed,n=t.current,a=t.previous;e.chartData&&n.chartData&&a&&a.chartData!==n.chartData&&E()}function R(t){var e=this;x(this,t),this._state=a({placeholder:F("upload / paste here")},t.data),this._intro=!0,this._handlers.update=[L],this._fragment=function(t,e){var n,a,r,c=!1;function l(){c=!0,t.set({chartData:r.value}),c=!1}return{c:function(){var t,o;n=d("form"),a=d("div"),u(r=d("textarea"),"input",l),r.readOnly=e.readonly,r.id="upload-data-text",t="resize",o="none",r.style.setProperty(t,o),r.placeholder=e.placeholder,r.className="svelte-kl1kny",a.className="control-group",n.className="upload-form"},m:function(t,i){s(t,n,i),o(n,a),o(a,r),r.value=e.chartData},p:function(t,e){!c&&t.chartData&&(r.value=e.chartData),t.readonly&&(r.readOnly=e.readonly),t.placeholder&&(r.placeholder=e.placeholder)},d:function(t){t&&i(n),h(r,"input",l)}}}(this,this._state),this.root._oncreate.push((function(){U.call(e),e.fire("update",{changed:r({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),w(this))}function H(t){var e=t.changed,n=t.current;if(e.selectedDataset&&"--"!==n.selectedDataset){var a=n.selectedDataset;this.set({chartData:a.data}),a.presets&&Object.keys(a.presets).forEach((function(t){dw.backend.currentChart.set(t,a.presets[t])}))}}function q(t,e,n){var a=Object.create(t);return a.dataset=e[n],a}function B(t,e,n){var a=Object.create(t);return a.group=e[n],a}function I(t,e){var n,a,r,c=e.dataset.title;return{c:function(){n=d("option"),a=l(c),n.__value=r=e.dataset,n.value=n.__value,n.className="demo-dataset"},m:function(t,e){s(t,n,e),o(n,a)},p:function(t,e){t.datasetsArray&&c!==(c=e.dataset.title)&&p(a,c),t.datasetsArray&&r!==(r=e.dataset)&&(n.__value=r),n.value=n.__value},d:function(t){t&&i(n)}}}function X(t,e){for(var n,a,r=e.group.datasets,o=[],l=0;l<r.length;l+=1)o[l]=I(0,q(e,r,l));return{c:function(){n=d("optgroup");for(var t=0;t<o.length;t+=1)o[t].c();f(n,"label",a=e.group.type)},m:function(t,e){s(t,n,e);for(var a=0;a<o.length;a+=1)o[a].m(n,null)},p:function(t,e){if(t.datasetsArray){r=e.group.datasets;for(var s=0;s<r.length;s+=1){var i=q(e,r,s);o[s]?o[s].p(t,i):(o[s]=I(0,i),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}t.datasetsArray&&a!==(a=e.group.type)&&f(n,"label",a)},d:function(t){t&&i(n),c(o,t)}}}function $(t){var e=this;x(this,t),this._state=a({selectedDataset:"--"},t.data),this._recompute({datasets:1},this._state),this._intro=!0,this._handlers.update=[H],this._fragment=function(t,e){for(var n,a,r,f,p,m,g,y,b,w,D=F("upload / quick help"),x=F("upload / try a dataset"),N=F("upload / sample dataset"),T=!1,k=e.datasetsArray,S=[],A=0;A<k.length;A+=1)S[A]=X(t,B(e,k,A));function j(){T=!0,t.set({selectedDataset:_(y)}),T=!1}return{c:function(){n=d("p"),a=l(D),r=l("\n\n"),f=d("div"),p=d("p"),m=l(x),g=l("\n    "),y=d("select"),b=d("option"),w=l(N);for(var o=0;o<S.length;o+=1)S[o].c();b.__value="--",b.value=b.__value,u(y,"change",j),"selectedDataset"in e||t.root._beforecreate.push(j),y.disabled=e.readonly,y.id="demo-datasets",y.className="svelte-16u58l0",f.className="demo-datasets"},m:function(t,i){s(t,n,i),o(n,a),s(t,r,i),s(t,f,i),o(f,p),o(p,m),o(f,g),o(f,y),o(y,b),o(b,w);for(var c=0;c<S.length;c+=1)S[c].m(y,null);v(y,e.selectedDataset)},p:function(e,n){if(e.datasetsArray){k=n.datasetsArray;for(var a=0;a<k.length;a+=1){var r=B(n,k,a);S[a]?S[a].p(e,r):(S[a]=X(t,r),S[a].c(),S[a].m(y,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=k.length}!T&&e.selectedDataset&&v(y,n.selectedDataset),e.readonly&&(y.disabled=n.readonly)},d:function(t){t&&(i(n),i(r),i(f)),c(S,t),h(y,"change",j)}}}(this,this._state),this.root._oncreate.push((function(){e.fire("update",{changed:r({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),w(this))}function z(t){var e=this,n=t.changed,a=t.current;n.sheets&&a.sheets.length>1?setTimeout((function(){e.set({selected:a.sheets[0]})}),300):n.sheets&&1===a.sheets.length&&S("/api/charts/".concat(dw.backend.currentChart.get("id"),"/data"),a.sheets[0].csv,(function(){window.location.href="describe"})),n.selected&&this.set({chartData:a.selected.csv})}function G(t,e,n){var a=Object.create(t);return a.sheet=e[n],a}function J(t,e){var a,r=F("upload / xls / uploading data");return{c:function(){a=d("p")},m:function(t,e){s(t,a,e),a.innerHTML=r},p:n,d:function(t){t&&i(a)}}}function K(t,e){for(var n,a,r,f,p,m=F("upload / select sheet"),g=!1,y=e.sheets,b=[],w=0;w<y.length;w+=1)b[w]=V(t,G(e,y,w));function D(){g=!0,t.set({selected:_(f)}),g=!1}return{c:function(){n=d("p"),a=l(m),r=l("\n    "),f=d("select");for(var o=0;o<b.length;o+=1)b[o].c();u(f,"change",D),"selected"in e||t.root._beforecreate.push(D),f.disabled=p=!e.sheets.length,f.className="svelte-16u58l0"},m:function(t,i){s(t,n,i),o(n,a),s(t,r,i),s(t,f,i);for(var c=0;c<b.length;c+=1)b[c].m(f,null);v(f,e.selected)},p:function(e,n){if(e.sheets){y=n.sheets;for(var a=0;a<y.length;a+=1){var r=G(n,y,a);b[a]?b[a].p(e,r):(b[a]=V(t,r),b[a].c(),b[a].m(f,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=y.length}!g&&e.selected&&v(f,n.selected),e.sheets&&p!==(p=!n.sheets.length)&&(f.disabled=p)},d:function(t){t&&(i(n),i(r),i(f)),c(b,t),h(f,"change",D)}}}function Q(t,e){var a,r=F("upload / parsing-xls");return{c:function(){(a=d("div")).className="alert alert-info"},m:function(t,e){s(t,a,e),a.innerHTML=r},p:n,d:function(t){t&&i(a)}}}function V(t,e){var n,a,r,c=e.sheet.name;return{c:function(){n=d("option"),a=l(c),n.__value=r=e.sheet,n.value=n.__value},m:function(t,e){s(t,n,e),o(n,a)},p:function(t,e){t.sheets&&c!==(c=e.sheet.name)&&p(a,c),t.sheets&&r!==(r=e.sheet)&&(n.__value=r),n.value=n.__value},d:function(t){t&&i(n)}}}function W(t){var e=this;x(this,t),this._state=a({selected:!1,sheets:[]},t.data),this._intro=!0,this._handlers.update=[z],this._fragment=function(t,e){var n;function a(t){return t.sheets.length?t.sheets.length>1?K:J:Q}var r=a(e),o=r(t,e);return{c:function(){n=d("div"),o.c()},m:function(t,e){s(t,n,e),o.m(n,null)},p:function(e,s){r===(r=a(s))&&o?o.p(e,s):(o.d(1),(o=r(t,s)).c(),o.m(n,null))},d:function(t){t&&i(n),o.d()}}}(this,this._state),this.root._oncreate.push((function(){e.fire("update",{changed:r({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),w(this))}function Y(e,n){var a=new FileReader;a.onload=function(){try{for(var r=new Uint8Array(a.result),o="",s=0,i=0;i<r.length;++i)r[i]>122&&s++,o+=String.fromCharCode(r[i]);var c=t.detect(o);c.confidence<=.95&&s<10&&(c.encoding="utf-8"),(a=new FileReader).onload=function(){return n(null,a.result)},a.readAsText(e,c.encoding)}catch(t){console.warn(t),n(null,a.result)}},a.readAsArrayBuffer(e)}a(R.prototype,k),a($.prototype,k),$.prototype._recompute=function(t,e){var n;t.datasets&&this._differs(e.datasetsArray,e.datasetsArray=(n=e.datasets,Object.keys(n).map((function(t){return n[t]}))))&&(t.datasetsArray=!0)},a(W.prototype,k);var Z=[{id:"copy",title:F("upload / copy-paste"),longTitle:F("upload / copy-paste / long"),icon:"fa fa-clipboard",mainPanel:R,sidebar:$,action:function(){}},{id:"upload",title:F("upload / upload-csv"),longTitle:F("upload / upload-csv / long"),icon:"fa-file-excel-o fa",mainPanel:R,sidebar:$,isFileUpload:!0,onFileUpload:function(t){var e=t.target.files[0];"text/"===e.type.substr(0,5)||".csv"===e.name.substr(e.name.length-4)?(M.set({Sidebar:$}),Y(e,(function(t,e){if(t)return console.error("could not read file",t);S("/api/charts/".concat(dw.backend.currentChart.get("id"),"/data"),e,(function(){window.location.href="describe"}))}))):"application/"===e.type.substr(0,12)?(M.set({Sidebar:W,sheets:[]}),function(t,e){var n="undefined"!=typeof FileReader&&(FileReader.prototype||{}).readAsBinaryString,a=new FileReader;a.onload=function(){try{var t=n?a.result:new Uint8Array(a.result),r=XLSX.read(t,{type:n?"binary":"array"});e(null,r.SheetNames.map((function(t){return{name:t,sheet:r.Sheets[t],csv:XLSX.utils.sheet_to_csv(r.Sheets[t])}})))}catch(t){console.error(t),e(null,a.result)}},a.readAsBinaryString(t)}(e,(function(t,e){if(t)return M.set({error:t});M.set({sheets:e})}))):(console.error(e.type),console.error(e),M.set({error:F("upload / csv-required")}))},action:function(){}}];var tt={addButton:function(t){Z.push(t),this.set({buttons:Z});var e=this.get().defaultMethod;t.id===e&&this.btnAction(t)},btnAction:function(t){if(this.set({active:t}),"copy"===t.id){var e=this.store.get().dw_chart;e.get("externalData")&&(e.set("externalData",""),setTimeout((function(){dw.backend.currentChart.save()}),1e3))}var n=t.id;"upload"===t.id&&(n="copy",setTimeout((function(){}),1e3)),this.store.get().dw_chart.set("metadata.data.upload-method",n),t.action&&t.action(),t.mainPanel&&this.set({MainPanel:t.mainPanel}),t.sidebar&&this.set({Sidebar:t.sidebar})},btnUpload:function(t,e){t.onFileUpload&&t.onFileUpload(e)},dragStart:function(t){"copy"===this.get().active.id&&(t.preventDefault(),this.set({dragover:!0}))},resetDrag:function(){this.set({dragover:!1})},onFileDrop:function(t){if("copy"===this.get().active.id){this.resetDrag(),t.preventDefault();var e=[];if(t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)"file"===t.dataTransfer.items[n].kind&&e.push(t.dataTransfer.items[n].getAsFile());t.dataTransfer.items.clear()}else{for(var a=0;a<t.dataTransfer.files.length;a++)e.push(t.dataTransfer.files[a]);t.dataTransfer.items.clear()}for(var r=0;r<e.length;r++)if("text/"===e[r].type.substr(0,5))return Y(e[r],(function(t,e){if(t)return console.error("could not read file",t);S("/api/charts/".concat(dw.backend.currentChart.get("id"),"/data"),e,(function(){window.location.href="describe"}))}))}}};function et(){var t=this;M=this;var e=this.store.get().dw_chart.get("metadata.data.upload-method","copy");this.set({defaultMethod:e}),Z.forEach((function(n){n.id===e&&t.set({active:n})}))}function nt(t){var e=this._svelte,n=e.component,a=e.ctx;n.btnAction(a.btn)}function at(t){var e=this._svelte,n=e.component,a=e.ctx;n.btnUpload(a.btn,t)}function rt(t,e,n){var a=Object.create(t);return a.btn=e[n],a}function ot(t,e){var n,a=F("upload / drag-csv-here");return{c:function(){(n=d("div")).className="draginfo svelte-oe6wy4"},m:function(t,e){s(t,n,e),n.innerHTML=a},d:function(t){t&&i(n)}}}function st(t,e){var n;return{c:function(){(n=d("input"))._svelte={component:t,ctx:e},u(n,"change",at),n.accept=".csv, .tsv, .txt, .xlsx, .xls, .ods, .dbf",n.className="file-upload svelte-oe6wy4",f(n,"type","file")},m:function(t,e){s(t,n,e)},p:function(t,a){e=a,n._svelte.ctx=e},d:function(t){t&&i(n),h(n,"change",at)}}}function it(t,e){var n,a,r,c,f,v,_,m,g,y=e.btn.title,b=e.btn.isFileUpload&&st(t,e);return{c:function(){n=d("li"),a=d("label"),b&&b.c(),r=l("\n                            "),c=d("i"),v=l("\n                            "),_=d("span"),m=l(y),c.className=f=e.btn.icon+" svelte-oe6wy4",_.className="svelte-oe6wy4",a.className="svelte-oe6wy4",n._svelte={component:t,ctx:e},u(n,"click",nt),n.className=g="action "+(e.active==e.btn?"active":"")+" svelte-oe6wy4"},m:function(t,e){s(t,n,e),o(n,a),b&&b.m(a,null),o(a,r),o(a,c),o(a,v),o(a,_),o(_,m)},p:function(o,s){(e=s).btn.isFileUpload?b?b.p(o,e):((b=st(t,e)).c(),b.m(a,r)):b&&(b.d(1),b=null),o.buttons&&f!==(f=e.btn.icon+" svelte-oe6wy4")&&(c.className=f),o.buttons&&y!==(y=e.btn.title)&&p(m,y),n._svelte.ctx=e,(o.active||o.buttons)&&g!==(g="action "+(e.active==e.btn?"active":"")+" svelte-oe6wy4")&&(n.className=g)},d:function(t){t&&i(n),b&&b.d(),h(n,"click",nt)}}}function ct(t,e){var n,a,r,c;function f(e){t.set({error:!1})}return{c:function(){n=d("div"),(a=d("div")).textContent="✕",r=l("\n                    "),c=d("noscript"),u(a,"click",f),a.className="action close",n.className="alert alert-error"},m:function(t,i){s(t,n,i),o(n,a),o(n,r),o(n,c),c.insertAdjacentHTML("afterend",e.error)},p:function(t,e){t.error&&(!function(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}(c),c.insertAdjacentHTML("afterend",e.error))},d:function(t){t&&i(n),h(a,"click",f)}}}function dt(t){var e=this;x(this,t),this._state=a({dragover:!1,MainPanel:R,Sidebar:$,active:Z[0],buttons:Z,sheets:[],chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0},t.data),this._intro=!0,this._fragment=function(t,e){for(var n,a,r,f,v,_,m,g,y,b,w,D,x,N,T,k,S,A,j,C,P,M,O=F("upload / title"),E=e.active.longTitle||e.active.title,U={},L={},R=F("Proceed"),H=e.dragover&&ot(),q=e.buttons,B=[],I=0;I<q.length;I+=1)B[I]=it(t,rt(e,q,I));var X=e.error&&ct(t,e),$=e.Sidebar;function z(e){var n={};return void 0!==e.chartData&&(n.chartData=e.chartData,U.chartData=!0),void 0!==e.readonly&&(n.readonly=e.readonly,U.readonly=!0),void 0!==e.sheets&&(n.sheets=e.sheets,U.sheets=!0),void 0!==e.datasets&&(n.datasets=e.datasets,U.datasets=!0),{root:t.root,store:t.store,data:n,_bind:function(e,n){var a={};!U.chartData&&e.chartData&&(a.chartData=n.chartData),!U.readonly&&e.readonly&&(a.readonly=n.readonly),!U.sheets&&e.sheets&&(a.sheets=n.sheets),!U.datasets&&e.datasets&&(a.datasets=n.datasets),t._set(a),U={}}}}if($){var G=new $(z(e));t.root._beforecreate.push((function(){G._bind({chartData:1,readonly:1,sheets:1,datasets:1},G.get())}))}var J=e.MainPanel;function K(e){var n={};return void 0!==e.chartData&&(n.chartData=e.chartData,L.chartData=!0),void 0!==e.readonly&&(n.readonly=e.readonly,L.readonly=!0),{root:t.root,store:t.store,data:n,_bind:function(e,n){var a={};!L.chartData&&e.chartData&&(a.chartData=n.chartData),!L.readonly&&e.readonly&&(a.readonly=n.readonly),t._set(a),L={}}}}if(J){var Q=new J(K(e));t.root._beforecreate.push((function(){Q._bind({chartData:1,readonly:1},Q.get())}))}function V(e){t.onFileDrop(e)}function W(e){t.dragStart(e)}function Y(e){t.dragStart(e)}function Z(e){t.resetDrag()}function tt(e){t.resetDrag()}return{c:function(){n=d("div"),H&&H.c(),a=l("\n\n    \n    "),r=d("div"),f=d("div"),v=d("div"),_=d("h3"),m=l("\n\n                "),g=d("ul");for(var t=0;t<B.length;t+=1)B[t].c();y=l("\n\n                "),X&&X.c(),b=l("\n\n                "),w=d("h4"),D=l(E),x=l("\n\n                "),G&&G._fragment.c(),N=l("\n        "),T=d("div"),Q&&Q._fragment.c(),k=l("\n\n            "),S=d("div"),A=d("a"),j=l(R),C=l(" "),P=d("i"),g.className="import-methods svelte-oe6wy4",w.className="svelte-oe6wy4",v.className="sidebar",f.className="span5",P.className="icon-chevron-right icon-white",A.href="describe",A.className="submit btn btn-primary svelte-oe6wy4",A.id="describe-proceed",S.className="buttons pull-right",T.className="span7",r.className="row",r.style.cssText=M=e.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"",u(n,"drop",V),u(n,"dragover",W),u(n,"dragenter",Y),u(n,"dragend",Z),u(n,"dragleave",tt),n.className="chart-editor dw-create-upload upload-data"},m:function(t,e){s(t,n,e),H&&H.m(n,null),o(n,a),o(n,r),o(r,f),o(f,v),o(v,_),_.innerHTML=O,o(v,m),o(v,g);for(var i=0;i<B.length;i+=1)B[i].m(g,null);o(v,y),X&&X.m(v,null),o(v,b),o(v,w),o(w,D),o(v,x),G&&G._mount(v,null),o(r,N),o(r,T),Q&&Q._mount(T,null),o(T,k),o(T,S),o(S,A),o(A,j),o(A,C),o(A,P)},p:function(o,s){if((e=s).dragover?H||((H=ot()).c(),H.m(n,a)):H&&(H.d(1),H=null),o.active||o.buttons){q=e.buttons;for(var i=0;i<q.length;i+=1){var c=rt(e,q,i);B[i]?B[i].p(o,c):(B[i]=it(t,c),B[i].c(),B[i].m(g,null))}for(;i<B.length;i+=1)B[i].d(1);B.length=q.length}e.error?X?X.p(o,e):((X=ct(t,e)).c(),X.m(v,b)):X&&(X.d(1),X=null),o.active&&E!==(E=e.active.longTitle||e.active.title)&&p(D,E);var d={};!U.chartData&&o.chartData&&(d.chartData=e.chartData,U.chartData=void 0!==e.chartData),!U.readonly&&o.readonly&&(d.readonly=e.readonly,U.readonly=void 0!==e.readonly),!U.sheets&&o.sheets&&(d.sheets=e.sheets,U.sheets=void 0!==e.sheets),!U.datasets&&o.datasets&&(d.datasets=e.datasets,U.datasets=void 0!==e.datasets),$!==($=e.Sidebar)?(G&&G.destroy(),$?(G=new $(z(e)),t.root._beforecreate.push((function(){var t={};void 0===e.chartData&&(t.chartData=1),void 0===e.readonly&&(t.readonly=1),void 0===e.sheets&&(t.sheets=1),void 0===e.datasets&&(t.datasets=1),G._bind(t,G.get())})),G._fragment.c(),G._mount(v,null)):G=null):$&&(G._set(d),U={});var l={};!L.chartData&&o.chartData&&(l.chartData=e.chartData,L.chartData=void 0!==e.chartData),!L.readonly&&o.readonly&&(l.readonly=e.readonly,L.readonly=void 0!==e.readonly),J!==(J=e.MainPanel)?(Q&&Q.destroy(),J?(Q=new J(K(e)),t.root._beforecreate.push((function(){var t={};void 0===e.chartData&&(t.chartData=1),void 0===e.readonly&&(t.readonly=1),Q._bind(t,Q.get())})),Q._fragment.c(),Q._mount(T,k)):Q=null):J&&(Q._set(l),L={}),o.dragover&&M!==(M=e.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"")&&(r.style.cssText=M)},d:function(t){t&&i(n),H&&H.d(),c(B,t),X&&X.d(),G&&G.destroy(),Q&&Q.destroy(),h(n,"drop",V),h(n,"dragover",W),h(n,"dragenter",Y),h(n,"dragend",Z),h(n,"dragleave",tt)}}}(this,this._state),this.root._oncreate.push((function(){et.call(e),e.fire("update",{changed:r({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),w(this))}function lt(t,e){this._handlers={},this._dependents=[],this._computed=m(),this._sortedComputedProperties=[],this._state=a({},t),this._differs=e&&e.immutable?y:g}a(dt.prototype,k),a(dt.prototype,tt),a(lt.prototype,{_add:function(t,e){this._dependents.push({component:t,props:e})},_init:function(t){for(var e={},n=0;n<t.length;n+=1){var a=t[n];e["$"+a]=this._state[a]}return e},_remove:function(t){for(var e=this._dependents.length;e--;)if(this._dependents[e].component===t)return void this._dependents.splice(e,1)},_set:function(t,e){var n=this,r=this._state;this._state=a(a({},r),t);for(var o=0;o<this._sortedComputedProperties.length;o+=1)this._sortedComputedProperties[o].update(this._state,e);this.fire("state",{changed:e,previous:r,current:this._state}),this._dependents.filter((function(t){for(var a={},r=!1,o=0;o<t.props.length;o+=1){var s=t.props[o];s in e&&(a["$"+s]=n._state[s],r=!0)}if(r)return t.component._stage(a),!0})).forEach((function(t){t.component.set({})})),this.fire("update",{changed:e,previous:r,current:this._state})},_sortComputedProperties:function(){var t,e=this._computed,n=this._sortedComputedProperties=[],a=m();function r(o){var s=e[o];s&&(s.deps.forEach((function(e){if(e===t)throw new Error("Cyclical dependency detected between ".concat(e," <-> ").concat(o));r(e)})),a[o]||(a[o]=!0,n.push(s)))}for(var o in this._computed)r(t=o)},compute:function(t,e,n){var r,o=this,s={deps:e,update:function(a,s,i){var c=e.map((function(t){return t in s&&(i=!0),a[t]}));if(i){var d=n.apply(null,c);o._differs(d,r)&&(r=d,s[t]=!0,a[t]=r)}}};this._computed[t]=s,this._sortComputedProperties();var i=a({},this._state),c={};s.update(i,c,!0),this._set(i,c)},fire:b,get:D,on:N,set:function(t){var e=this._state,n=this._changed={},a=!1;for(var r in t){if(this._computed[r])throw new Error("'".concat(r,"' is a read-only computed property"));this._differs(t[r],e[r])&&(n[r]=a=!0)}a&&this._set(t,n)}});return{App:dt,data:{chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0},store:new lt({})}}));
