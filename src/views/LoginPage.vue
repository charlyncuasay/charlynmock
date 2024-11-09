<template>
  <div class="login-container">
    <div class="login-form-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="password-toggle"
            >
              <EyeIcon v-if="showPassword" />
              <EyeOffIcon v-else />
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input
              v-model="rememberMe"
              type="checkbox"
            />
            <span>Remember for 30 Days</span>
          </label>
          <button
            type="button"
            @click="forgotPassword"
            class="forgot-password"
          >
            Forgot password
          </button>
        </div>

        <button type="submit" class="submit-button">
          Sign in
        </button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <router-link to="/SignUpPage">Signup</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleSubmit = () => {
  console.log('Login submitted:', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}

const forgotPassword = () => {
  console.log('Forgot password clicked')
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 1em;
}

.login-form-container {
  max-width: 500px;
  text-align: center;
  margin-bottom: 200px;
}

h2 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 1em;
}

form, .form-group{
  gap: 0.2em;
  text-align: left;
}


label {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 0.3em;
}

input[type="email"],
input[type="password"] {
  width: 92.4%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: 1em;
}

.password-input {
  display: flex;
  align-items: center;
  position: relative;
}

.password-input input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin-bottom: 1em;
  font-size: 1em;
  border: 1px solid #ddd;
}

.password-toggle {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 5px;
}

.forgot-password {
  background: none;
  border: none;
  color: #0d9a63;
  cursor: pointer;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #08571e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #064e19;
}

.signup-link {
  margin-top: 1em;
  font-size: 0.9em;
}

.signup-link a {
  color: #08571e;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
