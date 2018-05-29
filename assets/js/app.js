const app = new Vue({
    el: "#app",
    template: "#ejemplo", //agregar el código html al javascript con `html aquí` o hacer uso del elemento template
    data: {
        lenguajes: [
            { nombre: 'Pyhton', url: 'https://www.python.org/' },
            { nombre: 'PHP', url: 'http://php.net/manual/es/intro-whatis.php' }
        ],
        mostrar: true,
        mensaje: "Hola a mis primeros pasos con Vue!",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png"
    },
    methods: {
        toggleMostrar: function() {
            this.mostrar = !this.mostrar;
        }
    }
});
