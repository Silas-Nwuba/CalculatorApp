const display =  document.getElementsByClassName("display")[0];
display.style.fontSize = "30px";
const buttons = Array.from(document.getElementsByClassName("button-content"));
buttons.map(button =>{
    button.addEventListener("click", (e) =>{
        try {
            switch(e.target.innerText){
                case "CE" :
                    if(e.target.innerText){
                        display.innerText = '';
                        break;
                    }
                    case "=" :
                         display.innerText = eval(display.innerText);
                        break;
                default: 
                display.innerText += e.target.innerText;
            }
        } 
        catch{
           display.innerText = "syntax error";
        }
      
    })
}) 
  



