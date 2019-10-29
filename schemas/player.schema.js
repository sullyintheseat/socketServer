const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const PlayerSchema = Schema({
  teamId: {
    type: String,
    default: null,
    required: true,
    index: true
  },
  playerId: {
    type: String,
    default: shortId.generate
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'players' 
})


class Player {
  
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

PlayerSchema.loadClass(Player)

module.exports = mongoose.model('PlayerItem', PlayerSchema)