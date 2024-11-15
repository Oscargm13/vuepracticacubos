<template>
  <div class="container">
    <h1>Home Component - Empleados</h1>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cubo in cubos" :key="cubo.id">
          <td>{{ cubo.nombre }}</td>
          <td>
            <img :src="cubo.imagen" alt="" style="width: 150px;"/>
          </td> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import cubosService from '@/services/ServiceCubos';

export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
      error: null
    }
  },
  mounted() {

    cubosService.getCubos()
      .then(response => {
        this.cubos = response;
      })
      .catch(error => {
        this.error = 'No se pudieron cargar los cubos.';
        console.error(error);
      });
  }
}
</script>

<style>

</style>
