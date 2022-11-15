import './style.css';

document.addEventListener("DOMContentLoaded", ()=>{
    let resoult;
        async function LoadData(){
            let response = await fetch('/quotes.json');
            resoult = await response.json();
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
    
    
       
              });
    
  

