const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const CleanSeatSchema = Schema({
  tagId: {
    type: String,
    required: true,
    index: true
  },
  lastCleaned:
  {
    type: Date,
    default: moment().toDate()
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'appCleanSeats' 
})


class CleanSeat {
  static async createItem (data) {
    try {
      console.log(data)
      data.lastCleaned = moment().toDate()
      let result = await this.create(data)
      return result
    } catch (error) {
      return error
    }
  }
  
  static async getItem () {
    try {
      
      let result = await this.aggregate(
        [
          { $sort: { lastCleaned: 1 } },
          {
            $group:
              {
                _id: "$tagId",
                lastCleaned: { $last: "$lastCleaned" }
              }
          }
        ]
      )
      return result
    } catch (error) {
      return error
    }
  }

}

CleanSeatSchema.loadClass(CleanSeat)

module.exports = mongoose.model('cleanSeatItem', CleanSeatSchema)