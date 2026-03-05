// =====================
// LAVA SYSTEM
// =====================

let hazards = [];

function createLava(position){
  const geo = new THREE.PlaneGeometry(20,20);
  const mat = new THREE.MeshStandardMaterial({
    color:0xff3300,
    emissive:0xff0000,
    side:THREE.DoubleSide
  });

  const lava = new THREE.Mesh(geo,mat);
  lava.rotation.x = -Math.PI/2;
  lava.position.copy(position);

  lava.userData.isLava = true;

  scene.add(lava);
  hazards.push(lava);
}

function updateLavaDamage(){
  hazards.forEach(lava=>{
    if(camera.position.distanceTo(lava.position) < 10){
      player.takeDamage(1);
    }
  });
}
