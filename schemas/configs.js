const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const AppContentSchema = Schema({
  appId: {
    type: String,
    default: shortId.generate,
  },
  components: [
  ],
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'appContent' 
})


class AppContent {
  
  
}

AppContentSchema.loadClass(AppContent)

module.exports = mongoose.model('appContentItem', AppContentSchema)