import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(value, delay, isValid) {
  const promise = new Promise((resolve, reject) => {
    const data = { value, delay };
    setTimeout(() => {
      if (isValid) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });

  return promise;
}
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;

  createPromise(null, delay, state === 'fulfilled')
    .then(data => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${data.delay}ms`,
        position: 'topRight',
      });
    })
    .catch(data => {
      iziToast.error({
        message: `❌ Rejected promise in ${data.delay}ms`,
        position: 'topRight',
      });
    });
});
