'use strict'

exports.Sort = function (Arr)
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
   return(Arr)
    
}