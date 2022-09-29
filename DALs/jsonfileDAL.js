const jsonFile = require("jsonfile");

const getPhons = async () => {
  const {phones} = await jsonFile.readFile("./Data/phones.json");
  return phones
};

module.exports = {getPhons}
