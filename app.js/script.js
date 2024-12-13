
//const data = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa", "Uva", "Kiwi"];
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsList = document.getElementById("resultsList");

function searchItems() {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";

    const filteredData = data.filter(item => item.toLowerCase().includes(query));
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = "<li>No se encontraron resultados</li>";
    }
}

searchButton.addEventListener("click", searchItems);

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchItems();
    }
});
