const resellerModel = require("../models/reseller");
const ErrorHandling = require("../servives/service");
const chartmodel = require("../models/charts");
const userModel = require("../models/user");

exports.createResller = ErrorHandling(async (req, res) => {
  const reseller = await resellerModel.create({
    name: req.body.name,
    email: req.body.email,
    headline: req.body.headline,
    tagline: req.body.tagline,
    bodytext: req.body.bodytext,
    primaryColor: req.body.primaryColor,
    secondaryColor: req.body.secondaryColor,
    website: req.body.website,
    logoUrl: req.body.logoUrl,
  });
  if (reseller) {
    if (req.body.userids.length) {
      req.body.userids.map(async (ele) => {
        await userModel.findByIdAndUpdate(
          ele,
          { reseller: reseller._id },
          { new: true }
        );
      });
    }
    res.status(200).json({ data: reseller, message: "Data Saved" });
  } else {
    res.status(400).json({ data: reseller, message: "error occur" });
  }
});
exports.insertchart = ErrorHandling(async (req, res) => {
  const charts = await chartmodel.create(req.body);
  if (charts) {
    res.status(200).json({ data: reseller, message: "Data Saved" });
  } else {
    res.status(400).json({ data: reseller, message: "error occur" });
  }
});
exports.getchart = ErrorHandling(async (req, res) => {
  const data = await chartmodel.find();
  if (data) {
    res.status(200).json({ data: data, message: "Data fount" });
  } else {
    res.status(400).json({ data: data, message: "error not found" });
  }
});
