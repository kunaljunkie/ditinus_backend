const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {
    common: { type: String, required: true },
    official: { type: String, required: true }
  },
  tld: [{ type: String }],
  codes: {
    cca2: { type: String },
    cca3: { type: String },
    ccn3: { type: String }
  },
  independent: { type: Boolean },
  status: { type: String },
  unMember: { type: Boolean },
  currencies: {
    type: Map,
    of: new mongoose.Schema({
      name: { type: String },
      symbol: { type: String }
    })
  },
  capital: [{ type: String }],
  region: { type: String },
  subregion: { type: String },
  languages: { type: Map, of: String },
  latlng: [{ type: Number }],
  flag: { type: String },
  population: { type: Number },
  timezones: [{ type: String }],
  flags: {
    png: { type: String },
    svg: { type: String }
  },
  maps: {
    googleMaps: { type: String },
    openStreetMaps: { type: String }
  },
  area: { type: Number },
  demonyms: {
    eng: {
      f: { type: String },
      m: { type: String }
    },
    fra: {
      f: { type: String },
      m: { type: String }
    }
  },
  startOfWeek: { type: String }
}, { timestamps: true });

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;
