<template>
  <div id="app" class="container-fluid">
    <div
      id="nav"
      class="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
    >
      <li class="nav-item">
        <router-link to="/estudiantes_personal" class="nav-link">Estudiantes y Personal</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/directivos" class="nav-link">Directivos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/monitoreo" class="nav-link"
          >Monitoreo</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/medicos" class="nav-link">Medicos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/administrador" class="nav-link">Administrador</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/reportes" class="nav-link"
          >Reportes</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link"
          >Login</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/singup" class="nav-link"
          >Sign up</router-link
        >
      </li>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
