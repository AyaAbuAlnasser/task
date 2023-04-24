
  window.addEventListener('load', function () {

  
    document.querySelector(".addUserCard").style.display = "none";
   
});
addUaer();
function addUaer() {
    
  document.querySelector(".addNewUser").addEventListener('click', function () {
     on();
 });
};
function on() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".addUserCard").style.display = "block";
}


function redirect () { 
  
    window.location.href="userDetail.html";

}
