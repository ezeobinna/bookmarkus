const primaryNav = document.querySelector(".navbar");
const navToggle = document.querySelector(".navbarbutton");
const navbar = document.getElementById('navbar');
const navbarbutton = document.getElementById('navbarbutton');

document.onclick = function(e){
    if(e.target.id !== 'navbar' && e.target.id !== 'navbarbutton' ) {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute ('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute ('data-visible', true);
        navToggle.setAttribute ('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});


//feature tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
});


//questions accordion
const skillsContent = document.getElementsByClassName('question_content'),
      skillsHeader = document.querySelectorAll('.question_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'question_content question_close'
    } if (itemClass === 'question_content question_close') {
        this.parentNode.className = 'question_content question_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



//login form
// function toggle() {
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active');
    // var wrapper = document.getElementById('wrapper');
    // wrapper.classList.toggle('active');
// };


document.querySelector("#show_login").addEventListener("click",function(){
    document.querySelector(".wrapper").classList.add("active");
    document.querySelector('.container').classList.add("active");
});

document.querySelector(".close_btn").addEventListener("click",function(){
    document.querySelector(".wrapper").classList.remove("active");
    document.querySelector(".container").classList.remove("active");
});

