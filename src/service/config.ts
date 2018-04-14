class Configure {
    private _BASE_URL:string
    private _PORT:string
    constructor (_base_url:string, _port:string) {
        this._BASE_URL = _base_url
        this._PORT = _port
    }
    public getHostString():string {
        return this.BASE_URL + ':' + this.PORT
    }
    get BASE_URL():string {
        return this._BASE_URL
    }
    set BASE_URL(_base_url:string) {
        this._BASE_URL = _base_url
    }
    get PORT():string {
        return this._PORT
    }
    set PORT(_port:string) {
        this._PORT = _port
    }
}
export default Configure