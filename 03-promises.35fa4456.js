!function(){var e=document.querySelector(".form"),o=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');e.addEventListener("submit",(function(e){var c=function(e){var o,n;(o=e,n=a,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:o,delay:n}):t({position:o,delay:n})}),n)}))).then((function(e){var o=e.position,n=e.delay;console.log("✅ Resolved promise ".concat(o," in ").concat(n,"ms"))})).catch((function(o){o.position;var n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),a+=r};e.preventDefault();for(var a=o.valueAsNumber,r=n.valueAsNumber,u=t.valueAsNumber,i=1;i<=u;i++)c(i)}))}();
//# sourceMappingURL=03-promises.35fa4456.js.map
