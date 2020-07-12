function RegDisplay(regList) {
    
    var allRegNumbers = regList || [];


    function regCheck(regNumb) {// does not add empty input and adds all valid regNumb to array

        if (regNumb !== "") {//if input is not empty
            if (/C[AYJ] \d{3,6}$/.test(regNumb)) {//checks regNumber meets conditions set
                allRegNumbers.push(regNumb)//conditions met then push to regNumbers
            }
            else {
                return false; //if conditions not met then false 
            }
        }
    }

    function noRepeat(entered) {//does not allow for repeat numbers
        if (!allRegNumbers.includes(entered)) {
            return entered;
        } else {
            return false;
        }
    }
    // function displaying registrations according to radio button selected
    function radioBtnSelected(town) {
        if (town == "all") {
            return allRegNumbers;
        }
        else{
			var list = [];
			for(var i = 0; i < allRegNumbers.length; i++){

				if(allRegNumbers[i].startsWith(town)){

					list.push(allRegNumbers[i])
				} 
			}
			return list;
        }
    }
    //function returning theRegs
    function allReg() {
        console.log(allRegNumbers)
        return allRegNumbers; O
    }

    return {
        regCheck,
        allReg,
        noRepeat,
        radioBtnSelected
    }
}