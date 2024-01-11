function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    var toggleSpan = document.querySelector(`[onclick="toggleVisibility('${elementId}')"] .toggle img`);
  
    if (element.style.display === 'none') {
      element.style.display = 'block';
      toggleSpan.src = 'assets/images/icon-minus.svg'; // Substitua pelo caminho real do ícone minus
    } else {
      element.style.display = 'none';
      toggleSpan.src = 'assets/images/icon-plus.svg'; // Substitua pelo caminho real do ícone plus
    }
  }
  