var $ = function (id) {
    return document.getElementById(id);
}
var demo = function()
{
    var display = "wild·flow·er \n \/wīldˌflou(ə)r\/ \n noun \n \b \b \b \b \b \'a flower of an uncultivated variety or a flower growing freely without human intervention.\' \n \n \b \"Like wildflowers; You must allow yourself to grow in all the places people thought you never would.\" \n \t \t \t \t \t -E.V.";



    $("display").value = display;

}

window.onload = function()
{
    $("demo").onclick = demo;
}