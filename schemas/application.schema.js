const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const ApplicationSchema = Schema({
  appId: {
    type: String,
    default: shortId.generate,
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
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'applications' 
})


class Application {
  
  async createItem (appData) {
    try {

    } catch(error) {
      return false
    }
  }

  async getItem (query) {
    try {

    } catch(error) {
      return false
    }
  }

  async getItems () {
    try {

    } catch(error) {
      return false
    }
  }

  async updateItem (appId) {
    try {

    } catch(error) {
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

ApplicationSchema.loadClass(Application)

module.exports = mongoose.model('applicationItem', ApplicationSchema)