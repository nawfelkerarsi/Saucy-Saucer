const scene = new THREE.Scene();
let canvasContainer = document.querySelector(".animation");
const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
camera.position.z = 13

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

canvasContainer.appendChild(renderer.domElement)
renderer.setPixelRatio(canvasContainer.devicePixelRatio)

renderer.setSize((canvasContainer.offsetWidth) - 65, (canvasContainer.offsetHeight) - 65);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('ressouces/uv-earth.jpeg')
    })
)
scene.add(sphere)
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    sphere.rotation.y += 0.001
}
animate()