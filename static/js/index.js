

window.onload = () => {

    function navbarScroll(){
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
                    for(let i=0; i<3;i++){
                        document.getElementsByClassName('nav-line')[i].style.backgroundColor = 'black'
                    }
                }
                else{
                    let appendix= document.getElementById("navbar")
                    appendix.classList.remove("navbar-light")
                    appendix.classList.add("navbar-dark")
                    for(let i=0; i<3;i++){
                        document.getElementsByClassName('nav-line')[i].style.backgroundColor = 'white'
                    }
                }   
            })
        }
    }

    function navbarBackground1(){
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

    function navbarCollapse() {
        const navbar = document.getElementById('navbar')
        const toggleBtn = document.getElementById('toggle-btn')
        const burgerBtn = document.getElementById('burger-button')
        toggleBtn.addEventListener("click", function(){
            if (toggleBtn.classList.contains('collapsed')) {
                setTimeout(() => {
                    navbar.classList.remove('navbar-background')
                    navbar.style.backgroundColor = 'rgba(0,0,0,0)'
                    document.body.style.overflow = 'visible'
                }, 340)
            } else {
                navbar.classList.add('navbar-background')
                navbar.style.backgroundColor = '#005E5D'
                document.body.style.overflow = 'hidden'
            }
        })
    }


    function cardStack() {
        const stickyCards = document.getElementsByClassName('sticky-card')
        for(let i= 1; i < stickyCards.length; i++){
            stickyCards[i].style.top = 60 + (i * 20) + 'px'
        }
    }

    function moveImage(){
        let _1vh = Math.round(window.innerHeight / 100)
        let a = document.body.clientHeight
        let b =document.getElementById('about').clientHeight
        let c = document.getElementById('footer').clientHeight
        let d = a - (b + c) -500
        window.addEventListener('scroll', () => {
            if(scrollY >= d){
                document.getElementById('moveImage').style.transform = ' translateY(' + ((d - scrollY) *0.2 ) + 'px)'
            }
        })
    }

    navbarScroll()
    navbarCollapse()
    cardStack()
    moveImage()

}
