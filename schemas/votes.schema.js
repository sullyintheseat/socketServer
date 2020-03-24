const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ISODate  = mongoose.SchemaTypes.ISODate
const shortId = require('shortid')
const moment = require('moment')

const VoteSchema = Schema({
  contestId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  targetId: {
    type: String,
    required: true
  },
  candidate: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'votes' 
})


class AppVotes {
  static async createItem (data) {
    if(data) {
      try {
        let result = await this.create(data)
        return result
      } catch (error) {
        return false;
      }
    } else {
      return false
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

  static async getItemBy(evt) {
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

  static async getAggregatedVotes() {
    try {
      let result = await this.aggregate([
        {
          $group: {
             _id: '$candidate',
             count: { $sum: 1 }
          }
        }
      ])
      return result
    } catch (error) {
      return error
    }
  }
}

VoteSchema.loadClass(AppVotes)

module.exports = mongoose.model('appVote', VoteSchema)