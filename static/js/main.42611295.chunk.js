(this["webpackJsonpwob-clone"]=this["webpackJsonpwob-clone"]||[]).push([[10],[,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(58),a=(n(81),n(76),r.a.initializeApp({apiKey:"AIzaSyBcPWLW6D0lZqB-FyT0Fdtz1XUi0nhS2Zo",authDomain:"wobclone-3d29b.firebaseapp.com",projectId:"wobclone-3d29b",storageBucket:"wobclone-3d29b.appspot.com",messagingSenderId:"225553916464",appId:"1:225553916464:web:55185a4c2423e19956c3f5",measurementId:"G-RN8PBF6BH7"})),c=a.auth(),o=a.firestore()},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(34),a=function(){return Object(r.b)()},c=r.c},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(36),a=n.n(r),c=n(1),o=a.a.wrapper,i=a.a.spinner,s=a.a.dot;function u(){var e=new Array(12).fill("dot").map((function(e,t){return Object(c.jsx)("div",{className:"".concat(s," ").concat(a.a["".concat(e).concat(t+1)])},"".concat(e).concat(t))}));return Object(c.jsx)("div",{className:o,children:Object(c.jsx)("div",{className:i,children:e})})}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return v}));var r=n(19),a=n(6),c=n.n(a),o=n(13),i=n(8),s=n(10),u=n(33),d={ebooks:[],searchResults:[],searchKey:"",showSearchBar:!1,status:"idle",currentRequestId:void 0,error:null},l=Object(i.b)("searchEbook/getDataStatus",function(){var e=Object(o.a)(c.a.mark((function e(t,n){var r,a,o,i,d,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.requestId,o=r().searcher,i=o.currentRequestId,"pending"===o.status&&a===i){e.next=4;break}return e.abrupt("return");case 4:return d=[],e.next=7,s.b.collection("ebooks").get();case 7:return l=e.sent,e.next=10,l.forEach((function(e){d.push(e.data())}));case 10:return d=Object(u.a)(d,"alphabetical"),e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(i.c)({name:"searcher",initialState:d,reducers:{setSearchKey:function(e,t){e.searchKey=t.payload},setSearchResults:function(e,t){e.searchResults=t.payload},setShowSearchBar:function(e,t){var n;e.showSearchBar=null!==(n=t.payload)&&void 0!==n?n:!e.showSearchBar}},extraReducers:function(e){e.addCase(l.pending,(function(e,t){"idle"===e.status&&(e.ebooks=[],e.status="pending",e.currentRequestId=t.meta.requestId)})),e.addCase(l.fulfilled,(function(e,t){var n,a=t.meta.requestId;"pending"===e.status&&e.currentRequestId===a&&((n=e.ebooks).push.apply(n,Object(r.a)(t.payload)),e.status="idle",e.currentRequestId=void 0)})),e.addCase(l.rejected,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.status="idle",e.error=t.error,e.currentRequestId=void 0)}))}}),p=function(e){return e.searcher.ebooks},f=function(e){return e.searcher.searchKey},j=function(e){return e.searcher.searchResults},h=function(e){return e.searcher.showSearchBar},O=b.actions,g=O.setSearchKey,x=O.setSearchResults,v=O.setShowSearchBar;t.a=b.reducer},,function(e,t,n){e.exports={sidePanel:"NavSidePanel_sidePanel__2WuRQ",header:"NavSidePanel_header__34ruN",productType:"NavSidePanel_productType__Ihwbs",closeIcon:"NavSidePanel_closeIcon__3VYMQ",linksContainer:"NavSidePanel_linksContainer__3Mohh",showSidePanel:"NavSidePanel_showSidePanel__1Co31"}},,function(e,t,n){"use strict";var r=n(23),a=n(2),c=function(){return window.innerWidth};t.a=function(){var e=Object(a.useState)({currWidth:c(),prevWidth:c()}),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=null,t=function(){clearTimeout(e),e=setTimeout((function(){o((function(e){return{currWidth:c(),prevWidth:e.currWidth}}))}),100)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),n}},,function(e,t,n){e.exports={categorySidePanel:"CategorySidePanel_categorySidePanel__14rSY",linksContainer:"CategorySidePanel_linksContainer__2LAxY",showSidePanel:"CategorySidePanel_showSidePanel__1uBO2",headElement:"CategorySidePanel_headElement__-1-Dh",content:"CategorySidePanel_content__22GNw"}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){switch(t){case"lower-price":e=e.sort((function(e,t){return+e.price-+t.price}));break;case"higher-price":e=e.sort((function(e,t){return+t.price-+e.price}));break;default:e=e.sort((function(e,t){var n=e.title.toUpperCase(),r=t.title.toUpperCase();return n<r?-1:n>r?1:0}))}return e}},,function(e,t,n){e.exports={cartIconWrapper:"Cart_cartIconWrapper__3LNud",cartIcon:"Cart_cartIcon__aB2CM",cartItemsCounterWrapper:"Cart_cartItemsCounterWrapper__26U9m",cartItemsCounter:"Cart_cartItemsCounter__3H1bi"}},function(e,t,n){e.exports={wrapper:"LoadingSpinner_wrapper__7Ti9f",spinner:"LoadingSpinner_spinner__r0agJ",dot:"LoadingSpinner_dot__15gmN",animDot:"LoadingSpinner_animDot__2EC7b",dot1:"LoadingSpinner_dot1__TfnHP",dot2:"LoadingSpinner_dot2__3Mlr1",dot3:"LoadingSpinner_dot3__3lg4M",dot4:"LoadingSpinner_dot4__rB6PF",dot5:"LoadingSpinner_dot5__Jpcru",dot6:"LoadingSpinner_dot6__3HsTz",dot7:"LoadingSpinner_dot7__3fcdC",dot8:"LoadingSpinner_dot8__2D71U",dot9:"LoadingSpinner_dot9__1-2Du",dot10:"LoadingSpinner_dot10__3h-8H",dot11:"LoadingSpinner_dot11__1Sm7B",dot12:"LoadingSpinner_dot12__1lVzl"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(19),a=n(23),c=n(2),o=n.n(c),i=n(1),s=o.a.createContext({productsInCart:[],pricing:{nominalPrice:0,actualPrice:0,totalDiscount:0},paymentMethod:"",currentPaymentStep:0,addToCart:function(){},removeFromCart:function(){},choosePaymentMethod:function(){},handlePaymentStep:function(){}}),u=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),o=n[0],u=n[1],d=Object(c.useState)(""),l=Object(a.a)(d,2),b=l[0],p=l[1],f=Object(c.useState)(2),j=Object(a.a)(f,2),h=j[0],O=j[1],g=Object(c.useState)({nominalPrice:0,actualPrice:0,totalDiscount:0}),x=Object(a.a)(g,2),v=x[0],m=x[1],_={productsInCart:o,pricing:v,paymentMethod:b,currentPaymentStep:h,addToCart:function(e){-1===o.findIndex((function(t){return t.id===e.id}))&&(u((function(t){return[].concat(Object(r.a)(t),[e])})),m((function(t){return{totalDiscount:0,nominalPrice:Number((t.nominalPrice+Number(e.price)).toFixed(2)),actualPrice:Number((t.nominalPrice+Number(e.price)).toFixed(2))}})))},removeFromCart:function(e){var t=Object(r.a)(o),n=t.findIndex((function(t){return t.id===e}));n>-1&&(m((function(e){return{totalDiscount:0,nominalPrice:Number((e.nominalPrice-Number(t[n].price)).toFixed(2)),actualPrice:Number((e.nominalPrice-Number(t[n].price)).toFixed(2))}})),t.splice(n,1),u(Object(r.a)(t)))},choosePaymentMethod:function(e){p(e)},handlePaymentStep:function(e){switch(e){case"next":O((function(e){return++e}));break;case"back":O((function(e){return--e}))}}};return Object(i.jsx)(s.Provider,{value:_,children:e.children})};t.b=s},,function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return p}));var r=n(23),a=n(6),c=n.n(a),o=n(13),i=n(2),s=n.n(i),u=n(10),d=n(1),l=s.a.createContext({currentUser:null,signUp:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signIn:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signOut:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});function b(){return Object(i.useContext)(l)}var p=function(e){var t=e.children,n=Object(i.useState)(),a=Object(r.a)(n,2),c=a[0],o=a[1],s=Object(i.useState)(!0),b=Object(r.a)(s,2),p=b[0],f=b[1];Object(i.useEffect)((function(){return u.a.onAuthStateChanged((function(e){o(e),f(!1)}))}),[]);var j={currentUser:c,signUp:function(e,t){return u.a.createUserWithEmailAndPassword(e,t)},signIn:function(e,t){return u.a.signInWithEmailAndPassword(e,t)},signOut:function(){return u.a.signOut()}};return Object(d.jsx)(l.Provider,{value:j,children:!p&&t})}},,,,function(e,t,n){e.exports={navComponent:"NavComponent_navComponent__1TAg2",arrow:"NavComponent_arrow__2C6hE",content:"NavComponent_content__2UaJk"}},,,,,function(e,t,n){e.exports={navIconWrapper:"Navigation_navIconWrapper__3uCoA",navIcon:"Navigation_navIcon__2SE8w"}},function(e,t,n){e.exports={searchWrapper:"Searcher_searchWrapper__3q5LK",searchIcon:"Searcher_searchIcon__rBeEM"}},function(e,t,n){e.exports={userIconWrapper:"User_userIconWrapper__3SDOM",userIcon:"User_userIcon__1uMBc"}},function(e,t,n){e.exports={logoWrapper:"Logo_logoWrapper__2IZby",logo:"Logo_logo__3mC7m"}},function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return _})),n.d(t,"l",(function(){return w}));var r=n(19),a=n(6),c=n.n(a),o=n(13),i=n(8),s=n(10),u=n(33),d={filteredEbooks:[],filters:{categoryFilter:"",promotion:""},showFilterOptions:!1,showCategoriesPanel:!1,error:null,status:"idle",currentRequestId:void 0},l=Object(i.b)("ebooks/getDataStatus",function(){var e=Object(o.a)(c.a.mark((function e(t,n){var r,a,o,i,d,l,b,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.requestId,o=r().catalog,i=o.currentRequestId,d=o.status,l=r().catalog.filters,"pending"===d&&a===i){e.next=5;break}return e.abrupt("return");case 5:if(b=[],"Wszystkie Ebooki"!==l.categoryFilter){e.next=12;break}return e.next=9,s.b.collection("ebooks").get();case 9:p=e.sent,e.next=15;break;case 12:return e.next=14,s.b.collection("ebooks").where("category","==",l.categoryFilter).get();case 14:p=e.sent;case 15:return e.next=17,p.forEach((function(e){b.push(e.data())}));case 17:return b=Object(u.a)(b,"alphabetical"),e.abrupt("return",b);case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(i.c)({name:"catalog",initialState:d,reducers:{setShowFilterOptions:function(e){e.showFilterOptions=!e.showFilterOptions},setShowCategoriesPanel:function(e){e.showCategoriesPanel=!e.showCategoriesPanel},setFilters:function(e,t){e.filters[t.payload.filter]=t.payload.value},sortEbooks:function(e,t){e.filteredEbooks=Object(u.a)(e.filteredEbooks,t.payload)}},extraReducers:function(e){e.addCase(l.pending,(function(e,t){"idle"===e.status&&(e.filteredEbooks=[],e.status="pending",e.currentRequestId=t.meta.requestId)})),e.addCase(l.fulfilled,(function(e,t){var n,a=t.meta.requestId;"pending"===e.status&&e.currentRequestId===a&&((n=e.filteredEbooks).push.apply(n,Object(r.a)(t.payload)),e.status="idle",e.currentRequestId=void 0)})),e.addCase(l.rejected,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.status="idle",e.error=t.error,e.currentRequestId=void 0)}))}}),p=function(e){return e.catalog.showFilterOptions},f=function(e){return e.catalog.showCategoriesPanel},j=function(e){return e.catalog.filteredEbooks},h=function(e){return e.catalog.filters},O=function(e){return e.catalog.error},g=function(e){return e.container.categories},x=b.actions,v=x.setShowFilterOptions,m=x.setShowCategoriesPanel,_=x.setFilters,w=x.sortEbooks;t.a=b.reducer},function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return O}));var r=n(6),a=n.n(r),c=n(13),o=n(8),i=n(10),s={showSidePanel:!1,product:null,sidePanelContent:{title:"",subtitle:"",body:""},error:null,status:"idle",currentRequestId:void 0},u=Object(o.b)("ebook/getDataStatus",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,s,u,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,c=n.requestId,o=r().productPage,s=o.currentRequestId,"pending"===o.status&&c===s){e.next=4;break}return e.abrupt("return");case 4:return u=null,e.next=7,i.b.collection("ebooks").where("id","==",t.id).get();case 7:return d=e.sent,e.next=10,d.forEach((function(e){u=e.data()}));case 10:return e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)({name:"productPage",initialState:s,reducers:{setShowSidePanel:function(e){e.showSidePanel=!e.showSidePanel},setSidePanelContent:function(e,t){e.sidePanelContent=t.payload}},extraReducers:function(e){e.addCase(u.pending,(function(e,t){"idle"===e.status&&(e.product=null,e.status="pending",e.currentRequestId=t.meta.requestId)})),e.addCase(u.fulfilled,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.product=t.payload,e.status="idle",e.currentRequestId=void 0)})),e.addCase(u.rejected,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.status="idle",e.error=t.error,e.currentRequestId=void 0)}))}}),l=function(e){return e.productPage.product},b=function(e){return e.productPage.showSidePanel},p=function(e){return e.productPage.sidePanelContent},f=function(e){return e.productPage.error},j=d.actions,h=j.setShowSidePanel,O=j.setSidePanelContent;t.a=d.reducer},function(e,t,n){"use strict";var r=n(1);t.a=function(e){var t=e.width,n=void 0===t?32:t,a=e.height,c=void 0===a?32:a,o=e.strokeColor,i=void 0===o?"currentcolor":o;return Object(r.jsxs)("svg",{id:"i-cart",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:n,height:c,fill:"none",stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[Object(r.jsx)("path",{d:"M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"}),Object(r.jsx)("circle",{cx:"25",cy:"27",r:"2"}),Object(r.jsx)("circle",{cx:"12",cy:"27",r:"2"})]})}},function(e,t,n){"use strict";var r=n(1);t.a=function(e){var t=e.strokeWidth,n=void 0===t?2:t,a=e.strokeColor,c=void 0===a?"currentcolor":a;return Object(r.jsx)("svg",{id:"i-close",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"100%",height:"100%",fill:"none",stroke:c,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:n,children:Object(r.jsx)("path",{d:"M2 30 L30 2 M30 30 L2 2"})})}},function(e,t,n){"use strict";var r=n(1);t.a=function(){return Object(r.jsxs)("svg",{id:"i-search",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"100%",height:"100%",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[Object(r.jsx)("circle",{cx:"14",cy:"14",r:"12"}),Object(r.jsx)("path",{d:"M23 23 L30 30"})]})}},function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return p}));var r=n(19),a=n(6),c=n.n(a),o=n(13),i=n(8),s=n(10),u=Object(i.b)("sliderEbooks/getDataStatus",function(){var e=Object(o.a)(c.a.mark((function e(t,n){var r,a,o,i,u,d,l,b,p,f,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.requestId,o=r().slider,i=o.currentRequestId,"pending"===o.status&&a===i){e.next=4;break}return e.abrupt("return");case 4:u=[],d=[],0;case 7:if(!(d.length<t.productsCount)){e.next=17;break}if(b=Math.floor(49*Math.random()+1),!d.includes(b)){e.next=13;break}return e.abrupt("continue",14);case 13:d.push(b);case 14:e.next=7;break;case 17:p=0;case 18:if(!(p<=t.productsCount)){e.next=35;break}if(f=p+10,j=d.slice(p,f),"Wszystkie Ebooki"!==t.category){e.next=27;break}return e.next=24,s.b.collection("ebooks").where("id","in",j).get();case 24:l=e.sent,e.next=30;break;case 27:return e.next=29,s.b.collection("ebooks").where("category","==",t.category).where("id","in",j).get();case 29:l=e.sent;case 30:return e.next=32,l.forEach((function(e){u.push(e.data())}));case 32:p+=10,e.next=18;break;case 35:return e.abrupt("return",u);case 36:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d={products:[],status:"idle",currentRequestId:void 0,error:null},l=Object(i.c)({name:"slider",initialState:d,reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e,t){"idle"===e.status&&(e.products=[],e.status="pending",e.currentRequestId=t.meta.requestId)})),e.addCase(u.fulfilled,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.products=Object(r.a)(t.payload),e.status="idle",e.currentRequestId=void 0)})),e.addCase(u.rejected,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.status="idle",e.error=t.error,e.currentRequestId=void 0)}))}}),b=function(e){return e.slider.products},p=function(e){return e.slider.error};t.a=l.reducer},,function(e,t,n){e.exports={header:"Header_header__Tjjty"}},function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__3ym9l"}},,function(e,t,n){},function(e,t,n){e.exports={mainPage:"Main_mainPage__2XQvb"}},function(e,t,n){e.exports={app:"App_app__1FJVQ"}},,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(41),o=n.n(c),i=(n(70),n(18)),s=n(7),u=n(11),d=n(19),l=n(6),b=n.n(l),p=n(13),f=n(8),j=n(10),h={categories:[{category:"",popular:""}],status:"idle",currentRequestId:void 0,error:null},O=Object(f.b)("categories/getCategoriesStatus",function(){var e=Object(p.a)(b.a.mark((function e(t,n){var r,a,c,o,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.requestId,c=r().container,o=c.currentRequestId,"pending"===c.status&&a===o){e.next=4;break}return e.abrupt("return");case 4:return i=[],e.next=7,j.b.collection("categories").get();case 7:return s=e.sent,e.next=10,s.forEach((function(e){i.push(e.data())}));case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(f.c)({name:"container",initialState:h,reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e,t){"idle"===e.status&&(e.categories=[],e.status="pending",e.currentRequestId=t.meta.requestId)})),e.addCase(O.fulfilled,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.categories=Object(d.a)(t.payload),e.status="idle",e.currentRequestId=void 0)})),e.addCase(O.rejected,(function(e,t){var n=t.meta.requestId;"pending"===e.status&&e.currentRequestId===n&&(e.status="idle",e.error=t.error,e.currentRequestId=void 0)}))}}).reducer,x=n(59),v=n.n(x),m=n(37),_=n(54),w=n(35),k=n.n(w),S=n(1),C=k.a.cartItemsCounter,I=k.a.cartItemsCounterWrapper,y=k.a.cartIcon,P=k.a.cartIconWrapper;var N=function(){var e=Object(r.useContext)(m.b);return Object(S.jsx)("div",{className:P,children:Object(S.jsxs)(i.b,{to:"/cart",className:y,children:[Object(S.jsx)(_.a,{}),Object(S.jsx)("div",{className:I,children:Object(S.jsx)("span",{className:C,children:e.productsInCart.length})})]})})},q=Object(f.c)({name:"navigation",initialState:{isVisibleNavSP:!1,isVisibleCatSP:!1},reducers:{showNavSidePanel:function(e){e.isVisibleNavSP=!e.isVisibleNavSP},showCatSidePanel:function(e){e.isVisibleCatSP=!e.isVisibleCatSP}}}),L=function(e){return e.navigation.isVisibleNavSP},R=function(e){return e.navigation.isVisibleCatSP},W=function(e){return e.container.categories},E=function(e){return e.container.error},F=q.actions,D=F.showNavSidePanel,M=F.showCatSidePanel,B=q.reducer,T=n(28),z=n(43),U=n.n(z),V=U.a.arrow,A=U.a.content,K=U.a.navComponent,H=function(e){var t=e.name,n=e.onClick,r=e.onClickDesktop,a=e.extended,c=e.transDelay,o=Object(T.a)().currWidth;return Object(S.jsx)(i.b,{to:"/catalog/"+t,className:"".concat(K," ").concat(a?V:null),style:{transitionDelay:"".concat(c,"ms")},onClick:o<950?n:r,children:Object(S.jsx)("div",{className:A,children:t})})},J=n(60),Z=n.n(J).a.backdrop,Q=function(){return Object(S.jsx)("div",{className:Z})},Y=n(55),G=n(26),X=n.n(G),$=X.a.header,ee=X.a.linksContainer,te=X.a.productType,ne=X.a.sidePanel,re=X.a.showSidePanel,ae=X.a.closeIcon;var ce=function(){var e=Object(u.b)(L),t=Object(u.b)(R),n=Object(u.a)();return Object(S.jsxs)(S.Fragment,{children:[e?Object(S.jsx)(Q,{}):null,Object(S.jsxs)("nav",{className:"".concat(ne," ").concat(e?re:null),children:[Object(S.jsxs)("div",{className:$,children:[Object(S.jsx)("div",{className:te,children:"Ebooki"}),Object(S.jsx)("div",{className:ae,onClick:function(){return n(D())},children:Object(S.jsx)(Y.a,{})})]}),Object(S.jsxs)("div",{className:"".concat(ee),children:[Object(S.jsx)(H,{name:"Kategorie",extended:!0,onClick:function(){n(M()),n(D())},onClickDesktop:function(){return t?null:n(M())},transDelay:100}),Object(S.jsx)(H,{name:"Wszystkie Ebooki",onClick:function(){n(D())},transDelay:200}),Object(S.jsx)(H,{name:"Promocje",onClick:function(){n(D())},transDelay:300}),Object(S.jsx)(H,{name:"Nowo\u015bci",onClick:function(){n(D())},transDelay:400}),Object(S.jsx)(H,{name:"Top 100",onClick:function(){n(D())},transDelay:500}),Object(S.jsx)(H,{name:"Darmowe ebooki",onClick:function(){n(D())},transDelay:600})]})]})]})},oe=n(22),ie=n(30),se=n.n(ie),ue=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,87))})),de=se.a.categorySidePanel,le=se.a.linksContainer,be=se.a.showSidePanel,pe=se.a.headElement,fe=se.a.content;var je=function(){var e=Object(u.b)(R),t=Object(u.b)(W),n=Object(u.b)(E),a=Object(u.a)(),c=Object(T.a)().currWidth;return Object(r.useEffect)((function(){e&&c>=950&&window.addEventListener("click",(function(){return a(M())}),{once:!0})}),[e,a]),Object(S.jsxs)(S.Fragment,{children:[e&&c<950?Object(S.jsx)(Q,{}):null,Object(S.jsxs)("div",{className:"".concat(de," ").concat(e?be:null),children:[Object(S.jsx)("div",{className:pe,onClick:function(){return a(M())},children:Object(S.jsx)("div",{className:fe,children:"Powr\xf3t"})}),Object(S.jsx)("div",{className:le,children:n?Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)(oe.a,{}),children:Object(S.jsx)(ue,{})}):t.map((function(e,t){return Object(S.jsx)(H,{name:e.category,onClick:function(){return a(M())},transDelay:100*(t+1)},e.category)}))})]})]})},he=function(){return Object(S.jsx)("svg",{id:"i-menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:Object(S.jsx)("path",{d:"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"})})},Oe=n(48),ge=n.n(Oe);var xe=function(){var e=Object(u.a)(),t=ge.a.navIcon,n=ge.a.navIconWrapper;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:n,onClick:function(){return e(D())},children:Object(S.jsx)("div",{className:t,children:Object(S.jsx)(he,{})})}),Object(S.jsx)(ce,{}),Object(S.jsx)(je,{})]})},ve=n(24),me=n(56),_e=n(49),we=n.n(_e),ke=Object(r.lazy)((function(){return n.e(20).then(n.bind(null,297))})),Se=we.a.searchIcon,Ce=we.a.searchWrapper;var Ie=function(){var e=Object(u.a)(),t=Object(u.b)(ve.f),n=Object(T.a)(),a=n.currWidth,c=n.prevWidth;return Object(r.useEffect)((function(){a<950&&c>=950&&e(Object(ve.i)(!1)),a>=950&&e(Object(ve.i)(!0))}),[a,c,e]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:Ce,onClick:function(){e(Object(ve.i)())},children:Object(S.jsx)("div",{className:Se,children:Object(S.jsx)(me.a,{})})}),t?Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)(oe.a,{}),children:Object(S.jsx)(ke,{})}):null]})},ye=function(){return Object(S.jsx)("svg",{id:"i-user",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:Object(S.jsx)("path",{d:"M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"})})},Pe=n(50),Ne=n.n(Pe),qe=Ne.a.userIcon,Le=Ne.a.userIconWrapper;var Re=function(){return Object(S.jsx)("div",{className:Le,children:Object(S.jsx)(i.b,{to:"/sign-page",className:qe,children:Object(S.jsx)(ye,{})})})},We=n(51),Ee=n.n(We),Fe=Ee.a.logo,De=Ee.a.logoWrapper;var Me=function(){return Object(S.jsx)("div",{className:De,children:Object(S.jsx)(i.b,{className:Fe,to:"/",children:"Wob\xadClone"})})};var Be=function(){var e=Object(u.a)();return Object(r.useEffect)((function(){e(O(""))}),[e]),Object(S.jsxs)("header",{className:v.a.header,children:[Object(S.jsx)(xe,{}),Object(S.jsx)(Me,{}),Object(S.jsx)(Ie,{}),Object(S.jsx)(Re,{}),Object(S.jsx)(N,{})]})},Te=n(27),ze=n(61),Ue=n(62),Ve=n.n(Ue);Object(ze.a)(Ve.a);var Ae=Object(r.lazy)((function(){return n.e(32).then(n.bind(null,300))})),Ke=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)(oe.a,{}),children:Object(S.jsx)(Ae,{})})})},He=n(63),Je=n.n(He),Ze=a.a.lazy((function(){return n.e(19).then(n.bind(null,298))})),Qe=a.a.lazy((function(){return n.e(15).then(n.bind(null,299))})),Ye=Je.a.mainPage;var Ge=function(){return Object(S.jsx)("main",{className:Ye,children:Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)(oe.a,{}),children:Object(S.jsxs)(s.d,{children:[Object(S.jsx)(s.b,{path:"/catalog/:tag",exact:!0,children:Object(S.jsx)(Ze,{})}),Object(S.jsx)(s.b,{path:"/ebook/:tags",exact:!0,render:function(e){return Object(S.jsx)(Qe,Object(Te.a)({},e))}}),Object(S.jsx)(s.b,{path:"/",children:Object(S.jsx)(Ke,{})})]})})})},Xe=n(65),$e=n(39),et=function(e){var t=e.component,n=Object(Xe.a)(e,["component"]),r=Object($e.b)().currentUser;return Object(S.jsx)(s.b,Object(Te.a)(Object(Te.a)({},n),{},{render:function(e){return r?Object(S.jsx)(t,Object(Te.a)({},e)):Object(S.jsx)(s.a,{to:"/sign-page"})}}))},tt=n(64),nt=n.n(tt),rt=a.a.lazy((function(){return n.e(23).then(n.bind(null,294))})),at=a.a.lazy((function(){return n.e(17).then(n.bind(null,295))})),ct=a.a.lazy((function(){return n.e(25).then(n.bind(null,296))}));var ot=function(){return Object(S.jsx)(i.a,{children:Object(S.jsx)("div",{className:nt.a.app,children:Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)(oe.a,{}),children:Object(S.jsxs)(s.d,{children:[Object(S.jsx)(s.b,{path:"/sign-page",children:Object(S.jsx)(rt,{})}),Object(S.jsx)(s.b,{path:"/cart",exact:!0,children:Object(S.jsx)(at,{})}),Object(S.jsx)(et,{path:"/cart/payment",component:ct}),Object(S.jsxs)(s.b,{path:"/",children:[Object(S.jsx)(Be,{}),Object(S.jsx)(Ge,{})]})]})})})})},it=n(21),st=n(57),ut=n(52),dt=n(53),lt=Object(f.c)({name:"productCard",initialState:{productTags:{title:"",authorFirstName:"",authorLastName:""}},reducers:{setProductTags:function(e,t){e.productTags.title=t.payload.title,e.productTags.authorFirstName=t.payload.authorFirstName,e.productTags.authorLastName=t.payload.authorLastName}}}),bt=(lt.actions.setProductTags,lt.reducer),pt=Object(it.b)({container:g,navigation:B,slider:st.a,searcher:ve.a,catalog:ut.a,productPage:dt.a,productCard:bt}),ft=Object(f.a)({reducer:pt}),jt=n(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(S.jsxs)(a.a.StrictMode,{children:[Object(S.jsx)($e.a,{children:Object(S.jsx)(jt.a,{store:ft,children:Object(S.jsx)(m.a,{children:Object(S.jsx)(ot,{})})})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[80,11,12]]]);
//# sourceMappingURL=main.42611295.chunk.js.map