'use strict'
exports.RandHex = function(){
    let num = Math.floor(Math.random()*Math.floor(1000));
    console.log(num.toString(16).toUpperCase());
}
