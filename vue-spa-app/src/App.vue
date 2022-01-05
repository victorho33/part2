<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
import { useAuth0, AuthState } from "./utils/useAuth0";
const { login, logout, initAuth } = useAuth0(AuthState);
initAuth();

</script>

<template>

  <!--<img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/product">Product</router-link> 

    <div v-if="!AuthState.isAuthenticated">
       <button @click="login()" class="btn btn-primary">Login</button>
    </div>      
     <div v-else>
       <button @click="logout()" class="btn btn-secondary">Logout</button> &nbsp;&nbsp;&nbsp;&nbsp; <strong>{{ AuthState.user.name }}</strong>, welcome to Foody! 
     </div> 
  </div>

  <div class="container">
    <router-view></router-view>
  </div>


</template>

<style>

</style>
