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
