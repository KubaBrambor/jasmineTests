
var passengers = [
    {name:"jan kowalski", ticket: true},
    {name:"jerzy kierzy", ticket: true},
    {name:"paweł marow", ticket: false},
    {name:"kazimierz kola", ticket: true},

]


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
}

ifItCan(passengers, checkItTwo);