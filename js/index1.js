document.querySelectorAll('.calc .digits-oper')
.forEach( el => el.addEventListener('click', presedDigitOrOper));
    
    
      function presedDigitOrOper(ev){
        const displ = document.querySelector('.calc .displ');
        displ.value += ev.target.innerText;
        
    }

    document.querySelector('.calc .eval').addEventListener('click', evaluate);
    
    function evaluate(){
        const  displ = document.querySelector('.calc .displ');
        
        displ.value = eval(displ.value);
        
    }
    
