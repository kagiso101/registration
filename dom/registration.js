var registration = localStorage["registrations"];
var numbers = [];
if (registration) {
    numbers = JSON.parse(registration)
}

var reg = RegDisplay(numbers)
var inputBox = document.querySelector(".regString")
var addBtn = document.getElementById("addBtn")
var theList = document.querySelector(".the_list")
var display = document.getElementById("display")
var clearBtn = document.querySelector(".clearBtn")
var filter = document.querySelector(".filter")
// window.addEventListener("load", function(){

// })


function showReg() {
    var regList = reg.allReg()

    for (var i = 0; i < regList.length; i++) {
        var currentItem = regList[i]

        var theElement = document.createElement("li")//html listS
        theElement.innerHTML = currentItem//regNumb
        theList.appendChild(theElement)
    }
}

showReg()
function addBtnClicked() {
    theList.innerHTML = ""
    var regItem = inputBox.value.toUpperCase()
    var checkingReg = reg.regCheck(regItem)
    var regList = reg.allReg()
    localStorage['registration'] = JSON.stringify(regList)
    showReg()
    setTimeout(function () {
        display.innerHTML = "";
    }, 2000)
}
console.log(theList)

addBtn.addEventListener("click", addBtnClicked);

//FILTER func

function filtering() {
    theList.innerHTML = ""
    var town = filter.value

    var townSelected = reg.radioBtnSelected(town)
    for (var i = 0; i < townSelected.length;i++) {
        var filterdTown = townSelected[i]
        var filteredElement = document.createElement("li")
        filteredElement.innerHTML = filterdTown
        theList.appendChild(filteredElement)
    }

}


filter.addEventListener("change", filtering);


//CLEAR BUTTON
clearBtn.addEventListener("click", function () {
    localStorage.clear()
    theList.innerHTML = ""
    window.location.reload();
});