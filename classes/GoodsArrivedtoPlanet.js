'use strict'
let GoodsArrivedtoPlanet = new Array()

class Good
{
    constructor(Name,Planet)
    {
        
        this.Name = Name
        this.Planet = Planet
    }

    AddGoods(name,planet)
    {
        GoodsArrivedtoPlanet.push(new Good(name,planet))
    }

}

function ChangeGoods (GoodsIndex,name,planet){
	GoodsArrivedtoPlanet[GoodsIndex].Name = name;
	GoodsArrivedtoPlanet[GoodsIndex].Planet = planet;
}

function deleteoGoods (GoodsIndex){
	GoodsArrivedtoPlanet.splice(GoodsIndex);
}

function foundGoods (name){
	let found = GoodsArrivedtoPlanet.find(function(element) {
  	return element.name == name;
	});
	return found;
}