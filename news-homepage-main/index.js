// Adicione estas modificações ao seu JavaScript

/* ... Seu código JavaScript existente ... */

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const closeBtn = document.querySelector('.close-btn');
  const menuField = document.querySelector('.menu-field');

  function showMenu() {
    menuField.style.display = 'flex';
    closeBtn.style.display = 'block';
    menuIcon.style.display = 'none';
  }

  function hideMenu() {
    menuField.style.display = 'none';
    closeBtn.style.display = 'none';
    menuIcon.style.display = 'block';
  }

  menuIcon.addEventListener('click', showMenu);
  closeBtn.addEventListener('click', hideMenu);
});
