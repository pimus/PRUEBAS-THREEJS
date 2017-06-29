

function startScene() 
{
	scene    = new THREE.Scene(); 
	camera   = new THREE.PerspectiveCamera( 75, ( window.innerWidth / window.innerHeight ), 0.1, 1000 ); 
	renderer = new THREE.WebGLRenderer(); 
  
    renderer.setClearColor(new THREE.Color(0xFFFFFF));
    renderer.setSize( g_cgf.screenW, g_cgf.screenH); 
  
    document.body.appendChild( renderer.domElement ); 

    camera.position.z = 10;
}


function showEjes() 
{
   var axes = new THREE.AxisHelper(20);
   scene.add( axes );
}

//---

function showCubo()
{
    
    // CREAR UN CUBO
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0xFFCCFF } );
    
	cubo = new THREE.Mesh( geometry, material );
	scene.add( cubo );
}

//---

function showLinea()
{
    var material = new THREE.LineBasicMaterial({ color: 0x000000 });
    var geometry = new THREE.Geometry();
	geometry.vertices.push( new THREE.Vector3(-10, 0, 0) );
	geometry.vertices.push( new THREE.Vector3(0, 10, 0) );
	geometry.vertices.push( new THREE.Vector3(10, 0, 0) );
    
	linea = new THREE.Line( geometry, material );
	scene.add(linea);
}

//---

// CREAR EL LOOP DEL MUNDO
function animate() 
{
	g_idF = requestAnimationFrame( animate );
    
	// cubo.rotation.x+=0.1;
	// cubo.rotationy+=0.1;
	
	renderer.render( scene, camera );
}
