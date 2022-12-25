<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saucy Saucer</title>
    <link rel="icon" type="image/png" href="ressouces/logo.004.png" />
    <link rel="stylesheet" href="style/default.css">
    <script src="https://kit.fontawesome.com/ac8d5c4fc6.js" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
</head>

<body>
    <div class="app">
        <div class="hamburger bookseats">
            <div class="menu-icon">
                <i class="fa-solid fa-equals" id="equal" onclick="displayMenu()"></i>
                <i class="fa-solid fa-xmark" id="cross" onclick="hideMenu()"></i>
            </div>
        </div>
        <div class="menu" id="menu">
            <h3 id="menu-link-1"><a href="bookseats.php">Réserver</a></h3>
            <h3 id="menu-link-2"><a href="ourstory.html">Notre histoire</a></h3>
            <h3 id="menu-link-3"><a href="fleet.html">Les coulisses</a></h3>
            <h3 id="menu-link-4"><a href="contact-us.html">Nous contacter</a></h3>
        </div>
        <div class="desktopSection_bookseats">
            <div class="wrapper" id="bookseats">
                <div class="left-side bookseats">

                    <div>
                        <h1 id="status">Allons ailleurs, ensemble.</h1>
                    </div>
                    <div class="card" id="card" style="display: none;">

                    </div>
                </div>
                <div class="right-side bookseats" style="background-color: white;">
                    <div class="form bookseats" id="step1">
                        <div class="select service" id="service-1" onmouseenter="mouseOver(1)"
                            onmouseleave="mouseOut(1)" onclick="step2(1)">
                            <model-viewer id="ufo1" src="ressouces/ufo1.glb" orientation="0deg 0deg 0deg"
                                touch-action="pan-y" scale="1 1 1" exposure="0.5" style="width: 150px"
                                shadow-intensity="1"></model-viewer>
                            <div class="content service">
                                <div class="groupe-title">
                                    <div class="title">Saucy Classic</div>
                                    <div class="tag classic"><i class="fa-solid fa-bolt"></i><span>Plus rapide</span>
                                    </div>
                                </div>
                                <div class="description">Notre formule habituelle. Comme un voyage en fusée, mais
                                    celui-ci vous est réservé.</div>
                            </div>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="select service" id="service-2" onmouseenter="mouseOver(2)"
                            onmouseleave="mouseOut(2)" onclick="step2(2)">
                            <model-viewer id="ufo2" src="ressouces/ufo2.glb" orientation="0deg 0deg 0deg"
                                touch-action="pan-y" scale="1 1 1" exposure="0.5" style="width: 150px"
                                shadow-intensity="1"></model-viewer>
                            <div class="content service">
                                <div class="groupe-title">
                                    <div class="title">Saucy Green</div>
                                    <div class="tag green"><i class="fa-solid fa-leaf"></i><span>Plus économique</span>
                                    </div>
                                </div>
                                <div class="description">Un voyage plus respectueux de l'écologie avec nos soucoupes
                                    basse consommation. Appréciez le calme des soucoupes électriques. </div>
                            </div>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="select service" id="service-3" onmouseenter="mouseOver(3)"
                            onmouseleave="mouseOut(3)" onclick="step2(3)">
                            <model-viewer id="ufo3" src="ressouces/ufo3.glb" orientation="0deg 0deg 0deg"
                                touch-action="pan-y" scale="1 1 1" exposure="1" style="width: 150px"
                                shadow-intensity="1"></model-viewer>
                            <div class="content service">
                                <div class="groupe-title">
                                    <div class="title">Saucy Comfort</div>
                                    <div class="tag comfort"><i class="fa-solid fa-briefcase"></i><span>Plus
                                            spacieux</span></div>
                                </div>
                                <div class="description"> La classe affaire du voyage haut de gamme. Ne manquez de rien
                                    à bord afin d'arriver à bon port en toute sérénité. </div>
                            </div>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div style="display: none;" class="form bookseats" id="step2">

                    </div>
                    <div style="display: none;" class="form bookseats" id="step3">
                        <div class="select month" id="from-select-month">
                        </div>
                        <div id="from-select-departure">
                        </div>
                    </div>
                    <div style="display: none; gap: 30px" class="form bookseats" id="step4">
                        <h1 class="title">
                            Entrez votre adresse mail
                        </h1>
                        <div class="input">
                            <input type="email" placeholder="E-mail" id="email" maxlength="64" />
                            <div class="button-submit">
                                <i class="fa-solid fa-arrow-right" onclick="sendMail()"></i>
                            </div>
                        </div>
                        <div class="ErrMessage" id="ERR">

                        </div>
                    </div>

                    <div class="form bookseats" id="destination" style="display: none;">
                        <div class="destination title">
                            <h2 id="destination-title">Entrez un lieu</h2>
                            <i class="fa-solid fa-xmark" id="destination-close" onclick="destinationClose()"></i>
                        </div>
                        <div class="destination list" id="destination-list">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="desktopSection_footer">
                <div class="footer">
                    <div class="foo column">
                        <div class="iconfooter">
                            <img src="ressouces/logo.004.png" alt="">
                            <h1>Saucy Saucer</h1>
                        </div>
                    </div>
                    <div class="foo column">
                        <span>Accéder à</span>
                        <ul>
                            <li><a href="bookseats.php">Réserver</a></li>
                            <li><a href="ourstory.html">Notre histoire</a></li>
                            <li><a href="fleet.html">Les coulisses</a></li>
                            <li><a href="contact-us.html">Nous contacter</a></li>
                            <li onclick="displayPopup()" id="li-rapport">Rapport</li>
                        </ul>
                    </div>
                    <div class="foo column">
                        <span>Inscrivez-vous à la newsletter</span>
                        <div class="input">
                            <input type="text" placeholder="E-mail">
                            <div class="button-submit">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="madeBy">
                        <div>Réalisé par</div>
                        <div class="names">Nawfel, Augustin et Timothé</div>
                    </div>
                </div>

            </div>

        </footer>
        <div class="pannel" id="popup">
            <div class="popup">
                <div class="content-popup">
                    <div class="head-popup">
                        <h3>Télécharger le rapport</h3>
                    </div>
                    <div class="body-popup">
                        <div class="format">
                            <i class="fa-solid fa-file-word"></i>
                            <div><a id="download" href="ressouces/Rapport COIN.docx">format Word</a></div>
                        </div>
                        <div class="format">
                            <i class="fa-solid fa-file-pdf"></i>
                            <div><a id="download" href="ressouces/Rapport COIN[55].pdf">format PDF</a></div>
                        </div>
                    </div>
                    <button class="primaryButton dark" onclick="backPopup()">
                        Retour
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
</div>
    <script src="script/fetchAPI.js"></script>
    <script src="script/interactive.js"></script>
    <script src="script/sendMail.js"></script>
    <script src="script/popup.js"></script>
    <script src="script/hamburger.js"></script>
</body>


</html>