const app1 = {
    data() {
        return {
            mensajes: [
                { accion: 'Bañarme', estado: 'false' },
                { accion: 'Almorzar', estado: 'false' },
                { accion: 'Atender mis clases', estado: 'false' },
                { accion: 'Un rato de Hobby', estado: 'false' },
                { accion: 'Salir a correr', estado: 'false' }
            ],
            cantidad: 1,
            nuevaTarea: ''  
        };
    },
    computed: {
        rangeColorClass() {
            if (this.cantidad <= 40) return 'range-green';
            if (this.cantidad <= 70) return 'range-orange';
            return 'range-red';
        }
    },
    methods: {
        incrementar() {
            if (this.cantidad < 100) {
                this.cantidad++;
            }
        },
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        toggleEstado(index) {
            this.mensajes[index].estado = this.mensajes[index].estado === 'true' ? 'false' : 'true';
        },
        cuantosMensajes() {
            return this.mensajes.filter(mensaje => mensaje.estado === 'true').length;
        },
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
                this.mensajes.push({ accion: this.nuevaTarea, estado: 'false' });
                this.nuevaTarea = ''; 
            } else {
                alert("Por favor ingrese una tarea válida.");
            }
        }
    }
};

Vue.createApp(app1).mount('#app');
