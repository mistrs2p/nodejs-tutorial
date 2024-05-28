// node uses CommonJS library, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')
const names = require("./4-names.ts");

const sayHii = require("./5-utils.ts");

const data = require("./6-alternative-flavor.ts")
// console.log(data)

require("./7-mind-grenade.ts")

// sayHii("susan");
// sayHii(names.john);
// sayHii(names.mahdi);
