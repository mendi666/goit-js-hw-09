const e=document.querySelector(".form"),o=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');function r(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault();let s=o.valueAsNumber;const u=t.valueAsNumber,l=n.valueAsNumber;for(let e=1;e<=l;e++)r(e,s).then((({position:e,delay:o})=>{console.log(`✅ Resolved promise ${e} in ${o}ms`)})).catch((({position:o,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),s+=u}));
//# sourceMappingURL=03-promises.1b6fb196.js.map
