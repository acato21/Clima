const key = "1719fc778e74260d6b02fc868f29703c"

const search_city = document.querySelector('input')
const city = document.querySelector('.cidade')
const climate = document.querySelector('.temp')
const forecast = document.querySelector('.texto-previsao')
const search = document.querySelector('.botao-busca')

class Temp{

    async contructor(root){
        this.root = document.querySelector('.caixa-maior')
        
        this.endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${search_city.value}&limit=1&appid=1719fc778e74260d6b02fc868f29703c`
        this.info = await this.search()
        console.log(this.info)
    }



    async search(){
        let data
        return data = await fetch(this.endpoint)
        .then(data => data.json())
        .then(({name, lon, lat}) => {name,lon, lat})
        
         
    }
}