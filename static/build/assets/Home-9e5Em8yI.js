import{d as n,j as i,L as v,l as o,r as l}from"./index-4EzMehYc.js";import{H as j}from"./H2-BHR796So.js";import{S as z,u as y}from"./ScrittaCorpoPagina-DJsJk7pg.js";import{V as D,F as T}from"./VideoFotoIniziale-Cjj6jQm8.js";const G=n.p`
  text-align: center;

  padding-top: 2rem;
  padding-bottom: 1rem;

  color: var(--color-grey-400);
  font-style: italic;
  & p {
    padding-top: 1rem;
    color: var(--color-grey-700);
    font-style: normal;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 10rem;

    margin-right: 30%;
    margin-left: 30%;
  }
`;function I({children:e}){return i.jsx(G,{children:e})}const O=n.span`
  display: inline-block;
  color: var(--color-gold);
  transition: all 0.2s ease;
  background-color: var(--color-grey-50);
  border-radius: 4px;
  z-index: 1000;
  &:hover {
    /* position: absolute; */
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    /* padding: 0 1rem; */
  }
`;function k({children:e,type:t,author:r}){return i.jsxs(z,{children:[t==="iniziale"&&i.jsxs(i.Fragment,{children:[i.jsx(j,{children:"Ludwig passione per la perfezione"}),i.jsxs("p",{children:["Benvenuti nel mondo di"," ",i.jsx(O,{children:i.jsx(v,{to:"/menuservizi",children:"Ludwig Hair Couture"})}),", dove l'arte per la cura dei capelli si fonde con l'esperienza e la passione.",i.jsx("p",{children:"Presso il nostro salone di parrucchieri trasformiamo ogni cliente in un'icona di bellezza."})]}),i.jsx("p",{children:"Scoprite il nostro regno di trattamenti personalizzati, tagli su misura e colorazioni impeccabili, guidati dalla nostra dedizione alla perfezione. Abbandonatevi alla cura delle nostre mani esperte e lasciate che il vostro stile rifletta la vostra unicità. Siate i protagonisti della vostra bellezza: il vostro viaggio verso l'eleganza comincia qui, da Ludwig."})]}),t==="inframmezzo"&&i.jsx(i.Fragment,{children:i.jsxs(I,{children:[e,i.jsxs("p",{children:["-",r]})]})})]})}const A=n.h3`
  font-family: "syncopate", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: transparent;
  background-color: var(--color-gold);
  background-clip: text;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;function B({children:e}){return i.jsx(A,{children:e})}const J=n.div`
  /* flex: 1; */
  /* max-height: 25%; */
  text-align: center;
  width: 100%;
  transform: translateY(100%);
  transition: all 1.2s;
  opacity: 0;
  &:not(:last-child) {
    padding-bottom: 3rem;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      height: 1px;
      width: 7rem;
      transform: translateX(-50%);
      /* background-color: var(--color-gold); */
      background-color: var(--color-grey-400);
    }
  }
  &:not(:first-child) {
    padding-top: 2rem;
  }
  @media only screen and (min-width: 768px) {
    transform: translateY(100%);
  }

  ${e=>e.inview&&o`
      opacity: 1;
      transform: translateY(0);
      @media only screen and (min-width: 768px) {
        transform: translateY(0);
      }
      & > p {
        transform: translateY(0);
        opacity: 1;
      }
    `};
`,N=n.p`
  transform: translateY(100%);
  opacity: 0;
  margin: 0 auto;
  color: var(--color-grey-400);
  font-style: italic;
  transition: opacity 3s, transform 1.5s;
  @media only screen and (min-width: 768px) {
    max-width: 50%;
  }
`;function w({children:e,to:t,p:r}){const{ref:s,inView:h}=y({triggerOnce:!0,rootMargin:"0px 0px"});return i.jsxs(J,{ref:s,inview:h,children:[i.jsx(B,{children:i.jsx(v,{to:t,children:e})}),i.jsx(N,{children:i.jsx(v,{to:t,children:r})})]})}const Q=n.div`
  margin-top: 8rem;
  /* margin-bottom: 5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    var(--color-grey-50),
    var(--color-grey-200)
  );
  padding: 10%;
  border-radius: 3px;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
  opacity: 0;
  transform: translateY(50%);
  transition: all 0.9s;

  @media only screen and (min-width: 768px) {
    padding: 6%;
    margin-top: 10%;
    min-height: 80vh;
    justify-content: center;
  }

  ${e=>e.inview&&o`
      opacity: 1;
      transform: translateY(0);
    `}
`;function U(){const{ref:e,inView:t}=y({triggerOnce:!0,rootMargin:"100px 0px"});return i.jsxs(Q,{ref:e,inview:t,children:[i.jsx(w,{to:"/menuservizi",p:"Scopri i nostri servizi esclusivi, studiati dai nostri hair stylists per adattarsi all'unicità di ogni cliente",children:"Menù servizi"}),i.jsx(w,{to:"/galleria",p:"Esplora il nostro archivio fotografico e lascia che la tua storia diventi anche la nostra, la bellezza è tale quando è condivisa",children:"Galleria"}),i.jsx(w,{to:"/prenota",p:"Ci sono mille motivi per rimanere in contatto: segui le nostre attività sui social, rimani aggiornato su tutte le novità",children:"Contatti"})]})}const W=n.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transition: all 2s;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 50%;
  }
  @media only screen and (min-width: 1201px) {
    width: 33.5%;
  }

  ${e=>e.ritornoacapo&&o`
      transition: all 0s;
    `}

  ${e=>o`
    transform: translateX(${(e.cur-e.id)*-100}%);
  `}

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(95%);
  }
`;function b({fot:e,id:t,currentSlide:r,ritornoacapo:s}){return i.jsx(W,{id:t,cur:r,ritornoacapo:s,children:i.jsx("img",{src:e,alt:"foto",loading:"lazy"})})}const _=n.div`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  transform: translateX(60%);
  transition: all 1.8s;
  /* width: 0; */
  margin-bottom: 1rem;
  ${e=>e.inView&&o`
      /* width: 100%; */
      transform: translateX(0);
      opacity: 1;
    `}

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 75%;
    margin-left: 25%;
    height: 80vh;
    /* margin-bottom: 10%; */
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  @media only screen and (min-width: 1201px) {
    width: 82%;
    margin-left: 18%;
    height: 85vh;
    /* margin-bottom: 10%; */
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
`,p=[];for(;p.length<3;){let e=`static/build/img/foto_${Math.floor(Math.random()*10)+1}.PNG`;!p.includes(e)&&p.push(e)}function K(){const{ref:e,inView:t}=y({triggerOnce:!0,rootMargin:"100px 0px"}),[r,s]=l.useState(0),[h,g]=l.useState(null),x=r===p.length-1,c=h===p.length-1;return l.useEffect(()=>{const d=setInterval(()=>{if(x){s(a=>(g(a),-1)),setTimeout(()=>s(a=>(g(a),a+1)),[100]);return}s(a=>(g(a),a+1))},5e3);return()=>clearInterval(d)},[p.length,x]),i.jsx(v,{to:"/galleria",children:i.jsx(_,{ref:e,inView:t,children:[...p.map((d,a,u)=>a<=2&&i.jsx(b,{id:-3+a,fot:d,currentSlide:r,ritornoacapo:c},"a"+a)),...p.map((d,a,u)=>i.jsx(b,{id:a,fot:d,currentSlide:r,ritornoacapo:c},a)),...p.map((d,a,u)=>a<=2&&i.jsx(b,{id:u.length+a,fot:d,currentSlide:r,ritornoacapo:c},"b"+a))]})})}const R=n.div`
  /* height: 40vh; */
  width: 50%;
  transition: all 1.5s ease;
  transform: translateX(80%);
  opacity: 0;
  /* margin-top: -3rem; */

  ${e=>e.inView&&o`
      opacity: 1;
      transform: translateX(0);
    `}

  ${e=>e.nofade&&o`
      transform: translateX(0);
      opacity: 1;
    `}
`;function F({nofade:e,children:t}){const{ref:r,inView:s}=y({triggerOnce:!0,rootMargin:"-0px 0px"});return i.jsx(R,{nofade:e,ref:r,inView:s,children:t})}const Z=n.div`
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  ${e=>e.primoStep&&o`
      & > div:first-child {
        transition: all 2s;
        transform: translateY(-40%);
        backface-visibility: hidden;
      }
    `}
`,ii=n.div`
  position: relative;
  height: 700vh;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }
`,M=n.p`
  margin-top: 5rem;
  height: 0;
  font-style: italic;
  text-align: center;
  line-height: 30px;
  color: var(--color-grey-500);

  & span {
    color: var(--color-gold);
    font-weight: 700;
    font-size: 2rem;
    font-family: "syncopate" sans-serif;
    font-style: normal;
  }
  ${e=>e.primoStep&&o`
      height: calc(((var(--scroll)) - 0.125) * 30vh);
    `}

  ${e=>e.type==="secondoCapitolo"&&o`
      ${t=>t.secondoStep&&o`
          height: calc(((var(--scroll)) - 0.5) * 30vh);
        `}
      ${t=>t.terzoStep&&o`
          animation: allontanati 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * 1.5 * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes allontanati {
            to {
              transform: translateY(50%);
            }
          }
        `}
    `}
`,ei=n.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  width: 100%;
  margin: 0 auto;
  /* background-color: blue; */

  ${e=>e.primoStep&&o`
      animation: reveal 0.5s linear infinite;
      animation-play-state: paused;
      animation-delay: calc((var(--scroll) - 0.125) * 1.5 * -1s);
      animation-iteration-count: 1;
      animation-fill-mode: both;

      transform: translateX(-100%);
      opacity: 0;

      @keyframes reveal {
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}
`,L=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: -5rem;
  ${e=>e.type==="primo"&&o`
      ${t=>t.terzoStep&&o`
          animation: indietro 0.3s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * 1.2 * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes indietro {
            to {
              transform: translateX(-100%);
              opacity: 0;
            }
          }
        `}
    `}

  ${e=>e.type==="secondoCapitolo"&&o`
      opacity: 0;
      ${t=>t.secondoStep&&o`
          animation: rivelati 0.3s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.5) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes rivelati {
            to {
              opacity: 1;
            }
          }
        `}
      ${t=>t.terzoStep&&o`
          animation: finale 0.2s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes finale {
            0% {
              opacity: 1;
            }
            to {
              transform: translateX(-50%) translateY(10%);
              opacity: 1;

              /* font-size: 1.3rem; */
            }
          }
        `}
    `}
`,Y=n.div`
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
  width: 100dvw;
  transition: all 1s ease;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    height: 40vh;
  }
  @media only screen and (min-width: 1201px) {
    width: 100%;
    height: 60vh;
  }
  height: 60vh;

  ${e=>e.type!=="seconda"&&o`
      &:hover {
        transition: all 1s ease;
        transform: scale(1.1);
      }
    `}

  ${e=>e.type==="seconda"&&o`
      ${t=>t.terzoStep&&o`
          animation: scale 0.2s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes scale {
            to {
              transform: scale(1.2);
            }
          }
        `}
    `}
`,H=n.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
`,ti=n.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`,E=n.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,X=n.p`
  & span {
    color: var(--color-gold);
    font-weight: 700;
    font-size: 1.8rem;
    font-family: "syncopate" sans-serif;
  }
  padding: 10%;
  text-align: center;
  line-height: 30px;
  color: var(--color-grey-500);
`,ni=n.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1rem;
`,V=n.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  border-radius: 5px;
`;function oi(){const e=l.useRef(null),[t,r]=l.useState(0),[s,h]=l.useState(!1),[g,x]=l.useState(!1),[c,d]=l.useState(!1),[a,u]=l.useState(!1),[S,$]=l.useState(()=>window.innerWidth>768?"large":"small");return l.useEffect(()=>{const f=()=>{if(e!=null&&e.current){const m=e.current.getBoundingClientRect();r(m.top+window.scrollY)}window.innerWidth>768?$("large"):$("small")};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),l.useEffect(()=>{const f=()=>{var C,P;const m=window.scrollY>=t-window.innerHeight?(window.scrollY-t+window.innerHeight)/((C=e==null?void 0:e.current)==null?void 0:C.offsetHeight)>=1?1:(window.scrollY-t+window.innerHeight)/((P=e==null?void 0:e.current)==null?void 0:P.offsetHeight):0;m>=.125?h(!0):h(!1),m>=.5?x(!0):x(!1),m>=.75?d(!0):d(!1),m>=.95?u(!0):u(!1),document.body.style.setProperty("--scroll",m)};return window.addEventListener("scroll",f,!1),()=>window.removeEventListener("scroll",f,!1)},[t]),i.jsxs(i.Fragment,{children:[S==="large"&&i.jsx(ii,{ref:e,children:i.jsxs(Z,{primoStep:s,children:[i.jsx(z,{type:"storia",terzoStep:c,children:i.jsx(j,{children:"Come ci siamo arrivati..."})}),i.jsxs(ei,{primoStep:s,children:[i.jsxs(L,{type:"primo",terzoStep:c,children:[i.jsx(Y,{children:i.jsx(H,{src:"static/build/img/2001.jpeg",alt:"Foto 2001"})}),i.jsxs(M,{primoStep:s,children:[i.jsx("span",{children:"2001"})," Ludwig nasce dal sogno della fondatrice Daniela, che dopo anni di esperienza in una grossa compagnia del settore, decise di creare il proprio salone. Un luogo in cui, insieme al suo team, accogliere ed esprimere il proprio amore verso i capelli, facendo sentire a casa ogni cliente."]})]}),i.jsxs(L,{type:"secondoCapitolo",secondoStep:g,terzoStep:c,quartoStep:a,children:[i.jsx(Y,{type:"seconda",terzoStep:c,children:i.jsx(H,{src:"static/build/img/logo2.JPG",alt:"Foto 2024"})}),i.jsxs(M,{type:"secondoCapitolo",secondoStep:g,terzoStep:c,children:[i.jsx("span",{children:"2024"})," Dopo 23 anni, e con l’ingresso dei figli nell’attività, Ludwig decide di rinnovare per offrire un servizio ancora più esclusivo e di alta qualità. Per incantare chiunque varchi la soglia e consolidarsi punto di riferimento per tutti coloro che amano la bellezza dei propri capelli."]})]})]})]})}),S==="small"&&i.jsxs(ti,{children:[i.jsx(z,{type:"storia",children:i.jsx(j,{type:"storia",children:"Come ci siamo arrivati..."})}),i.jsxs(ni,{children:[i.jsxs(F,{nofade:!0,children:[i.jsx(V,{children:i.jsx(E,{src:"static/build/img/2001.jpeg"})}),i.jsxs(X,{children:[i.jsx("span",{children:"2001"})," Ludwig nasce dal sogno della fondatrice Daniela, che dopo anni di esperienza in una grossa compagnia del settore, decise di creare il proprio salone. Un luogo in cui, insieme al suo team, accogliere ed esprimere il proprio amore verso i capelli, facendo sentire a casa ogni cliente."]})]}),i.jsxs(F,{children:[i.jsx(V,{children:i.jsx(E,{src:"static/build/img/logo2.JPG"})}),i.jsxs(X,{children:[i.jsx("span",{children:"2024"})," Dopo 23 anni, e con l’ingresso dei figli nell’attività, Ludwig decide di rinnovare per offrire un servizio ancora più esclusivo e di alta qualità. Per incantare chiunque varchi la soglia e consolidarsi punto di riferimento per tutti coloro che amano la bellezza dei propri capelli."]})]})]})]})]})}const q=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  ${e=>e.type==="storia"&&o`
      padding: 0;
    `}
  padding-bottom: 4rem;
  /* overflow: hidden; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
    padding-bottom: 10rem;
  }
  @media only screen and (min-width: 1201px) {
    padding-bottom: 10rem;
    padding-left: 20%;
    padding-right: 14%;
  }
`,ai=n.div`
  width: 100%;
  overflow: hidden;
`;function ci(){return i.jsxs(i.Fragment,{children:[i.jsx(D,{tipo:"video",src:"static/build/menuservizi.mp4",type:"video/mp4"}),i.jsxs(q,{children:[i.jsx(k,{type:"iniziale"}),i.jsx(U,{}),i.jsxs(k,{type:"inframmezzo",author:"Eiselle",children:[" ",'"Per trovare il tuo look, la sperimentazione è sempre cosa buona e giusta: capelli lunghi, corti, lisci, ricci, morbidi o naturali, alla Monna Lisa, punk, spettinati, acconciati ad arte, non importa. Quello che importa è che sia siano sani, perché coi capelli sani puoi fare ciò che vuoi."']})]}),i.jsx(ai,{children:i.jsx(K,{})}),i.jsx(q,{type:"storia",children:i.jsx(oi,{})}),i.jsx(T,{})]})}export{ci as default};
