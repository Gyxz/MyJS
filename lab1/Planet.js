'use strict'
let Planets = new Array()

class Planet
{
    constructor(Name)
    {
        this.Name = Name
    }

    AddPlanets(name)
    {
        Planets.push(new Planet(name))
    }

}

function ChangePlanet (PlanetIndex,name){
	Planet[PlanetIndex].name = name;
	

}
function deletePlanet (PlanetIndex){
	Planet.splice(PlanetIndex);
}

function foundPlanet (name){
	let found = Planet.find(function(element) {
  	return element.name == name;
	});
	return found;
}