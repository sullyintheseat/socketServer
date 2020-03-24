const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')
const ObjectId = mongoose.SchemaTypes.ObjectId

const ModuleTypeSchema = Schema({
  moduleType: {
    type: String,
    default: shortId.generate(),
    required: true
  },
  moduleName: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'moduleTypes' 
})


class ModuleType {
  
  static async createItem (appData) {
    try {
      let result = await this.create(appData)
      return result
    } catch(error) {
      console.log(error)
      return error
    }
  }

  static async getItemById (modId) {
    try {
      return await this.findOne({modId: modId})
        .exec()
    } catch(error) {
      return false
    }
  }

  static async getItem (appId = null) {
    try {
      return await this.findOne({appId: appId})
        .exec()
    } catch(error) {
      return false
    }
  }

  static async getItems () {
    try {
      return await this.find()
        .exec()
    } catch(error) {
      return false
    }
  }

  static async updateItem (module) {
    try {
      return await this.findOneAndUpdate(
          module,
          {new: true}
        )
      
    } catch(error) {
      return error
    }
  }

  static async deleteItem (appId) {
    try {

    } catch(error) {
      return false
    }
  }
}

ModuleTypeSchema.loadClass(ModuleType)
module.exports = mongoose.model('moduleTypeItem', ModuleTypeSchema)