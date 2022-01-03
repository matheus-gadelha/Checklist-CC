$(document).ready(function(){

    let cont = 0;
    let control = 8;

    document.querySelector("#btn_add").addEventListener("click", function(){
        let clone = document.querySelector("#equipe").cloneNode(true);
        let destino = document.querySelector("#linha");
        
        destino.appendChild(clone);
        
        cont++;
        
        if(cont >= control){
            document.querySelector("#btn_add").disabled = true;
            document.querySelector("#msn").innerHTML = "Você não pode adicionar mais campos";
        }
    
    });

    document.querySelector("#rm").addEventListener("click", function(){
    let node = document.querySelector("#linha");
    node.removeChild(node.lastElementChild);
    
    cont--;
    
    if(document.querySelector("#btn_add").disabled == true){
        document.querySelector("#btn_add").disabled = false;
        document.querySelector("#msn").innerHTML = "Agora você pode adicionar mais campos";
    }
    });

});
