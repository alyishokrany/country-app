let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');
let resultEl = document.getElementById('result');


searchBtn.addEventListener('click' , () => {
    let countryName = countryInp.value ;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true` ;
   fetch(finalUrl)
   .then((response) => response.json())
   .then((data) => {

    resultEl.innerHTML =` <img src="${data[0].flags.svg}" class="flag-img" >
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
    <div class="data-wrapper">
   <h4>Capital:</h4>
   <span>${data[0].capital[0]}</span>
    </div>

    </div>
    <div class="wrapper">
    <div class="data-wrapper">
   <h4>continent:</h4>
   <span>${data[0].continents[0]}</span>
    </div>

    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
   <h4>population
   :</h4>
   <span>${data[0].population
   }</span>
    </div>

    </div>

    <div class="wrapper">
    <div class="data-wrapper">
   <h4>currency
   :</h4>
   <span>${data[0].currencies[Object.keys(data[0].currencies)].name
   }</span>
    </div>

    </div>

    <div class="wrapper">
    <div class="data-wrapper">
   <h4>common languages:</h4>
   <span>${Object.values(data[0].languages).toString().split(",").join(",") }</span>
    </div>

    </div>
    `;
   
   }).catch(() =>{
    if(countryName.length == 0){
        resultEl.innerHTML=`<h3>The input field cannot be empty</h3>`
    }
    else{
        resultEl.innerHTML=`<h3>Please enter a valid country name</h3>`
    }
   })
  
});


