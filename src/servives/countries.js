const axios = require("axios");
const countryModel = require("../models/country");

async function getCountrieslist() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all"); 
    const countries = response.data;
    const countriesList = [] 
    const check = await countryModel.find()
    if(check.length !== (response.data && response.data.length)){
        for (const country of countries) {
            const countryData = {
              name: country.name,
              tld: country.tld,
              codes: {
                cca2: country.cca2,
                cca3: country.cca3,
                ccn3: country.ccn3,
              },
              independent: country.independent,
              status: country.status,
              unMember: country.unMember,
              currencies: country.currencies,
              capital: country.capital,
              region: country.region,
              subregion: country.subregion,
              languages: country.languages,
              latlng: country.latlng,
              flag: country.flag,
              population: country.population,
              timezones: country.timezones,
              flags: country.flags,
              maps: country.maps,
              area: country.area,
              demonyms: country.demonyms,
              startOfWeek: country.startOfWeek,
            };
            countriesList.push(countryData)
          }
        await countryModel.deleteMany()
        const insert = await countryModel.insertMany(countriesList)
        if(insert){
            console.log("Countries list updated")
        }else{
            console.log("Error updating countries list")
        }
    }else{
        console.log("Countries list is up to date")
    }
  } catch (error) {
    console.error("Error fetching and saving countries:", error);
  }
}

module.exports = {
  getCountrieslist,
};
