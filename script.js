// const catFacts = document.querySelector('.cat-facts')

// fetch(catUrl)
// .then (response => response.json())
// .then (data => {
//   console.log(data)
//   const catFact = data[0].text
//   document.querySelector('.cat-facts').innerHTML = `<p>${catFact}</p>`
  
// }

const fromCurrencyEl = document.querySelector('.convert-from')
const fromAmountEl = document.querySelector('.from-amount-field')
const toCurrencyEl = document.querySelector('.convert-to')
const toAmountEl = document.querySelector('.to-amount-field')
const finalAmountEl = document.querySelector('.final-amount')




fetch ('https://api.exchangeratesapi.io/latest')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const fromCurrencyEl = data[0].base
    console.log(fromCurrencyEl)
  })
  

const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

