'use strict'
let Planets = new Array()

class Planet
{
    constructor(Name,Capacity_Storage,Mass)
    {
        this.Name = Name
        this.Capacity_Storage = Capacity_Storage
        this.Mass = Mass
    }

    AddPlanets(name,capacity_storage,mass)
    {
        Planets.push(new Planet(name,capacity_storage,mass))
        
    }

}

function ChangePlanet (PlanetIndex,name,capacity_storage,mass){
    Planet[PlanetIndex].name = name;
    Planet[PlanetIndex].capacity_storage = capacity_storage;
    Planet[PlanetIndex].mass = mass;

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