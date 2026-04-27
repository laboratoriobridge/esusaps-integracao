var stickyComponents = function() {
  var startPosY = 110;
  var breadcrumb = document.querySelector('.breadcrumb-wrapper');
  var sidebar = document.querySelector('.sidebar-content');

  if (window.scrollY > startPosY) {
    breadcrumb.classList.add('sticky');
    sidebar.classList.add('sticky');
    sidebar.style.marginTop = (window.scrollY - startPosY) + 'px';
  } else {
    breadcrumb.classList.remove('sticky');
    sidebar.classList.remove('sticky');
    sidebar.style.marginTop = '0';
  }
};

window.addEventListener('load', stickyComponents);
window.addEventListener('scroll', stickyComponents);
