(this["webpackJsonpbell-house"]=this["webpackJsonpbell-house"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a(2),r=a.n(s),i=a(27),n=a.n(i),o=(a(51),a(20)),l=(a.p,a(52),a(16)),d=a(38),u=a.n(d),m=a.p+"static/media/chatbot2.1c95645b.png",j=function(){var e,t=Object(s.useState)(!1),a=Object(o.a)(t,2),r=a[0],i=a[1];return Object(c.jsxs)("div",{style:{margin:10,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",floating:!0,color:"#FFFFFF"},children:[r&&Object(c.jsx)(u.a,{steps:[{id:"bienvenida",message:"\xa1Hola! Soy Bell, el asistente virtual de BellHouse \xa1Estoy para ayudarte!",trigger:"1"},{id:"1",message:"Elige una opcion",options:[{value:1,label:"Buscar productos",trigger:"product"},{value:2,label:"Estado de compra",trigger:"estado"},{value:3,label:"Mis compras",trigger:"compras"},{value:4,label:"Sugerencias",trigger:"sugerencia"}],trigger:"2"},{id:"2",options:[{value:1,label:"Buscar productos",trigger:"product"},{value:2,label:"Estado de compra",trigger:"estado"},{value:3,label:"Mis compras",trigger:"compras"},{value:4,label:"Sugerencias",trigger:"sugerencia"}]},{id:"product",message:"Elige una opcion",options:[{value:1,label:"Laptops",trigger:"lap"},{value:2,label:"Mobile",trigger:"mob"},{value:3,label:"Tablets",trigger:"tab"},{value:3,label:"Impresoras",trigger:"Impresoras"}],trigger:"mostrar productos"},{id:"mostrar productos",options:[{value:1,label:"Laptops",trigger:"oferta"},{value:2,label:"Mobile",trigger:"oferta"},{value:3,label:"Tablets",trigger:"oferta"},{value:3,label:"Impresoras",trigger:"oferta"}],trigger:"oferta"},{id:"oferta",message:"\xa1Tenemos un 20% por campa\xf1a escolar!"},{id:"estado",message:"Consulta el estado de tu compra, ingresando tu numero de orden",trigger:"ingreso cod"},{id:"ingreso cod",user:!0,trigger:"verif"},{id:"verif",message:"Correcto, lo estamos verificando ..."},{id:"compras",message:"\xbfEn que puedo ayudarte?, elige una opcion:",options:[{value:1,label:"Estado de mi compra",trigger:"estado"},{value:2,label:"Sugerencia o reclamos",trigger:"sug"},{value:3,label:"\xbfAlgun problema?",trigger:"question"}],trigger:"opc compras"},{id:"opc compras",options:[{value:1,label:"Estado de mi compra",trigger:"estado"},{value:2,label:"Sugerencia o reclamos",trigger:"sugerencia"},{value:3,label:"\xbfAlgun problema?",trigger:"sugerencia"}]},{id:"sugerencia",message:"Realiza tus comentarios, sugerencias y reclamos llamando a nuestro Servicio al cliente:",trigger:"part2"},{id:"part2",message:"(01)4192000 (01)6310300",end:!0}]}),Object(c.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"flex-end",flexDirection:"column"},children:Object(c.jsx)("div",{onClick:function(){return i(!r)},style:(e={borderRadius:"50%",minHeight:"50px",minWidth:"50px",maxWidth:"50px"},Object(l.a)(e,"maxWidth","50px"),Object(l.a)(e,"backgroundColor","#ffffff"),Object(l.a)(e,"display","flex"),Object(l.a)(e,"alignItems","center"),Object(l.a)(e,"justifyContent","center"),e),children:Object(c.jsx)("img",{style:{width:"80px",height:"80px"},src:m})})})]})},b=(a(59),a.p+"static/media/logo2.1295ac7c.png"),p=a(42),g=a.n(p),h=a(43),v=a.n(h),x=a(24);var O=function(e){return Object(c.jsxs)("div",{className:"Header",children:[Object(c.jsx)(x.b,{to:"/",children:Object(c.jsx)("div",{className:"Header-logo",children:Object(c.jsx)("img",{src:b})})}),Object(c.jsx)("div",{className:"Header-optionAddress",children:Object(c.jsx)("div",{className:"Header-option",children:Object(c.jsx)("span",{className:"Header-optionLineTwo",children:"\xa1Bienvenido!"})})}),Object(c.jsxs)("div",{className:"Header-search",children:[Object(c.jsx)("input",{className:"Header-searchInput",type:"text"}),Object(c.jsx)("div",{className:"Header-searchIconContainer",children:Object(c.jsx)(g.a,{})})]}),Object(c.jsxs)("div",{className:"Header-navItems",children:[Object(c.jsxs)("div",{className:"Header-option",children:[Object(c.jsx)("span",{className:"Header-optionLineOne",children:"Tus"}),Object(c.jsx)("span",{className:"Header-optionLineTwo",children:"Compras"})]}),Object(c.jsx)(x.b,{to:"/cart",children:Object(c.jsxs)("div",{className:"Header-optionCart",children:[Object(c.jsx)(v.a,{}),Object(c.jsx)("span",{className:"Header-cartCount",children:function(){var t=0;return e.cartItems.forEach((function(e){t+=parseInt(e.cartItem.quantity)})),t}()})]})})]})]})},f=(a(66),a(33)),I=(f.a.initializeApp({apiKey:"AIzaSyDrn_HVeS8BmFcG5EG1Wqo9bjDc0UKYzN8",authDomain:"ecomers-4ab27.firebaseapp.com",projectId:"ecomers-4ab27",storageBucket:"ecomers-4ab27.appspot.com",messagingSenderId:"822990952674",appId:"1:822990952674:web:2d3b821ee83cb6381726bb",measurementId:"G-GYZCTEK342"}),f.a.firestore());a(70);var N=function(e){var t;return Object(c.jsxs)("div",{className:"Product",children:[Object(c.jsxs)("div",{className:"Product-description",children:[Object(c.jsx)("span",{className:"Product-title",children:e.title}),Object(c.jsxs)("span",{className:"Product-price",children:["$",e.price]}),Object(c.jsx)("span",{className:"Product-rating",children:(t=e.rating,console.log(t),0!==t?Array(t).fill(null).map((function(e,t){return Object(c.jsx)("p",{children:"\ud83c\udf1f"})})):"")})]}),Object(c.jsx)("img",{src:e.image}),Object(c.jsx)("div",{className:"Product-disp",children:Object(c.jsxs)("span",{className:"Product-stock",children:["Stock: ",e.stock]})}),Object(c.jsx)("button",{onClick:function(){var t=I.collection("cart-items").doc(e.id);t.get().then((function(a){a.exists?t.update({quantity:parseInt(a.data().quantity)+1}):t.set({title:e.title,image:e.image,price:e.price,quantity:1})}))},children:"Add to Cart"})]})};var y=function(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),r=(a[0],a[1]);return Object(s.useEffect)((function(){I.collection("products").onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push({id:e.id,product:e.data()})})),r(t)}))}),[]),Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)("div",{className:"Home-container",children:[Object(c.jsx)("div",{className:"Oferta",style:{backgroundImage:"url(https://thumbs.gfycat.com/JauntyBabyishKitten-small.gif)"}}),Object(c.jsx)("div",{className:"Home-banner",style:{backgroundImage:"url(https://img.freepik.com/vector-gratis/fondo-blanco-hexagono-tecnologia-azul_1017-19366.jpg?size=626&ext=jpg)"}}),Object(c.jsx)("div",{className:"Home-content",children:Object(c.jsx)("div",{className:"Home-row",children:e.storeItems.map((function(e){return Object(c.jsx)(N,{id:e.Item.id,title:e.Item.titulo,price:e.Item.precio,rating:e.Item.ratting,image:e.Item.imagen,stock:e.Item.stock})}))})})]})})};a(71),a(72);var C=function(e){for(var t=e.id,a=e.cartItem,s=[],r=1;r<Math.max(a.quantity+1,20);r++)s.push(Object(c.jsxs)("option",{value:r,children:["Cantidad: ",r]}));return Object(c.jsxs)("div",{className:"CartItem",children:[Object(c.jsx)("div",{className:"CartItem-image",children:Object(c.jsx)("img",{src:a.image})}),Object(c.jsxs)("div",{className:"CartItem-info",children:[Object(c.jsx)("div",{className:"CartItem-title",children:a.title}),Object(c.jsxs)("div",{className:"CartItem-actions",children:[Object(c.jsx)("div",{className:"CartItem-quantity",children:Object(c.jsx)("select",{onChange:function(e){return a=e.target.value,void I.collection("cart-items").doc(t).update({quantity:parseInt(a)});var a},value:a.quantity,children:s})}),Object(c.jsx)("div",{onClick:function(){I.collection("cart-items").doc(t).delete()},className:"CartItem-delete",children:"Eliminar"})]})]}),Object(c.jsxs)("div",{className:"CartItem-price",children:["$",a.price]})]})};var H=function(e){return Object(c.jsxs)("div",{className:"CartItems",children:[Object(c.jsx)("h1",{children:"Carrito de compras"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"CartItems-items",children:e.cartItems.map((function(e){return Object(c.jsx)(C,{id:e.id,cartItem:e.cartItem})}))})]})};a(73);var S=function(e){return Object(c.jsxs)("div",{className:"CartTotal",children:[Object(c.jsxs)("h3",{children:["Total(",function(){var t=0;return e.cartItems.forEach((function(e){t+=parseInt(e.cartItem.quantity)})),t}()," items): s/",function(){var t=0;return e.cartItems.forEach((function(e){t+=e.cartItem.price*e.cartItem.quantity})),t}()," "]}),Object(c.jsx)("button",{children:"Pagar"})]})};a(74);var E=function(e){return Object(c.jsxs)("div",{className:"Cart",children:[Object(c.jsx)(H,{cartItems:e.cartItems}),Object(c.jsx)(S,{cartItems:e.cartItems})]})},k=a(10);var q=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(s.useEffect)((function(){I.collection("cart-items").onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push({id:e.id,cartItem:e.data()})})),r(t)}))}),[]);var i=Object(s.useState)([]),n=Object(o.a)(i,2),l=n[0],d=n[1];return Object(s.useEffect)((function(){I.collection("productos").onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push({id:e.id,Item:e.data()})})),d(t)}))}),[]),Object(c.jsx)(x.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{cartItems:a}),Object(c.jsxs)(k.c,{children:[Object(c.jsx)(k.a,{path:"/cart",children:Object(c.jsx)(E,{cartItems:a})}),Object(c.jsx)(k.a,{path:"/",children:Object(c.jsx)(y,{storeItems:l})})]}),Object(c.jsx)("div",{className:"chatbot",children:Object(c.jsx)(j,{})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),r(e),i(e)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),F()}},[[76,1,2]]]);
//# sourceMappingURL=main.5e964a1d.chunk.js.map