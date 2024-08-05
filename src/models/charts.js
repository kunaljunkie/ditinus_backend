const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    VulnerabilityScansChart: {
      type: Object,
    },
    UserActivityChart: {
      type: Array,
    },
    ThreatDetectionChart: {
      type: Array,
    },
    IncidentReportsChart: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("charts", userSchema);
