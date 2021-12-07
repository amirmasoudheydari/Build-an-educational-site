function myFunck(){
    let x = document.querySelector('#menu-ul');
    let y = document.querySelectorAll('#menu-ul .hidden');
    if(x.className === ''){
        
        x.className = 'respansive'
        y.forEach(element => {
            element.classList = 'show';
        });
    
    }else{
        x.className = ''
        let y = document.querySelectorAll('.show');
        y.forEach(element => {
            console.log(element);
            element.classList = ' md-show hidden';
        });
    }
   
    
}