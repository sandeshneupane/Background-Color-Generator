var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button= document.getElementById("changecolor");
var trackpart= document.getElementById("trackpart");

// console.log(css);
// console.log(color1);
// console.log(color2);


function setgradient(){
	body.style.background="linear-gradient(to right,"
	+color1.value+","+color2.value+")";
	css.textContent = body.style.background+";";
}

function randomcolor(){
  var letter = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changebackground(){
	body.style.background="linear-gradient(to right,"
	+hexToRgbA(randomcolor())+","+hexToRgbA(randomcolor())+")";
	css.textContent = body.style.background+";";
}
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}



color1.addEventListener("input",setgradient);

color2.addEventListener("input",setgradient);

button.addEventListener("click",changebackground);

trackpart.addEventListener("mouseenter",changebackground);

trackpart.addEventListener("mouseleave",changebackground);


