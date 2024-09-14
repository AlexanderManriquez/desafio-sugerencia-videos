class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        //definir método
    }
}

class Reproductor extends Multimedia {
    constructor(id){
        this._id = id;
    }

    playMultimedia() {
        //Definir método
    }

    setInicio() {
        //Sobreescribir método
    }
}