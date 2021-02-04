// const catFacts = document.querySelector('.cat-facts')

// fetch(catUrl)
// .then (response => response.json())
// .then (data => {
//   console.log(data)
//   const catFact = data[0].text
//   document.querySelector('.cat-facts').innerHTML = `<p>${catFact}</p>`
  
// }

// const baseUrl = 'https://api.exchangeratesapi.io/latest?base='

// const fromCurrencyEl = document.querySelector('#convert-from')
// const fromAmountEl = document.querySelector('#from-amount-field')
// const toCurrencyEl = document.querySelector('#convert-to')
// const toAmountEl = document.querySelector('#to-amount-field')
// const finalAmountEl = document.querySelector('.final-amount')
// const convertButton = document.querySelector('.convert')
// console.log(fromCurrencyEl)

// let rates
// console.log({rates})

// fromCurrencyEl.addEventListener('change',(event)=>{
//   console.log("event", event.target.value)
// } )

// toCurrencyEl.addEventListener('change',(event)=>{
//   console.log("event", event.target.value)
// })

// convert.addEventListener('click',(event) => {
//   console.log("convert", event.target.convert)
//   console.log(fromCurrencyEl.value)
// })





// fetch ('baseUrl')
  
// .then(response => response.json())
// .then (data => {
//   console.log('working?', data)

//   fromCurrency = data.rates
//   console.log('fromCurrency is', fromCurrency)
// })


const urlBase = 'https://api.exchangeratesapi.io/latest?base='
const fromCurrency = document.querySelector('#convert-from')
const fromAmount = document.querySelector('.from-amount-field')
const toCurrency = document.querySelector('#convert-to')
const finalAmountDiv = document.querySelector('.final-amount')
const convertButton = document.querySelector('#convert')
const amount = document.querySelector('#to-amount-field')
console.log('toCurrency is', toCurrency)


convertButton.addEventListener('click',(event) => {
  console.log("convert", event.target)
  const fromCurrencyCode = fromCurrency.value.replace('"','')
  console.log(fromCurrencyCode.length)
  console.log('fromCurrency is', fromCurrency.value)
  const toCurrencyCode = toCurrency.value.replace('"','')
  console.log('toCurrency is', toCurrency.value)
  const convertAmount = amount.value
  
  console.log('amount is', amount.value)
  convert(fromCurrencyCode, toCurrencyCode, convertAmount)
})
// fetch (urlBase)
//   .then(response => response.json())
//   .then(data => {
//     console.log('working?', data)
//     fromCurrencyEl = data.rates
//     console.log('fromCurrencyEl is ', fromCurrencyEl)
//   })

  function convert (from, to, amount) {
  console.log(from)
    fetch(urlBase + from)
      .then(response => response.json())
      .then(data => {
        let rates = data.rates
        console.log(rates[to]) 
        calculate(rates[to], amount)
      })
  }
  
  function calculate (rate, amount) {
    console.log('Exchange rate is ', rate)
    let result = (amount * rate).toFixed(2)
    finalAmountDiv.innerHTML = `<p>${result}</p>`
    

  }





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