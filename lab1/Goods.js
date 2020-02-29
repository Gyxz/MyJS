'use strict'
let Goods = new Array()

class Good
{
    constructor(Name,SpaceStation)
    {
        this.Name = Name
        this.SpaceStation = SpaceStation
    }

    AddGoods(name,SpaceStation)
    {
        Goods.push(new Good(name,SpaceStation))
    }

}

function ChangeGoods (GoodsIndex,name,SpaceStation){
	Good[GoodsIndex].name = name;
	Good[GoodsIndex].SpaceStation = SpaceStation;

}
function deleteoGoods (GoodsIndex){
	Good.splice(GoodsIndex);
}

function foundGoods (name){
	let found = Good.find(function(element) {
  	return element.name == name;
	});
	return found;
}