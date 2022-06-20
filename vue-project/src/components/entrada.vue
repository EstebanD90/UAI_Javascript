<template>
  <div
    class="card text-bg-dark bg-dark mb-3 text-white"
    style="max-width: 20rem"
  >
    <div class="card-header">{{ titulo }}</div>
    <div class="card-body">
      <h5 class="card-text">{{ fecha }}</h5>
      <p class="card-text">${{ precio }}</p>
      <p class="card-text">Estadio: {{ lugar }}</p>
      <p>Cantidad adquirida: {{ cantComprada }} / {{ stock }}</p>
      <p>Recaudacion: ${{recaudacion}}</p>
      <button @Click="comprarEntrada()" class="btn btn-success">Comprar</button>
    </div>
    <div v-if="cantComprada >= (stock - 5) && cantComprada != stock" class="m-4 alert alert-warning">
            Últimas {{ calculoStock }} entradas disponibles.
      </div>
    <div v-else-if="cantComprada == stock" class="m-4 alert alert-danger">
            Entradas agotadas.
      </div> 
  </div>
</template>

<script>
export default {
  props: {  
    titulo: String,
    fecha: String,
    precio: Number,
    lugar: String,
    stock: Number,
  },

  data() {
    return {
      cantComprada: 0,
    };
  },

  computed: {
    recaudacion() {
      return this.cantComprada * this.precio;
    },
    calculoStock() {
      return this.stock - this.cantComprada;
    }
  },
  methods: {
    comprarEntrada() {
      if(this.validarStock())
      {
        this.cantComprada = this.cantComprada + 1;
      }
      
    },

    validarStock() {
        if(this.cantComprada <= (this.stock - 1)) {
          return true;
        }
        else
        {
          alert('No quedan entradas disponibles');
          return false;
        }
    },
  },
};
</script>