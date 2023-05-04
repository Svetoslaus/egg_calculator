// d => diameter (in mm)
// m => weigth (in g)
//Tstart => starting point (fridge = 4, room teperature = 20)
//Tfinal => desired result (in minutes),
//          (hard egg = 82, soft yolk = 67, liquid yolk = 62)
//height => height above sea level (in m)


function boilEggTimer(d, m, Tstart, Tfinal, height) {
  const Twater = 100 - 0.0033 * height;
  // determine mass fraction of yolk and albumen
  let L = (0.517 + 0.45 * 2)/3;
  // Calculate the time required for the egg to reach the desired result
  const t = (Math.log((0.76 * (Tstart - Twater )) / (Tfinal -  Twater )) * (m ** (2 / 3))) * L;
  //form adjustments
  return t - t * 0.1;
}

function formatMinutes(minutes){
   let sign = minutes < 0 ? "-" : "";
   let min = Math.floor(Math.abs(minutes));
   let sec = Math.floor((Math.abs(minutes) * 60) % 60);
 return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}

console.log (formatMinutes(boilEggTimer(60, 50, 20, 62, 1200)));
