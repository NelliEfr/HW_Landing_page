const slider = document.getElementsByClassName("portfolio-item");
let currentIndex = 1;
displaySlide(currentIndex);

function changeIndex(index){
    displaySlide(currentIndex = currentIndex+index)
}
function displaySlide(index){
    if (index<1){
        currentIndex = slider.length;
    }
    if (index>slider.length){
        currentIndex = 1;
    }
   for (let i = 0; i < slider.length; i++){
    slider[i].style.display = "none";
   }
   slider[currentIndex-1].style.display = "block";

}