const Metric = require('../schemas/metrics')

const offers= [
  {
    type: "offer",
    brand: "bacardi",
    item: "1",
    state: "accept"
  },
  {
    type: "offer",
    brand: "draftkings",
    item: "1",
    state: "accept"
  },
  {
    type: "offer",
    brand: "nissan",
    item: "1",
    state: "accept"
  },
  {
    type: "offer",
    brand: "gamestop",
    item: "1",
    state: "accept"
  },
  {
    type: "offer",
    brand: "statefarm",
    item: "1",
    state: "accept"
  }
]
const promos= [
  {
    type: "promo",
    brand: "Bacardi_1",
    item: "Bacardi",
    state: "accept"
  },
  {
    type: "promo",
    brand: "DraftKings_1",
    item: "DraftKings",
    state: "accept"
  },
  {
    type: "promo",
    brand: "GameStop_1",
    item: "GameStop",
    state: "accept"
  },
  {
    type: "promo",
    brand: "Nissan_1",
    item: "Nissan",
    state: "accept"
  },
  {
    type: "promo",
    brand: "StateFarm_1",
    item: "StateFarm",
    state: "accept"
  }
]

const MetricsController = {
  test: async(req, res) =>{
    try {
      let { type, brand, item, state } = req.params
      let result = {data : `yes to ${type} and ${brand}`}
      console.log(type + ' ' + brand + ' ' + item + ' ' + state)
      if(type == 'offer' && state == 'accept') {
        offers.push({type, brand, item, state})
      } else {
        if (state == 'accept') {
          promos.push({type, brand, item, state})
        }
      }
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send('Unknown Server Response')
    }
  },

  getPromos: async(req, res) => {
    let total = 0
    try{
      if (req.params.brand === undefined){
        res.status(200).send(promos);
      } else {
        for(let i = 0; i < promos.length; i++){
          if (promos[i].item.toLowerCase() == req.params.brand) {
            total ++
          }
        }
        res.status(200).send({total})
      }    
    } catch (err) {
      res.status(500).send('Unknown Server Response' + err)
    }
  },

  getOffers: async(req, res) => {
    let total = 0
    try{
      if (req.params.brand === undefined){
        res.status(200).send(offers);
      } else {
        for(let i = 0; i < offers.length; i++){
          if (offers[i].brand.toLowerCase() == req.params.brand) {
            total ++
          }
        }
        res.status(200).send({total})
      }   
    } catch (err) {
      res.status(500).send('Unknown Server Response', err)
    }
  },
  
  getTotals: async(req, res) => {
    let offcount = 0
    let procount = 0
    try {
      for(let i = 0; i < promos.length; i++){
        if (promos[i].item.toLowerCase() == req.params.brand) {
          procount ++
        }
      }

      for(let i = 0; i < offers.length; i++){
        if (offers[i].brand.toLowerCase() == req.params.brand) {
          offcount ++
        }
      }

      await procount
      await offcount

      res.status(200).send({offcount, procount})
    } catch (err) {
      res.status(500).send('Unknown Server Response', err)
    }
  },

  addMetric: async(req, res) => {
    try {
      await Metric.createMetric(req.body)
      res.status(200).send()
    } catch (err) {
      res.status(500).send('Unknown Server Response', err)
    }
  }
}

module.exports.Controller = MetricsController
module.exports.controller = (app) => {
  app.get('/v1/metrics/:type/:brand/:item/:state', MetricsController.test)
  app.get('/v1/data/promos/:brand', MetricsController.getPromos)
  app.get('/v1/data/offers/:brand', MetricsController.getOffers)
  app.get('/v1/data/promos', MetricsController.getPromos)
  app.get('/v1/data/offers', MetricsController.getOffers)
  app.get('/v1/data/totals/:brand', MetricsController.getTotals)
  app.post('/v1/metric', MetricsController.addMetric)
}