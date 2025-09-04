function printMyName(){
    console.log("Deniss Cvetkovs");
}
function printNumbers(){
    for($a = 0; $a < 10; $a++){
        console.log($a + 1);
    }
}
function deleteParagraph(){
    document.querySelector("#first-paragraph").remove();
}
function loadLogData(){
    document.getElementById("form").addEventListener(onkeydown("Enter"),logData())
}
function logData(){
    console.log(document.getElementById("name").innerText);
    console.log(document.getElementsByName("gender"));
    console.log(document.getElementById("email").innerText);
    console.log(document.getElementById("level").innerText);
    console.log(document.getElementById("feedback").innerText);
    console.log(document.getElementById("emailShare").innerText);
}