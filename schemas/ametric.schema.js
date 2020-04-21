const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MetricSchema = Schema({
  targetId: {
    type: String,
    required: true,
    index: true
  },
  deviceId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  selected: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  tagId: {
    type: String,
    required: true,
    index: true
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
  static async createItem (data) {
    try {
      let result = await this.create(data)
      return result
    } catch (error) {
      return error
    }
  }

}

MetricSchema.loadClass(Metric)

module.exports = mongoose.model('metricItem', MetricSchema)