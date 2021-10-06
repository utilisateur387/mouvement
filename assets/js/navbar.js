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

toggleNavbar();
