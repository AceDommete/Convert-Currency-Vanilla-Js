// api = https://open.er-api.com/v6/latest/USD
const slct = document.querySelector('.select');
const from = document.querySelector('#from');
const span = document.querySelector('.converted');
const btn = document.querySelector('.get');
const fetching = async () => {
  const get_rates_raw = await fetch('https://open.er-api.com/v6/latest/USD');
  get_rates = await get_rates_raw.json();
  const arr = Object.keys(get_rates.rates);
  // console.log(get_rates.rates);
  arr.forEach((country) => {
    const newelem = document.createElement('option');
    newelem.innerText = country;
    newelem.setAttribute('value', country);
    slct.appendChild(newelem);
  });
  arr.forEach((country) => {
    const newelem = document.createElement('option');
    newelem.innerText = country;
    newelem.setAttribute('value', country);
    from.appendChild(newelem);
  });
};

fetching();

btn.addEventListener('click', () => {
  const amt = document.querySelector('.input').value;
  const to = slct.value;
  const frm = from.value;
  const netching = async () => {
    const get_rates_raw = await fetch(
      `https://open.er-api.com/v6/latest/${frm}`
    );
    get_rates = await get_rates_raw.json();
    console.log(get_rates.rates[to] * amt);
    span.innerHTML = `${frm} ${amt} is equivalent to : ${to} ${
      get_rates.rates[to] * amt
    }`;
  };
  netching();
});
