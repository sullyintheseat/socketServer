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
      "border": true,
      "borderSize": "10px",
      "borderColor": "#dc0026"
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
    "primaryText": "yellow",
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
      "widget": "offers"
    },
    {
      "id": 2,
      "useImage": false,
      "image": "PB_btn_green_data.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_data.png",
      "title": "Schedule",
      "target": "/option2",
      "widget": "schedule",
      "content": {
        "events": [
          {
            "title": "Awesome Fest: Day One",
            "subtitle": "A fun place for all!",
            "time": "3:00PM",
            "date": "03-21-2019"
          },
          {
            "title": "Awesome Fest: Day Two",
            "subtitle": "A fun place for all!",
            "time": "3:00PM",
            "date": "03-22-2019"
          },
          {
            "title": "Awesome Fest: Day Three",
            "subtitle": "A fun place for all!",
            "time": "3:00PM",
            "date": "03-23-2019"
          },
          {
            "title": "Awesome Fest: Finalie!!!",
            "subtitle": "A fun place for all!",
            "time": "3:00PM",
            "date": "03-24-2019"
          }
        ]
      }
    },
    {
      "id": 3,
      "useImage": false,
      "image": "PB_btn_green_connected.png",
      "icon": "https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_connected.png",
      "title": "Roster/Team",
      "target": "/option3",
      "widget": "team",
      "content": {
        "roster": [
          {
            "firstname": "Roger",
            "lastname": "Rabbit",
            "position": "Running Back",
            "team": "Mariners",
            "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533"
          },
          {
            "firstname": "Jim",
            "lastname": "Stacey",
            "position": "Linebacker",
            "team": "Yung Trap",
            "image": "https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest?cb=20131219163533"
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
      "widget": "shop"
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
  }
 
}

module.exports.Controller = ContentController;
module.exports.controller = (app) => {
  app.get('/v1/wa/:id', ContentController.getAppConfig)
  app.get('/v1/wa', ContentController.getAppConfig)
}