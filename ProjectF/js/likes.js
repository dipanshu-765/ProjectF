let a=0;
function likes(){
    a = a+1;
    likesCount = document.getElementById("likes-count");
    likesCount.innerHTML = a+" Likes";
}