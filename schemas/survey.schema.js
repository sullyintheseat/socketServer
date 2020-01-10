const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SurveySchema = Schema({
  tagId: {
    type: String,
    required: true
  },
  q1: {
    type: String,
    default: null
  },
  q2: {
    type: String,
    default: null
  },
  q3: {
    type: String,
    default: null
  },
  q4: {
    type: String,
    default: null
  },
  q5: {
    type: String,
    default: null
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'surveys' 
})


class Survey {
  
  static async createItem (appData) {
    try {
      let result = await this.create(appData)
      return result
    } catch(error) {
      return false
    }
  }

  static async getItem (query) {
    try {
      return await this.findOne(query).exec()
    } catch(error) {
      return false
    }
  }

  static async getItems () {
    try {
      return await this.find().exec()
    } catch(error) {
      return false
    }
  }
}

SurveySchema.loadClass(Survey)

module.exports = mongoose.model('SurveyItem', SurveySchema)