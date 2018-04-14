class Configure {
    private _BASE_URL:string
    private _PORT:string
    constructor () {
        this._BASE_URL = 'http://127.0.0.1'
        this._PORT = '9090'
    }
    public getHostString() {

    }
    get BASE_URL():string {
        return this._BASE_URL
    }
    set BASE_URL(_base_url:string) {
        this._BASE_URL = _base_url
    }
}