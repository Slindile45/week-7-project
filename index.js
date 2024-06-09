function handleSearchSubmit(event) {
    event.preventDefault();

    let searchIput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchIput.value;

}

let searchFormElemrnt = document.querySelector("#search-form");
searchFormElemrnt.addEventListener("submit", handleSearchSubmit);