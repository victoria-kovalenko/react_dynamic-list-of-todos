(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),d=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(0)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye-slash"})})}):Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e.id)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye"})})})})]})}))})]})},o=function(e){var t=e.query,c=e.searchQuery,s=e.filter,a=e.filterTodo;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.todoId,c=e.todos,s=e.selectTodo,a=Object(l.useState)(null),d=Object(n.a)(a,2),o=d[0],b=d[1],u=c.find((function(e){return e.id===t}))||null;return Object(l.useEffect)((function(){var e;(e=(null===u||void 0===u?void 0:u.userId)||0,r("/users/".concat(e))).then((function(e){return b(e)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),u&&o?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",u.id]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){b(null),s(0)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:u.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[u.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(i.jsx)(j,{})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),u=Object(n.a)(a,2),h=u[0],m=u[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)("all"),v=Object(n.a)(p,2),y=v[0],g=v[1];Object(l.useEffect)((function(){r("/todos").then((function(e){s(e)}))}),[]);var k=f.toLowerCase(),T=c.filter((function(e){var t=e.title.toLowerCase().includes(k),c=function(t){switch(t){case"all":return e;case"active":return!0===e.completed;case"completed":return!1===e.completed}return t}(y);return t&&c}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(o,{query:f,searchQuery:N,filter:y,filterTodo:g})}),Object(i.jsx)("div",{className:"block",children:0===c.length?Object(i.jsx)(j,{}):Object(i.jsx)(d,{todos:T,selectedTodoId:h,selectTodo:function(e){m(e)}})})]})})}),0!==h&&Object(i.jsx)(b,{todoId:h,todos:c,selectTodo:function(e){m(e)}})]})};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0908be93.chunk.js.map