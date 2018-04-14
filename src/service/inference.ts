import axios from 'axios'
import Configure from './config'

class Inference {
  constructor (config:Configure) {
    axios.defaults.baseURL = config.getHostString()
  }
  private _postImage (endpoint, image) {
    return new Promise((resolve, reject) => {
      let payload = new FormData()
      payload.append('ufile', image)
      axios.post(endpoint, payload).then(function (res){
        resolve(res)
      })
    })
  }
  private _getContent (endpoint) {
    return new Promise((resolve, reject) => {
      axios.get(endpoint).then(function (res) {
        resolve(res)
      })
    })
  }
  public classify (image) {
    return this._postImage('classifier/classify', image)
  }
  public detect (image) {
    return this._postImage('detector/detect', image)
  }
  public segment (image) {
    return this._postImage('segmentor/segment', image)
  }
  public getLog (logfilename:string) {
    return this._getContent('static/log/' + logfilename)
  }
  public getTrainConfig() {
    return this._getContent('segmentor/get_train_config')
  }
  public getNodeStatus() {
    return this._getContent('resource/status')
  }
}

export default Inference