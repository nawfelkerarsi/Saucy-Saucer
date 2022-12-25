state = [from = false, to = false]
        destination = {"from": null,"to": null}
        let step = 1
        setStatus =1
        detail = {
            "service" : null,
            "from": {
                "planetId": null,
                "planetName": null,
                "categoryName": null
            },
            "to": {
                "planetId": null,
                "planetName": null,
                "categoryName": null
            },
            "date": {
                "weekInFrench": null,
                "day": null,
                "monthInFrench": null,
                "time": null
            },
            "distance": null,
            "adults" : 1,
            "child": 0,
            "total": null
        }

        changeStatus = ((status) => {
            if(status == 1){

                document.getElementById("status").innerHTML = "Allons ailleurs, ensemble.";
            }
            else if(status == 2){
                document.getElementById("status").innerHTML = "Où pouvons-nous vous prendre en charge ?";
            }
            else if(status == 3){
                if(destination['from'] ){
                    document.getElementById("status").innerHTML = "Où allez-vous ?";
                    if(destination['to']){
                        document.getElementById("status").innerHTML = "Pour combien d'adultes ? <br/> Et combien d'enfants ?";
                    }
                }
            }
            else if(status == 4){
                document.getElementById("status").innerHTML = "Quand voulez-vous décoller ?";
            }
            else if(status == 5){
                document.getElementById("status").innerHTML = "Vous y êtes presque !";
            }

        })
        displayDeparture = ((n) => {
            document.getElementById("from-select-month").innerHTML = ""
            document.getElementById("from-select-departure").innerHTML = ""
            fetch('./api/v1/DEPARTURES.JSON')
            .then((response) => response.json())
            .then((data) => {
                let month = []
                let departures = []
                data.forEach(element => {
                    if((element.fromPlanetId == detail["from"]["planetId"]) && (element.toPlanetId == detail["to"]["planetId"])){
                        let getMonth = new Date(element.date*1000)
                        getMonth = getMonth.getMonth()
                        if(!month.includes(getMonth)){
                            month.push(getMonth)
                        }
                        let getWeekDay  = new Date(element.date*1000)
                        getWeekDay = getWeekDay.getDay()
                        let getDay  = new Date(element.date*1000)
                        getDay = getDay.getDate()
                        departures.push({
                                "id": element._id,
                                "day": getDay,
                                "weekDay": getWeekDay,
                                "month": getMonth,
                                "time": element.time
                        })
                    }
                })
                month.sort();
                departures.sort(function (a, b) {
                return a.day - b.day;
                });
                monthInFrench = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
                weekInFrench = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
                found = []
                month.forEach(element => {
                    found.push(element)
                    document.getElementById("from-select-month").innerHTML += `<div class="month-case" id="month-${element}" onclick="displayDeparture(${element})">${monthInFrench[element]}</div>`
                });
                if(n==0) n = found[0];
                document.getElementById("month-"+(n.toString())).classList.add("selected")
                departures.forEach(element => {
                    if(element.month == n){
                        let supp = 0
                        var [before, after] = element.time.split(":")

                        if(before == "15") supp=200;
                        if(before == "16") supp=400;
                        if (before == "17") supp= 800;
                    document.getElementById("from-select-departure").innerHTML += `<div class="select departure" id="departure" onclick="step4(${element.id},${(detail.total)+(supp)})">
                                <div class="title"><div>${weekInFrench[element.weekDay]}, ${element.day} ${monthInFrench[element.month]}</div><div class="description houre">${element.time}</div></div>
                                <div class="price">${(detail.total)+(supp)}€</div>`
                    }
                });
            })
        })
        step4 = ((n, p)=> {
            document.getElementById("step3").style.display = "none"
            document.getElementById("step4").style.display = ""
            fetch('./api/v1/DEPARTURES.JSON')
            .then((response) => response.json())
            .then((data) => {
                monthInFrench = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
                weekInFrench = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

                data.forEach(element => {
                    if(element._id == n){
                        let getMonth = new Date(element.date*1000)
                        getMonth = getMonth.getMonth()
                        let getWeekDay  = new Date(element.date*1000)
                        getWeekDay = getWeekDay.getDay()
                        let getDay  = new Date(element.date*1000)
                        getDay = getDay.getDate()
                    detail['date']['weekInFrench'] = weekInFrench[getWeekDay]
                    detail['date']['day'] = getDay
                    detail['date']['monthInFrench'] = monthInFrench[getMonth]
                    detail['date']['time'] = element.time
                    detail['total'] = p
                    document.getElementById("card").innerHTML += `<div style="display: flex; gap: 30px; border-top: solid #C6C6C6 1px; padding-top: 30px"><div>Départ le ${weekInFrench[getWeekDay]}, ${getDay} ${monthInFrench[getMonth]} <div class="description">${element.time}</div></div></div>`
                    document.getElementById("card").innerHTML += `<div style="display: flex; gap: 30px; border-top: solid #C6C6C6 1px; padding-top: 10px"><div>Total : ${p}€</div></div>`
                    document.getElementById("card").classList.add("last");
                    
                }
                });
            })
            //
            changeStatus(5)

        })
        step3 = (() => {
            document.getElementById("step2").style.display = "none"
            document.getElementById("step3").style.display = ""
            document.getElementById("card").innerHTML += `<div style="display: flex; gap: 30px; border-top: solid #C6C6C6 1px; padding-top: 30px"><i class="fa-solid fa-arrow-right" style="transform: rotate(-45deg);"></i><div>${detail['from']['planetName']}</div><div class="description">${detail['from']['categoryName']}</div></div>`
            document.getElementById("card").innerHTML += `<div style="display: flex; align-items: center; gap: 10px"><div style="background-color: #C6C6C6; height: 1px; width: 100%"></div><div class=description style="text-align: center">${detail['distance']+2} heures de vol</div><div style="background-color: #C6C6C6; height: 1px; width: 100%"></div></div>`
            document.getElementById("card").innerHTML += `<div style="display: flex; gap: 30px;"><i class="fa-solid fa-arrow-right" style="transform: rotate(45deg);"></i><div>${detail['to']['planetName']}</div><div class="description">${detail['to']['categoryName']}</div></div>`
            document.getElementById("card").innerHTML += `<div style="display: flex; gap: 30px; border-top: solid #C6C6C6 1px; padding-top: 30px"><div style="width: calc(40%)"><i class="fa-solid fa-person";"></i> x ${detail['adults']} Adultes </div><div><i class="fa-solid fa-child";"></i> x ${detail['child']} Enfants </div></div>`
            setStatus = 4
            displayDeparture(0)
            changeStatus(setStatus)

        })
        step2 = ((n) => {
            const ufo1 = `<div class="title">Détails de la commande</div><div style="display: flex; gap: 30px"><model-viewer src="ressouces/ufo1.glb" orientation="0deg 0deg 0deg" touch-action="pan-y" scale="1 1 1" exposure="0.5" style="height: 70px; width: 100px;" shadow-intensity="1"></model-viewer><div class="content service"><div class="title">Saucy Classic</div><div class="description">Notre formule habituelle. Comme un voyage en fusée, mais celui-ci vous est réservé.</div></div></div>`
            const ufo2 = `<div class="title">Détails de la commande</div><div style="display: flex; gap: 30px"><model-viewer src="ressouces/ufo2.glb" orientation="0deg 0deg 0deg" touch-action="pan-y" scale="1 1 1" exposure="0.5" style="height: 70px; width: 100px;" shadow-intensity="1"></model-viewer><div class="content service"><div class="title">Saucy Green</div><div class="description"> Un voyage plus respectueux de l'écologie avec nos soucoupes basse consommation. Appréciez le calme des soucoupes électriques </div></div></div>`
            const ufo3 = `<div class="title">Détails de la commande</div><div style="display: flex; gap: 30px"><model-viewer src="ressouces/ufo3.glb" orientation="0deg 0deg 0deg" touch-action="pan-y" scale="1 1 1" exposure="0.5" style="height: 70px; width: 100px;" shadow-intensity="1"></model-viewer><div class="content service"><div class="title">Saucy Comfort</div><div class="description"> La classe affaire du voyage haut de gamme. Ne manquez de rien à bord afin d'arriver à bon port en toute sérénité. </div></div></div>`
            switch (n) {
                case 1:
                    document.getElementById("card").innerHTML = ufo1
                    break;
                case 2:
                    document.getElementById("card").innerHTML = ufo2
                    break;
                case 3:
                    document.getElementById("card").innerHTML = ufo3
                    break;
            }
            document.getElementById("card").style.display = ""
            document.getElementById("step1").style.display = "none";
            document.getElementById("step2").style.display = "";
            document.getElementById("step2").innerHTML = `                        
            <div class="select" id="from-select" onclick="displayFrom()">
            <div id="from-label">
                Entrez un lieu de prise en charge
            </div>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="select" id="to-select" onclick="diplayTo()">
            <div id="to-label">
                Entrez une destination
            </div>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="select" id="adult">
            <div id="adult-label">Adulte</div>
            <div class="count">
                <i class="fa-solid fa-minus" id="adult" onclick="minus(this)"></i>
                <p id="count adult">1</p>
                <i class="fa-solid fa-plus" id="adult" onclick="plus(this)"></i>
            </div>
        </div>
        <div class="select" id="child">
            <div id="child-label">Enfant</div>
            <div class="count">
                <i class="fa-solid fa-minus" id="child" onclick="minus(this)"></i>
                <p id="count child">0</p>
                <i class="fa-solid fa-plus" id="child" onclick="plus(this)"></i>
            </div>
        </div>
        <div class="price" id="total">

        </div>
        <button class="primaryButton bookseats" id="button" style="display: none;" onclick="step3()">
            Réserver
            <i class="fa-solid fa-arrow-right"></i>
        </button>`
            detail['service'] = n
            step++
            setStatus++
            changeStatus(setStatus)

        })
        let mouseOver = (n) => {
            for (let i = 0; i < 11; i++) {
                setTimeout(function () {

                    document.querySelector("model-viewer#ufo" + n + "").setAttribute('orientation', i / 2 + 'deg ' + i + 'deg ' + -i / 2 + 'deg')
                    if (i == 10) finished = true
                }, i * i * 2)
            }
        }

        let mouseOut = (n) => {
            
            for (let i = 0; i < 11; i++) {
                setTimeout(function () {
                    document.querySelector("model-viewer#ufo" + n + "").setAttribute('orientation', (5 - (i / 2)) + 'deg ' + (10 - i) + 'deg ' + (5 - (i / 2)) + 'deg')
                    if (i == 10) finished = true
                }, i * i * 2)
            }

        }
        destinationOpen = (() => {
            let step2 = document.getElementById('step2')
            step2.style.display = "none"
            let destination = document.getElementById('destination')
            destination.style.display = ""
        })
        destinationClose = (() => {
            state = [false, false]
            let destination = document.getElementById('destination')
            destination.style.display = "none"
            let step2 = document.getElementById('step2')
            step2.style.display = ""

        })
        changeLabel = (() => {
            fetch('./api/v1/PLANETS.JSON')
            .then((response) => response.json())
            .then((data) => {
                let PLANETS = data
                fetch('./api/v1/CATEGORY.JSON')
                    .then((response) => response.json())
                    .then((data) => {   
                        let CATEGORY = data

                        if(destination['from']){
                            document.getElementById("from-label").innerHTML = "De " + PLANETS[destination['from'][0]-1].name + '<div class="description">' + CATEGORY[destination['from'][1]-1].name + '</div>'
                            detail['from']={
                                "planetId": PLANETS[destination['from'][0]-1]._id,
                                "planetName": PLANETS[destination['from'][0]-1].name,
                                "categoryName": CATEGORY[destination['from'][1]-1].name
                            }

                            changeStatus(3)
                        }if(destination['to']){
                            document.getElementById("to-label").innerHTML = "À " + PLANETS[destination['to'][0]-1].name + '<div class="description">' + CATEGORY[destination['to'][1]-1].name + '</div>'
                            detail['to']={
                                "planetId": PLANETS[destination['to'][0]-1]._id,
                                "planetName": PLANETS[destination['to'][0]-1].name,
                                "categoryName": CATEGORY[destination['to'][1]-1].name
                            }
                            
                            changeStatus(3)
                        }
                    })
                    destinationClose()
                })

            }
            

        )
        changeTotal = (() => {
            let total = document.getElementById('total')
            total.innerHTML = "À partir de "+detail['total']+'€'
            let button = document.getElementById('button')
            button.style.display = ""
        })
        getPrice = (() => {
            //
            fetch('./api/v1/PLANETS.JSON')
            .then((response) => response.json())
            .then((data) => {
                let PLANETS = data
                switch (detail['service']) {
                case 1:
                    price = 31415
                    price += Math.abs(PLANETS[destination['from'][0]-1].distance_point - PLANETS[destination['to'][0]-1].distance_point)* 31415
                    break;
                case 2:
                    price = 27183
                    price += Math.abs(PLANETS[destination['from'][0]-1].distance_point - PLANETS[destination['to'][0]-1].distance_point)*27183
                    break;
                case 3:
                    price = 31415*2
                    price += Math.abs(PLANETS[destination['from'][0]-1].distance_point - PLANETS[destination['to'][0]-1].distance_point)*20086
                    break;

            }
            detail['distance'] = Math.abs(PLANETS[destination['from'][0]-1].distance_point - PLANETS[destination['to'][0]-1].distance_point)
            detail['total'] = (price*(detail['adults']))+(Math.floor(price/2)*detail['child'])
            changeTotal()
        })


        })
        destinationChoise = ((p,c) => {

            if(state[0]){
                destination['from'] = [p,c] 
            }
            else if(state[1]){
                destination['to'] = [p,c]
            }
            if(destination['from']){
                if(destination['to']){
                    getPrice()
                }
            }
            changeLabel()
        })

        displayFrom = (() => {
            destinationOpen()
            state[0] = true
        })
        diplayTo = (() => {
            destinationOpen()
            state[1] = true
        })



        changeCount = (() => {
            document.getElementById("count adult").innerHTML = detail['adults'];
            document.getElementById("count child").innerHTML = detail['child'];
            if (detail['adults'] > 1) {
                document.getElementById("adult-label").innerHTML = "Adultes";
            } else {
                document.getElementById("adult-label").innerHTML = "Adulte";
            }
            if (detail['child'] > 1) {
                document.getElementById("child-label").innerHTML = "Enfants";
            } else {
                document.getElementById("child-label").innerHTML = "Enfant";
            }
        })
        plus = ((e) => {
            if (e.id == "adult") {
                if (detail['adults'] < 9) {
                    detail['adults'] += 1

                }
            }
            else if (e.id == "child") {
                if (detail['child'] < 9) {
                    detail['child'] += 1
                }
            }
            changeCount()

            if(detail['total']) getPrice()
        })

        minus = ((e) => {
            if (e.id == "adult") {
                if (detail['adults'] > 1) {
                    detail['adults'] -= 1
                }
            }
            else if (e.id == "child") {
                if (detail['child'] > 0) {
                    detail['child'] -= 1
                }
            }
            changeCount()
            if(detail['total']) getPrice()
        })
