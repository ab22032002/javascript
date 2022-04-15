function Fun2()
{
    var x = document.getElementsByTagName("div");
    // array of references in the x for us 
    // this is AAM JINDAGI 
    x[0].style.fontFamily= "cursive";
    // and this is done using the submit button 
    x[3].style.color = "red";
    x[2].style.backgroundColor = "cyan";
    x[1].style.fontStyle= "italic";
    // doing the MENTOS JINDAGI 
    // using the loops 
    for(var i = 0; i<x.length;i++)
    {
        x[i].style.fontWeight="bold";
        x[i].style.backgroundColor="skyblue";
        // changes all along with the upper things 

    }
}
// MULTIPLE SIMILIAR ELEMENT PRESENT IN JS SO WE'RE USING THIS METHOD 
