'use strict'
let SpaceStations = new Array()

class SpaceStation
{
    constructor(Name,Planet)
    {
        this.Name = Name
        this.Planet = Planet
    }

    AddSpaceStations(name,planet)
    {
        SpaceStations.push(new SpaceStation(name,planet))
    }

}

function ChangeSpaceStation (StationIndex,name,planet){
	SpaceStation[StationIndex].name = name;
	SpaceStation[StationIndex].planet = planet;

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