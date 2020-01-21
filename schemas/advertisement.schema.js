const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const AdvertisementSchema = Schema({
  adShort: {
    type: String,
    default: shortId.generate
  },
  name: {
    type: String, 
    default: null,
    requried: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  venueId:  {
    type: String,
    default: null
  },
  adContent: {
  },
  cta: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'applications' 
})


class Advertisement {
  
  async createItem (appData) {
    try {

    } catch(erroe) {
      return false
    }
  }

  async getItem (query) {
    try {

    } catch(erroe) {
      return false
    }
  }

  async getItems () {
    try {

    } catch(erroe) {
      return false
    }
  }

  async updateItem (appId) {
    try {

    } catch(erroe) {
      return false
    }
  }

  async deleteItem (appId) {
    try {

    } catch(error) {
      return false
    }
  }
}

AdvertisementSchema.loadClass(Advertisement)

module.exports = mongoose.model('adItem', AdvertisementSchema)