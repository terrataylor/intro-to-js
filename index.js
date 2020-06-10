var x = 10;  //Old/Deprecated.  Do not use

let num = 5;   //Number
let name = "terra";  //String
let bool = true;  //Boolean
//  0    1    2    3
let arr = ["a", "b", "c", "d"];  //Array


const perm = "Do not change";

function addInfo() {  //Function to add info to html page
    event.preventDefault();
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;

    let li = document.createElement("LI");
    let text = document.createTextNode(`${name} : ${item}`);
    li.appendChild(text);
    document.getElementById("info").appendChild(li);

}


function goodmorning() {
    num = num + 20;
    alert("goodmorning");
    console.log(`${num} more minutes`);
}