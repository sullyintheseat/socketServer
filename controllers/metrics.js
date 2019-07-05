const MetricsController = {
  test: async(req, res) =>{
    try {
      let { type, brand } = req.params
      let result = {data : `yes to ${type} and ${brand}`}
      console.log(result)
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send('Unknown Server Response');
    }
  }
}

module.exports.Controller = MetricsController;
module.exports.controller = (app) => {
  app.get('/v1/metrics/:type/:brand', MetricsController.test);
}