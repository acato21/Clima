const key = "1719fc778e74260d6b02fc868f29703c"

const searchCity = document.querySelector('#input')
const city = document.querySelector('.cidade')
const climate = document.querySelector('.temp')
const situ = document.querySelector('.texto-previsao')
const humidty = document.querySelector('.umidade')
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
    .then(data => ({

        name:  data.name,
        temp: data.main.temp,
        weather: data.weather[0].description,
        umidade: data.main.humidity
    }))


    innerHtml(result)

}

function innerHtml(result){

    city.textContent = result.name
    climate.textContent = `${result.temp}°`
    situ.textContent = result.weather
    humidty.textContent = `${result.umidade}%`

}