// Show Sidebar
const nav_Menu = document.getElementById('sidebar'),
    nav_Toggle = document.getElementById('nav_toggle'),
    nav_Close = document.querySelector('.nav-close')

    // Show Sidebar
    if(nav_Toggle) {
        nav_Toggle.addEventListener('click', () => {
            nav_Menu.classList.add('show-sidebar')
        })
    }

    // Hide Sidebar
    if(nav_Close) {
        nav_Close.addEventListener('click', () => {
            nav_Menu.classList.remove('show-sidebar')
        })
    }


// Typing Animation
let typed = new Typed('.typing', {
    strings: ['Frontend Engineer','Web designer', 'Graphics designer' ],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})


//Light and Dark mode
const lightDark = document.querySelector('.day-night');

lightDark.addEventListener('click', () => {
    lightDark.querySelector('i').classList.toggle('uil-sun');
    lightDark.querySelector('i').classList.toggle('uil-moon');
    document.body.classList.toggle('light');
})

window.addEventListener('load', () => {
    if(document.body.classList.contains('light')) {
        lightDark.querySelector('i').classList.add('uil-sun');
    } else {
        lightDark.querySelector('i').classList.add('uil-moon')
    }
})

// Expertise 
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('expertise-active')
        })

        target.classList.add('expertise-active')

        tabs.forEach(tab => {
            tab.classList.remove('expertise-active')
        })

        tab.classList.add('expertise-active')
    }) 
})

// Project (Mixitup filter)
let mixerPortfolio = mixitup('.project-container', {
    selectors: {
        target: '.project-card'
    },
    animation: {
        duration: 300
    }
});

// link active projects to display
const linkProject = document.querySelectorAll('.project-item');

linkProject.forEach(lp => lp.addEventListener('click', activeProject))

function activeProject() {
    linkProject.forEach(lp => lp.classList.remove('active-project'))
    this.classList.add('active-project')
}


// Portfolio popup
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('project-button')) {
        togglePortfolioPopup()
        portfolioItemDetails(e.target.parentElement)  
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open')
}

document.querySelector('.portfolio-close').addEventListener('click', togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.project-img').src;

    document.querySelector('.portfolio-subtitle span').innerHTML = portfolioItem.querySelector('.project-title').innerHTML;

    document.querySelector('.portfolio-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

// Services Modal
const modalViews = document.querySelectorAll('.services-modal')
const modalBtns = document.querySelectorAll('.services-button')
const modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

//Testimonial swiper
let swiper = new Swiper(".testimonials-container ", {
    spaceBetween: 24,
    loop:true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
});


// contact me
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus')
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value === "") {
        parent.classList.remove('focus')
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)

})

// Scroll section active link
const sections = document.querySelectorAll('section[id]');

//add event listeners for the scroll
window.addEventListener('scroll', navHighLighter);

function navHighLighter(){
    //get scroll position
    let scrollY = window.pageYOffset;
    //loop throught sections to get height, top and Id values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

    // if current scroll position enters the space where current section on screen is, add .active class to the corresponding navaigation link, else remove it
    // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
    });

}
