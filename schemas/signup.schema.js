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
  },
  moduleId: {
    type: String,
    default: null
  },
  formName: {
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
      let valid =  false
      for (var item in appData) {
        if(item !== 'eventId' && item !== 'appId' && item !== 'tagId') {
          if(appData[item]) {
            valid = true
          }
        }
      }
      if(valid) {
        let exists = await this.find(appData)
        
        if(exists.length > 0){
          return ({error: 'Already Entered'})
        } else {
          let result = await this.create(appData)
          return result
        }
        
      } else {
        return false
      }
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

  static async getItems (query) {
    try {
      return await this.find(query).exec()
    } catch(error) {
      return false
    }
  }
}

SignupSchema.loadClass(Signup)

module.exports = mongoose.model('SignupItem', SignupSchema)