const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SignupSchema = Schema({
  tagId: {
    type: String,
    required: true
  },
  appId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  fullName: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  mobile: {
    type: String,
    default: null
  },
  street1: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  zip: {
    type: String,
    default: null
  },
  eventId: {
    type: String,
    default: null
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'signups' 
})


class Signup {
  
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

SignupSchema.loadClass(Signup)

module.exports = mongoose.model('SignupItem', SignupSchema)