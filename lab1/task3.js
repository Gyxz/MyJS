'use strict'
var Arr = new Array(4,45,32,8,12,0)
exports.Sort = function ()
{
 var i,j,buff;
    for(i = 1; i < Arr.length; i++)
     {
        buff = Arr[i];

        for(j = i-1; j >= 0 && Arr[j] > buff; j--)
        {
            Arr[j+1] = Arr[j];
        }
        Arr[j+1] = buff;
        buff = Arr[i];
            
     }
     console.log(Arr)
    
}