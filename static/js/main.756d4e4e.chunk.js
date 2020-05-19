(this["webpackJsonptarea3-taller-integracion"]=this["webpackJsonptarea3-taller-integracion"]||[]).push([[0],{213:function(e,t,a){e.exports=a(442)},218:function(e,t,a){},219:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},220:function(e,t,a){},248:function(e,t){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(39),r=a.n(c),o=(a(218),a(182)),i=a(8),u=(a(219),a(220),a(168)),s=a.n(u),m=a(23),h=a(178),d=a(179),v=a(63),E=a(183),f=a(181),p=a(180),k=a.n(p),b=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.props.my_socket.connected?this.props.my_socket.close():this.props.my_socket.open(),this.setState({checked:e})}},{key:"render",value:function(){return l.a.createElement("label",null,l.a.createElement("span",null,"Interruptor para abrir y cerrar Websocket"),l.a.createElement(k.a,{onChange:this.handleChange,checked:this.state.checked}))}}]),a}(n.Component),g=s()("wss://le-18262636.bitzonte.com",{path:"/stocks"}),y=[{Header:"Nombre",accessor:"ticker"},{Header:"Ultimo Precio",accessor:"value"},{Header:"Variacion Porcentual",accessor:"change"},{Header:"Alto Historico",accessor:"highest"},{Header:"Bajo Historico",accessor:"lowest"},{Header:"Volumen Total Transado",accessor:"volume"}],O=["Nombre","Volumen Compra","Volumen Venta","Volumen Total","Cantidad Acciones","Participacion de Mercado"],j=[],w=[];g.emit("STOCKS"),g.on("STOCKS",(function(e){for(var t=0;t<e.length;t++){var a={ticker:e[t].ticker,value:0,change:0,highest:0,lowest:1e6,volume:0,name:e[t].company_name};w.push(a);var n={ticker:e[t].ticker,value:[]};j.push(n)}}));var S=[];g.emit("EXCHANGES"),g.once("EXCHANGES",(function(e){for(var t in e){var a={name:e[t].name,buy:0,sell:0,total:0,quantity:e[t].listed_companies.length,participation:50,final:0,lista:e[t].listed_companies};S.push(a)}}));var C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(j),r=Object(i.a)(c,2),u=r[0],s=r[1],h=Object(n.useState)(w),d=Object(i.a)(h,2),v=d[0],E=d[1],f=Object(n.useState)(y),p=Object(i.a)(f,2),k=p[0],C=(p[1],Object(n.useState)(S)),H=Object(i.a)(C,2),A=H[0],V=H[1],_=Object(n.useState)(O),T=Object(i.a)(_,2),x=T[0];return T[1],Object(n.useEffect)((function(){g.on("UPDATE",(function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}));for(var t=u,n=0;n<t.length;n++)if(t[n].ticker==e.ticker){var l=new Date(e.time).toLocaleString("es-CL");t[n].value.push({value:e.value,time:l})}s(t);var c=v;for(n=0;n<c.length;n++)e.ticker==c[n].ticker&&(c[n].change=100*(c[n].value/e.value-1),c[n].value=e.value,e.value>c[n].highest&&(c[n].highest=e.value),e.value<c[n].lowest&&(c[n].lowest=e.value));E(c),console.log(c)})),g.on("BUY",(function(e){for(var t=v,a=A,n=0;n<t.length;n++)if(e.ticker==t[n].ticker){t[n].volume+=e.volume;for(var l=0;l<a.length;l++){a[l].lista.includes(t[n].name)&&(a[l].buy+=e.volume,a[l].total+=e.volume),a[l].final+=e.volume,a[l].participation=a[l].total/a[l].final*100}}E(t),V(a)})),g.on("SELL",(function(e){for(var t=v,a=A,n=0;n<t.length;n++)if(e.ticker==t[n].ticker){t[n].volume+=e.volume;for(var l=0;l<a.length;l++){a[l].lista.includes(t[n].name)&&(a[l].sell+=e.volume,a[l].total+=e.volume),a[l].final+=e.volume,a[l].participation=a[l].total/a[l].final*100}}E(t),V(a)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"style.css"}),l.a.createElement("div",null,l.a.createElement("h1",{"text-align":"center"},"Acciones"),l.a.createElement("div",null,l.a.createElement(b,{my_socket:g})),l.a.createElement("h2",null,"Mercados de Valores"),l.a.createElement("table",{id:"exchange"},l.a.createElement("thead",null,l.a.createElement("tr",null,x.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement("tbody",null,A.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.buy),l.a.createElement("td",null,e.sell),l.a.createElement("td",null,e.total),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.participation))})))),l.a.createElement("br",null),l.a.createElement("h2",null,"Acciones"),l.a.createElement("table",{id:"stocks"},l.a.createElement("thead",null,l.a.createElement("tr",null,k.map((function(e,t){return l.a.createElement("th",{key:t},e.Header)})))),l.a.createElement("tbody",null,v.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ticker),l.a.createElement("td",null,e.value),l.a.createElement("td",null,e.change),l.a.createElement("td",null,e.highest),l.a.createElement("td",null,e.lowest),l.a.createElement("td",null,e.volume))})))),u.map((function(e){return l.a.createElement("div",null,l.a.createElement("h2",null,e.ticker),l.a.createElement(m.c,{key:Math.random(),width:500,height:300,data:e.value},l.a.createElement(m.e,{dataKey:"time"}),l.a.createElement(m.f,{label:{value:"Precio",position:"insideLeft",angle:-90}}),l.a.createElement(m.a,{stroke:"#eee",strokeDasharray:"5 5"}),l.a.createElement(m.b,{dataKey:"value",type:"monotone",stroke:"#82ca9d",activeDot:{r:8},isAnimationActive:!1}),l.a.createElement(m.d,null)))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.756d4e4e.chunk.js.map