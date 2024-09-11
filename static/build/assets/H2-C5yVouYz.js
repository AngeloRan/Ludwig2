import{d as r,l as o,j as a}from"./index-D7UB1cEZ.js";const i=r.h2`
  /* text-align: center; */
  /* font-family: "Syncopate", sans-serif; */
  font-size: 2.4rem;

  ${t=>t.type==="storia"&&o`
      font-size: 2rem;
    `}

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 8px;
  color: var(--color-grey-500);
  ${t=>t.dorata&&o`
      font-family: "syncopate", sans-serif;
      color: var(--color-gold);
      padding-bottom: 0;
    `}
  ${t=>t.type==="prenotazioni"&&o`
      display: inline-block;
      font-family: "syncopate", sans-serif;
      margin-top: 5vh;
      padding: 0 7%;
      width: 100%;
      letter-spacing: 3px;
      color: var(--color-gold);
      font-size: 2.8rem;
      @media only screen and (min-width: 768px) {
        letter-spacing: 5px;
      }
    `}
`;function p({children:t,type:e,dorata:n}){return a.jsx(i,{dorata:n,type:e,children:t})}export{p as H};
