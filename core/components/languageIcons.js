document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const lang = this.getAttribute('data-lang');

    if (lang === 'pt') {
      alert('Idioma alterado para Português!'); 
      //Aqui eu vou adicionar a logica de troca de idioma depois
    } else if (lang === 'en') {
      alert('Language changed to English!');
      //Aqui eu vou adicionar a logica de troca de idioma depois
    }
  });
});