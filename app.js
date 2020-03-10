const scene = new THREE.Scene();

let fieldOfView = 75,
    aspectRatio = window.innerWidth/window.innerHeight,
    near = 0.1,
    far = 400;

const camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, near, far );
camera.position.z = 300;
camera.position.y = 40;


const light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 1, 0, 1 ).normalize();

scene.add(light);
 

let planetRadius = 40,
    planetWidthSegments = 20,
    planetHeightSegments = 20;  

let planetMaterial = new THREE.MeshBasicMaterial( {} );
let loader = new THREE.ImageLoader();

loader.load( "https://raw.githubusercontent.com/afonsopacifer/cdn/master/earthmap1k.jpg", ( image ) => {
  let texture = new THREE.Texture();
  texture.image = image;
  texture.needsUpdate = true;
  
  planetMaterial.map = texture;
  planetMaterial.needsUpdate = true;
});

const planetGeometry = new THREE.SphereGeometry( planetRadius, planetWidthSegments, planetHeightSegments );

const planet = new THREE.Mesh( planetGeometry, planetMaterial );



// moon
// ---------
let moonRadius = 12,
    moonWidthSegments = 20,
    moonHeightSegments = 20;

let moonMaterial = new THREE.MeshBasicMaterial( {} );

let loader2 = new THREE.ImageLoader();
let loader3 = new THREE.ImageLoader();
loader2.load( "img/bilgen_header_back.png", ( image ) => {
    let texture = new THREE.Texture();
    texture.image = image;
    texture.needsUpdate = true;
    
    scene.background = texture;
  });

loader2.load( "img/1.jpg", ( image ) => {
  let texture = new THREE.Texture();
  texture.image = image;
  texture.needsUpdate = true;
  
  moonMaterial.map = texture;
  moonMaterial.needsUpdate = true;
});


const moonGeometry = new THREE.SphereGeometry( moonRadius, moonWidthSegments, moonHeightSegments );

const moon1 = new THREE.Mesh( moonGeometry, moonMaterial );
const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon3 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon4 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon5 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon6 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon7 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon8 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon9 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon10 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon11 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon12 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon13 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon14 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon15 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon16 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon17 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon18 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon19 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon20 =  new THREE.Mesh( moonGeometry, moonMaterial );
const moon21 =  new THREE.Mesh( moonGeometry, moonMaterial );


// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );
// const moon2 =  new THREE.Mesh( moonGeometry, moonMaterial );

scene.add( planet, moon1, moon2,moon3,moon4,moon5,moon6,moon7,moon8,moon9,moon10,moon11,moon12,moon13,moon14,moon15,moon16,moon17,moon18,moon19,moon20,moon21);


// ------------------------------------------------------
// render
// ------------------------------------------------------
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});
const header = document.querySelector('.header');
// const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
header.appendChild( renderer.domElement );

const render = () => {
    
    planet.position.set(41,122,-125);



    moon1.position.set( -152, 235, -50 );
    moon2.position.set( -205, 215, -47 );
    moon3.position.set( -275, 172, -44 );
    moon4.position.set( -262, 90, 10 );
    moon5.position.set( -305, 25, -10 );
    moon6.position.set( -205, -17, 70 );
    moon7.position.set( -153, -53, 73 );
    moon8.position.set( -84, -75, 75 );
    moon9.position.set( -33, -76, 75 );
    moon10.position.set( 28, -80, 76 );
    moon11.position.set( 88, -67, 70 );
    moon12.position.set( 140, -53, 65 );
    moon13.position.set( 200, -18, 60 );
    moon14.position.set( 273, 7, 20 );
    moon15.position.set( 273, 60, 15 );
    moon16.position.set( 275, 116, -10 );
    moon17.position.set( 200, 180, -20 );
    moon18.position.set( 158, 252, -80 );
    moon19.position.set( 95, 275, -85 );
    moon20.position.set( 18, 295, -90 );
    moon21.position.set( -62, 287, -90 );

  // ------------------------------------------------------
  // animation
  // ------------------------------------------------------
  
  requestAnimationFrame( render );
  planet.rotation.y += 0.004;
  moon1.rotation.y -= 0.012;
 


    moon2.rotation.y -= 0.012;
    moon3.rotation.y -= 0.012;
    moon4.rotation.y -= 0.012;
    moon5.rotation.y -= 0.012;
    moon6.rotation.y -= 0.012;
    moon7.rotation.y -= 0.012;
    moon8.rotation.y -= 0.012;
    moon9.rotation.y -= 0.012;
    moon10.rotation.y -= 0.012;
    moon11.rotation.y -= 0.012;
    moon12.rotation.y -= 0.012;
    moon13.rotation.y -= 0.012;
    moon14.rotation.y -= 0.012;
    moon15.rotation.y -= 0.012;
    moon16.rotation.y -= 0.012;
    moon17.rotation.y -= 0.012;
    moon18.rotation.y -= 0.012;
    moon19.rotation.y -= 0.012;
    moon20.rotation.y -= 0.012;
    moon21.rotation.y -= 0.012;

  renderer.render( scene, camera );
  
};

render();

