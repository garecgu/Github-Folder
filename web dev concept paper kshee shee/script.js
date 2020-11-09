let tabHead = document.getElementsByClassName("tab-head")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHead.getElementsByTagName("div");

for( let i=0; i<tabsPane.length; i++ )
{
    tabsPane[i].addEventListener("click", function()
    {
        tabHead.getElementsByClassName("sets")[0].classList.remove("sets");
        tabsPane[i].classList.add("sets");
        tabBody.getElementsByClassName("sets")[0].classList.remove("sets");
        tabBody.getElementsByTagName("div")[i].classList.add("sets");

        tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;
    });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
