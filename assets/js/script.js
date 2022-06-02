const map =document.getElementById("map");
let defil;


window.addEventListener(
   "scroll",
    function(){
        /* console.dir(document);*/
        console.log(document.scrollingElement.scrollTop | window.scrollY);
        defil= document.scrollingElement.scrollTop | window.scrollY
       /* if(defil>=1200){   
            console.log("chagement de couleur");
            
            }else if(defil<=1200)
            {   
                console.log("chagement de couleur");
                } */

            if(defil+document.documentElement.clientHeight>=  document.scrollingElement.offsetHeight - 70) {
            /* alert("bas de page"); */
            map.style.opacity= 1;
            map.style.left=0;
        }
                    
                  
    }
)