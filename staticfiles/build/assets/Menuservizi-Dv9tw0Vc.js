import{d as a,j as e,r as s,l as n}from"./index-CbBFwd-e.js";import{S as d}from"./ScrittaCorpoPagina-NEyAy4w0.js";import{G as m,V as b,F as y}from"./VideoFotoIniziale-D5p2oyll.js";function C(i){return m({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"},child:[]}]})(i)}const w=a.h3`
  font-family: "syncopate", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: transparent;
  background-color: var(--color-gold);
  /* background-color: var(--color-grey-500); */
  background-clip: text;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;function j({children:i}){return e.jsx(w,{children:i})}const I=a.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`,c=s.createContext(!1);function u({children:i}){const[o,t]=s.useState(!1),r=function(){t(l=>!l)};return e.jsx(c.Provider,{value:{isOpen:o,onHandleIsOpen:r},children:e.jsx(I,{children:i})})}u.H2o=k;const S=a.h2`
  backface-visibility: hidden;
  will-change: transform;
  position: relative;
  font-size: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  @media only screen and (min-width: 1201px) {
    display: inline-block;
    font-size: 3.5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 5px;
  @media only screen and (min-width: 768px) {
    letter-spacing: 8px;
  }
  color: var(--color-grey-500);
  ${i=>i.dorata&&n`
      font-family: "syncopate", sans-serif;
      color: var(--color-grey-500);
      padding-bottom: 0;
    `}

  ${i=>i.isOpen&&n`
      transform: scale(1.1);
      color: var(--color-gold);
      @media only screen and (min-width: 768px) {
        transform: none;
      }
    `}
`;function k({children:i,type:o,dorata:t}){const{isOpen:r,onHandleIsOpen:l}=s.useContext(c);return e.jsx(S,{dorata:t,type:o,onClick:l,isOpen:r,children:i})}const L=a.div`
  transition: transform 0.6s ease, max-height 0.4s ease, opacity 0.2s ease;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translateY(-300px);
  background-color: var(--color-grey-100);

  ${i=>i.isOpen&&n`
      transition: transform 0.8s ease, opacity: .8s ease;;
      opacity: 1;
      /* overflow: visible; */
      max-height: 160rem;
      backface-visibility: hidden;
      transform: translateY(10px);

      @media only screen and (min-width: 768px) {
        transform: translateY(-55px);
      }
    `}
`,A=a.div`
  backface-visibility: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  /* overflow: hidden; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
    /* padding-bottom: 5rem; */
    padding-bottom: 4rem;
  }
  @media only screen and (min-width: 1201px) {
    /* padding-bottom: 5rem; */
    padding-left: 20%;
    padding-right: 14%;
    padding-bottom: 4rem;
  }
`,O=a.p`
  margin-top: 4rem;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent 1%,
    var(--color-grey-300) 50%,
    transparent 99%
  );
  @media only screen and (min-width: 768px) {
    margin: 5rem auto 0;
    width: 40%;
  }
`,P=a.p`
  color: var(--color-grey-500);
  font-style: italic;
  @media only screen and (min-width: 768px) {
    padding: 0 25%;
  }
`,q=a.p`
  color: var(--color-gold);
`;function F({titolo:i,prezzo:o,descrizione:t,ultimo:r}){const{isOpen:l}=s.useContext(c);return e.jsx(L,{isOpen:l,children:e.jsx(A,{children:e.jsxs(d,{type:"noview",children:[e.jsx(j,{children:i}),e.jsx(P,{children:t}),e.jsx(q,{children:o!=="da convenire"?`${o}€`:o}),!r&&e.jsx(O,{})]})})})}function M(i){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(i)}function H(i){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(i)}const R=a(M)`
  /* color: var(--color-grey-400); */
  color: var(--color-gold);
  font-size: 1.5rem;
  transform: translateY(100%);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
    transform: translateY(0);
  }
`,E=a(H)`
  color: var(--color-grey-400);
  /* color: var(--color-gold); */
  font-size: 1.5rem;
  transform: translateY(100%);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
    transform: translateY(0);
  }
`;function G(){const{isOpen:i,onHandleIsOpen:o}=s.useContext(c);return e.jsx(e.Fragment,{children:i?e.jsx(E,{onClick:o}):e.jsx(R,{onClick:o})})}const Y=a.p`
  transition: all 0.5s;
  margin-top: 4rem;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent 1%,
    var(--color-grey-300) 50%,
    transparent 99%
  );
  @media only screen and (min-width: 768px) {
    margin: 5rem auto;
    width: 40%;
  }
  ${i=>i.type==="gold"&&n`
      margin-top: 0;
      height: 1px;
      width: 20rem;
      background-image: linear-gradient(
        to right,
        transparent 1%,
        var(--color-gold) 50%,
        transparent 99%
      );
      @media only screen and (min-width: 768px) {
        margin: 5rem auto;
        width: 40rem;
      }
    `}
  ${i=>i.isOpen&&n`
      opacity: 0;
      transform: translateY(-100%);
    `}
`;function p({type:i}){const{isOpen:o=!1}=s.useContext(c);return e.jsx(Y,{type:i,isOpen:o})}const g=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  /* padding-bottom: 4rem; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    ${i=>i.type==="primo"&&n`
        padding-top: 10rem;
      `}
    padding-left: 30%;
    padding-right: 14%;
    /* padding-bottom: 10rem; */
  }
  @media only screen and (min-width: 1201px) {
    ${i=>i.type==="primo"&&n`
        padding-top: 10rem;
      `}
    /* padding-bottom: 10rem; */
    padding-left: 20%;
    padding-right: 14%;
  }
`,$=a(C)`
  font-weight: 400;
  margin-top: 3rem;
  font-size: 4rem;
  color: var(--color-gold);
  filter: drop-shadow(1px 1px 1px var(--color-grey-300));
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-20%);
  }
`,T=a.p`
  font-size: 1.1rem;
  text-align: left;
  color: var(--color-grey-400);
  transition: all 0.2s;
  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
  &:hover {
    color: var(--color-grey-500);
  }
`;function U(){const i={styling:[{titolo:"Taglio sartoriale e piega",prezzo:"da 47",descrizione:"Presso il nostro salone, offriamo un servizio di taglio sartoriale. È un'esperienza personalizzata che prende in considerazione la morfologia del viso, la texture dei capelli e le abitudini quotidiane di ogni cliente. I nostri esperti collaborano attentamente con te per comprendere le tue esigenze e offrirti consigli mirati in base alla consulenza. Il risultato finale è un taglio che mette in risalto la tua bellezza naturale e che riflette la tua individualità."},{titolo:"Piega",prezzo:"da 24",descrizione:"I nostri hairstylist si dedicano a creare asciugature impeccabili e personalizzate per soddisfare le esigenze individuali di ogni cliente. Sia che tu stia cercando un look elegante per un'occasione speciale o desideri semplicemente un tocco di glamour nella tua routine quotidiana, il nostro team è qui per trasformare la tua visione in realtà."},{titolo:"Rifinitura doppie punte ",prezzo:"18",descrizione:"Taglio eseguito su capelli asciutti esclusivamente dopo una schiaritura, per andare a definire gli ultimi centimetri della lunghezza, la famosa spuntatina."},{titolo:"Taglio maschile",prezzo:"24",descrizione:"Con il nostro servizio di taglio maschile, ti offriamo molto più di una semplice visita dal parrucchiere. I nostri esperti lavorano con precisione e attenzione ai dettagli per creare un look su misura che si adatti perfettamente alla tua personalità e al tuo viso . Che tu stia cercando un taglio classico o se desideri sperimentare un look più audace e moderno, siamo qui per realizzare il tuo desiderio."},{titolo:"HAIRUP & BRAIDS",prezzo:"da convenire",descrizione:"Crea un'impressione indelebile con il nostro servizio di styling per eventi speciali. Dalle trecce boho-chic agli eleganti raccolti, il nostro team di esperti trasforma i tuoi capelli in opere d'arte, perfette per ogni occasione. Che si tratti di un matrimonio, una cena elegante o una serata fuori con gli amici, le nostre acconciature personalizzate ti faranno brillare e sentirti sicura di te in ogni momento."}],colorCouture:[{titolo:"All over color",prezzo:"da 45",descrizione:"Un colore personalizzato in base alla consulenza del tuo tecnico, eseguito solitamente per coprire i capelli bianchi ogni  3/4 settimane."},{titolo:"Glaze",prezzo:"da 30",descrizione:"Enfatizza o modifica la tonalità dei tuoi capelli. Viene sempre eseguito dopo le schiariture per dare una tonalità unica. È un ottimo mantenimento fra una sessione di colore e l’altra."},{titolo:"Golden Aura",prezzo:"da 100",descrizione:"E' un servizio di schiariture che parte dalle radici, perfetto per chi vuole vedersi molto chiara su tutti i capelli, anche sulla base, dando tridimensionalità al suo colore naturale."},{titolo:"Partial Golden Aura",prezzo:"da 80",descrizione:"Cosa cambia da quello precedente? La quantità di schiaritura è concentrata sulla sommità, ideale come mantenimento dopo 8/10 settimane aver fatto il servizio Golden Aura."},{titolo:"Total Bleached",prezzo:"da 95",descrizione:"Se cerchi un cambio look di grande personalità e vuoi schiarire completamente tutti i tuoi capelli dalla radice alle punte, questo è il servizio che fa per te."},{titolo:"Full blending",prezzo:"da 100",descrizione:"Il Full Blending dipinge delicatamente i tuoi capelli con un effetto di schiaritura naturale e graduale. Con questa tecnica il capello viene schiarito creando un effetto luminoso e multidimensionale, con sfumature che si fondono armoniosamente con il tuo colore naturale dei capelli. È perfetto per aggiungere movimento e luminosità alla tua chioma. Per un look a prova di Pinterest!"},{titolo:"Soft  blending",prezzo:"da 80",descrizione:"Cosa cambia dal full? La quantità di capelli schiarita è minore, per dare movimento alle lunghezze, ma con un effetto ancora più naturale come se fossero schiariti dal sole. Mantenimento medio-basso."},{titolo:"SHADOWING",prezzo:"da 90",descrizione:"Lo Shadowing da ai tuoi capelli un makeover in 3D! Utilizziamo diverse tonalità di colore per creare ombre e luci che accentuano le caratteristiche del tuo viso e dei tuoi capelli, aggiungendo profondità e dimensione. È come scolpire i tuoi capelli per valorizzare al meglio la tua bellezza naturale."}],technical:[{titolo:"A CURL CAN DREAM",prezzo:"da 60",descrizione:"Esalta la bellezza naturale dei tuoi capelli con il nostro servizio di ondulazione professionale. Grazie alla nostra esperienza e alle tecniche all'avanguardia, creiamo onde morbide o ricci definiti che si adattano perfettamente alla tua personalità e al tuo stile di vita. Con un'attenzione meticolosa ai dettagli e l'uso di prodotti di altissima qualità, garantiamo risultati duraturi ed impeccabili. Affidati al nostro team di professionisti per ottenere un’ondulazione che aggiunga volume, movimento o un tocco di glamour alla tua chioma, per un look che ti farà sentire unica in ogni occasione."},{titolo:"LUXE SMOOTHING",prezzo:"da 200",descrizione:"Sogni i tuoi capelli lisci e impeccabili? Il nostro servizio di trattamento alla keratina è la risposta ai tuoi desideri. Trasforma i capelli ribelli e crespi in una morbida seta, la nostra formula innovativa a base di keratina doma i ricci più indomabili ed elimina il crespo senza compromettere la vitalità dei tuoi capelli. Dimentica le lunghe ore trascorse a lisciare la tua chioma ogni mattina e goditi la libertà di capelli perfettamente lisci, fluidi e lucenti. Abbraccia la bellezza senza sforzo e la praticità di una chioma impeccabile in ogni situazione.  Durata fino a cinque mesi. Mantenimento semplice at home con 2 prodotti."},{titolo:"WHY BE FRIZZ",prezzo:"da 100",descrizione:"Goditi una chioma dall'aspetto naturale e senza crespo con il nostro trattamento ANTIFRIZZ personalizzato. Con la nostra formula speciale, idratiamo ed eliminiamo il crespo dai tuoi capelli mentre preserviamo il loro naturale movimento. Il risultato? Capelli lussuosi, morbidi e gestibili, con la tua ondulazione, che aggiunge movimento e vitalità al tuo look per riflettere la tua bellezza in ogni occasione."},{titolo:"Extentions",prezzo:"da convenire",descrizione:"Esaudisci il tuo sogno di capelli lunghi e lussuosi con il nostro servizio di extension. Con l'utilizzo di extension di altissima qualità e la nostra competenza nell'applicazione, trasformiamo istantaneamente la tua chioma, aggiungendo lunghezza, volume e spessore su misura per te. Che tu desideri un look pieno di volume o un tocco di lunghezza e definizione, il nostro team di esperti ti offre soluzioni personalizzate per ottenere un risultato impeccabile e naturale. Sogna in grande e scopri il potere strabiliante delle extension, per una chioma che ti farà sentire a tuo agio in ogni occasione."},{titolo:"Color correction",prezzo:"da convenire",descrizione:"Con correzione colore intendiamo un servizio in cui dobbiamo rimuovere un colore fatto in precedenza o sistemare un lavoro sbagliato fatto in casa o in salone. La correzione comporta un lavoro complesso e delicato, in base allo stato di salute del capello ci potrebbero volere più sedute per arrivare al risultato finale desiderato. Preservare la qualità del capello è la nostra priorità. Questo servizio richiede una consulenza in salone e un test prova del capello prima della prenotazione."}],ludwigRituals:[{titolo:"Essential ritual",prezzo:"15",descrizione:"I nostri Essential ritual sono una serie di trattamenti per qualsiasi esigenza del capello, grazie alla tecnologia nanomolecolare otterrai una bellezza impeccabile, in tempi record, senza compromessi."},{titolo:"Intense ritual",prezzo:"30",descrizione:"I nostri Intense ritual offrono una soluzione a qualsiasi necessità. Hanno un’efficacia maggiore e più duratura nel tempo. Sono tutti enfatizzati da una nuovissima tecnologia di nebulizzazione che ti spiegheranno i nostri esperti in salone."},{titolo:"First class ritual",prezzo:"50",descrizione:"I nostri First class ritual offrono un viaggio indulgente verso la perfezione dei capelli. Formulato con ingredienti selezionati e tecnologie innovative, questi trattamenti trasformano istantaneamente i capelli opachi, danneggiati, assottigliati e privi di vitalità in una chioma radiosa, setosa e voluminosa. I capelli vengono rigenerati in profondità, riparando danni e ripristinando la loro naturale lucentezza. Ogni passaggio del trattamento è pensato per coccolare i capelli e il cuoio capelluto, offrendo un momento di puro benessere e relax. Lasciati avvolgere dall'aura di prestigio e bellezza, e regala ai tuoi capelli l'attenzione e la cura che si meritano con i nostri trattamenti FIRST CLASS."}]},o=a.p`
    /* font-size: 2.5rem; */
  `;return e.jsxs(e.Fragment,{children:[e.jsx(b,{tipo:"video",autoPlay:!0,muted:!0,loop:!0,src:"/menuservizi.mp4",type:"video/mp4"}),e.jsx(g,{type:"primo",children:e.jsxs(d,{children:[e.jsxs(o,{children:["Il cliente è il centro del nostro mondo.",e.jsx("br",{}),"Scoprite il nostro catalogo di servizi esclusivi e prenotate un appuntamento."]}),e.jsxs(o,{children:["Se desiderate una ",e.jsx("b",{children:"consulenza gratuita"})," senza impegno, per maggiori informazioni sui nostri trattamenti o per comunicarci esigenze particolari prima di prenotare, chattate direttamente con uno dei nostri stylist cliccando sull'icona sotto. Il team di Ludwig è a vostra disposizione.",e.jsx("p",{children:e.jsx("a",{href:"https://wa.me/+393661574143",children:e.jsx($,{})})})]}),e.jsx(p,{}),e.jsx(d,{children:e.jsxs(T,{children:["* tutti i prezzi indicati sono già comprensivi di shampoo, conditioner e rifinitura adatti alla tipologia di capello. ",e.jsx("br",{})," ","** I prezzi possono variare a seconda della lunghezza e densità dei capelli."]})}),e.jsx(p,{})]})}),Object.entries(i).map((t,r,l)=>e.jsxs(u,{children:[e.jsxs(g,{children:[e.jsxs(d,{type:"servizi",children:[e.jsx(u.H2o,{dorata:!0,children:t[0].match(/[A-Z]/g)?t[0].replace(/([A-Z])/g," $1"):t[0]}),e.jsx(G,{})]}),e.jsx(p,{type:"gold"})]}),t[1].map(({titolo:z,prezzo:h,descrizione:f},v,x)=>e.jsx(F,{titolo:z,prezzo:h,descrizione:f,ultimo:v===x.length-1&&!0}))]})),e.jsx(y,{page:"menuservizi"})]})}export{U as default};
