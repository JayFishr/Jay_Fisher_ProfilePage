var getRid = document.querySelector(".connect-names");

function removeName(){
    getRid.remove();

}

var getRid2 = document.querySelector(".connect-names2");

function removeName2(){
    getRid2.remove();
}

var numBtn = document.querySelector(".num-btn");
var count = 2;

function removeCount(){
    count--;
    numBtn.innerText = count;
}

var headName = document.querySelector("#name");
var newName = "Jin Sakai"

function changeName(){
    headName.innerText = newName;
}

var connectBtn = document.querySelector(".connects-btn");
var count2 = 418;

function addCount(){
    count2++;
    connectBtn.innerText = count2;
}