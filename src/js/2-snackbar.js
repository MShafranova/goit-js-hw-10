import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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