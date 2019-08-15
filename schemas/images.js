const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const AppImageSchema = Schema({
  appId: {
    type: String,
    required: true,
    index: true
  },
  imgId: {
    type: String,
    default: shortId.generate,
    index: true
  },
  imgExt: {
    type: String,
    default: null
  },
  imgLocation: {
    type: String,
    default: null
  } 
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'appImages' 
})

AppImageSchema.virtual('pathFull').get(function () {
  let result = `${this.imgLocation}${this.imgId}.${this.imgExt}`
  return result
})


class AppImage {
  static async createImage (data) {
    console.log(data)
    try {
      let result = await this.create(data);
      console.log(result)
      return result;
    } catch (error) {
      return error;
    }
  }
}

AppImageSchema.loadClass(AppImage)

module.exports = mongoose.model('appImage', AppImageSchema)