function validate()
{
    var email = document.getElementById("mail").value;
    var regex= /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
    /* */
    if(email.trim()=="")
    {
        alert("please enter a valid email address ");
    }
    else if((regex.test(email)))
    {
        alert("email submitted successfully");
    }
    else
    {
        alert("wrogn email id");
    }
}
// ab22032002@gmail.com
// allowed ones 
// abc.3232@org_name.com 