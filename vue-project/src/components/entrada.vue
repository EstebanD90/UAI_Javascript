<template>
  <div
    class="card text-bg-dark bg-dark mb-3 text-white"
    style="max-width: 20rem"
  >
    <div class="card-header">{{ titulo }}</div>
    <div class="card-body">
      <h5 class="card-text">Fecha: {{ fecha }}</h5>
      <p class="card-text">${{ precio }}</p>
      <p class="card-text">Estadio: {{ lugar }}</p>
      <p>Cantidad adquirida: {{ cantidadComprada }}</p>
      <p>Recaudacion: {{recaudacion}}</p>
      <button @Click="comprarEntrada()" class="btn btn-success">Comprar</button>
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
  },
  data() {
    return {
      cantidadComprada: 0,
    };
  },
  computed: {
    recaudacion() {
      return this.cantidadComprada * this.precio;
    },
  },
  methods: {
    comprarEntrada() {
      this.cantidadComprada = this.cantidadComprada + 1;
    },
  },
};
</script>