let AWS = require('aws-sdk')
const uuid = require('uuid')

const S3ManagerController = {

  putdata: async (req, res) => {
    let {Bucket, Key, Body} = req.body
    console.log(Bucket + ' ' + Key + ' ' + Body)
    try {
      var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket}).promise()
      bucketPromise.then(
        function(data) {


          var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject({Bucket, Key, Body}).promise()
          
          uploadPromise.then(
            function(data) {
              res.status(200).send(`Files Uploaded to ${Bucket}`)
            });
      }).catch(
        function(err) {
          console.log(err)
          res.status(401).send(err)
      })
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  },

  uploadFile: async (req, res) => {
    let { Bucket, Key} = req.body
    let newbody = await AWS.util.base64.decode(req.body.BodyRaw)
    console.log(BodyRaw)
    console.log('-------------------------------------------')
    console.log(Body64)
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(
      {
        Bucket, 
        Key, 
        Body: newbody,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: 'image/j',
      }
    ).promise()
          
    uploadPromise.then(
      function(data) {
        res.status(200).send(data)
      })
      .catch(
        function(err) {
          console.log(err)
          res.status(401).send(err)
      })
  }
}

module.exports.Controller = S3ManagerController
module.exports.controller = (app) => {
  app.post('/v1/s3/test', S3ManagerController.putdata)
  app.post('/v1/s3/upload', S3ManagerController.uploadFile)
}