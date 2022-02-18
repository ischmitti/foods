
function navbarScroll(){



    document.addEventListener("DOMContentLoaded",function(){

        if(window.location.pathname != "/"){
            let appendix= document.getElementById("navbar")
            appendix.classList.remove("navbar-dark")
            appendix.classList.add("navbar-light")
            appendix.style.color="white !important"
        }else{

            document.addEventListener('scroll',function(e){
                if(window.scrollY > window.innerHeight){
                    let appendix= document.getElementById("navbar")
                    appendix.classList.remove("navbar-dark")
                    appendix.classList.add("navbar-light")
                    appendix.style.color="white !important"
                }
                else{
                    let appendix= document.getElementById("navbar")
                    appendix.classList.remove("navbar-light")
                    appendix.classList.add("navbar-dark")
                }   
                
            })
        }
    })
}

navbarScroll()

function navbarBackground(){

    let count = 0
    document.getElementById("toggle-btn").addEventListener("click", function(){
        if(count % 2==0){
            document.getElementById("navbar").classList.add("navbar-background")
        }else{
            document.getElementById("navbar").classList.remove("navbar-background")
        }
        count ++;
    })
}


navbarBackground()