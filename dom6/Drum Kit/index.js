var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    alert("Jai Shree Ram");
}