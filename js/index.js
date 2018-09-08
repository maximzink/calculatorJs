document.querySelectorAll('.calc .button')
.forEach( el => el.addEventListener('click', presedDigitOrOper));
    
    
    function presedDigitOrOper(ev){
        const displ = document.querySelector('.calc .disp');
        displ.value += ev.target.innerText;
        
    }
