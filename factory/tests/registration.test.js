describe("The regNumber Display", function () {
    it("Checks that input is not empty", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555"])

        var regNumb = "CA 123456"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456"]);

    })
    it("Should add  CA 142536 to the list", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 132888", "CJ 90909", "CY 760555", "CA 123456"])

        var regNumb = "CA 142536"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 132888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536"]);

    })
    it("Should add  CJ 789456 to the list", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536"])

        var regNumb = "CJ 789456"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

    })
    it("Should add  CY 789456 to the list", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var regNumb = "CY 789456"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456", "CY 789456"]);

    })
    it("Should not add  ND 789456 to the list", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var regNumb = "ND 789456"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

    })
    it("Should not add  GP 789456 to the list", function () {
        //test
        var theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var regNumb = "GP 789456"//input entered

        theRegDisplay.regCheck(regNumb)//checks value of input
        assert.deepEqual(theRegDisplay.allReg(), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

    })
})
describe("the !repeat function", function () {
    it("should not add a registration number again if it has already been entered", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var entered = "CA 122888";

        assert.deepEqual(theRegDisplay.noRepeat(entered), false)
    });
    it("should not add CA 123456  again if it has already been entered", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var entered = "CA 123456";

        assert.deepEqual(theRegDisplay.noRepeat(entered), false)
    });
    it("should not add CJ 789456 again if it has already been entered", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var entered = "CJ 789456";

        assert.deepEqual(theRegDisplay.noRepeat(entered), false)
    });
    it("should not add CY 760555 again if it has already been entered", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"])

        var entered = "CY 760555";

        assert.deepEqual(theRegDisplay.noRepeat(entered), false)
    });
})
describe("The town radio button function should filter registrations for town selected", function () {
    it("should display all registration numbers", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

        var town = "all";

        assert.deepEqual(theRegDisplay.radioBtnSelected(town), ["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);
    });

    it("should display all Cape Town registration numbers", function () {
        
        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

        var town = "CA";

        assert.deepEqual(theRegDisplay.radioBtnSelected(town), ["CA 122888", "CA 123456", "CA 142536"]);
    });

    it("should display all Pearl registration numbers", function () {  

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

        var town = "CJ";

        assert.deepEqual(theRegDisplay.radioBtnSelected(town), ["CJ 90909", "CJ 789456"]);
    });

    it("should display Bellville registration numbers", function () {

        let theRegDisplay = RegDisplay(["CA 122888", "CJ 90909", "CY 760555", "CA 123456", "CA 142536", "CJ 789456"]);

        var town = "CY";

        assert.deepEqual(theRegDisplay.radioBtnSelected(town), ["CY 760555"]);
    });
})