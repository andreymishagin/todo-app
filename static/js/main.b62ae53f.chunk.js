(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{11:function(t,e,n){t.exports={root:"app_root__2_qmO",contentWrapper:"app_contentWrapper__23TUA"}},17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(10),i=n.n(a),c=(n(17),n(11)),s=n.n(c),d=n(5),u=n(2),l=n(8),p=n.n(l),j=n(0);function m(t){var e=t.id,n=t.title,o=t.handleRemoveItem;return Object(j.jsxs)("li",{className:p.a.todoItem,children:[Object(j.jsx)("input",{type:"checkbox",className:p.a.checkbox}),Object(j.jsx)("div",{children:n}),Object(j.jsx)("button",{onClick:function(){return o(e)},children:"\xd7"})]})}var _=n(12),f=n(6),b=n.n(f),h=n(9),v=n.n(h);function x(t){var e=t.handleAddItem,n=r.a.useState(""),o=Object(u.a)(n,2),a=o[0],i=o[1];return Object(j.jsxs)("div",{className:v.a.formWrapper,children:[Object(j.jsx)("input",{value:a,onChange:function(t){i(t.target.value)},className:v.a.input,placeholder:"What needs to be done?"}),Object(j.jsx)("button",{onClick:function(){e(a),i("")},children:"add item"})]})}function O(){var t=function(t,e){var n=r.a.useState((function(){var n=window.localStorage.getItem(t);return n?JSON.parse(n):"function"===typeof e?e():e})),o=Object(u.a)(n,2),a=o[0],i=o[1],c=r.a.useRef(t);return r.a.useEffect((function(){var e=c.current;e!==t&&window.localStorage.removeItem(e),c.current=t,window.localStorage.setItem(t,JSON.stringify(a))}),[t,a]),[a,i]}("tasks",[]),e=Object(u.a)(t,2),n=e[0],o=e[1],a=r.a.useMemo((function(){return Object(_.sortBy)(n,"title").reverse()}),[n]),i=function(t){var e=n.filter((function(e){return e.id!==t}));o(e)},c=a.map((function(t){return Object(j.jsx)(m,{id:t.id,title:t.title,handleRemoveItem:i},t.id)}));return Object(j.jsxs)("div",{className:b.a.listWrapper,children:[Object(j.jsx)(x,{handleAddItem:function(t){var e,r=n.map((function(t){return t.id})),a={id:(e=r,e.length<=0?1:Math.max.apply(Math,Object(d.a)(e))+1),title:t},i=[].concat(Object(d.a)(n),[a]);o(i)}}),Object(j.jsx)("div",{className:b.a.divider}),Object(j.jsx)("ul",{className:b.a.todoList,children:c})]})}var I=function(){return Object(j.jsx)("div",{className:s.a.root,children:Object(j.jsx)(O,{})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={listWrapper:"todo_list_listWrapper__19v7q",todoList:"todo_list_todoList__1Nnaz",divider:"todo_list_divider__1z1SR"}},8:function(t,e,n){t.exports={todoItem:"todo_item_todoItem__3Y-7e",checkbox:"todo_item_checkbox__iCubo"}},9:function(t,e,n){t.exports={formWrapper:"todo_item_form_formWrapper__w0LiZ",input:"todo_item_form_input__3STHf"}}},[[21,1,2]]]);
//# sourceMappingURL=main.b62ae53f.chunk.js.map