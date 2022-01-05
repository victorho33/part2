<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input v-model="email" name="email" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input">
      <button class="btn">Login</button>
    </form>
    
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    async login(){

      const data = { 
        email: this.email,
        password: this.password,         
      }

      const headeroption = { 
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const response = await axios.post('auth/login', data,  headeroption )
      console.log(response.status)
      if (response.status == 200) {
        alert(response.data.msg);
        this.$router.push({ path: '/product' })
      }

    }
  },
}
</script>