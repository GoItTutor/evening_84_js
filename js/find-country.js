'use strict';

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.search-input');
const outputErrorEl = document.querySelector('.output-error');
const countryCardEl = document.querySelector('.country-card');
const spinnerEl = document.querySelector('.spinner');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Країна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столиця:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Населення:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площа:</strong> ${area} км<sup>2</sup></li>`;
};

const handleSearchCountry = ({ target }) => {
  const countryName = target.value.trim().toLowerCase();

  if (!countryName) {
    outputErrorEl.textContent = '';
    countryCardEl.innerHTML = '';

    return;
  }

  const seekedCountryData = countries.find(
    ({ name }) => name.toLowerCase() === countryName
  );

  if (!seekedCountryData) {
    countryCardEl.innerHTML = '';

    outputErrorEl.textContent = 'Такої країни немає у базі даних';

    return;
  }

  outputErrorEl.textContent = '';
  countryCardEl.innerHTML = createCountryCard(seekedCountryData);
};

searchInputEl.addEventListener('input', _.debounce(handleSearchCountry, 700));

searchInputEl.addEventListener(
  'input',
  _.debounce(
    () => {
      countryCardEl.innerHTML = '';
      outputErrorEl.textContent = '';

      spinnerEl.classList.toggle('visible');
    },
    690,
    {
      leading: true,
      trailing: true,
    }
  )
);
