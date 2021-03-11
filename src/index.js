const RingCentral = require('@rc-ex/core').default

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET
})

rc.login({
  username: process.env.RINGCENTRAL_USERNAME,
  extension: process.env.RINGCENTRAL_EXTENSION,
  password: process.env.RINGCENTRAL_PASSWORD
})

global.sendFax = async e => {
  e.preventDefault()
  console.log('send fax')
  const element = document.getElementById('image')
  const files = element.files
  if (files.length === 0) {
    global.alert('Please specify a file to send')
    return
  }
  const file = element.files[0]

  // const formData = new global.FormData()
  // formData.append('files[]', new global.Blob([JSON.stringify({ to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }] })], { type: 'application/json' }), 'request.json')
  // formData.append('files[]', file, file.name)
  // const r = await rc.post('/restapi/v1.0/account/~/extension/~/fax', formData)

  const r = await rc.restapi().account().extension().fax().post({
    to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }],
    attachments: [{
      filename: file.name,
      contentType: `image/${file.name.endsWith('.png') ? 'png' : 'jpeg'}`,
      content: file
    }]
  })
  console.log(r)
  alert('Fax sent');
}
