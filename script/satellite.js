const modelSatellite = document.querySelector("model-viewer#tranform1")
let satellite = function () {
    for (let i = 0; i < 750; i++) {
        setTimeout(function () {
            modelSatellite.setAttribute('orientation', i + 'deg 0deg 0deg')
            modelSatellite.setAttribute('style', 'position: fixed; top: ' + (65 + i) + 'px; right: ' + i + 'px; width: ' + i + 'px; height: ' + i + 'px')
            if (i == 749)
                satellite()
        }, 25 * i)
    }
};
satellite()
const modelAsteroide = document.querySelector("model-viewer#tranform2")
let asteroide = function () {
    for (let i = 0; i < 750; i++) {
        setTimeout(function () {
            modelAsteroide.setAttribute('orientation', i + 'deg ' + i / 2 + 'deg 0deg')
            modelAsteroide.setAttribute('style', 'position: fixed; left: ' + (1700 - i) + 'px; top: ' + (1000 - i) + 'px; width: ' + (750 - i) + 'px; height: ' + (750 - i) + 'px')
            if (i == 749) asteroide();
        }, 25 * i)
    }
}
asteroide()