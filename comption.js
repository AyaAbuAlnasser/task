
  window.addEventListener('load', function () {

  
    document.querySelector(".addComptionCard").style.display = "none";
   
});
addComption();
function addComption() {
    
  document.querySelector(".addNewComption").addEventListener('click', function () {
     on();
 });
};
function on() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".addComptionCard").style.display = "block";
}


function redirect () { 
  
    window.location.href="comptionDetail.html";

}
