'use strict'

exports.InputStr = function(str,str1,index)
{
    let buff = str.substring(index)
    return (str.substring(0,index) + str1 + buff)
} 

