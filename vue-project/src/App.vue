<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <span class="navbar-text">Boleteria Recitales 2022</span>

      </div>
    </nav>
  <div class="container">
    <h1 id="titulo_boleteria">Venta de entradas</h1>
    <div class="row">
      <div v-for="entrada in entradasJSON" class="col-md-4">
        <Entrada
          :titulo="entrada.descripcion"
          :fecha="entrada.fecha"
          :precio="entrada.precio"
          :lugar="entrada.lugar"
          :stock="entrada.stock"
        />
      </div>

    </div>
  </div>
</template>

<script>
import Entrada from "./components/entrada.vue";
export default {
  components: {
    Entrada,
  },
  data() {
    return {
      entradasJSON: [
        {
          descripcion: "Green Day",
          precio: 14500,
          fecha: "11 de Septiembre",
          lugar: "Vélez Sarsfield" ,
          stock: 15
        },
        {
          descripcion: "Guns N'Roses",
          precio: 17500,
          fecha: "30 de Septiembre",
          lugar: "River Plate" ,
          stock: 20
        },
        {
          descripcion: "Coldplay",
          precio: 69999,
          fecha: "25 de Octubre",
          lugar: "River Plate", 
          stock: 10
        },
        {
          descripcion: "Las Pastillas del abuelo",
          precio: 5000,
          fecha: "20 de Septiembre",
          lugar: "Luna Park" , 
          stock: 15
        },
        {
          descripcion: "No Te Va Gustar",
          precio: 5500,
          fecha: "15 de Octubre",
          lugar: "Hipódromo de Palermo" , 
          stock: 15
        },
        {
          descripcion: "Liam Gallagher",
          precio: 9500,
          fecha: "10 de Noviembre",
          lugar: "Movistar Arena" , 
          stock: 5
        }
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.card-header {
    color: whitesmoke !important;
    font-size: 30px;
}

body {
    background-color: #203a55 !important;
}

span {
    color: whitesmoke !important;
    font-size: 2em;
}

#titulo_boleteria {
    text-align: center;
    color: whitesmoke;
    margin: 20px;
}
</style>

