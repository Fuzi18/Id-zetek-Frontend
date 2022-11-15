import './style.css';

document.addEventListener("DOMContentLoaded", ()=>{
    let result;
        async function LoadData(){
            let response = await fetch('/quotes.json');
            result = await response.json();
        }
    
        LoadData();
    
        function printData(quotes){
            document.getElementById('quoteList').textContent = "";
    
            for (let q of quotes){
                let li = document.createElement('li');
                li.innerHTML = q.quote + " " + "<br>" + q.author + "<hr>";
                document.getElementById('quoteList').appendChild(li);
            }
            
        }
    
    
        function quotesload(quotesLista){
            let a = document.getElementById("all");
    
            quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));
    
            for(let e of quotesLista){
                let li = document.createElement("li");
                li.innerHTML = e.author  + "\n\t-" + e.quote;
    
                p.appendChild(li);
            }
        }
        document.getElementById("osszes").addEventListener("click", ()=>{
            quotesload(result.quotes);
    
    
    
            LoadData();
        })
    
        
       
    });
    
  

