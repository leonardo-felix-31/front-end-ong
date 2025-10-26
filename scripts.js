const links = document.querySelectorAll('nav ul.flex--nav li a');
const currentUrl = window.location.href;

links.forEach(link => {
  if(link.href === currentUrl) {
    link.setAttribute('aria-current', 'page');
  } else {
    link.removeAttribute('aria-current');
  }
});
