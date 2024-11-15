<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fs-5">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img width="70px" src="" alt="logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li v-for="(marca, index) in marcas" :key="index">
                <router-link to="/MarcasComponent">{{ marca }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cubosService from '@/services/ServiceCubos';

export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
      error: null
    }
  },
  mounted() {

    cubosService.getMarcas()
      .then(response => {
        this.marcas = response;
      })
      .catch(error => {
        this.error = 'No se pudieron cargar los cubos.';
        console.error(error);
      });
  }
}
</script>

<style></style>