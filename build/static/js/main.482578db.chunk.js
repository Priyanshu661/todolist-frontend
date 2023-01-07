(this["webpackJsonpes6-spread-operator-practice"]=this["webpackJsonpes6-spread-operator-practice"]||[]).push([[0],{24:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),l=n(5),i=n(3),s=n(4),u=n(12);var m=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),m=Object(i.a)(l,2),f=m[0],d=m[1];function h(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},n,a))}))}return r.a.createElement("section",{className:"vh-100 gradient-custom"},r.a.createElement("div",{className:"container py-5 h-100"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white",style:{borderRadius:"1rem"}},r.a.createElement("div",{className:"card-body p-5 text-center"},r.a.createElement("div",{className:"mb-md-5 mt-md-4 pb-5"},r.a.createElement("h2",{className:"fw-bold mb-2 text-uppercase"},"Login"),r.a.createElement("p",{className:"text-white-50 mb-5"},"Please enter your email and password!"),r.a.createElement("p",{style:{color:"red"}},f),r.a.createElement("div",{className:"form-outline form-white mb-4"},r.a.createElement("label",{className:"form-label",htmlFor:"typeEmailX"},"Email"),r.a.createElement("input",{name:"email",onChange:h,type:"email",id:"typeEmailX",className:"form-control form-control-lg"})),r.a.createElement("div",{className:"form-outline form-white mb-4"},r.a.createElement("label",{className:"form-label",htmlFor:"typePasswordX"},"Password"),r.a.createElement("input",{name:"password",onChange:h,type:"password",id:"typePasswordX",className:"form-control form-control-lg"})),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-outline-light btn-lg px-5",type:"submit",onClick:function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,password:o.password})};0!==o.email.length&&0!==o.password.length?fetch("https://todo-backend-cx73.onrender.com/",t).then((function(e){return e.json()})).then((function(t){0!==t.length?e.setToken(t[0]):d("Invalid Email or Password!")})):d("Enter email and password")}},"Login"),r.a.createElement("div",{className:"d-flex justify-content-center text-center mt-4 pt-1"},r.a.createElement("a",{href:"#!",className:"text-white"},r.a.createElement("i",{className:"fab fa-facebook-f fa-lg"})),r.a.createElement("a",{href:"#!",className:"text-white"},r.a.createElement("i",{className:"fab fa-twitter fa-lg mx-4 px-2"})),r.a.createElement("a",{href:"#!",className:"text-white"},r.a.createElement("i",{className:"fab fa-google fa-lg"})))),r.a.createElement("div",null,r.a.createElement("p",{className:"mb-0"},"Don't have an account? ",r.a.createElement("a",{href:"/signup",className:"text-white-50 fw-bold"},"Sign Up")))))))))};var f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"containor"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"To-Do List")),r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;c(t)},value:o,type:"text"}),r.a.createElement("button",{className:"button",onClick:function(){e.handleSubmit(o),c("")}},r.a.createElement("span",null,"Add"))),r.a.createElement("div",null,r.a.createElement("ul",null,e.itemList.map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("li",{key:n},t," ",r.a.createElement("button",{onClick:function(){return function(t){var n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.token,name:t})};fetch("https://todo-backend-cx73.onrender.com/delete",n).then((function(e){return e.json()})).then((function(e){console.log(e)}))}(t)},className:"deleteButton"},"X")))}))))),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.handleDeleteAccount()},className:"button Delbtn"},r.a.createElement("span",null,"Delete Account")),r.a.createElement("button",{onClick:function(){return e.handleLogout()},className:"button"}," ",r.a.createElement("span",null,"Logout")))},d=n(2);var h=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(!1),m=Object(i.a)(l,2),f=m[0],h=m[1],p=Object(a.useState)(""),v=Object(i.a)(p,2),y=v[0],b=v[1];function g(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},n,a))}))}return f?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("section",{className:"vh-100 bg-image",style:{backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}},r.a.createElement("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"card",style:{borderRadius:"15px"}},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h2",{className:"text-uppercase text-center mb-5"},"Create an account"),r.a.createElement("p",{style:{color:"blue"}},y),r.a.createElement("form",null,r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{onChange:g,name:"email",type:"email",id:"form3Example3cg",className:"form-control form-control-lg"}),r.a.createElement("label",{className:"form-label",htmlFor:"form3Example3cg"},"Your Email")),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{onChange:g,name:"password",type:"password",id:"form3Example4cg",className:"form-control form-control-lg"}),r.a.createElement("label",{className:"form-label",htmlFor:"form3Example4cg"},"Password")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,password:o.password})};fetch("https://todo-backend-cx73.onrender.com/signup",t).then((function(e){return e.json()})).then((function(t){t.err?b(t.err):(e.setToken(t),h(!0))}))},className:"btn btn-success btn-block btn-lg gradient-custom-4 text-body"},"Register")),r.a.createElement("p",{className:"text-center text-muted mt-5 mb-0"},"Have already an account? ",r.a.createElement("a",{href:"/",className:"fw-bold text-body"},r.a.createElement("u",null,"Login here"))))))))))))};var p=n(21);function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(T){i=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),l=new k(r||[]);return a(c,"_invoke",{value:x(e,n,l)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var m={};function f(){}function d(){}function h(){}var p={};i(p,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==t&&n.call(b,o)&&(p=b);var g=h.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function c(){return new t((function(r,c){!function a(r,o,c,l){var i=u(e[r],e,o);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,c,l)}),(function(e){a("throw",e,c,l)})):t.resolve(m).then((function(e){s.value=e,c(s)}),(function(e){return a("throw",e,c,l)}))}l(i.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}})}function x(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var i=u(e,t,n);if("normal"===i.type){if(a=n.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(a="completed",n.method="throw",n.arg=i.arg)}}}function N(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=h,a(g,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:d,configurable:!0}),d.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),i(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new w(s(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(g),i(g,l,"Generator"),i(g,o,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),i=n.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("token"),t="undefined"!==e?JSON.parse(e):null;return null===t||void 0===t?void 0:t._id}()),t=Object(i.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),r(e._id)},token:n}}(),s=c.token,u=c.setToken;return Object(a.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s})};s&&function(){var t=Object(l.a)(v().mark((function t(){var n,a;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://todo-backend-cx73.onrender.com/data",e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,o(a.todos);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[n,s]),s?r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",element:r.a.createElement(f,{handleLogout:function(){localStorage.setItem("token",JSON.stringify("")),u("")},handleSubmit:function(e){var t={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s,item:e})};fetch("https://todo-backend-cx73.onrender.com/add",t).then((function(e){return e.json()})).then((function(e){console.log(e),o(e[0].todos)}))},itemList:n,token:s,handleDeleteAccount:function(){var e={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s})};fetch("https://todo-backend-cx73.onrender.com/deleteaccount",e).then(localStorage.setItem("token",JSON.stringify("")),u(""))}})}),r.a.createElement(d.b,{exact:!0,path:"/signup",element:r.a.createElement(h,{setToken:u})}))))):r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",element:r.a.createElement(m,{setItems:o,setToken:u})}),r.a.createElement(d.b,{exact:!0,path:"/signup",element:r.a.createElement(h,{setToken:u})})))))};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.482578db.chunk.js.map