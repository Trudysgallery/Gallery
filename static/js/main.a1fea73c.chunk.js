(this.webpackJsonptrudysgallery=this.webpackJsonptrudysgallery||[]).push([[0],{107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(47),i=c.n(r),s=(c(55),c(4)),o=(c(56),c(8)),u=c(5),l=(c(57),c(0));var d=function(e){return Object(l.jsxs)("div",{className:"about-blurb-div",children:[Object(l.jsx)("p",{className:"about-blurb-p",children:"I am a painter and crafter who loves the natural world and spiritual realm."}),Object(l.jsx)("p",{className:"about-blurb-p",children:"I love working with Terra Cotta pots and also making empowering feminine pieces."}),Object(l.jsx)("p",{className:"about-blurb-p",children:"Reach out to me to discuss making your idea a reality!"})]})},j=c(13),b=c(7),m={templateID:"template_g4r8hhf",userID:"user_EmHot90cGgneEKKLIjOll"},h=c(21),p=function(e,t){return t.map((function(t){return t.productInfo.id===e.id?Object(b.a)(Object(b.a)({},t),{},{quantity:++t.quantity}):t}))},f=function(e,t){return t.some((function(t){return t.productInfo.id===e.id}))},O=function(e){return 0===e.length?"Empty":e.reduce((function(e,t){return e+t.quantity+" "+t.productInfo.title+";"}),"")};c(59);var x=function(e){var t=e.currentCart,c=Object(n.useState)(!0),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)({feedbackName:"",feedbackEmail:"",feedbackMessage:"",feedbackCart:O(t)}),u=Object(s.a)(o,2),d=u[0],h=u[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),x=f[0],g=f[1],v=Object(n.useState)(!1),y=Object(s.a)(v,2),N=y[0],k=y[1],C=function(e,t){window.emailjs.send("default_service",e,t).then((function(e){k(!0)}),(function(e){console.log(e),alert("Sorry, we could not send your message! Please email trudysgallery@gmail.com instead.")}))},w=function(e){var t=e.target,c=t.name,n=t.value;h(Object(b.a)(Object(b.a)({},d),{},Object(j.a)({},c,n)))};return x&&N?Object(l.jsx)("h2",{children:"Thank You! I will reach out to you shortly!."}):Object(l.jsxs)("div",{className:"contact-page",children:[Object(l.jsx)("h1",{className:"contact-page-welcome-text",children:"Let's make art together!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(m.templateID,d),g(!0)},className:"contact-page-form",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{onChange:w,value:d.feedbackName,name:"feedbackName",type:"text",id:"name",maxLength:"75",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{onChange:w,value:d.feedbackEmail,name:"feedbackEmail",type:"email",id:"email",maxLength:"75",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{onChange:w,value:d.feedbackMessage,name:"feedbackMessage",id:"message",placeholder:"Contact me to order, discuss custom requests, or talk about anything! Please include your address if you would like to place an order.",rows:"5",cols:"50",required:!0})]}),Object(l.jsxs)("div",{className:"contact-page-include-cart-checkbox",children:[Object(l.jsx)("label",{htmlFor:"cardCheckbox",children:"Include current wishlist in message?"}),Object(l.jsx)("input",{checked:r,onChange:function(e){i((function(e){return!e}));var c=e.currentTarget.checked?O(t):"Excluded";h(Object(b.a)(Object(b.a)({},d),{},{feedbackCart:c}))},type:"checkbox",id:"cardCheckbox",name:"Include cart?",value:d.feedbackCart})]}),Object(l.jsx)("div",{className:"contact-page-submit-section",children:Object(l.jsx)("button",{className:"contact-page-submit-button",type:"submit",children:"Submit"})})]})]})},g=c(24),v=c(2),y=c.n(v),N=c(3),k="ARTWORK",C=5e3;function w(e){return new Promise((function(t,c){setTimeout((function(){c(new Error("Failed to find product"))}),e)}))}function I(e,t,c){return S.apply(this,arguments)}function S(){return(S=Object(N.a)(y.a.mark((function e(t,c,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(k).return().where(c.eq("id",n)).one();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(N.a)(y.a.mark((function e(t,c,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.race([w(C),I(t,c,n)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(k).return().all();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(99);var q=function(e){var t=e.data,c=e.onLoadData,a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],u=r[1],d=function(e){return e.preventDefault()},j=Object(g.b)().db;return Object(n.useEffect)((function(){0===t.length&&function(e){return E.apply(this,arguments)}(j).then((function(e){c(e)})),u(!0)}),[j,c,t]),i?Object(l.jsx)("div",{className:"gallery",children:Object(l.jsx)("div",{className:"gallery-images",children:t.map((function(e){return Object(l.jsx)(o.b,{to:"/gallery/".concat(e.id),className:"gallery-image-a",children:Object(l.jsx)("img",{className:"gallery-image-img",src:e.image1,alt:e.title,onDragStart:d})},e.id)}))})}):Object(l.jsx)("div",{})};c(107);var T=function(e){var t=e.productTitle,c=e.images,a=c.length-1,r=Object(n.useState)(0),i=Object(s.a)(r,2),o=i[0],u=i[1],d=function(){u(o===a?0:o+1)},j=0===a?Object(l.jsx)("div",{}):Object(l.jsx)("span",{className:"material-icons rotate-left-button",onClick:function(){u(0===o?a:o-1)},children:"undo"}),b=0===a?Object(l.jsx)("div",{}):Object(l.jsx)("span",{className:"material-icons rotate-right-button",onClick:d,children:"undo"});return Object(l.jsxs)("div",{className:"product-pictures",children:[j,Object(l.jsx)("img",{className:"product-pictures-image",src:c[o],alt:"Pictures of "+t,onClick:d}),b]})};c(108);var F=function(e){var t,c=Object(n.useState)(),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!1),d=Object(s.a)(o,2),j=d[0],b=d[1],m=Object(g.b)(),h=m.db,p=m.e,f=e.data,O=Object(u.g)().productId,x=Object(u.f)();return Object(n.useEffect)((function(){f.length>0?(i(function(e,t){return e.find((function(e){return e.id===t}))}(f,O)),b(!0)):function(e,t,c){return D.apply(this,arguments)}(h,p,O).then((function(e){i(e),b(!0)})).catch((function(e){console.log(e),x.push("/gallery")}))}),[h,p,f,x,O]),j?Object(l.jsxs)("div",{className:"current-product",children:[Object(l.jsx)("div",{className:"current-product-image-page-half",children:Object(l.jsx)(T,{images:(t=r,Object.keys(t).filter((function(e){return e.startsWith("image")})).reduce((function(e,c){return null!==t[c]&&e.push(t[c]),e}),[])),productTitle:r.title})}),Object(l.jsxs)("div",{className:"current-product-info-page-half",children:[Object(l.jsxs)("div",{className:"current-product-text",children:[Object(l.jsx)("h1",{className:"current-product-title",children:r.title}),Object(l.jsx)("p",{className:"current-product-description",children:r.description}),Object(l.jsx)("p",{className:"current-product-blurb",children:"All of my pots are painted with quality acrylic paint and primed before and after painting, so my art is here to stay even for outdoor pots!"})]}),Object(l.jsx)("div",{className:"current-product-add-to-cart-section",children:Object(l.jsx)("button",{className:"current-product-add-to-cart-button",onClick:function(){e.onAddToCart({item:r,operation:"add"})},children:"Add to wishlist!"})})]})]}):Object(l.jsx)("div",{})};c(109);var L=function(e){var t=e.cartItemQuantity>1?Object(l.jsx)("button",{className:"cart-item-counter-button",onClick:e.onDecrementCartItem,children:"-"}):null;return Object(l.jsxs)("div",{className:"cart-item-counter",children:[Object(l.jsx)("button",{className:"cart-item-counter-button",onClick:e.onIncrementCartItem,children:"+"}),Object(l.jsx)("div",{className:"cart-item-counter-value",children:e.cartItemQuantity}),t]})};c(110);var A=function(e){var t=e.product.productInfo,c=e.product.quantity;function n(c){e.onEditCart({item:t,operation:c})}return Object(l.jsxs)("div",{className:"shopping-cart-item",children:[Object(l.jsx)(o.b,{className:"shopping-cart-item-img-link",to:"/gallery/".concat(t.id),children:Object(l.jsx)("img",{className:"shopping-cart-item-img",src:t.image1,alt:t.title})}),Object(l.jsx)(o.b,{className:"shopping-cart-item-title-link",to:"/gallery/".concat(t.id),children:Object(l.jsx)("h2",{className:"shopping-cart-item-title",children:t.title})}),Object(l.jsx)(L,{cartItemQuantity:c,onIncrementCartItem:function(){n("increment")},onDecrementCartItem:function(){n("decrement")}}),Object(l.jsx)("button",{className:"material-icons shopping-cart-remove-button",onClick:function(){n("remove")},children:"remove_shopping_cart"})]})};c(111);var P=function(e){var t=e.currentCart,c=e.onEditCart;return function(e){e.reduce((function(e,t){return e+t.productInfo.price*t.quantity}),0)}(t),0===t.length?Object(l.jsx)("div",{className:"shopping-cart-empty",children:"Your wishlist is empty."}):Object(l.jsxs)("div",{className:"shopping-cart-page",children:[Object(l.jsx)(o.b,{to:"/contact",children:Object(l.jsx)("button",{className:"shopping-cart-checkout-button",children:"Contact me to order"})}),Object(l.jsx)("div",{className:"shopping-cart-box",children:Object(l.jsx)("div",{className:"shopping-cart-items",children:e.currentCart.map((function(e){return Object(l.jsx)(A,{className:"shopping-cart-item",product:e,onEditCart:c},e.productInfo.id)}))})})]})};c(112);var M=function(e){var t=e.cartSize;return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)(o.b,{to:"/gallery",className:"nav-bar-item",children:"Gallery"}),Object(l.jsx)(o.b,{to:"/about",className:"nav-bar-item",children:"About"}),Object(l.jsx)(o.b,{to:"/contact",className:"nav-bar-item",children:"Contact Me"}),Object(l.jsxs)("div",{className:"nav-bar-cart-icon",children:[Object(l.jsx)("div",{className:"nav-bar-cart-size",children:t}),Object(l.jsx)(o.b,{to:"/wishlist",className:"material-icons cart",children:"shopping_cart"})]})]})};c(113);var R=function(){return Object(l.jsx)("div",{className:"welcomeHeader",children:Object(l.jsx)("h1",{className:"welcomeHeaderText",children:"Welcome to Trudy's Gallery"})})},G={integration:"react-1-V883hiKD43rRfvuQ-7JfIBj8-MY7vlUcj12asCd6jRX1GD4CN4hj4CS-8gPPdJi0BACK4CkVoD-DRM2RX4cdb38xVi5HIiw22p0OwnNkGnutuYzEmTcKZ1sV",tt:"tt-1-a6YQNOCa-r3FqdYbREAa9dpDqVS4r3kljsT2GvwTQw0=",version:"2020-11-20"};var K=function(){var e,t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)([]),j=Object(s.a)(i,2),m=j[0],O=j[1],v=function(e){var t=e.item;switch(e.operation){case"add":y(t);break;case"remove":N(t);break;case"increment":k(t);break;case"decrement":C(t)}},y=function(e){r(function(e,t){return f(e,t)?p(e,t):[].concat(Object(h.a)(t),[{productInfo:e,quantity:1}])}(e,a))},N=function(e){r(function(e,t){return t.filter((function(t){return t.productInfo.id!==e.id}))}(e,a))},k=function(e){r(p(e,a))},C=function(e){r(function(e,t){return t.map((function(t){return t.productInfo.id===e.id?Object(b.a)(Object(b.a)({},t),{},{quantity:--t.quantity}):t}))}(e,a))};return Object(l.jsx)(g.a,{ebconfig:G,children:Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)(R,{})}),Object(l.jsx)(M,{cartSize:(e=a,e.reduce((function(e,t){return e+t.quantity}),0))}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/gallery/:productId",children:Object(l.jsx)(F,{data:m,onAddToCart:v})}),Object(l.jsx)(u.a,{path:"/gallery",children:Object(l.jsx)(q,{data:m,onLoadData:O})}),Object(l.jsx)(u.a,{path:"/about",children:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{path:"/contact",children:Object(l.jsx)(x,{currentCart:a})}),Object(l.jsx)(u.a,{path:"/wishlist",children:Object(l.jsx)(P,{currentCart:a,onEditCart:v})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(q,{data:m,onLoadData:O})}),Object(l.jsx)(u.a,{children:Object(l.jsx)(q,{data:m,onLoadData:O})})]})]})})})},Q=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root")),Q()},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},99:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.a1fea73c.chunk.js.map