var ThreeD_Module = (function() {
  var ThreeD_Component = document.getElementById("header");
  var container, stats;

    var camera, scene, renderer;

    var cube, plane;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

      container = document.createElement( 'div' );
      ThreeD_Component.appendChild( container );



      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.y = 500;
      camera.position.x = 500;
      camera.position.z = 500;

      scene = new THREE.Scene();

      // Cube

      var geometry = new THREE.BoxGeometry( 20, 20, 20);

      for ( var i = 0; i < geometry.faces.length; i += 2 ) {

        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );

      }

      var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
      for(var i = 0; i < 300; i++) {
        var cube = new THREE.Mesh( geometry, material );
        cube.position.z = Math.floor(Math.random() * 800) + 1;
        cube.position.x = Math.floor(Math.random() * 800) + 1;
        cube.position.y = Math.floor(Math.random() * 800) + 1;
        scene.add( cube );
      }

      // Plane

      var material = new THREE.MeshBasicMaterial( { color: 0xe0e0e0, overdraw: 0.5 } );

      renderer = new THREE.CanvasRenderer();
      renderer.setClearColor( 0xf0f0f0 );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize(document.body.clientWidth,250);
      container.appendChild( renderer.domElement );//
      window.addEventListener( 'resize', onWindowResize, false );
    }

    function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

      requestAnimationFrame( animate );
      camera.position.z = camera.position.z+2;
      if(camera.position.z == 1000) {
        camera.position.z = 0;
      }
      render();

    }

    function render() {

      renderer.render( scene, camera );

    }
})();
