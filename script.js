function opendiv() {
  document.getElementById("div").style.opacity = "1";
  document.getElementById("div").style.zIndex = "10";
}
function closediv() {
  document.getElementById("div").style.opacity = "0";
  document.getElementById("div").style.zIndex = "-1";
}

let btn = document.getElementById("vom");

btn.addEventListener("click", () => {
  let inp1 = document.getElementById("inp1").value;

  let inp2 = document.getElementById("inp2").value;

  let inp3 = document.getElementById("inp3").value;

  let inp4 = document.getElementById("inp4").value;

  let obj = {
    name: inp1,

    surname: inp2,

    gmail: inp3,

    pasword: inp4,
  };

  if(8<=inp4.length){

  localStorage.setItem( "data",JSON.stringify(obj));

  }else{

  alert("error")
  console.log(inp4)

  }

});

let eye = document.getElementById("i")

let clo = document.getElementById("o")

let sum = 1 

let inp4 = document.getElementById("inp").value;

eye.addEventListener("click", () => {

if(sum==1){

  eye.className = "fa fa-eye"

  document.getElementById("inp").type = "text"

sum = 2

}else if(sum==2){

  eye.className = "fa fa-eye-slash"

  sum = 1

  document.getElementById("inp").type = "password"

}



})
