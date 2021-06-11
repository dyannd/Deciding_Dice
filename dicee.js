function getName(){

const p1name=String(prompt("Enter the name of the first player: "));
const p2name=String(prompt("Enter the name of the second player: "));

document.querySelector(".dice1 p").innerText=p1name;
document.querySelector(".dice2 p").innerText=p2name;

var name_array=[];
name_array.push(p1name,p2name);
return name_array;
}



function Generator() {


  const available_dots = ["zdot-one", "zdot-two", "zdot-three", "zdot-four", "zdot-five", "zdot-six"];

  //Initializing random values
  var p1dice = Math.floor(Math.random() * 6);
  var p2dice = Math.floor(Math.random() * 6);


  //Append the changing graphic for the dice

  var dot_value1 = available_dots[p1dice];
  var dot_value2 = available_dots[p2dice];
  //Delete previous display
  var remove1=document.querySelector("#holder1 div")
  var remove2=document.querySelector("#holder2 div")
  document.querySelector("#holder1").removeChild(remove1);
  document.querySelector("#holder2").removeChild(remove2);
  //Toglling the display
  toggler(dot_value1, dot_value2);
  printer(p1dice, p2dice);

}

function printer(p1dice, p2dice) {
  //Compare the scores
  if (p1dice > p2dice) {
    document.getElementsByTagName("h2")[0].innerText = "P1 Wins";
  } else if (p1dice < p2dice) {

    document.getElementsByTagName("h2")[0].innerText = "P2 Wins";
  } else {
    document.getElementsByTagName("h2")[0].innerText = "Draw";
  }

}

function toggler(dot_value1, dot_value2) {
  //Create new Child Elements:
  var new_frame1=document.createElement("DIV");
  new_frame1.classList.add(dot_value1);
  var new_frame2=document.createElement("DIV");
  new_frame2.classList.add(dot_value2);
  document.querySelector("#holder1").appendChild(new_frame1);
  document.querySelector("#holder2").appendChild(new_frame2);
}
