const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')
const ObjectId = mongoose.Types.ObjectId

const OrderSchema = Schema({
  orderId: {
    type: String,
    default: shortId.generate()
  },
  name: {
    type: String,
    required: true
  },
  spot: {
    type: String,
    default: null
  },
  busId: {
    type: String,
    default: null
  },
  orderType: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  total: {
    type: String,
    default: null
  },
  isPickedUp: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'orders' 
})


class Order {
  
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

OrderSchema.loadClass(Order)
module.exports = mongoose.model('orderItem', OrderSchema)