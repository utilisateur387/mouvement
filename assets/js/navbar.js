const toggleNavbar = () => {
  let prevScrollpos = window.pageYOffset;
  const header = document.getElementById("header");

  document.addEventListener('scroll', () => {
    navbarEvent();
  })

  header.addEventListener('mouseover', () => {
      navbarEvent();
  })

  header.addEventListener('mouseleave', () => {
      navbarEvent('mouseleave');
  })

  const navbarEvent = (action = null) => {
    let w = window.innerWidth;
    const navbar = document.getElementById("navbar");
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos && w > 1024 || action == "mouseleave") {
      navbar.style.top = "70px";
    } else if (w > 1024) {
      navbar.style.top = "122px";
    }
    prevScrollpos = currentScrollPos;
  }
}

const toggleMenuMobile = () => {
  const burgerMenu = document.getElementById('burger-menu-mobile');
  const menuMobile = document.getElementById('menu-mobile');

  burgerMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('display-block');
  })

  let w = window.innerWidth;
  window.addEventListener('resize', () => {
    if(w > 1024 && menuMobile) {
      console.log('1024 +');
      menuMobile.classList.remove('display-block');
    }
  });

}

toggleMenuMobile();
toggleNavbar();

