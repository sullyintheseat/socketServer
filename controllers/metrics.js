const offers = []
const promos = []

const MetricsController = {
  test: async(req, res) =>{
    try {
      let { type, brand, item, state } = req.params
      let result = {data : `yes to ${type} and ${brand}`}
      console.log(type + ' ' + brand + ' ' + item + ' ' + state)
      if(type == 'offer') {
        offers.push({type, brand, item, state})
      } else {
        promos.push({type, brand, item, state})
      }
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send('Unknown Server Response')
    }
  },

  getPromos: async(req, res) => {
    try{
      res.status(200).send(promos);
    } catch (err) {
      res.status(500).send('Unknown Server Response')
    }
  },

  getOffers: async(req, res) => {
    try{
     res.status(200).send(offers);
    } catch (err) {
      res.status(500).send('Unknown Server Response')
    }
  }
}

module.exports.Controller = MetricsController;
module.exports.controller = (app) => {
  app.get('/v1/metrics/:type/:brand/:item/:state', MetricsController.test)
  app.get('/v1/data/promos', MetricsController.getPromos)
  app.get('/v1/data/offers', MetricsController.getOffers)
}