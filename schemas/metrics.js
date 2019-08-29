const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MetricSchema = Schema({
  appId: {
    type: String,
    required: true,
    index: true
  },
  venueId: {
    type: String,
    default: null
  },
  campaignId: {
    type: String,
    default: null
  },
  itemType: {
    type: String,
    default: null
  },
  itemClicked: {
    type: String,
    default: null
  },
  timeClicked: {
    type: Date,
    default: Date.now()
  },
  offerAccepted: {
    type: Boolean,
    default: null
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'appMetrics' 
})


class Metric {
  static async createMetric (data) {
    try {
      let result = await this.create(data);
      console.log(result)
      return result;
    } catch (error) {
      return error;
    }
  }

  static async getMetricsBy (query) {
    try {
      let result = await this.find({query})
        .exec()
      return result
    } catch (error) {
      return error;
    }
  }
}

MetricSchema.loadClass(Metric)

module.exports = mongoose.model('appMetric', MetricSchema)