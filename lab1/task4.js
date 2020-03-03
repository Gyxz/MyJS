'use strict'

exports.FindMaxCountElem = function (line)
{
    var sums = {},max = 0,letter;
    line.split('').map(function(e)
    {
        e = e.toLowerCase(); 
        sums[e] = !sums[e] ? 1 : sums[e]+1;
        if (sums[e] > max) 
        {
            max = sums[e];
            letter = e;
        }
    });
        //console.log(sums);
    var lol = letter + ": " + max
    return {
        letter: letter,
        repeats: max
    };
}