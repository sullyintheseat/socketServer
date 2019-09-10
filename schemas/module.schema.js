const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const ModuleSchema = Schema({
  brandShort: {
    type: String,
    default: shortId.generate,
    required: true
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
  collection: 'brands' 
})


class Module {
  
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

ModuleSchema.loadClass(Module)

module.exports = mongoose.model('ModuleItem', ModuleSchema)