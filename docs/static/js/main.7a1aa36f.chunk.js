(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),r=n.n(o),i=n(3),l=n(2),s=n(9),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(s.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},u=n(6),j=n(0),b=function(e){var t=e.handleAddNewTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],o=n[1];return[a,function(e){var t=e.target;o(Object(l.a)(Object(l.a)({},a),{},Object(u.a)({},t.name,t.value)))},function(){o(e)}]}({description:""}),a=Object(i.a)(n,3),o=a[0].description,r=a[1],s=a[2];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Agregar TODO"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(o.trim().length<=1)){var n={id:(new Date).getTime(),desc:o,done:!1};t(n),s()}},children:[Object(j.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Hacer...",onChange:r,value:o,autoComplete:"off"}),Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2",children:"Agregar"})})]})]})},h=function(e){var t=e.todo,n=e.index,c=e.handleToggle,a=e.handleDelete;return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(j.jsxs)("span",{onClick:function(){return c(t.id)},className:t.done?"pointer text-decoration-line-through":"pointer",children:[n+1,". ",t.desc]}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.id)},children:"borrar"})]})})},p=function(e){var t=e.todos,n=e.handleToggle,c=e.handleDelete;return Object(j.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(j.jsx)(h,{todo:e,index:t,handleToggle:n,handleDelete:c},e.id)}))})},g=(n(15),function(){var e=Object(c.useReducer)(d,[],(function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{children:["TodoApp (",n.length,")"]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-7",children:Object(j.jsx)(p,{todos:n,handleToggle:function(e){a({type:"toggle",payload:e})},handleDelete:function(e){a({type:"delete",payload:e})}})}),Object(j.jsx)("div",{className:"col-5",children:Object(j.jsx)(b,{handleAddNewTodo:function(e){a({type:"add",payload:e})}})})]})]})});r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7a1aa36f.chunk.js.map