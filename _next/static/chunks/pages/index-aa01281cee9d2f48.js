(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1760)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var n=r(5893),a=r(9352),c=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},s=function(e){var t=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(a.N$g,{}),c(t)]})}},3593:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var n=r(5893),a=r(7294),c=r(1891);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.forwardRef((function(e,t){var r=e.children,a=e.src,l=e.alt,o=i(e,["children","src","alt"]),u=(0,c.O)()+a;return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({src:u,alt:l},o,{ref:t,children:r}))}));l.displayName="Image"},6965:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(5893),a=r(3593),c=r(4929),s=r(4759),i=function(){return(0,n.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 rounded-lg bg-zinc-500",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(a.E,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Gaku Ogasawara"})]}),(0,n.jsxs)("p",{className:"text-primary-1",children:["1996\u5e74\u751f\u307e\u308c\u306e26\u6b73",(0,n.jsx)("br",{}),"2022\u5e744\u6708\u304b\u3089\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5b66\u7fd2\u958b\u59cb\u3057\u307e\u3057\u305f\u3002",(0,n.jsx)("br",{}),"\u73fe\u5728JavaScript/TypeScript/React/Next.js/Git\u306a\u3069\u306e\u5b66\u7fd2\u3092\u3057\u3066\u304a\u308a\u307e\u3059\u3002"]}),(0,n.jsx)("div",{className:"flex gap-4",children:s.e.map((function(e){var t=e.href,r=e.icon,a=e.label;return(0,n.jsx)(c.r,{href:t,passHref:!0,children:(0,n.jsx)("a",{className:"text-primary-1","aria-label":a,children:r})},t)}))})]})}},1988:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var n=r(5893),a=r(8572),c=r(3593),s=r(4929),i=function(e){var t=e.title,r=e.coverImage,i=e.date,l=e.excerpt,o=e.slug;return(0,n.jsx)(s.r,{href:"/posts/".concat(o),children:(0,n.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,n.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,n.jsx)(c.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full max-w-xs h-full object-cover"})}),(0,n.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,n.jsx)(a.E,{date:i}),(0,n.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,n.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})]})})},l=function(e){var t=e.posts,r=e.icon,a=e.title;return(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"vstack gap-8",children:[(0,n.jsxs)("h2",{className:"hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight",children:[r," ",a]}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map((function(e){return(0,n.jsx)(i,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})})}},1760:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return d}});var n=r(5893),a=r(9352),c=r(4929),s=r(9924),i=r(6965),l=r(1988),o=function(e){var t=e.posts;return(0,n.jsx)(s.Z,{main:(0,n.jsxs)("div",{className:"vstack gap-12 p-8 rounded-lg bg-zinc-500",children:[(0,n.jsx)(l.f,{posts:t,title:"\u6700\u65b0\u306e\u8a18\u4e8b",icon:(0,n.jsx)(a.N9Z,{})}),(0,n.jsx)(c.r,{href:"/posts/page/1",passHref:!0,children:(0,n.jsx)("a",{className:"button",children:"\u8a18\u4e8b\u4e00\u89a7\u3078"})})]}),aside:(0,n.jsx)(i.N,{})})};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=!0,d=function(e){return(0,n.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({},e))}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);