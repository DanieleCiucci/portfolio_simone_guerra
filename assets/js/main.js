// Segnala le immagini non ancora esportate da Figma (es. pagina Signal)
document.querySelectorAll('.media[data-file] img').forEach((img) => {
  const markMissing = () => img.closest('.media').classList.add('is-missing');
  if (img.complete && img.naturalWidth === 0) markMissing();
  img.addEventListener('error', markMissing);
});

// Form contatti: apre il client email con il messaggio precompilato
const form = document.querySelector('[data-mailto-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Nuovo progetto da ${data.get('nome')}`;
    const body = `${data.get('messaggio')}\n\n${data.get('nome')}\n${data.get('email')}`;
    window.location.href =
      `mailto:${form.dataset.mailtoForm}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
