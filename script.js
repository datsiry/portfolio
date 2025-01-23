window.onload = function () {

    var bonjour = document.querySelector('h3.bonjour')
    var fullstack = document.querySelector('h1.fullstack')
    var fullstackText = "Développeur web fullstack"
    var bonjourText = "Bonjour, je suis Tsiry"
    var para = document.querySelector('.accueilParagraphe p')
    var pText = "Passionné par l'évolution du technologie, après mon BAC, j'ai continué mes études dans une institut supérieur en informatique. Après trois années de formation, on m'a remis mon diplôme de Licence Professionnelle en informatique de gestion en 2023. Ma specialité et le développement des sites et applications web"
    var b = -1
    var p = -1
    var f = -1
    function pfunction(){
        if(p< pText.length){
            para.textContent += pText.charAt(p)
        }
        p++
        setTimeout(pfunction,300)
    }
    function fullstackFunction() {
        if (f < fullstackText.length) {
            fullstack.textContent += fullstackText.charAt(f)
        }
        f++
        setTimeout(fullstackFunction, 200)
        if(f > fullstackText.length){
            pfunction()
        }
    }
    function bonjourFunction() {
        if (b < bonjourText.length) {
            bonjour.textContent += bonjourText.charAt(b)
        }
        b++
        setTimeout(bonjourFunction, 100)
        if (b > bonjourText.length) {
            fullstackFunction()
        }
    }
    bonjourFunction()
    var bar = document.querySelectorAll('.skill-bar .bar')
    var barItem = ['html','css','JavaScript','php','mysql']
    var br = 0
    function barFunction(){
        while(br < bar.length){
            var classN = barItem[br]
            var span = document.createElement('span')
            span.setAttribute('class',classN)
            bar[br].append(span)
            br++
        }
    }
    var circles = document.querySelectorAll('.circle')
    function animeC(){
        circles.forEach(e => {
            var dots = e.getAttribute('data-dots');
            var marked = e.getAttribute('data-percent')
            var percent = Math.floor(dots * marked / 100);
            var rotate = 360 / dots
            var points = ""
            for (i = 0; i < dots; i++) {
                points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
            }
            e.innerHTML = points
            var pointsMarked = e.querySelectorAll('.points');
            for (let i = 0; i < percent; i++) {
                pointsMarked[i].classList.add('marked')
            }
        })
    }
    var skillMain = document.querySelector('.skill-main')
    var observe = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                animeC()
                barFunction()
            }
        })
    })
    observe.observe(skillMain)
    var reseauxParent = document.querySelectorAll('#reseaux .row .col-md-4')
    reseauxParent.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            this.children[0].classList.add('hover')
            this.children[1].style.opacity = 1
        })
        el.addEventListener('mouseout', function () {
            this.children[0].classList.remove('hover')
            this.children[1].style.opacity = 0
        })
    })
}
