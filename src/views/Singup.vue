<template>
    <div class="container-fluid  col-sm-4 text-center">
        <form @submit.prevent="submitForm">
  <div class="mb-3">
    <label for="usuario" class="form-label">Name user:</label>
    <input type="text" for="usuario" class="form-control" id="usuario" name="nombre_usuario" v-model="nombre_usuario" required>

    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="correo" aria-describedby="emailHelp" v-model="correo" required>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" v-model="password" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 <h3>Data retrieved from server:</h3>
      <div class="alert alert-success" role="alert" v-if="success">
        <strong>{{success}}</strong>
      </div>
      <pre>{{ response }}</pre>
    </div>
</template>
 <script>
 import axios from 'axios';
 export default {
     data() {
    return {
      nombre_usuario: '',
      correo: '',
      password: '',
      id_rol: 1,
      success: '',
      response: '',
      success: '',
    }
  },
  methods: {
    submitForm() {
      axios.post('//localhost:3000/users', {
        nombre_usuario: this.nombre_usuario,
        correo: this.correo,
        password: this.password,
        id_rol: this.id_rol
      }).then(response => {
        console.log(response);
        this.response = response.data
        this.success = 'Data saved successfully';
        this.response = JSON.stringify(response, null, 2)
      }).catch(error => {
        console.log(error);
      })
    }
  }
 }
 </script>