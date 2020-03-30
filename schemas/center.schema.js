const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')
const ObjectId = mongoose.Types.ObjectId

const CenterSchema = Schema({
  name: {
    type: String,
    required: true
  },
  centerId: {
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
    default: null
  },
  url: {
    type: String,
    default: null,
  },
  notes: {
    type: String,
    default: null,
  },
  centerType: {
    type: String,
    default: null,
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'centers' 
})


class Center {
  
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
        .exec()
    } catch(error) {
      return false
    }
  }

  static async updateItem (data) {
    try {
      console.log(data)
      let update = await this.findOneAndUpdate(
        {
          _id : data._id
        },
        data,
        {new: true})
        .exec()
      return update;
    } catch (err) {
      return err;
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

CenterSchema.loadClass(Center)
module.exports = mongoose.model('centerItem', CenterSchema)