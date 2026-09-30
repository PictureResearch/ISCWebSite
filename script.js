const button = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
button.addEventListener('click', () => {
 const expanded = button.getAttribute('aria-expanded') === 'true';
 button.setAttribute('aria-expanded', String(!expanded));
 navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', event => {
 if (event.target.closest('a')) {
  button.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
 }
});
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && navigation.classList.contains('open')) {
  navigation.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.focus();
 }
});
