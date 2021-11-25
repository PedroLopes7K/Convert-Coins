let InputValue = document.querySelector('#ValorReal')
const BtnConvert = document.querySelector('#Btn')
const BtnClean = document.querySelector('.delete')
let resultado = document.querySelector('.resultado')
let html = document.querySelector('h2.title')
let options = document.querySelectorAll('.menuitem')

// conversao do dia 17/11/2021 as 00:10
const BTC = 325001.78
const Dolar = 5.53
const Libra = 7.46
const Euro = 6.27

// nao e possivel adicionar eventlistener em uma lista de variaveis
for (const option of options) {
  option.addEventListener('click', verify)
}

// DEFINIR QUAL CALCULO FAZER ATRAVES DO HTML.INNERHTML NA FUNCAO CONVERT()
function verify(e) {
  let modal = document.querySelector('.content')
  modal.classList.add('visible')
  switch (e.target.innerHTML) {
    case 'BITCOIN':
      html.innerHTML = 'CONVERSOR BTC'
      BtnConvert.style.borderColor = '#2ecc71'
      clean()
      break
    case 'EURO':
      html.innerHTML = 'CONVERSOR EUR'
      BtnConvert.style.borderColor = 'rgb(35, 35, 189)'
      clean()
      break
    case 'DOLAR':
      html.innerHTML = 'CONVERSOR USD'
      BtnConvert.style.borderColor = 'rgb(196, 31, 31)'
      clean()
      break
    case 'LIBRA':
      html.innerHTML = 'CONVERSOR GBP'
      BtnConvert.style.borderColor = 'cyan'

      clean()
      break
  }
}

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    convert()
  }
})

BtnConvert.addEventListener('click', convert)
BtnClean.addEventListener('click', clean)

function convert() {
  let result = 0
  switch (html.innerHTML) {
    case 'CONVERSOR BTC':
      result = InputValue.value / BTC
      // alert(parseFloat(result).toFixed(5))
      resultado.innerHTML = `<h2>O Resultado é : ${parseFloat(result).toFixed(
        5
      )} BTC </h2>`
      resultado.style.color = 'white'
      break
    case 'CONVERSOR EUR':
      result = InputValue.value / Euro
      resultado.innerHTML = `<h2>O Resultado é : € ${parseFloat(result).toFixed(
        2
      )}  </h2>`
      break
    case 'CONVERSOR USD':
      result = InputValue.value / Dolar
      resultado.innerHTML = `<h2>O Resultado é : $ ${parseFloat(result).toFixed(
        2
      )}  </h2>`
      break
    case 'CONVERSOR GBP':
      result = InputValue.value / Libra
      resultado.innerHTML = `<h2>O Resultado é : £ ${parseFloat(result).toFixed(
        2
      )}  </h2>`
      break
  }

  if (InputValue.value == '') {
    resultado.innerHTML = '<h2> Insira algum valor! </h2>'
  }

  if (InputValue.value == isNaN) {
    resultado.innerHTML = '<h2> Insira um valor numerico! </h2>'
  }
}

function clean() {
  InputValue.value = ''
  resultado.innerHTML = ''
}

// REGRAS DE NEGOCIO

// right button block
document.addEventListener('contextmenu', event => event.preventDefault())

// CTRL BUTTON BLOCK
window.onkeydown = function (e) {
  let key = e.keyCode || e.charCode || e.which
  if (key == 17) {
    alert('Tecla Invalida.')
  }
}

InputValue.addEventListener('keypress', function (evt) {
  switch (evt.key) {
    case 'e':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
    case 'E':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '-':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '+':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '*':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '/':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
  }
})
