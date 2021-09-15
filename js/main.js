'use strict';
//Syntax sortend DOM
let _$ = document.querySelector.bind(document)
let _$$ = document.querySelectorAll.bind(document)

// SIDEBAR MINI 
let btnSidebarMini = _$('.sidebarMini__button')
let inputCheck = _$('#checkbox')

btnSidebarMini.onclick = () => {
    _$('.sidebarMini').classList.toggle('is-opened')
}
inputCheck.addEventListener('click', () => {
    _$('body').classList.toggle('darkMode')
});

//HEADER
let iconSearch = _$('#iconSearch')
let inpSearch = _$('.inpSearch')
let headerMenu = _$('.header__menu')
iconSearch.onclick = () => {
    inpSearch.style.opacity = '1'
    inpSearch.onblur = () => {
        inpSearch.style.opacity = '0'
    }
}
//DROPDOWN_MENU
let dropMenu = _$('.dropMenu')
let menu = _$('.dropMenu__content')
let dropMenuBg = _$('.dropMenu__background')
headerMenu.onclick = () => {
    dropMenu.style.transform = 'translateX(0)'
    menu.style.opacity = '1'
    dropMenuBg.style.opacity = '1'
    document.documentElement.style.overflow = "hidden"
    dropMenuBg.onclick = () => {
        dropMenu.style.transform = 'translateX(100%)'
        menu.style.opacity = '0'
        dropMenuBg.style.opacity = '0'
        document.documentElement.style.overflow = "scroll"
    }
    menu.style.overflowY = 'scroll'
}
//COVER
let coverText = _$('.cover__text').querySelector('.text-content');
let screenWidth = document.body.clientWidth;
if (screenWidth < 1035) {
    coverText.innerHTML = 'Always bring the best and most beautiful products.'
} else {
    window.addEventListener('resize', () => {
        let screenWidth2 = document.body.clientWidth;
        if (screenWidth2 < 1035) {
            coverText.innerHTML = 'Always bring the best and most beautiful products.'
        } else {
            coverText.innerHTML = 'Always bring the best and most beautiful products. Giving you good things for your body and mind.'
        }
    })
}

//FOOTER
let btnDropdown = _$('.footer__btnDropdown')
let dropdownMenu = _$('.footer__dropdownMenu')
btnDropdown.onclick = () => {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block'
    } else {
        dropdownMenu.style.display = 'none'
    }
}
btnDropdown.onblur = () => {
    dropdownMenu.style.display = 'none'
}

let _footerInfo = _$$('.footer__info')
let footerTitle = _$$('.footer__title')
let _footerContact = _$$('.footer__contact')
let _btnPlus = _$$('.btn-plus')
let _liLast = _$$('.li-last')
let btnPlus = [..._btnPlus]
let footerContact = [..._footerContact]
let [, ...footerInfo] = _footerInfo
let liLast = [..._liLast]

Array.from(footerTitle).forEach((e, index) => {
    e.onclick = () => {
        if (btnPlus[index].className.includes('fa-plus')) {
            btnPlus[index].className = btnPlus[index].className.replace('fa-plus', 'fa-minus')
            footerContact[index].style.display = 'block'
            footerInfo[index].style.borderWidth = 1 + 'px'
            liLast[index].style.marginBottom = '20px'
        } else {
            btnPlus[index].className = btnPlus[index].className.replace('fa-minus', 'fa-plus')
            footerContact[index].style.display = 'none'
            footerInfo[index].style.borderWidth = 0
            liLast[index].style.marginBottom = 0
        }
    }
    window.addEventListener('resize', () =>{
        if(window.innerWidth >= 620){
            footerContact[index].style.display = 'block'
        }
    })
})
//Back to Top + Scroll HEADER
let backToTop = _$('.backToTop')
let header = _$('.header')
let phone = _$('.phone')
let prePosition;
window.addEventListener('scroll', () => {
    if (prePosition > window.pageYOffset && window.pageYOffset > 900) {
        header.classList.add('header--move')
        header.style.position = 'fixed'
    } else {
        header.classList.remove('header--move')
        header.style.position = 'absolute'
    }
    if (prePosition > window.pageYOffset && window.pageYOffset > 100) {
        backToTop.style.visibility = "visible"
        backToTop.style.opacity = '1'
        backToTop.onclick = () => {
            window.scrollTo(0, 0)
        }
        phone.style.visibility = "visible"
        phone.style.opacity = '1'
    } else {
        backToTop.style.visibility = "hidden"
        backToTop.style.opacity = '0'
        phone.style.visibility = "hidden"
        phone.style.opacity = '0'
    }
    prePosition = window.pageYOffset
    window.addEventListener('resize', () => {
        prePosition = window.pageYOffset
    })
})

//LASTED PRODUCTS
let lastedCard = _$$('.lastedProduct__card')
let lastedCardArray = [...lastedCard]
let lastedCardImg = _$$('.shoesImg')
let lastedImg = [...lastedCardImg]
let lastedContent = _$$('.lastedProduct__cardContent')
let lastedText = [...lastedContent]

lastedCardArray.forEach(function (e, index) {
    lastedImg[index].style.width = (e.clientWidth - 67.75) + 'px'
    e.style.height = (e.clientWidth + 69.75) + 'px'
})
window.addEventListener('resize', () => {
    lastedCardArray.forEach(function (e, index) {
        lastedImg[index].style.width = (e.clientWidth - 67.75) + 'px'
        e.style.height = (e.clientWidth + 69.75) + 'px'
    })
})
// BREAKTHROUGH
let breakthroughLeft = _$('.breakthrough__left')
let _breakthroughImg = _$$('.breakthrough__left img')
let _breakthroughP = _$$('.breakthrough__number')
let breakthroughImg = [..._breakthroughImg]
let breakthroughP = [..._breakthroughP]


window.addEventListener('scroll', () => {
    let i = 0
    let positionBreakthrough = breakthroughLeft.getBoundingClientRect().top
    if (positionBreakthrough < 260) {
        if (positionBreakthrough < 260) {
            breakthroughImg[i].style.transform = 'translateY(20%)'
            breakthroughImg[i].style.opacity = '1'
            _$('.breakthrough__number.active').classList.remove('active')
            _breakthroughP[i + 1].classList.add('active')
        }
        if (positionBreakthrough < -90) {
            breakthroughImg[i].style.opacity = '0'
            i = 1
            breakthroughImg[i].style.opacity = '1'
            breakthroughImg[i].style.transform = 'translateY(20%)'
            _$('.breakthrough__number.active').classList.remove('active')
            _breakthroughP[i + 1].classList.add('active')
        }
        if (positionBreakthrough < -260) {
            breakthroughImg[i].style.opacity = '0'
            i = 2
            breakthroughImg[i].style.opacity = '1'
            breakthroughImg[i].style.transform = 'translateY(20%)'
            _$('.breakthrough__number.active').classList.remove('active')
            _breakthroughP[i + 1].classList.add('active')
        }
    } else {
        breakthroughImg.forEach((e) => {
            e.style.transform = 'translateY(0)'
        })
        _$('.breakthrough__number.active').classList.remove('active')
        _breakthroughP[0].classList.add('active')
    }

})




//Animation effect when onload browser
let slidingVisibility = _$$('.slidingVisibility')
let temp = []
window.onload = () => {
    Array.from(slidingVisibility).forEach((e, index) => {
        if (index < 2) {
            e.classList.add(`slide${index}`)
        } else {
            window.addEventListener('scroll', () => {
                temp[index] = e.getBoundingClientRect()
                if (temp[index].top < 600) {
                    e.classList.add(`slide${index}`)
                }
            })
        }
    })
}
