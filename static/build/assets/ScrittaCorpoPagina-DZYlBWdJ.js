import{r as v,d as V,l as g,j}from"./index-Bnvcza8w.js";var w=new Map,h=new WeakMap,E=0,A=void 0;function C(t){return t?(h.has(t)||(E+=1,h.set(t,E.toString())),h.get(t)):"0"}function M(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?C(t.root):t[e]}`).toString()}function O(t){const e=M(t);let n=w.get(e);if(!n){const i=new Map;let c;const o=new IntersectionObserver(s=>{s.forEach(r=>{var a;const l=r.isIntersecting&&c.some(d=>r.intersectionRatio>=d);t.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=l),(a=i.get(r.target))==null||a.forEach(d=>{d(l,r)})})},t);c=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:o,elements:i},w.set(e,n)}return n}function X(t,e,n={},i=A){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const a=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:c,observer:o,elements:s}=O(n),r=s.get(t)||[];return s.has(t)||s.set(t,r),r.push(e),o.observe(t),function(){r.splice(r.indexOf(e),1),r.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),w.delete(c))}}function z({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:c,triggerOnce:o,skip:s,initialInView:r,fallbackInView:a,onChange:l}={}){var d;const[p,I]=v.useState(null),m=v.useRef(),[b,R]=v.useState({inView:!!r,entry:void 0});m.current=l,v.useEffect(()=>{if(s||!p)return;let f;return f=X(p,($,y)=>{R({inView:$,entry:y}),m.current&&m.current($,y),y.isIntersecting&&o&&f&&(f(),f=void 0)},{root:c,rootMargin:i,threshold:t,trackVisibility:n,delay:e},a),()=>{f&&f()}},[Array.isArray(t)?t.toString():t,p,c,i,o,s,n,a,e]);const x=(d=b.entry)==null?void 0:d.target,S=v.useRef();!p&&x&&!o&&!s&&S.current!==x&&(S.current=x,R({inView:!!r,entry:void 0}));const u=[I,b.inView,b.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const T=V.div`
  opacity: 0;
  transform: translateX(-60%);
  ${t=>t.type==="noview"&&g`
      transform: translateX(0);
    `}
  transition: all 1.2s;
  text-align: center;
  & p {
    letter-spacing: 1px;
    line-height: 30px;
  }

  ${t=>t.inView&&g`
      opacity: 1;
      transform: translateX(0);
    `}

  padding: 4rem 3rem 0 3rem;
  margin-top: 1rem;

  ${t=>t.type==="servizi"&&g`
      @media only screen and (min-width: 768px) {
        line-height: 30px;
        padding-top: 0px;
        margin-top: 0;
      }
    `}

  ${t=>t.type==="nospace"&&g`
      padding: 0;
    `}
  & p:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${t=>t.type==="storia"&&g`
      transform: translateX(0);
    `}

  ${t=>(t==null?void 0:t.terzoStep)&&g`
      opacity: 0;
    `}
`;function B({children:t,type:e,terzoStep:n}){const{ref:i,inView:c}=z({triggerOnce:!0,rootMargin:"100px 0px"});return j.jsx(T,{ref:i,inView:c,type:e,terzoStep:n,children:t})}export{B as S,z as u};
