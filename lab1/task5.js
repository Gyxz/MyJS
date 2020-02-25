'use strict'
exports.GetDate = function(){
    let firstDate = new Date(),
    secondDate = new Date("01/01/2020"),
    timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    console.log(differentDays);
}