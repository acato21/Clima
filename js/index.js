const key = "1719fc778e74260d6b02fc868f29703c"

const searchCity = document.querySelector('#input')
const city = document.querySelector('.cidade')
const climate = document.querySelector('.temp')
const forecast = document.querySelector('.texto-previsao')
const search = document.querySelector('.botao-busca')

search.addEventListener('click', cliquebotao)

function cliquebotao(){

    let cidade = searchCity.value

    dado(cidade)

}

async function dado(city){

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const result = await fetch(endpoint)
    .then(data => data.json())

    console.log(result)

}