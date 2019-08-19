describe("Function test", function(){
    var tester;
    var passengers = [
        {name:"jan kowalski", ticket: true},
        {name:"jerzy kierzy", ticket: true},
        {name:"paweł marow", ticket: false},
        {name:"kazimierz kola", ticket: true},
    
    ];

    function checkItTwo(passengers){
        return (!passengers.ticket);
    };
    
    function ifItCan(passengers, testFunc){
        for(let i = 0; i < passengers.length; i++){
            if(testFunc(passengers[i])){
                return false;
            }
        };
        return true;
    };

    it("should go thru array and return false", function() {
    var check = ifItCan(passengers, checkItTwo);

    expect(check).toBeFalsy();
    });

    it("shouldn't return true", function(){
        var checkTwp = ifItCan(passengers, checkItTwo);
        
        expect(checkTwp).not.toBe(true);
    })
})