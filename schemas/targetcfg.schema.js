const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')
const ObjectId = mongoose.SchemaTypes.ObjectId

const SponsorSchema = new Schema({
  sponsorName: {
    type: String,
    default: null
  },
  sponsorType: {
    type: String,
    default: null
  }
})
const TargetConfigSchema = Schema({
  targetId: {
    type: String,
    default: shortId.generate,
  },
  venueId: {
    type: ObjectId,
    default: new mongoose.mongo.ObjectId() 
  },
  platformType: {
    type: String,
    required: true
  },
  applicationName: {
    type: String,
    required: true,
    unique: true
  },
  sponsoredBy: [
    {type: SponsorSchema}
  ],
  modules: {
    type: Array,
    default: []
  },
  menuItems: {
    type: Array,
    default: []
  },
  portalAssets: {
    type: String,
    default: null
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'targetConfigs' 
})
/* db.getCollection('targetConfigs').find({sponsoredBy: {$elemMatch: {sponsorName:'Whataburger'}}}) */

class TargetConfig {
  
  static async createItem (data) {
    try {
      let result = await this.create(data);
      console.log(result)
      return result;
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  static async getItems () {
    try {
      let result = await this.find()
        .exec()
      return result
    } catch (error) {
      return error
    }
  }

  static async getItemsBy(query) {
    try {
      let result = await this.find(query)
        .exec()
      if(!result) {
        return false
      } else {
        return result
      }
    } catch (error) {
      return error
    }
  }
}

TargetConfigSchema.loadClass(TargetConfig)

module.exports = mongoose.model('targetConfigItem', TargetConfigSchema)