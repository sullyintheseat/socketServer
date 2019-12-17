const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const ModuleSchema = Schema({
  appId: {
    type: String,
    required: true,
    index: true
  },
  modId: {
    type: String,
    required: true,
    default: shortId.generate
  },
  sortId: {
    type: Number,
    required: true
  },
  useImage: { 
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    required: false,
    default: null
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  displayInFooter: {
    type: Boolean,
    default: false,
    required: true
  },
  title: {
    type: String,
    default: null,
    required: true
  },
  subTitle: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null,
    required: true
  },
  componentTemplate: {
    type: String,
    default: null,
    required: true
  },
  content: {
    type: Object,
    default: null
  },
  header: {
    template: {
      type: String,
      default: null,
      required: true
    },
    logo: {
      type: String,
      default: null,
      required: false
    },
    image: {
      type: String,
      default: null,
      required: false
    }
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'modulesv2' 
})


class Module {
  
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

  static async getAllMods (appId) {
    try {
      return await this.find(appId)
        .sort({sortId: 1})
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

  static async updateItem (modId, module) {
    try {
      return await this.findOneAndUpdate(
          {modId: modId},
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

ModuleSchema.loadClass(Module)
module.exports = mongoose.model('ModuleItem', ModuleSchema)