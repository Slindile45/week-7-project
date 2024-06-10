function searchCity(city) {
    let apiKey = "33949tfa196efed4510bo9b38e1b5809";
    let apiUrl = 

}

function handleSearchSubmit(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);


}

let searchFormElemrnt = document.querySelector("#search-form");
searchFormElemrnt.addEventListener("submit", handleSearchSubmit);