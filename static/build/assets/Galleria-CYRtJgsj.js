import{d as i,l as d,r as n,j as t}from"./index-Bnvcza8w.js";import{V as g,F as f}from"./VideoFotoIniziale-1-Wlii6p.js";import{H as x}from"./H2-D2RraDDV.js";const u=i.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(1px);
  z-index: 9999;
  transition: opacity 0.9s ease;
  opacity: 0;
  ${e=>e.isFotoOpen?d`
          height: 100vh;
          opacity: 1;
        `:d`
          height: 0px;
        `}
`,v=i.picture`
  width: 90%;
  height: 60%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 768px) {
    width: 70%;
    height: 80%;
  }
`,b=i.img`
  display: block;
  height: 100%;
  margin: auto;
  object-fit: contain;
  border-radius: 5px;
  transition: all 1s;
  transform: scale(0);
  will-change: transform;
  backface-visibility: hidden;
  ${e=>e.isFotoOpen&&d`
      transform: scale(1);
    `}
`,y=i.div`
  cursor: pointer;
  height: 1.2rem;
  width: 2.5rem;
  position: absolute;
  right: 7%;
  top: 10%;

  ${e=>!e.isFotoOpen&&d`
      display: none;
    `}

  &::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 0;

    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );

    transform: rotate(-45deg);
    transform-origin: 0% 0%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );

    transform: rotate(45deg);
    transform-origin: 0% 0%;
  }
`;function w(){const e=n.useRef(),{srcOpen:o,isFotoOpen:a,handleOpen:c}=n.useContext(m);function h(s){var r;(r=e==null?void 0:e.current)!=null&&r.contains(s.target)||c()}return t.jsxs(u,{isFotoOpen:a,onClick:h,children:[t.jsx(y,{isFotoOpen:a}),t.jsx(v,{children:t.jsx(b,{ref:e,src:o,isFotoOpen:a})})]})}i.div`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  /* scroll-behavior: ; */
  /* background-color: red; */
  /* overflow-x: scroll; */
  /* opacity: 0; */
  /* transform: translateX(60%); */
  transition: all 1.8s;
  /* width: 0; */
  margin-bottom: 1rem;

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
`;i.div`
  display: flex;
  width: calc(250px * 6);
  animation: scroll 5s linear infinite;
  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 3));
    }
  }
`;i.div`
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
`;i.img`
  width: 100%;
`;const j=i.div`
  background-image: linear-gradient(
    to bottom right,
    var(--color-grey-50),
    var(--color-grey-200)
  );
`,p=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
  }
  @media only screen and (min-width: 1201px) {
    padding-left: 20%;
    padding-right: 14%;
  }
`,O=i.div`
  width: 90%;
  display: grid;
  gap: 3rem;
  row-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20vh;
  backface-visibility: hidden;

  @media only screen and (min-width: 768px) {
    grid-auto-rows: 30vh;
    width: 80%;
  }
  @media only screen and (min-width: 1201px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 40vh;
    gap: 3rem;
    row-gap: 3rem;
  }
`,k=i.div`
  margin-top: 5rem;
  width: 100%;
  margin-bottom: 5rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }
  text-align: center;

  & > p {
    font-size: 1.8rem;
    color: var(--color-grey-500);
    font-style: italic;
    margin: 5% 20%;
    @media only screen and (min-width: 768px) {
      margin: 0% 20%;
    }
  }
`,F=i.picture`
  border-radius: 5px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
  background-color: transparent;
`,C=i.img`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  transform: scale(1.1) translateZ(0);

  backface-visibility: hidden;
  will-change: transform;
  &:hover {
    backface-visibility: hidden;
    transform: scale(1);
  }
`,m=n.createContext({}),z=Array.from({length:13},(e,o)=>`static/build/img/foto_${o+1}.PNG`);function $(){const[e,o]=n.useState(!1),[a,c]=n.useState("");function h(r){var l;c((l=r==null?void 0:r.target)!=null&&l.src?r.target.src:"")}function s(r){o(l=>!l),h(r)}return t.jsx(j,{children:t.jsxs(m.Provider,{value:{isFotoOpen:e,srcOpen:a,handleOpen:s},children:[t.jsx(w,{}),t.jsx(g,{tipo:"video",autoPlay:!0,muted:!0,loop:!0,src:"static/build/menuservizi.mp4",type:"video/mp4"}),t.jsx(p,{}),t.jsxs(p,{type:"galleria",children:[t.jsxs(k,{children:[t.jsx(x,{dorata:!0,children:"Galleria"}),t.jsx("p",{children:"Lasciati ispirare dalle nostre creazioni e sorprenditi di quello che anche tu puoi diventare..."})]}),t.jsx(O,{children:z.map(r=>t.jsx(F,{children:t.jsx(C,{src:r,onClick:s})}))})]}),t.jsx(f,{page:"menuservizi",type:"galleria"})]})})}export{m as GalleriaContext,$ as default};
