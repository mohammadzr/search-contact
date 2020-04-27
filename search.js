var btn = document.getElementById("btn");
var input = document.getElementById("inpt1");
var searchB = document.getElementById("search-box");

function search() {

    ///---get ul and li---/// 

    var ul = document.getElementById("ul");
    var li = ul.querySelectorAll("#li");

    ///---get value---///

    var val = document.getElementById("inpt1").value.toUpperCase();

    ///---check value is valid---/// 
    var patt = /[a-z]/i;

    if (patt.test(val) == true) {
        searchB.style.border = "none";
        document.getElementById("inpt1").value = "";

        ///---check all the span tag---///

        for (var i = 0; i < li.length; i++) {
            ///---this is for name---///
            var child = li[i].getElementsByTagName("span")[0];

            if (child.innerHTML.toUpperCase().indexOf(val) > -1 ) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
    else {
        document.getElementById("inpt1").value = "";
        searchB.style.border = "rgba(248, 56, 56, 0.886) solid 1.4px";
    }
}
