const MinioConnect = require('minio')
const accessKey = 'nJPdnHDfqeQpSEbWiRrl'
const secretKey = 'WpGEJEeJQS6JkfvdiWk9rblMn4KW8sdmdS0vArS2'

const minioClient = new MinioConnect.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: accessKey,
  secretKey: secretKey
})

module.exports = minioClient;