var inputBox = document.querySelector(".regString")
var addBtn = document.getElementById("addBtn")
var radioBtns = document.querySelector(".buttons")
var display = document.getElementById("display")
//
var regList = [];

function addBtnClicked() {

    var regItem = inputBox.value;
    //regCheck : checks that the regItem meets conditions & is not repeated

    if (regItem !== "") {//if input is not empty
        if (/C[AYJ] \d{3,6}$/.test(regItem) && !regList.includes(regItem)) {//checks conditions are met & item !used before
            regList.push(regItem)//conditions met then push to regList
        }
        else {
            return false; //if conditions not met then false 
        }
    }
    localStorage["regNumbers"] = JSON.stringify(regList)//localStorage list
    var myList = JSON.parse(localStorage["regNumbers"])


    //RADIO 
    var checkedRadioBtn = document.querySelector("input[name='place']:checked");
    var regTown = checkedRadioBtn.value
    regTown

    display.innerHTML = myList
    console.log(localStorage)
    //RADIO 

}

addBtn.addEventListener("click", addBtnClicked);