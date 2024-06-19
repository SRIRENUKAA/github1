function validation(){
if(document.formfill.uname.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
else if(document.formfill.uname.value.length<3){
    document.getElementById("result").innerHTML="Atleast three letters*";
    return false;
}
else if(document.formfill.email.value==""){
    document.getElementById("result").innerHTML="Enter your email*";
    return false;
}
else if(document.formfill.upswd1.value==""){
    document.getElementById("result").innerHTML="Enter your password";
    return false;
}
else if(document.formfill.upswd1.value.length<6){
    document.getElementById("result").innerHTML="password must be 6-digits";
    return false;
}
else if(document.formfill.upswd2.value==""){
    document.getElementById("result").innerHTML="Enter confirm password";
    return false;
}
else if(document.formfill.upswd1.value !== document.formfill.upswd2.value){
    document.getElementById("result").innerHTML="password does not matched";
    return false;
}
else if(document.formfill.upswd1.value == document.formfill.upswd2.value){
    popup.classList.add("open-slide")
    return false;
}
}
var popup=document.getElementById('popup');
function CloseSlid(){
    popup.classList.remove("open-slide")
}