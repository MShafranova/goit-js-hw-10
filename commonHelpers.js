import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as C,i as x}from"./assets/vendor-77e16229.js";const N=document.querySelector("#datetime-picker"),n=document.querySelector("button"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let r,i=!1,e;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<Date.now()?(x.error({message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):n.disabled=!1}};function T(){i&&(clearInterval(e),e=null),i=!0,e=setInterval(q,1e3,r),n.disabled=!0}function q(t){const c=t-new Date,{days:u,hours:d,minutes:o,seconds:a}=I(c);!isNaN(u)&&!isNaN(d)&&!isNaN(o)&&!isNaN(a)&&(l.textContent=s(u),m.textContent=s(d),f.textContent=s(o),h.textContent=s(a)),c<=0&&v()}n.addEventListener("click",()=>{r&&!i&&T()});function v(){e&&(clearInterval(e),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",e=null,i=!1,n.disabled=!1)}function s(t){return("0"+t).slice(-2)}function I(t){const o=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),D=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:a,minutes:D,seconds:p}}C(N,b);
//# sourceMappingURL=commonHelpers.js.map
