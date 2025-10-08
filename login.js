
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.onload = loginLoad;

function loginLoad(){
    var form = document.getElementById("myLogin");
    form.onsubmit = function(){
        return checkLogin();
    };
}

function checkLogin(){
    //ดึงที่เราพิม
    var inputUser = document.forms["myLogin"]["username"].value;
    var inputPass = document.forms["myLogin"]["password"].value;
    //ดึงจากregisผ่านurl
    const username = urlParams.get("username");
    const password = urlParams.get("password");

    if (inputUser === username && inputPass === password) {
        alert("Login สำเร็จ");
        return true;
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }
}