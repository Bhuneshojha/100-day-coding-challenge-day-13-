"use strict";
//          100 days of coding challenge ( DAY 13 )
//   Question 01    
function make_shirt(size = "large", message = "I love Zindagi.") {
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium","You are my sonia");
make_shirt("small", "Swim into coding pool.");
//   Question 02
function define_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
define_city("Karachi");
define_city("Mirpurkhas");
define_city("Delhi", "India");
//   Question 03
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Dhaka", "Bangladesh"));
