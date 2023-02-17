const textuser = document.getElementById("usertext");
const box      = document.getElementById("box");



textuser.addEventListener("keydown", function(event){

    console.log(event.target.value)
    
    // color = textuser.innerHTML;
    color = event.target.value;
    
    // box.style.backgroundColor = "#"+color;
    box.style.background = "#"+color;

})