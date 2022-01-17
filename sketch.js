wind = 0;

drops = [];
function setup() {
  createCanvas(400, 400);
  c2 = createSlider(0, 500, 300, 0);
  reset(300);
  wind = random(-10,10.0);
  c1 = createSlider(-10, 10, wind, 0);
  
}

function draw() {
  
  background(0);
  for(var drop of drops){
    drop.show();
    drop.update(wind);
  }
  
  textSize(32);
  text("Wind: " + wind.toFixed(2), 10, 30);
  console.log(round(c2.value()), drops.length)
  wind = c1.value();
  
}

function reset(value){
  drops = [];
  for(i = 0; i < value; i ++){
    drops[i] = new Raindrop();
  }
}
