'use strict'
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
exports.FindMaxCountElem = function ()
{
    var sums = {},max = 0,letter;
    var line = "simple string";
    //rl.on('line',(line) =>{
        line.split('').map(function(e){
                e = e.toLowerCase(); 
                sums[e] = !sums[e] ? 1 : sums[e]+1;
                if (sums[e] > max) {
                    max = sums[e];
                    letter = e;
                }
            });
            
        console.log(sums);
        console.log(letter + ": " + max);
    //rl.close();})
   
}