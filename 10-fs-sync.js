const { readFileSync, writeFileSync } = require("fs");
console.log("Starting app");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} and ${second}\n`,
  {flag: "a"}
);
console.log("Done with this task");
console.log("Starting the next one...");

// const write = writeFileSync('./content/second.txt', read, 'utf8')
// const read2 = readFileSync('./content/second.txt', 'utf8')
// console.log(read2)
