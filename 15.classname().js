function fun1()
{
    var x = document.getElementsByClassName("cls1");
    x[0].style.fontStyle ="italic";
    x[1].style.fontWeight ="Bolder";
    x[2].style.color="red";
    // camelcase convention 
    // doing something for all the values 
    for(var i =0; i<x.length;i++)
    {
        x[i].style.backgroundColor = "yellow";
    }
}
// id is very specific thats why its more previlllaged over any sTylling done on it 
