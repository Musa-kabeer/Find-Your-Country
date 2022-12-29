'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////
///////
///
//

const renderCountry = data => {
  const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row">
            <span>👫</span>${(data.population / 1000000).toFixed(1)} people
            </p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.borders?.[0]}</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountry = country => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => res.json())
    .then(data => {
      const [data2] = data;
      renderCountry(data2), console.log(data2);
    });
};

const displayCountry = () => {
  getCountry(document.querySelector('.search-box').value);
  document.querySelector('.search-box').value = '';
};

// CONTROL WITH BUTTON,
btn.addEventListener('click', function () {
  displayCountry();
});

// CONTROL WITH EVENT
window.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    displayCountry();
  }
});
