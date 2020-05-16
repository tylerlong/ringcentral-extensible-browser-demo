console.log('hello world')

global.sendFax = e => {
  e.preventDefault()
  console.log('send fax')
  const element = document.getElementById('image')
  const files = element.files
  if (files.length === 0) {
    global.alert('Please specify a file to send')
    return
  }
  const file = element.files[0]
  console.log(file)
}
