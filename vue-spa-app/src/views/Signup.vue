<template>
  <div class="login">
    <form class="form" @submit.prevent="signup">
      <h1>Sign up</h1>
      <label for="firstname">First Name</label>
      <input v-model="firstname" name="firstname" type="text" class="input">
      <label for="lastname">LastName</label>
      <input v-model="lastname" name="lastname" type="text" class="input">
      <label for="email">Email</label>
      <input v-model="email" name="email" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="password" class="input">
      <button class="btn">Sign up</button>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      firstname: '',
      lastname: '',        
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    async signup(){
      window.user = this.username
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,        
        email: this.email,
        password: this.password,         
      }
      
      const headeroption = { 
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const response = await axios.post('auth/register', data,  headeroption )
      console.log(response.status)
      if (response.status == 200) {
        alert(response.data.msg);
        this.$router.push({ path: '/login' })
      }
    }
  },
}
</script>