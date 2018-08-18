import Configure from './service/config'
import Inference from './service/inference'
class CVClient {
    private _config:Configure
    private _inference:Inference
    constructor (_base_url, _port) {
        this._config = new Configure(_base_url, _port)
        this._inference = new Inference(this._config)
    }
    public classify(image) {
        return this._inference.classify(image)
    }
    public detect(image) {
        return this._inference.detect(image)
    }
    public segment(image) {
        return this._inference.segment(image)
    }
    public getLog(logFileName:string) {
        return this._inference.getLog(logFileName)
    }
    public getTrainConfig() {
        return this._inference.getTrainConfig()
    }
    public getNodeStatus() {
        return this._inference.getNodeStatus()
    }
}

export default CVClient