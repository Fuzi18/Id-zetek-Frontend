(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{let e;async function t(){let t=await fetch("/quotes.json");e=await t.json()}t(),document.getElementById("osszes").addEventListener("click",(()=>{!function(e){document.getElementById("all"),e=e.sort(((e,t)=>e.author.localeCompare(t.author)));for(let t of e){let e=document.createElement("li");e.innerHTML=t.author+"\n\t-"+t.quote,p.appendChild(e)}}(e.quotes),t()})),document.getElementById("abc").addEventListener("click",(async()=>{let e=await fetch("/quotes.json");!function(e){document.getElementById("quoteList").textContent="";for(let t of e){let e=document.createElement("li");e.innerHTML=t.quote+" <br>"+t.author+"<hr>",document.getElementById("quoteList").appendChild(e)}}((await e.json()).quotes.sort((function(e,t){return e.author.toUpperCase(),t.author.toUpperCase(),e.author<t.authornd?-1:e.author>t.author?1:0})))})),document.getElementById("the").addEventListener("click",(async()=>{let e=[],t=await fetch("/quotes.json"),n=(await t.json()).quotes.filter((e=>e.quote.includes("the")||e.quote.includes("The")));for(let t of n){let n=t.quote+"\n\t-"+t.author;n=n.replaceAll("The ","<b>The </b>"),n=n.replaceAll("the ","<b>the </b>"),e.push(n)}let o=document.getElementById("theList");for(let t of e){let e=document.createElement("li");e.innerHTML=t,o.appendChild(e)}}))}))})();