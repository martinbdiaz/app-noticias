(this.webpackJsonpautores=this.webpackJsonpautores||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(14),r=c.n(a),l=(c(19),c(3)),s=(c(20),c(4)),o=c.n(s);var u=c(0);function j(e){var t=e.articulos,c=e.autores;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"Total de articulos: "}),t,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Cantidad de autores: "}),c]})}function d(e){var t=e.urlimage,c=e.titulo,n=e.descripcion,i=e.author,a=e.link;return t?Object(u.jsxs)("div",{class:"article",children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)("img",{src:t,alt:""})}),Object(u.jsxs)("div",{class:"description",children:[Object(u.jsx)("div",{class:"title",children:Object(u.jsx)("b",{children:c})}),Object(u.jsx)("div",{class:"content-description",children:n}),Object(u.jsxs)("div",{class:"author",children:[Object(u.jsx)("b",{children:"Autor:"})," ",i]})]}),Object(u.jsx)("div",{class:"btn",children:Object(u.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:"Ver m\xe1s"})})]}):""}function b(e){var t=e.country,c=e.category,i=Object(n.useState)([]),a=Object(l.a)(i,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){(function(e){var t=e.country,c=void 0===t?"":t,n=e.category,i=void 0===n?"":n,a="ec5e517a67be47798aaa0966e7cfb48d",r="https://newsapi.org/v2/top-headlines?country=co&apiKey="+a;return""!=c&&""!=i?r="https://newsapi.org/v2/top-headlines?country="+c+"&category="+i+"&apiKey="+a+"&pageSize=40":""==c&&""!=i?r="https://newsapi.org/v2/top-headlines?category="+i+"&apiKey="+a+"&pageSize=40":""!=c&&""==i&&(r="https://newsapi.org/v2/top-headlines?country="+c+"&apiKey="+a+"&pageSize=40"),o.a.get(r).then((function(e){return[e.data.articles.map((function(e){return{urlToImage:e.urlToImage,title:e.title,description:e.description,author:e.author,url:e.url}}))]}))})({country:t,category:c}).then((function(e){s(e[0])}))}),[t,c]),Object(u.jsx)("div",{children:r.map((function(e){return Object(u.jsx)(d,{urlimage:e.urlToImage,titulo:e.title,descripcion:e.description,author:e.author,link:e.url},e.url)}))})}var h=c.p+"static/media/magnifying-glass.2901faed.png";function p(e){var t=e.value,c=Object(n.useState)("disable"),a=Object(l.a)(c,2),r=a[0],s=a[1],p=Object(n.useState)(0),O=Object(l.a)(p,2),x=O[0],v=O[1],g=Object(n.useState)([]),f=Object(l.a)(g,2),m=f[0],y=f[1],S=Object(n.useState)(0),I=Object(l.a)(S,2),k=I[0],T=I[1],C=Object(n.useState)(1),A=Object(l.a)(C,2),z=A[0],N=(A[1],Object(n.useState)("*")),w=Object(l.a)(N,2),E=w[0],q=w[1],B=Object(n.useState)(""),F=Object(l.a)(B,2),K=F[0],R=F[1],H=Object(n.useState)(""),J=Object(l.a)(H,2),M=J[0],V=J[1];return Object(n.useEffect)((function(){(function(e,t,c){var n="https://newsapi.org/v2/everything?q="+e+"&apiKey="+t+"&pageSize=50&page="+c;return o.a.get(n).then((function(e){var t=e.data.totalResults,c=e.data.articles.map((function(e){return{urlToImage:e.urlToImage,title:e.title,description:e.description,author:e.author,url:e.url}})),n=e.data.articles.map((function(e){return e.author})),i=Object.values(n),a=i.filter((function(e,t){return i.indexOf(e)===t}));return[t,a,a.length,c]}))})(E,"ec5e517a67be47798aaa0966e7cfb48d",z).then((function(e){v(e[0]),T(e[2]),y(e[3])}))}),[E]),"0"==t?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j,{articulos:x,autores:k})}):"1"==t?Object(u.jsx)(i.a.Fragment,{children:m.map((function(e){return Object(u.jsx)(d,{urlimage:e.urlToImage,titulo:e.title,descripcion:e.description,author:e.author,link:e.url},e.url)}))}):"2"==t?Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("div",{className:"buscador",children:[Object(u.jsx)("input",{type:"search",placeholder:"Buscar art\xedculos"}),Object(u.jsx)("img",{src:h,alt:"",onClick:function(){q(document.querySelector(".buscador input").value),setTimeout((function(){s("enable")}),700)}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:r,children:m.map((function(e){return Object(u.jsx)(d,{urlimage:e.urlToImage,titulo:e.title,descripcion:e.description,author:e.author,link:e.url},e.url)}))})]}):"3"==t?Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("select",{className:"countrySelect",children:[Object(u.jsx)("option",{value:"",children:"Seleccione"}),Object(u.jsx)("option",{value:"ar",children:"Argentina"}),Object(u.jsx)("option",{value:"at",children:"Austria"}),Object(u.jsx)("option",{value:"au",children:"Australia"}),Object(u.jsx)("option",{value:"be",children:"B\xe9lgica"}),Object(u.jsx)("option",{value:"br",children:"Brasil"}),Object(u.jsx)("option",{value:"ca",children:"Canad\xe1"}),Object(u.jsx)("option",{value:"ch",children:"Suiza"}),Object(u.jsx)("option",{value:"cn",children:"China"}),Object(u.jsx)("option",{value:"co",children:"Colombia"}),Object(u.jsx)("option",{value:"cu",children:"Cuba"}),Object(u.jsx)("option",{value:"de",children:"Alemania"}),Object(u.jsx)("option",{value:"eg",children:"Egipto"}),Object(u.jsx)("option",{value:"fr",children:"Francia"}),Object(u.jsx)("option",{value:"gb",children:"Reino Unido"}),Object(u.jsx)("option",{value:"gr",children:"Grecia"}),Object(u.jsx)("option",{value:"hk",children:"Hong Kong"}),Object(u.jsx)("option",{value:"hu",children:"Hungr\xeda"}),Object(u.jsx)("option",{value:"ie",children:"Irlanda"}),Object(u.jsx)("option",{value:"il",children:"Israel"}),Object(u.jsx)("option",{value:"in",children:"India"}),Object(u.jsx)("option",{value:"it",children:"Italia"}),Object(u.jsx)("option",{value:"jp",children:"Jap\xf3n"}),Object(u.jsx)("option",{value:"ma",children:"Marruecos"}),Object(u.jsx)("option",{value:"mx",children:"M\xe9xico"}),Object(u.jsx)("option",{value:"nz",children:"Nueva Zelanda"}),Object(u.jsx)("option",{value:"pt",children:"Portugal"}),Object(u.jsx)("option",{value:"ru",children:"Rusia"}),Object(u.jsx)("option",{value:"sg",children:"Singapur"}),Object(u.jsx)("option",{value:"tr",children:"Turqu\xeda"}),Object(u.jsx)("option",{value:"us",children:"Estados Unidos de Am\xe9rica"}),Object(u.jsx)("option",{value:"ve",children:"Venezuela"}),Object(u.jsx)("option",{value:"za",children:"Sud\xe1frica"})]}),Object(u.jsxs)("select",{className:"categorySelect",children:[Object(u.jsx)("option",{value:"",children:"Seleccione"}),Object(u.jsx)("option",{value:"business",children:"Business"}),Object(u.jsx)("option",{value:"entertainment",children:"Entertainment"}),Object(u.jsx)("option",{value:"health",children:"Health"}),Object(u.jsx)("option",{value:"sports",children:"Sports"}),Object(u.jsx)("option",{value:"technology",children:"Technology"}),Object(u.jsx)("option",{value:"general",children:"General"}),Object(u.jsx)("option",{value:"science",children:"Science"})]}),Object(u.jsx)("input",{type:"button",onClick:function(){R(document.querySelector("select.countrySelect").value),V(document.querySelector("select.categorySelect").value)},value:"VER NOTICIAS"}),Object(u.jsx)("br",{}),Object(u.jsx)(b,{country:K,category:M})]}):void 0}var O=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h3",{children:"NOTICIAS"}),Object(u.jsx)("div",{id:"pestanas",children:Object(u.jsxs)("ul",{id:"lista",children:[Object(u.jsx)("li",{id:"pestana1",children:Object(u.jsx)("span",{href:"",onClick:function(){return i("0")},children:"1. Resultados"})}),Object(u.jsx)("li",{id:"pestana2",children:Object(u.jsx)("span",{href:"",onClick:function(){return i("1")},children:"2. Art\xedculos"})}),Object(u.jsx)("li",{id:"pestana3",children:Object(u.jsx)("span",{href:"",onClick:function(){return i("2")},children:"3. B\xfasqueda"})}),Object(u.jsx)("li",{id:"pestana3",children:Object(u.jsx)("span",{href:"",onClick:function(){return i("3")},children:"4. Titulares"})})]})}),Object(u.jsx)("div",{id:"contenidopestanas",children:Object(u.jsx)(p,{value:c})})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8d0f4277.chunk.js.map