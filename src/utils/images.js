const https = 'https://dolphin-miniproject.oss-cn-beijing.aliyuncs.com/images/'

const images = {
  
}

Object.keys(images).forEach(key => {
  images[key] = https + images[key] 
})

export default images