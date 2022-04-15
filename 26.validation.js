function validate()
{
    var name = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var age = document.getElementById("age").value;
    if (name.trim()== "" || pass.trim() ==""|| age.trim()=="")
    {
        alert("missing credentials");
        return false;
    }
    else if(name=="Kaushal"&& pass =="12345" && age>=35)
    {
        alert("sign-up successful")
        return true;
    }
    else if(age<13)
    {
        alert("underaged");
        return false;
    }
    else
    {
        alert("wrogn id and pass");
        return false;
    }
}