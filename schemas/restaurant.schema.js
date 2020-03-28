const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')
const ObjectId = mongoose.Types.ObjectId

const RestaurantSchema = Schema({
  name: {
    type: String,
    required: true
  },
  restId: {
    type: String,
    default: shortId.generate()
  },
  address: {
    type: String,
    default: null,
    required: true,
  },
  city: {
    type: String,
    default: null,
    required: true,
  },
  state: {
    type: String,
    default: null,
    required: true,
  },
  zip: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null,
    required: true,
  },
  url: {
    type: String,
    default: null,
  },
  notes: {
    type: String,
    default: null,
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'restaurants' 
})


class Restaurant {
  
  static async createItem (obj) {
    try {
      let result = await this.create(obj)
      return result
    } catch(error) {
      return error
    }
  }

  static async getItem (_id = null) {
    try {
      return await this.findOne({_id})
        .exec()
    } catch(error) {
      return false
    }
  }

  static async getItems () {
    try {
      return await this.find()
        .sort({name: 1})
        .exec()
    } catch(error) {
      return false
    }
  }

  static async deleteItem (id) {
    try {
      return await this.findOneAndDelete({
        _id: ObjectId(id)
      }).exec();
    } catch(error) {
      return false
    }
  }

  

}

RestaurantSchema.loadClass(Restaurant)
module.exports = mongoose.model('restaurantItem', RestaurantSchema)