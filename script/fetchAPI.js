fetch('./api/v1/PLANETS.JSON')
.then((response) => response.json())
.then((data) => {
    let PLANETS = data
    fetch('./api/v1/CATEGORY.JSON')
        .then((response) => response.json())
        .then((data) => {
            let CATEGORY = data
            CATEGORY.forEach(c => {
                let list = document.getElementById('destination-list')
                list.innerHTML += `<h3>${c.name}</h3>`
                PLANETS.forEach(p => {
                    if(c._id == p.category){
                        list.innerHTML += `<div class="destination select" id="destination-select" onclick="destinationChoise(${p._id}, ${p.category})" data-id="${p._id}">${p.name}</div>`
                    }

                });
            });
        });
});