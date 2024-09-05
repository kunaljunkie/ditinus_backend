const countriesModel = require("../models/country");
const ErrorHandling = require("../servives/service");

exports.fetchCountrybyName = ErrorHandling(async (req, res) => {
  const { name } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  let query = {};
  if (name) {
    query["name.common"] = new RegExp(name, "i");
    const countries = await countriesModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);
  
    const totalItems = await countriesModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);
    if (countries.length) {
      res.status(200).json({
        message: "success",
        data: countries,
        pagination: {
          currentPage: page,
          totalPages: totalPages,
          totalItems: totalItems,
          itemsPerPage: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
          nextPage: page < totalPages ? page + 1 : null,
          prevPage: page > 1 ? page - 1 : null,
        },
      });
    } else {
      res.status(400).json({ message: "countries not found" });
    }
  } else {
    res.status(400).json({ message: "Please provide country name" });
  }
});

exports.fetchCountrybyCode = ErrorHandling(async (req, res) => {
  const { country_code } = req.params;
  let query = {};
  if (country_code) {
    query["codes.cca2"] = country_code.toUpperCase();
    const countries = await countriesModel.find(query);
    if (countries.length) {
      res.status(200).json({ message: "success", data: countries });
    } else {
      res.status(400).json({ message: "country not found" });
    }
  } else {
    res.status(400).json({ message: "Please provide country code" });
  }
});
