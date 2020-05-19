(this["webpackJsonptarea3-taller-integracion"]=this["webpackJsonptarea3-taller-integracion"]||[]).push([[0],{207:function(e,t,a){e.exports=a(435)},212:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},214:function(e,t,a){},242:function(e,t){},435:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(39),r=a.n(c),o=(a(212),a(177)),i=a(8),u=(a(213),a(214),a(167)),m=a.n(u),s=a(23),d=document.getElementById("status"),v=m()("wss://le-18262636.bitzonte.com",{path:"/stocks"});v.onclose=function(e){d.innerHTML="Desconectado de WebSocket."},v.onopen=function(e){d.innerHTML="Connected to: "+e.currentTarget.url};var h=[{Header:"Nombre",accessor:"ticker"},{Header:"Ultimo Precio",accessor:"value"},{Header:"Variacion Porcentual",accessor:"change"},{Header:"Alto Historico",accessor:"highest"},{Header:"Bajo Historico",accessor:"lowest"},{Header:"Volumen Total Transado",accessor:"volume"}],E=["Nombre","Volumen Compra","Volumen Venta","Volumen Total","Cantidad Acciones","Participacion de Mercado"],f=[],p=[];v.emit("STOCKS"),v.on("STOCKS",(function(e){for(var t=0;t<e.length;t++){var a={ticker:e[t].ticker,value:0,change:0,highest:0,lowest:1e6,volume:0,name:e[t].company_name};p.push(a);var n={ticker:e[t].ticker,value:[]};f.push(n)}}));var g=[];v.emit("EXCHANGES"),v.once("EXCHANGES",(function(e){for(var t in e){var a={name:e[t].name,buy:0,sell:0,total:0,quantity:e[t].listed_companies.length,participation:50,final:0,lista:e[t].listed_companies};g.push(a)}}));var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(f),r=Object(i.a)(c,2),u=r[0],m=r[1],d=Object(n.useState)(p),b=Object(i.a)(d,2),k=b[0],y=b[1],w=Object(n.useState)(h),O=Object(i.a)(w,2),S=O[0],j=(O[1],Object(n.useState)(g)),H=Object(i.a)(j,2),A=H[0],T=H[1],C=Object(n.useState)(E),L=Object(i.a)(C,2),V=L[0];return L[1],Object(n.useEffect)((function(){v.on("UPDATE",(function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}));for(var t=u,n=0;n<t.length;n++)if(t[n].ticker==e.ticker){var l=new Date(e.time).toLocaleString("es-CL");t[n].value.push({value:e.value,time:l})}m(t);var c=k;for(n=0;n<c.length;n++)e.ticker==c[n].ticker&&(c[n].change=100*(c[n].value/e.value-1),c[n].value=e.value,e.value>c[n].highest&&(c[n].highest=e.value),e.value<c[n].lowest&&(c[n].lowest=e.value));y(c),console.log(c)})),v.on("BUY",(function(e){for(var t=k,a=A,n=0;n<t.length;n++)if(e.ticker==t[n].ticker){t[n].volume+=e.volume;for(var l=0;l<a.length;l++){a[l].lista.includes(t[n].name)&&(a[l].buy+=e.volume,a[l].total+=e.volume),a[l].final+=e.volume,a[l].participation=a[l].total/a[l].final*100}}y(t),T(a)})),v.on("SELL",(function(e){for(var t=k,a=A,n=0;n<t.length;n++)if(e.ticker==t[n].ticker){t[n].volume+=e.volume;for(var l=0;l<a.length;l++){a[l].lista.includes(t[n].name)&&(a[l].sell+=e.volume,a[l].total+=e.volume),a[l].final+=e.volume,a[l].participation=a[l].total/a[l].final*100}}y(t),T(a)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("h1",{"text-align":"center"},"Acciones"),l.a.createElement("h2",null,"Mercados de Valores"),l.a.createElement("table",{id:"exchange"},l.a.createElement("thead",null,l.a.createElement("tr",null,V.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement("tbody",null,A.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.buy),l.a.createElement("td",null,e.sell),l.a.createElement("td",null,e.total),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.participation))})))),l.a.createElement("br",null),l.a.createElement("h2",null,"Acciones"),l.a.createElement("table",{id:"stocks"},l.a.createElement("thead",null,l.a.createElement("tr",null,S.map((function(e,t){return l.a.createElement("th",{key:t},e.Header)})))),l.a.createElement("tbody",null,k.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ticker),l.a.createElement("td",null,e.value),l.a.createElement("td",null,e.change),l.a.createElement("td",null,e.highest),l.a.createElement("td",null,e.lowest),l.a.createElement("td",null,e.volume))})))),u.map((function(e){return l.a.createElement("div",null,l.a.createElement("h2",null,e.ticker),l.a.createElement(s.c,{key:Math.random(),width:500,height:300,data:e.value},l.a.createElement(s.e,{dataKey:"time"}),l.a.createElement(s.f,{label:{value:"Precio",position:"insideLeft",angle:-90}}),l.a.createElement(s.a,{stroke:"#eee",strokeDasharray:"5 5"}),l.a.createElement(s.b,{dataKey:"value",type:"monotone",stroke:"#82ca9d",activeDot:{r:8},isAnimationActive:!1}),l.a.createElement(s.d,null)))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,1,2]]]);
//# sourceMappingURL=main.82b4d244.chunk.js.map