slider_1 = ((id, e) => {
    document.getElementById('slider_1_1').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_1_2').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_1_3').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_1_4').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_1_5').setAttribute("style", "border-color:#949494 !important")
    switch (id) {
        case 1:
            document.getElementById('slide_1').style.backgroundImage = "url('./ressouces/Mercure.jpg')";
            document.getElementById('slide_1').style.backgroundSize = "cover"
            document.getElementById('slide_1').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_1').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_1').innerHTML = "Mercure"
            document.getElementById('description-info-destination_1').innerHTML = "L'endroit parfait pour prendre un bain de soleil. Avec un petit cocktail au bord d'une piscine, la vida loca !"
            e.style.borderColor = "black"
            break;
        case 2:
            document.getElementById('slide_1').style.backgroundImage = "url('./ressouces/Venus.jpg')";
            document.getElementById('slide_1').style.backgroundSize = "cover"
            document.getElementById('slide_1').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_1').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_1').innerHTML = "Venus"
            document.getElementById('description-info-destination_1').innerHTML = "La déesse de l'amour a donné son nom à cette planète, on y fait les plus beaux voyages romantiques"
            e.style.borderColor = "black"
            break;
        case 3:
            document.getElementById('slide_1').style.backgroundImage = "url('./ressouces/terre.jpeg')";
            document.getElementById('slide_1').style.backgroundSize = "cover"
            document.getElementById('slide_1').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_1').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_1').innerHTML = "Terre"
            document.getElementById('description-info-destination_1').innerHTML = "Rentrez sur Terre, notre terre d'origine où la vie est née. Gardez les pieds sur terre sur Terre."
            e.style.borderColor = "black"
            break;
        case 4:
            document.getElementById('slide_1').style.backgroundImage = "url('./ressouces/Mars.jpg')";
            document.getElementById('slide_1').style.backgroundSize = "cover"
            document.getElementById('slide_1').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_1').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_1').innerHTML = "Mars"
            document.getElementById('description-info-destination_1').innerHTML = "L'endroit parfait pour débuter les voyages interplanétaires, il paraît que cette planète porte chance. "
            e.style.borderColor = "black"
            break;
        case 5:
            document.getElementById('slide_1').style.backgroundImage = "url('./ressouces/Jupiter.jpg')";
            document.getElementById('slide_1').style.backgroundSize = "cover"
            document.getElementById('slide_1').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_1').innerHTML = "Jupiter"
            document.getElementById('description-info-destination_1').innerHTML = "Découvrez l'aventure et la toute puissance de la nature, en toute sécurité. Allons-y maintenant !"
            e.style.borderColor = "black"
            break;
    }
})





slider_2 = ((id, e) => {
    document.getElementById('slider_2_1').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_2_2').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_2_3').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_2_4').setAttribute("style", "border-color:#949494 !important")
    switch (id) {
        case 1:
            document.getElementById('slide_2').style.backgroundImage = "url('./ressouces/ganymede.jpg')";
            document.getElementById('slide_2').style.backgroundSize = "cover"
            document.getElementById('slide_2').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_2').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_2').innerHTML = "Ganymède"
            document.getElementById('description-info-destination_2').innerHTML = "On dit de cette lune de Jupiter qu'elle contient plus d'eau que la Terre elle-même."
            e.style.borderColor = "black"
            break;
        case 2:
            document.getElementById('slide_2').style.backgroundImage = "url('./ressouces/Callisto.jpg')";
            document.getElementById('slide_2').style.backgroundSize = "cover"
            document.getElementById('slide_2').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_3').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_2').innerHTML = "Callisto"
            document.getElementById('description-info-destination_2').innerHTML = "Cette autre lune de Jupiter pourrait bien vous permettre de découvrir la vie extraterrestre."
            e.style.borderColor = "black"
            break;
        case 3:
            document.getElementById('slide_2').style.backgroundImage = "url('./ressouces/Triton.jpg')";
            document.getElementById('slide_2').style.backgroundSize = "cover"
            document.getElementById('slide_2').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_2').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_2').innerHTML = "Triton"
            document.getElementById('description-info-destination_2').innerHTML = "Après une escale par Neptune, cette lune vous donnera le tournis. Attention au mal de l'espace !"
            e.style.borderColor = "black"
            break;
        case 4:
            document.getElementById('slide_2').style.backgroundImage = "url('./ressouces/Lune.jpg')";
            document.getElementById('slide_2').style.backgroundSize = "cover"
            document.getElementById('slide_2').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_2').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_2').innerHTML = "Lune"
            document.getElementById('description-info-destination_2').innerHTML = "Retournez sur les pas des premiers aventuriers spatiaux, revivez ce moment unique."
            e.style.borderColor = "black"
            break;
    }
})

slider_3 = ((id, e) => {
    document.getElementById('slider_3_1').setAttribute("style", "border-color:#949494 !important")
    document.getElementById('slider_3_2').setAttribute("style", "border-color:#949494 !important")
    switch (id) {
        case 1:
            document.getElementById('slide_3').style.backgroundImage = "url('./ressouces/Luyten_b.jpg')";
            document.getElementById('slide_3').style.backgroundSize = "cover"
            document.getElementById('slide_3').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_3').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_3').innerHTML = "Luyten b"
            document.getElementById('description-info-destination_3').innerHTML = "Redémarrez une nouvelle vie sur une nouvelle Terre et tentez de retrouver votre sosie."
            e.style.borderColor = "white"
            break;
        case 2:
            document.getElementById('slide_3').style.backgroundImage = "url('./ressouces/Kepler.jpg')";
            document.getElementById('slide_3').style.backgroundSize = "cover"
            document.getElementById('slide_3').style.backgroundRepeat = "no-repeat"
            document.getElementById('slide_3').style.backgroundPosition = "center"
            document.getElementById('title-info-destination_3').innerHTML = "Kepler-442 b"
            document.getElementById('description-info-destination_3').innerHTML = "Le climat de cette exoplanète rendrait les habitants de la Terre jaloux."
            e.style.borderColor = "white"
            break;
    }
})