const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const ModuleSchema = Schema({
  venueId: {
    type: String,
    default: null,
    required: true,
    index: true
  },
  id: {
    type: Number,
    required: true
  },
  useImage: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  widget: {
    type: String,
    default: null
  },
  header: {
    type: Object,
    default: null
  },
  content: {
    type: Object,
    default: null
  },
  card: {
    type: Object,
    default: null
  },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'modulesalt' 
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