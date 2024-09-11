import{R as s,d as c,l as m,j as n,r as f}from"./index-D7UB1cEZ.js";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=s.createContext&&s.createContext(w),O=["attr","size","title"];function P(e,t){if(e==null)return{};var r=z(e,t),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function z(e,t){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},p.apply(this,arguments)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(i){S(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function S(e,t,r){return t=E(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=F(e,"string");return typeof t=="symbol"?t:t+""}function F(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>s.createElement(t.tag,h({key:r},t.attr),b(t.child)))}function v(e){return t=>s.createElement(C,p({attr:h({},e.attr)},t),b(e.child))}function C(e){var t=r=>{var{attr:i,size:o,title:a}=e,u=P(e,O),d=o||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,u,{className:l,style:h(h({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return y!==void 0?s.createElement(y.Consumer,null,r=>t(r)):t(w)}function D(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function I(e){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function L(e){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}const M=c.footer`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  width: 100%;
  background-color: var(--color-grey-100);
  ${e=>e.type==="galleria"&&m`
      background-color: transparent;
    `}
  margin-bottom: 7rem;
  ${e=>e.page==="menuservizi"&&m`
      margin-top: 10rem;
      @media only screen and (min-width: 768px) {
        margin-top: 15rem;
      }
    `}

  @media only screen and (min-width: 1400px) {
    height: auto;
    margin-bottom: 0;
    flex-direction: row;
    padding-top: 3%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 3%;
    justify-content: center;
    gap: 10%;
  }
  position: relative;
  padding: 15% 15% 10%;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    margin-bottom: 0;
    padding-left: 30%;
    padding-right: 14%;
  }
  @media only screen and (min-width: 1201px) {
    margin-bottom: 0;
    padding-left: 20%;
    padding-right: 14%;
  }
  ${e=>e.page==="contatti"&&m`
      padding-top: 15rem;
      @media only screen and (min-width: 768px) {
        padding-top: 15rem;
      }
    `}
`,g=c.div`
  text-align: center;
  & h5 {
    margin-bottom: 1rem;
  }
  & p {
    color: var(--color-grey-500);
    font-size: 1.3rem;
    letter-spacing: 2px;
    padding-bottom: 5px;

    & span {
      margin-left: 5px;
    }
  }
`,x=c.h5`
  font-family: "syncopate", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-gold);
  font-size: 1.4rem;
`,V=c.p`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  /* gap: 1rem; */
`,_=c(I)`
  font-size: 2.5rem;
  color: var(--color-gold);
`,N=c(D)`
  font-size: 2.5rem;
  color: var(--color-gold);
`,W=c(L)`
  font-size: 2.5rem;
  color: var(--color-gold);
`;function $({page:e,type:t}){return n.jsxs(M,{type:t,page:e,children:[n.jsxs(g,{children:[n.jsx(x,{children:"Dove siamo"}),n.jsx("p",{children:"Str. Volvera, 9, "}),n.jsx("p",{children:"10043 Orbassano TO"})]}),n.jsxs(g,{children:[n.jsx(x,{children:"Orari di apertura"}),n.jsxs("p",{children:["Martedì-Sabato ",n.jsx("span",{children:"9:00/18:30"})]}),n.jsxs("p",{children:["Mercoledì ",n.jsx("span",{children:"12:00/21:00"})]}),n.jsx("p",{children:"Domenica e Lunedì chiuso"})]}),n.jsxs(g,{children:[n.jsx(x,{children:"Contatti"}),n.jsx("p",{children:n.jsxs("a",{href:"tel:+390119015465",children:["Telefono: ",n.jsx("span",{children:"+ 39 011 90 15 465"})]})}),n.jsx("p",{children:n.jsxs("a",{href:"https://wa.me/+393661574143",children:["Whatsapp: ",n.jsx("span",{children:"+393661574143"})]})}),n.jsx("p",{children:n.jsxs("a",{href:"mailto:hairludwig02@gmail.com",children:["E-mail: ",n.jsx("span",{children:"hairludwig02@gmail.com"})]})}),n.jsxs(V,{children:[n.jsx("a",{href:"https://www.instagram.com/marcedduandreahair?igsh=MTR1MTY2dmRtczU1Mw%3D%3D&utm_source=qr",children:n.jsx(_,{})}),n.jsx("a",{href:"https://www.facebook.com/share/f71PvBWwBvpyU387/?mibextid=LQQJ4d",children:n.jsx(N,{})}),n.jsx("a",{href:"https://wa.me/+393661574143",children:n.jsx(W,{})})]})]})]})}const B=c.div`
  height: 70vh;
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
  width: 100%;
`,R=c.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  ${e=>e.loaded&&m`
      animation-name: Show-video;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    `}
  @keyframes Show-video {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,T=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  animation-name: Show-video;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  @keyframes Show-video {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;function G({children:e,...t}){const[r,i]=f.useState(!1);console.log(r);const o=f.useRef();return f.useEffect(()=>{const a=o==null?void 0:o.current;a&&(a.muted=!0,a.hasAttribute("loop")?a.addEventListener("loadeddata",u=>{a.muted=!0,a.play().then(console.log("partito")).catch(d=>{console.error("Errore nella riproduzione del video:",d)}),i(!0)}):a.addEventListener("load",u=>{i(!0)}))},[]),n.jsxs(B,{children:[t.tipo==="video"&&n.jsxs(R,{preload:"auto",loaded:r,ref:o,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[n.jsx("source",{src:t.src,type:t.type}),"Your browser is not supported"]}),t.tipo==="foto"&&n.jsx(T,{ref:o,src:t.src})]})}export{$ as F,v as G,G as V,L as a};
