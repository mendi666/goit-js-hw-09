const formRef = document.querySelector('.form');

const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

formRef.addEventListener('submit', submitCreatePromises);

function submitCreatePromises(e) {
  e.preventDefault();

  let delay = delayRef.valueAsNumber;
  const stepValue = stepRef.valueAsNumber;
  const amountValue = amountRef.valueAsNumber;

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        window.alert(`✅ Resolved promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        window.alert(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += stepValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
