(this["webpackJsonpwob-clone"]=this["webpackJsonpwob-clone"]||[]).push([[8],{275:function(e,t,c){e.exports={wrapper:"ActiveFilters_wrapper__67ULm",btnFiltersPanel:"ActiveFilters_btnFiltersPanel__14cki",activeFiltersList:"ActiveFilters_activeFiltersList__3d2zz",activeFilter:"ActiveFilters_activeFilter__3jX5m",content:"ActiveFilters_content__9g4iK",removeBtn:"ActiveFilters_removeBtn__3MzXm",productType:"ActiveFilters_productType__rU51h"}},276:function(e,t,c){e.exports={flexVCenter:"FilterOptions_flexVCenter__29gsE",wrapper:"FilterOptions_wrapper__pyvVN",show:"FilterOptions_show__BDAgZ",title:"FilterOptions_title__195qh",panelHead:"FilterOptions_panelHead__3-Fux",titleWrap:"FilterOptions_titleWrap__6VRwX",arrow:"FilterOptions_arrow__1d_ga",clearFiltersBtn:"FilterOptions_clearFiltersBtn__3AqRu",optionsGroup:"FilterOptions_optionsGroup__1wNmg",shiftBtn:"FilterOptions_shiftBtn__1ANpv",shiftBtnActive:"FilterOptions_shiftBtnActive__2EkSL",filtersGroup:"FilterOptions_filtersGroup__1hFbu",filter:"FilterOptions_filter__3JWRj",showCategoryListBtn:"FilterOptions_showCategoryListBtn__nRnhI"}},277:function(e,t,c){e.exports={wrapper:"CategoriesList_wrapper__3gzEH",show:"CategoriesList_show__2_0GK",title:"CategoriesList_title__2i5S7",panelHead:"CategoriesList_panelHead__1cVe5",titleWrap:"CategoriesList_titleWrap__1jQF3",arrow:"CategoriesList_arrow__3xhjN",clearFiltersBtn:"CategoriesList_clearFiltersBtn__1ETO2",categoryList:"CategoriesList_categoryList__21z7u",catListItemWarp:"CategoriesList_catListItemWarp__3c89r",catListItemLink:"CategoriesList_catListItemLink__7oe5q"}},278:function(e,t,c){e.exports={paginationWrapper:"Pagination_paginationWrapper__3p3Pj",active:"Pagination_active__7oAuY",dots:"Pagination_dots__brYZM"}},279:function(e,t,c){e.exports={wrapper:"Catalog_wrapper__Gld0-",containerCardsWrapper:"Catalog_containerCardsWrapper__1EmNa",containerCards:"Catalog_containerCards__2Z0uA"}},280:function(e,t,c){"use strict";c.r(t);var r=c(67),n=c(65),a=c(12),i=c(2),s=c(13),l=c(16),o=c(64),j=c(69),b=c(9),u=c(15),O=c(53),d=c(1),p=function(){return Object(d.jsx)("svg",{id:"i-options",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"20",height:"20",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:Object(d.jsx)("path",{d:"M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29"})})},h=c(275),_=c.n(h),x=_.a.activeFiltersList,f=_.a.activeFilter,g=_.a.btnFiltersPanel,m=_.a.content,v=_.a.productType,N=_.a.removeBtn,C=_.a.wrapper,w=function(){var e=Object(s.a)(),t=Object(s.b)(o.d);Object(b.h)().search;return Object(d.jsxs)("aside",{className:C,children:[Object(d.jsx)("h2",{className:v,children:"Ebooki"}),Object(d.jsxs)("button",{className:g,onClick:function(){return e(Object(o.i)())},children:[Object(d.jsx)(p,{}),Object(d.jsx)("span",{children:"Filtry"})]}),Object(d.jsx)("ul",{className:x,children:Object.entries(t).map((function(c){var r=c[0],n=c[1];return n&&Object(d.jsx)("li",{className:f,children:Object(d.jsxs)(u.b,{to:{pathname:"".concat("category"===r?"/catalog/Wszystkie Ebooki":t.category)},onClick:function(){return e(Object(o.g)({filter:r,value:""}))},children:[Object(d.jsx)("span",{className:m,children:"category"===r?n:r}),Object(d.jsx)("button",{className:N,children:Object(d.jsx)(O.a,{strokeWidth:3,strokeColor:"#CF2942"})})]})},r)}))})]})},y=c(48),F=c(276),k=c.n(F),L=k.a.arrow,W=k.a.clearFiltersBtn,B=k.a.filter,A=k.a.filtersGroup,z=k.a.flexVCenter,P=k.a.optionsGroup,E=k.a.panelHead,M=k.a.shiftBtn,G=k.a.shiftBtnActive,H=k.a.show,I=k.a.showCategoryListBtn,V=k.a.title,R=k.a.titleWrap,S=k.a.wrapper,T=function(){var e=Object(l.b)("").data,t=void 0===e?[]:e,c=Object(s.a)(),r=Object(s.b)(o.f),n=Object(s.b)(o.d);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"".concat(E," ").concat(r?H:null),children:[Object(d.jsxs)("div",{className:R,onClick:function(){return c(Object(o.i)())},children:[Object(d.jsx)("div",{className:L,children:Object(d.jsx)(y.a,{})}),Object(d.jsx)("h2",{children:"Filtry i kategorie"})]}),Object(d.jsx)("button",{className:W,children:"Wyczy\u015b\u0107 filtry"})]}),Object(d.jsxs)("div",{className:"".concat(S," ").concat(r?H:null),children:[Object(d.jsxs)("div",{className:"".concat(P," ").concat(z),children:[Object(d.jsx)("h3",{className:V,children:"Tylko w promocji"}),Object(d.jsx)("button",{className:"".concat(M," ").concat("true"===n.promotion?G:null),onClick:function(){return c(Object(o.g)({filter:"promotion",value:"true"===n.promotion?"":"true"}))}})]}),Object(d.jsxs)("div",{className:P,children:[Object(d.jsx)("h3",{className:V,children:"Sortuj wg."}),Object(d.jsxs)("ul",{className:A,children:[Object(d.jsx)("li",{className:B,children:Object(d.jsx)(u.b,{to:"?sort=lower-price",children:Object(d.jsx)("span",{children:"Najni\u017csza cena"})})}),Object(d.jsx)("li",{className:B,children:Object(d.jsx)(u.b,{to:"?sort=higher-price",children:Object(d.jsx)("span",{children:"Nawy\u017csza cena"})})}),Object(d.jsx)("li",{className:B,children:Object(d.jsx)(u.b,{to:"?sort=oldest",children:Object(d.jsx)("span",{children:"Najstarsze"})})})]})]}),Object(d.jsxs)("div",{className:P,children:[Object(d.jsx)("h3",{className:V,children:"Polecane"}),Object(d.jsx)("button",{className:I,onClick:function(){return c(Object(o.h)())},children:"Lista"}),Object(d.jsx)("ul",{className:A,children:t.map((function(e){return e.popular&&Object(d.jsx)("li",{className:B,children:Object(d.jsx)(u.b,{to:"/catalog/"+e.category,onClick:function(){return c(Object(o.g)({filter:"category",value:e.category}))},children:Object(d.jsx)("span",{children:e.category})})},e.category)}))})]})]})]})},q=c(277),J=c.n(q),K=J.a.arrow,U=J.a.categoryList,X=J.a.catListItemLink,Z=J.a.catListItemWarp,Y=J.a.clearFiltersBtn,D=J.a.panelHead,Q=J.a.show,$=J.a.titleWrap,ee=J.a.wrapper,te=function(){var e=Object(l.b)("").data,t=void 0===e?[]:e,c=Object(s.a)(),r=Object(s.b)(o.e)?Q:null;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"".concat(D," ").concat(r),children:[Object(d.jsxs)("div",{className:$,onClick:function(){return c(Object(o.h)())},children:[Object(d.jsx)("div",{className:K,children:Object(d.jsx)(y.a,{})}),Object(d.jsx)("h2",{children:"Kategorie"})]}),Object(d.jsx)("button",{className:Y,children:"Wyczy\u015b\u0107 filtry"})]}),Object(d.jsxs)("div",{className:"".concat(ee," ").concat(r),children:[Object(d.jsxs)("ul",{className:U,children:[Object(d.jsx)("li",{className:"".concat(Z),children:Object(d.jsx)("h3",{children:"Popularne kategorie"})}),t.map((function(e){return e.popular&&Object(d.jsx)("li",{className:"".concat(Z," ").concat(r),children:Object(d.jsx)(u.b,{to:"/catalog/"+e.category,className:X,onClick:function(){return c(Object(o.g)({filter:"category",value:e.category}))},children:e.category})},e.category)}))]}),Object(d.jsxs)("ul",{className:U,children:[Object(d.jsx)("li",{className:Z,children:Object(d.jsx)("h3",{children:"Wszystkie kategorie"})}),t.map((function(e){return Object(d.jsx)("li",{className:"".concat(Z," ").concat(r),children:Object(d.jsx)(u.b,{to:"".concat(e.category),className:X,onClick:function(){return c(Object(o.g)({filter:"category",value:e.category}))},children:e.category})},e.category)}))]})]})]})},ce=c(50),re=c(278),ne=c.n(re),ae=ne.a.active,ie=ne.a.dots,se=ne.a.paginationWrapper,le=function(e){var t=e.pagesCount,c=e.page,r=e.setPage,n=Object(i.useRef)([]),a=function(e){r(1*e.target.innerText)};return Object(d.jsxs)("ul",{className:se,children:[Object(d.jsx)("li",{onClick:function(){return c<=1?null:r((function(e){return--e}))},children:Object(d.jsx)(y.a,{})}),c>3?Object(d.jsx)("li",{onClick:function(){return r(1)},ref:function(e){return n.current[0]=e},children:Object(d.jsx)("span",{children:"1"})}):null,c>3?Object(d.jsx)("li",{className:ie,children:Object(d.jsx)("span",{children:"..."})}):null,c>2?Object(d.jsx)("li",{onClick:a,ref:function(e){return n.current[1]=e},children:Object(d.jsx)("span",{children:c-2})}):null,c>1?Object(d.jsx)("li",{onClick:a,ref:function(e){return n.current[2]=e},children:Object(d.jsx)("span",{children:c-1})}):null,Object(d.jsx)("li",{className:ae,onClick:a,ref:function(e){return n.current[3]=e},children:Object(d.jsx)("span",{children:c})}),t-c>=1?Object(d.jsx)("li",{onClick:a,ref:function(e){return n.current[4]=e},children:Object(d.jsx)("span",{children:c+1})}):null,t-c>2?Object(d.jsx)("li",{onClick:a,ref:function(e){return n.current[5]=e},children:Object(d.jsx)("span",{children:c+2})}):null,t-c>3?Object(d.jsx)("li",{className:ie,children:Object(d.jsx)("span",{children:"..."})}):null,t-c>1?Object(d.jsx)("li",{onClick:function(){return r(t)},ref:function(e){return n.current[6]=e},children:Object(d.jsx)("span",{children:t})}):null,Object(d.jsx)("li",{onClick:function(){return c>=t?null:r((function(e){return++e}))},children:Object(d.jsx)(ce.a,{})})]})},oe=c(279),je=c.n(oe),be=je.a.containerCards,ue=je.a.containerCardsWrapper,Oe=je.a.wrapper,de=function(e){var t,c,r=e.location,b=Object(l.c)("").data,u=void 0===b?[]:b,O=Object(l.d)("").data,p=Object(i.useState)(1),h=Object(a.a)(p,2),_=h[0],x=h[1],f=Object(s.a)(),g=Object(s.b)(o.c),m=Object(s.b)(o.d),v=r.search,N=null!==(t=null===(c=r.state)||void 0===c?void 0:c.tag)&&void 0!==t?t:"",C=Math.ceil(g.length/4)||0,y=g.slice(4*_-4,4*_)||[];return Object(i.useEffect)((function(){f(Object(o.g)({filter:"category",value:N}))}),[N,f]),Object(i.useEffect)((function(){O&&f(Object(o.b)({products:u,promotions:O}))}),[m,u,O,f]),Object(i.useEffect)((function(){var e,t=new URLSearchParams(v),c=Object(n.a)(t.entries());try{for(c.s();!(e=c.n()).done;){var r=e.value;f(Object(o.j)(r[1]))}}catch(a){c.e(a)}finally{c.f()}}),[v,f]),Object(d.jsxs)("div",{className:Oe,children:[Object(d.jsx)(w,{}),Object(d.jsxs)("div",{className:ue,children:[Object(d.jsx)("ul",{className:be,children:y.length>0&&y.map((function(e){return Object(d.jsx)(j.a,{ebook:e,cardStyleVersion:"full"},e.id)}))}),y.length&&Object(d.jsx)(le,{pagesCount:C,page:_,setPage:x})]}),Object(d.jsx)(T,{}),Object(d.jsx)(te,{})]})};t.default=function(e){var t=e.location;return Object(d.jsx)(r.a,{children:Object(d.jsx)(de,{location:t})})}}}]);
//# sourceMappingURL=8.6ecab116.chunk.js.map