window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister")
    form.onsubmit = validateForm;
	
}

function validateForm() {
    // ดึงค่ามาตรวจสอบว่าพิมแล้วหรือนัง?
    var firstname  = document.forms["myRegister"]["firstname"].value;
    var lastname   = document.forms["myRegister"]["lastname"].value;
    var email      = document.forms["myRegister"]["email"].value;
    // var passwordArray = [password, repassword];
    var password      = document.forms["myRegister"]["password"][0].value;
    var repassword    = document.forms["myRegister"]["password"][1].value;
    var gender     = document.forms["myRegister"]["gender"].value;
    var bday       = document.forms["myRegister"]["bday"].value;
    var username   = document.forms["myRegister"]["username"].value;

    if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !repassword) {
        document.getElementById("errormsg").innerText = "กรุณากรอกข้อมูลใหม่"
        return false;
    } 
    
    if (password !== repassword) {
        document.getElementById("errormsg").innerText = "กรุณากรอกรหัสใหม่"
        return false;
    }
    return true;
}