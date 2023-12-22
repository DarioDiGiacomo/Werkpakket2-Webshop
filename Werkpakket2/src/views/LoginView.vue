<script>
import { useAuthStore } from '@/stores/authStore.js';


export default {
  data() {
    return {
      authStore: useAuthStore(),
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      await this.authStore.login(this.email, this.password);
      if (this.authStore.loggedIn) {
        this.$router.push("/cart")
        // Voer hier de acties uit die nodig zijn na het inloggen
      } else {
        console.log('Inloggen mislukt');
      }
    },

    logout() {
      this.authStore.logout();
    },
  },
};
</script>
<template>
  <div class="login">
    <div v-if="!authStore.loggedIn">
      <div class="loginform">
        <h1 class="loginform-title">Login</h1>
        <div class="loginform-form">
          <div class="loginform-form-input">
            <label for="email">Email</label>
            <input v-model="email" class="loginform-form-input-file" type="email" name="email" id="email" placeholder="">
          </div>
          <div class="loginform-form-input">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" id="password" placeholder="">
            <div class="loginform-form-input-forgot">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button @click="login" @keyup.enter="login" class="loginform-form-button">Sign in</button>
        </div>
        <p class="loginform-member">Not a <span>JINXD</span> member? <a href="#" class="loginform-member-link">Sign up</a>
        </p>
      </div>
    </div>
    <div v-else class="login-logout">
      <h1><span class="login-logout-spectral">W</span><span class="login-logout-sedgwick">h</span>y <span class="login-logout-spectral">y</span>o<span class="login-logout-sedgwick">u</span> w<span class="login-logout-sedgwick">a</span><span class="login-logout-spectral">n</span>n<span class="login-logout-sedgwick">a</span> <span class="login-logout-sedgwick">leave</span> t<span class="login-logout-sedgwick">h</span><span class="login-logout-spectral">e</span> <span class="login-logout-sedgwick">f</span>a<span class="login-logout-spectral">m</span> b<span class="login-logout-spectral">r</span><span class="login-logout-sedgwick">u</span><span class="login-logout-spectral">v</span>?</h1>
      <button @click="logout">Log out?</button>
    </div>
  </div>
</template>
  
<style lang="">
  </style>
  