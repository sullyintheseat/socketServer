const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const BrandSchema = Schema({
  targetId: {
    type: String,
    required: true
  },
  deviceId:{
    type: String,
    default: null
  },
  questionId: {
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


class Brand {
  
  static async createItem (appData) {
    try {
      let result = await this.create(data)
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

  static async updateItem (appId) {
    try {

    } catch(error) {
      return false
    }
  }

  static async deleteItem (appId) {
    try {

    } catch(error) {
      return false
    }
  }
}

BrandSchema.loadClass(Brand)

module.exports = mongoose.model('BrandItem', BrandSchema)