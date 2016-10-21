

function chance(chanceCoefficient,callbackFunction) {
  var destiny = false;
  var random = Math.floor(Math.random() * 100) + 1;
  if(random < chanceCoefficient) {
    destiny = true;
    console.log(destiny);
  }
}

for(var i = 0; i < 100; i++) {
  chance(30, function() {
    
  });
}
