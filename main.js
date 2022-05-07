//String
//number
// Bolean (true false)


window.addEventListener('scroll', onScroll);

onScroll()

// srollar e adiciona cor no nav
function onScroll() {
    showNavOnScroll()
    buttonShowTop()
    
    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(abount)
    activeMenuAtCurrentSection(contact)
    

}



// active Menu section on the moment

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  
    // verificar se a base está abaixo da linha alvo
  
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine
    
    // limites da seção
    const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}





//open menu

function openMenu() {
    document.body.classList.add('menu-expand');
}
// close Menu

function closeMenu() {
    document.body.classList.remove('menu-expand');
}

function showNavOnScroll() {
    if(scrollY > 0){
        navigantion.classList.add('scroll')
    }

    else {
        navigantion.classList.remove('scroll')
    }
}

function buttonShowTop() {
    if (scrollY > 400) {
        backToTopButton.classList.add('back')
    }

    else {
        backToTopButton.classList.remove('back')
    }
}

ScrollReveal({
    origin: 'top',
    distance: '38px',
    durantion: '400',
    reset: 'true',
}).reveal(`#home, 
#home h4,
#home img,
#home h1,
#home h3,
#home p,
#home a,
#services,
#services .cards,
#services .card, 
#abount, 
#abount header,
#abount p,
#abount h4,
#abount h3,
#abount img,
#contact,
#contact header,
#contact h2,
#contact a
`);


