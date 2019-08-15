let AWS = require('aws-sdk')
const uuid = require('uuid')
const AppImage = require('../schemas/images'
)
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
    let { Bucket, Key, AppId} = req.body
    try {
      let newbody = await new Buffer(req.body.Body64.replace(/^data:image\/\w+;base64,/, ""),'base64')
      let str = req.body.Body64
      let result = str.match(/^data:image\/\w+;base64,/ig)
      let ContentType = result[0]
      ContentType = ContentType.replace(/^data:/ig, '')
      ContentType = ContentType.replace(/;base64,/ig, '')
      console.log(ContentType)

      let imgExt = ContentType.split('/')

      let imgLocation = `https://${Bucket}.s3.us-east-2.amazonaws.com/${Key}/`
      let newimage = await AppImage.createImage({imgExt: imgExt[1], imgLocation, appId: AppId})
      
      let uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(
        {
          Bucket, 
          Key: `${Key}/${newimage.imgId}.${newimage.imgExt}`, 
          Body: newbody,
          ACL: 'public-read',
          ContentType
        }
      ).promise()
            
      uploadPromise.then(
        function(data) {
          res.status(200).send(newimage)
        })
        .catch(
          function(err) {
            console.log(err)
            res.status(401).send(err)
        })
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = S3ManagerController
module.exports.controller = (app) => {
  app.post('/v1/s3/test', S3ManagerController.putdata)
  app.post('/v1/s3/upload', S3ManagerController.uploadFile)
}