// テスト用
// document.getElementById("test").innerHTML = "JavaScriptテスト";

// console.log(document.getElementById("test"));

// 入力読み込み
const weatherForm = document.getElementById("weather-form");
// 気象データ取得
const cityInput = document.getElementById("city-input");
// 気象データ
const weatherResults = document.getElementById("weather-results")

weatherForm.addEventListener("submit" , (e) =>{
    // console.log(cityInput.value)
    e.preventDefault()
    getWeather(cityInput.value)
})

// 動作確認
// console.log(weatherForm);
// weatherResults.innerHTML = "テスト"
const getWeather = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=3678b9d22ea146b7aff150504252805&q=${city}&aqi=no`)
        .then(response => response.json())
    .then(jsonData => 
        weatherResults.innerHTML = `
            <div class="results-country">${jsonData.location.country}</div>
            <div class="results-city">${jsonData.location.name}</div>
            <div class="results-temp">${jsonData.current.temp_c}<span>℃</span></div>
            <div class="results-condition">
                <img src=${"https:"+jsonData.current.condition.icon} alt="icon">
                <span>${jsonData.current.condition.text}</span>
            </div>
            `
    )
}
