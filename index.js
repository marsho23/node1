const axios = require("axios");
const {add} = require("./calc"); //this will destructure the add funtion from calc
console.log(add(2,2));
axios.get("https://pokeapi.co/api/v2/pokemon/ditto").
then(({data}) => console.log("fav:", data));