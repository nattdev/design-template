const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);

/*camera.position.z = 6;*/
camera.position.x = 6;
camera.position.y = -0.5;
camera.position.z = 12;
camera.rotation.y = 0.5;

const renderer = new THREE.WebGLRenderer({
  antialias:true, alpha:true});

renderer.setSize(window.innerWidth, window.innerHeight);

var dimension_container = document.querySelector("div.dimension_container");     
      
dimension_container.appendChild(renderer.domElement);

const cube_geometry = new THREE.BoxGeometry(3,3,3);

const cube_material = new THREE.MeshPhongMaterial({ color: 0xF0E9E9});

const cube = new THREE.Mesh(cube_geometry, cube_material);

/*prism begin*/
PrismGeometry = function ( vertices, height ) {

    var Shape = new THREE.Shape();

    ( function f( ctx ) {

        ctx.moveTo( vertices[0].x, vertices[0].y );
        for (var i=1; i < vertices.length; i++) {
            ctx.lineTo( vertices[i].x, vertices[i].y );
        }
        ctx.lineTo( vertices[0].x, vertices[0].y );

    } )( Shape );

    var settings = { };
    settings.amount = 3;
    settings.bevelEnabled = false;
    THREE.ExtrudeGeometry.call( this, Shape, settings );
};

PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );

var A = new THREE.Vector2( 0, 0 );
var B = new THREE.Vector2( 3.0, 0 );
var C = new THREE.Vector2( 1.5, 2.6 );

var material = new THREE.MeshPhongMaterial( { color: 0xD8B5AB} );

var height = 30;                   
var geometry = new PrismGeometry( [ A, B, C ], height ); 

var prism1 = new THREE.Mesh( geometry, material );

/*prism end*/

prism1.rotation.y = 95;

cube_geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(1.5,-1.7, 1.5));
cube_geometry.merge(geometry);
let mix = new THREE.Mesh(cube_geometry, cube_material)
scene.add(mix);
mix.position.set(0,0,0);


const light = new THREE.DirectionalLight(0xF9D9D9, 1.5);
light.position.set(-1, 2, 4);
scene.add(light);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);

cube.rotation.y = 95;

renderer.render(scene, camera);

function render(time) {
    time *= 0.001;

  mix.rotation.y = time;
    renderer.render(scene, camera);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
