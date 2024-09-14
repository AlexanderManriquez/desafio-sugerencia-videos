// Módulo para manejar la inserción de videos en iframes
const MultimediaModule = (function () {
    // Función privada para insertar la URL en el iframe correspondiente
    const insertarEnIframe = function (url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        } else {
            console.error(`Elemento con ID ${id} no encontrado`);
        }
    };

    // Función pública para gestionar la inserción
    return {
        //reproducir:nombre de la propiedad // function: valor de la propiedad (llama a la función privada)
        reproducir: function (url, id) {
            insertarEnIframe(url, id);
        }
    };
})();

// Clases Multimedia y Reproductor
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        console.log('“Este método es para realizar un cambio en la URL del video”');
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    //Método de la clase que llama al reproductor para mostrar el video
    playMultimedia() {
        MultimediaModule.reproducir(this._url, this._id);
    }

    //Método que nos permite cambiar el momento de inicio del video
    setInicio(tiempo) {
        const iframe = document.getElementById(this._id);
        if (iframe) {
            const nuevaUrl = `${this._url}?start=${tiempo}`;
            iframe.setAttribute('src', nuevaUrl);
        } else {
            console.error(`Elemento con ID ${this._id} no encontrado`);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const videoMusica = new Reproductor('https://www.youtube.com/embed/LzX6ReSrzM0', 'musica');
    const videoPelicula = new Reproductor('https://www.youtube.com/embed/uDzfa0w86Vw', 'peliculas');
    const videoSerie = new Reproductor('https://www.youtube.com/embed/9GgxinPwAGc?si=FU3zjw7m6q6DaRj6', 'series');

    videoMusica.playMultimedia();
    videoPelicula.playMultimedia();
    videoSerie.playMultimedia();
    
    videoMusica.setInicio(90);
});

