currentHighLighted = null;
currentClicked = null;
standardColor = null;

function load()
{
adjustSizes();
highLight("homeButton" ,"#FFFFFF");
showSubPage("infoSpace","homeButton","yellow", "Home");



//Load content. pictures, movies, audio etc.


}

function adjustSizes()
{
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width > 400)
{
var navigateElements = document.getElementsByClassName("navigate");
var navigateWidth = (((parseInt(width))/navigateElements.length));
for (var i =0;i<navigateElements.length;i++)
{
navigateElements[i].style.left=i*navigateWidth + "px";
navigateElements[i].style.width=navigateWidth + "px";
}
}
}

function show(id, id2, color, path)
{
$.get(path, function(data) {
document.getElementById(id).innerHTML = data;
});
highLight(id2, color);
if (currentClicked !=null)
currentClicked.style.backgroundColor=standardColor;

currentClicked = document.getElementById(id2);
}

function showSubPage(id, id2, color, name)
{
show(id, id2, color, "../html/subpages/"+name+".html");
}

function highLight(id, color)
{
var object = document.getElementById(id);
if (standardColor == null)
standardColor = object.style.backgroundColor;//backGround;
if (object != currentClicked)
object.style.backgroundColor = color;
}

function unHighLight(id)
{
var object = document.getElementById(id);
if (object != currentClicked)
object.style.backgroundColor = standardColor;
}
/*function highLightOne(id, color)
{
var element = document.getElementById(id);
if (currentHighLighted == null)
standardColor = element.style.backgroundColor;
else if (currentHighLighted != currentClicked)
currentHighLighted.style.backgroundColor = standardColor;
currentHighLighted = element;
if (element != currentClicked)
element.style.backgroundColor = color;
}*/