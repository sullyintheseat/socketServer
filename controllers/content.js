const images = require ('../schemas/images')
const brand = require('../schemas/brand.schema')
const modules = require('../schemas/module.schema')
const result = {
  "appId": "pytchblack",
  "components": {
    "header": {
      "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/KC_header_home.jpg"
    },
    "background": {
      "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/halftone_background@2x.png"
    },
    "card": {
      "color": "#dc0026",
      "textSize": "28px",
      "border": true,
      "borderSize": "0px",
      "borderRadius": "10px",
      "borderColor": "rgb(214, 214, 214)"
    },
    "homeButton": {
      "image": "PB_btn_green_connected.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_home.png",
      "title": "Home",
      "target": "/"
    }
  },
  "colors": {
    "primary": "#dc0026",
    "primaryText": "#feb300",
    "card": {
      "border": true,
      "borderSize": "10px",
      "borderColor": "rgba(255,255,255,.46)"
    }
  },
  "optionItems": [
    {
      "id": 1,
      "useImage": false,
      "image": "PB_btn_green_platform.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_platform.png",
      "title": "Offers",
      "target": "/option1",
      "widget": "offers",
      "header": {
        "template": "fixed_image",
        "logo": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/icon_calendar_selected.png",
        "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/KC_header_sponsors.jpg"
      },
      "content": {
        "borderRadius": "15px",
        "offers": [
          {
            "title": "80% off Any Coke",
            "subtitle": "Save money on your next coke! Thanks to Digital Seat, Madison Square Garden, and Coca Cola, you get to enjoy a crisp coke for a fraction of the price. Take this to your nearest vendor to get refreshed now!",
            "image": "https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/chiefs/MA_coupon_card_Bacardi.jpg",
            "button": {
              "text": "Redeem Offer"
            },
            "discount": {
              "type": "Percent",
              "value": 80
            }
          },
          {
            "title": "$200 off All TVs at Best Buy",
            "subtitle": "Save money on your next TV! Thanks to Digital Seat, Madison Square Garden, and Best Buy, you get to enjoy a nice TV for a fraction of the price. Take this to your nearest vendor to start watching now!",
            "image": "https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/chiefs/MA_coupon_card_DraftKings.jpg",
            "button": {
              "text": "Redeem Offer"
            },
            "discount": {
              "type": "Money",
              "value": 200
            }
          },
          {
            "title": "$200 off All TVs at Best Buy",
            "subtitle": "Save money on your next TV! Thanks to Digital Seat, Madison Square Garden, and Best Buy, you get to enjoy a nice TV for a fraction of the price. Take this to your nearest vendor to start watching now!",
            "image": "https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/chiefs/MA_coupon_card_Nissan.jpg",
            "button": {
              "text": "Redeem Offer"
            },
            "discount": {
              "type": "Money",
              "value": 200
            }
          },
          {
            "title": "$200 off All TVs at Best Buy",
            "subtitle": "Save money on your next TV! Thanks to Digital Seat, Madison Square Garden, and Best Buy, you get to enjoy a nice TV for a fraction of the price. Take this to your nearest vendor to start watching now!",
            "image": "https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/chiefs/MA_coupon_card_StateFarm.jpg",
            "button": {
              "text": "Redeem Offer"
            },
            "discount": {
              "type": "Money",
              "value": 200
            }
          }
        ]
      }
    },
    {
      "id": 2,
      "useImage": false,
      "image": "PB_btn_green_data.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_data.png",
      "title": "Schedule",
      "target": "/option2",
      "widget": "schedule",
      "header": {
        "template": "fixed_image",
        "logo": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/icon_calendar_selected.png",
        "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/KC_header_schedule.jpg"
      },
      "content": {
        "is_season_active": true,
        "is_preseason_active": true,
        "is_offseason_active": false,
        "button": {
          "text": "Tickets",
          "icon": "event"
        },
        "events": [
          {
            "title": "Pre-season WEEK 1",
            "subtitle": "A fun place for all!",
            "time": "7:00PM CDT",
            "date": "08-10-2019",
            "is_preseason": true,
            "opposing_team": {
              "name": "Bengals",
              "logo": "https://res.cloudinary.com/nflleague/image/private/t_q-best/league/okxpteoliyayufypqalq",
              "city": "Cincinnati",
              "state": ""
            }
          },
          {
            "title": "Pre-season WEEK 2",
            "subtitle": "A fun place for all!",
            "time": "6:30PM",
            "date": "03-22-2019",
            "is_preseason": true,
            "opposing_team": {
              "name": "Steelers",
              "logo": "https://res.cloudinary.com/nflleague/image/private/t_q-best/league/xujg9t3t4u5nmjgr54wx",
              "city": "Pittsburgh",
              "state": ""
            }
          },
          {
            "title": "Pre-season WEEK 3",
            "subtitle": "A fun place for all!",
            "time": "7:00PM",
            "date": "03-23-2019",
            "is_preseason": true,
            "opposing_team": {
              "name": "49ers",
              "logo": "https://res.cloudinary.com/nflleague/image/private/t_q-best/league/dxibuyxbk0b9ua5ih9hn",
              "city": "San Francisco",
              "state": ""
            }
          },
          {
            "title": "Pre-season WEEK 4",
            "subtitle": "A fun place for all!",
            "time": "7:00PM",
            "date": "03-24-2019",
            "is_preseason": true,
            "opposing_team": {
              "name": "Packers",
              "logo": "https://res.cloudinary.com/nflleague/image/private/t_q-best/league/gppfvr7n8gljgjaqux2x",
              "city": "Green Bay",
              "state": ""
            }
          }
        ]
      }
    },
    {
      "id": 3,
      "useImage": false,
      "image": "PB_btn_green_connected.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_connected.png",
      "title": "Team",
      "target": "/option3",
      "widget": "team",
      "header": {
        "template": "fixed_image",
        "logo": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/icon_calendar_selected.png",
        "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/KC_header_team.jpg"
      },
      "content": {
        "roster": [
          {
            "firstname": "Chris",
            "lastname": "Jones",
            "position": "Defensive Tackle",
            "number": "95",
            "team": "Mariners",
            "image": "https://uiwcardinals.com/images/2018/8/16/Klutts_Brooks.jpg?width=300"
          },
          {
            "firstname": "Frank",
            "lastname": "Clark",
            "position": "Defensive End",
            "number": "55",
            "team": "Yung Trap",
            "image": "https://uiwcardinals.com/images/2018/8/16/Williams_Jamarkese.jpg?width=300"
          }
        ]
      }
    },
    {
      "id": 4,
      "useImage": false,
      "image": "PB_btn_green_loyalty.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_loyalty.png",
      "title": "Shop",
      "target": "/option4",
      "widget": "shop",
      "header": {
        "template": "fixed_image",
        "logo": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/icon_calendar_selected.png",
        "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/KC_header_shop.jpg"
      },
      "card": {
        "color": "white"
      },
      "content": {
        "products": [
          {
            "id": 123,
            "name": "Awesome T-Shirt",
            "photos": [
              { "image": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/prod_1.jpg" },
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" }
            ],
            "colors": [
              { "id": 121, "label": "blue" },
              { "id": 122, "label": "yellow" },
              { "id": 123, "label": "green" },
              { "id": 124, "label": "red" },
              { "id": 125, "label": "orange" }
            ],
            "sizes": [
              { "id": 101, "label": "xs" },
              { "id": 102, "label": "sm" },
              { "id": 103, "label": "md" },
              { "id": 104, "label": "lg" },
              { "id": 104, "label": "xl" }
            ]
          },
          {
            "id": 124,
            "name": "Awesome Jacket",
            "photos": [
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" },
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" }
            ],
            "colors": [
              { "id": 121, "label": "blue" },
              { "id": 122, "label": "yellow" },
              { "id": 123, "label": "green" },
              { "id": 124, "label": "red" },
              { "id": 125, "label": "orange" }
            ],
            "sizes": [
              { "id": 101, "label": "xs" },
              { "id": 102, "label": "sm" },
              { "id": 103, "label": "md" },
              { "id": 104, "label": "lg" },
              { "id": 104, "label": "xl" }
            ]
          },
          {
            "id": 125,
            "name": "Awesome Shorts",
            "photos": [
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" },
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" }
            ],
            "colors": [
              { "id": 121, "label": "blue" },
              { "id": 122, "label": "yellow" },
              { "id": 123, "label": "green" },
              { "id": 124, "label": "red" },
              { "id": 125, "label": "orange" }
            ],
            "sizes": [
              { "id": 101, "label": "xs" },
              { "id": 102, "label": "sm" },
              { "id": 103, "label": "md" },
              { "id": 104, "label": "lg" },
              { "id": 104, "label": "xl" }
            ]
          },
          {
            "id": 126,
            "name": "Awesome Jersey",
            "photos": [
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" },
              { "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533" }
            ],
            "colors": [
              { "id": 121, "label": "blue" },
              { "id": 122, "label": "yellow" },
              { "id": 123, "label": "green" },
              { "id": 124, "label": "red" },
              { "id": 125, "label": "orange" }
            ],
            "sizes": [
              { "id": 101, "label": "xs" },
              { "id": 102, "label": "sm" },
              { "id": 103, "label": "md" },
              { "id": 104, "label": "lg" },
              { "id": 104, "label": "xl" }
            ]
          }
        ]
      }
    }
  ]
}

const ContentController = {

  test: async (req, res) => {
    let id = req.params.id
    if (id) {
      try {
        res.status(200).send(id)
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Not found')
    }
  },

  getAppConfig: async (req, res) => {
    let id = req.params.id
    if (id) {
      try {
        res.status(200).send(result)
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Not found')
    }
  },

  getAllFiles: async (req, res) => {
    try {
      let response = await images.getImages()
      res.status(200).send(response)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getAllFilesByVenue: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getAllFilesByApp: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getImageById: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getBrand: async (req, res) => {
    try {
      let result = await brand.getItem({appId: req.params.id})
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getModules: async (req, res) => {
    try {
      let result = await modules.getItem({appId: req.params.id})
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },
}

module.exports.Controller = ContentController;
module.exports.controller = (app) => {
  app.get('/v1/wa/:id/branding', ContentController.getBrand)
  app.get('/v1/wa/:id/modules', ContentController.getModules)
  app.get('/v1/wa/:id', ContentController.getAppConfig)
  app.get('/v1/wa', ContentController.getAppConfig)
  app.get('/v1/app/v/:venueId', ContentController.getAllFilesByVenue)
  app.get('/v1/app/a/:appId', ContentController.getAllFilesByApp)
  app.get('/v1/app/i/:imgId', ContentController.getImageById)
  app.get('/v1/app/i', ContentController.getAllFiles)
}