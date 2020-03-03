'use strict'
let SpaceStations = new Array()

class SpaceStation
{
    constructor(Name,Capacity,Needs)
    {
        this.Name = Name
        this.Capacity = Capacity
        this.Needs = Needs
    }

    AddSpaceStations(name,capacity,needs)
    {
        SpaceStations.push(new SpaceStation(name,capacity,needs))
    }

}

function ChangeSpaceStation (StationIndex,name,capacity,needs){
	SpaceStation[StationIndex].Name = name;
    SpaceStation[StationIndex].Capacity = capacity;
    SpaceStation[StationIndex].Needs = needs;

}
function deleteSpaceStation (StationIndex){
	SpaceStation.splice(StationIndex);
}

function foundSpaceStation (name){
	let found = SpaceStation.find(function(element) {
  	    return element.name == name;
	});
	return found;
}