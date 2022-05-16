
let foco = document.querySelector('img')

foco.onclick = function(){
    let mySrc = foco.getAttribute('src');
    if(mySrc==='images/focoOff.png'){
        foco.setAttribute('src','images/focoOn.png');
            //Prender led del arduino
    }
            else{
                foco.setAttribute('src','images/focoOff.png');
            } //Apagar led del arduino
        }

