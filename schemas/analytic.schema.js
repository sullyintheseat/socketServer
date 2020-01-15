const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnalyticSchema = Schema({
  appId: {
    type: String,
    required: true,
    index: true
  },
  tagId: {
    type: String,
    default: null
  },
  navigation: {
    to: {
      type: String,
      default: null
    },
    from: {
      type: String,
      default: null
    },
    itemClicked: {
      type: String,
      default: null
    }
  },
  call_to_action: {
    to: {
      type: String,
      default: null
    },
    from: {
      type: String,
      default: null
    }
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'analytics' 
})


class Analytic {
  static async addAnalytic (data) {
    try {
      let result = await this.create(data)
      return result
    } catch (error) {
      return error
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

  static async getAllData () {
    try {
      let result = await this.find().exec()
      return result
    } catch (error) {
      return error;
    }
  }
}

AnalyticSchema.loadClass(Analytic)
module.exports = mongoose.model('analytic', AnalyticSchema)