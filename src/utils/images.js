const https = ''

const images = {
  
}

Object.keys(images).forEach(key => {
  images[key] = https + images[key] 
})

export default images