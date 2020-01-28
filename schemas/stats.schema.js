const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ISODate  = mongoose.SchemaTypes.ISODate
const shortId = require('shortid')
const moment = require('moment')

const StatsEventSchema = Schema({
  teamId: {
    type: Number,
    required: true
  },
  eventId: {
    type: Number,
    required: true
  },
  gameDate: {
    type: Date,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'appStatsEvents' 
})


class AppStatsEvents {
  static async createItem (data) {
    try {
      let result = await this.create(data);
      console.log(result)
      return result;
    } catch (error) {
      return false;
    }
  }

  static async getItem () {
    try {
      let result = await this.find()
        .exec()
      return result
    } catch (error) {
      return error
    }
  }

  static async getItemBy(team, evtDate) {
    try {
      console.log(evtDate)
      let criteria = new Date(evtDate+'T00:00:00.000Z')
      console.log({teamId: team, gameDate: `ISODate('${criteria.toISOString()}')` })
      let result = await this.findOne({teamId: team, gameDate: criteria }).exec()
      if(!result) {
        return({eventId: null})
      } else {
        return result
      }
    } catch (error) {
      return error
    }
  }
}

StatsEventSchema.loadClass(AppStatsEvents)

module.exports = mongoose.model('appStatsEvents', StatsEventSchema)