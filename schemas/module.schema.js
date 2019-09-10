const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const ModuleSchema = Schema({
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'brands' 
})


class Module {
  
  static async createItem (appData) {
    try {

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

ModuleSchema.loadClass(Module)

module.exports = mongoose.model('ModuleItem', ModuleSchema)