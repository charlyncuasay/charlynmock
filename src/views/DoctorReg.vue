<template>
    <div class="signup-container">
      <!-- Signup Form (Doctor) -->
      <div v-if="role === 'Doctor'" class="form-container">
        <h2>Doctor Registration</h2>
        <form @submit.prevent="handleSignup">
          <label for="licenseNumber">License Number</label>
          <input v-model="licenseNumber" type="text" id="licenseNumber" placeholder="ex. DOC2024-5678" required />
  
          <div class="form-row">
            <div class="form-column">
              <label for="lastName">Last Name</label>
              <input v-model="lastName" type="text" id="lastName" required />
            </div>
            <div class="form-column">
              <label for="firstName">First Name</label>
              <input v-model="firstName" type="text" id="firstName" required />
            </div>
          </div>
  
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
  
          <label for="phone">Phone Number</label>
          <input v-model="phone" type="tel" id="phone" required />
  
          <label for="specialization">Specialization</label>
          <input v-model="specialization" type="text" id="specialization" required />
  
          <button type="submit">Sign Up</button>
        </form>
  
        <p class="login-link">
          Already have an account?
          <router-link to="/">Log in</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DoctorReg",
    data() {
      return {
        licenseNumber: "",
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        specialization: "",
      };
    },
    methods: {
      handleSignup() {
        // Perform signup logic specific to Doctor registration
        console.log("Doctor registration submitted");
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
    padding: 1em;
  }
  
  .form-container {
    max-width: 500px;
    margin-bottom: 200px;
    padding: 1em;
    text-align: center;
  }
  
  h2 {
    font-size: 1.8em;
    color: #333333;
    margin-bottom: 0.5em;
  }
  
  p {
    color: #666666;
    margin-bottom: 1.5em;
  }
  
  button {
    padding: 10px 15px;
    font-size: 1em;
    color: #ffffff;
    background-color: #08571e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
  }
  
  button:hover {
    background-color: #064e19;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    text-align: left;
  }
  
  .form-column {
    flex: 1;
    min-width: 160px; /* Prevents inputs from becoming too small */
  }
  
  label {
    font-size: 0.9em;
    color: #555555;
    text-align: left;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="date"],
  select {
    width: 100%;
    padding: 12px; /* Uniform padding */
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    margin-bottom: 1em;
  }
  
  button[type="submit"] {
    padding: 10px 15px;
    font-size: 1em;
    color: #fff;
    background-color: #08571e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button[type="submit"]:hover {
    background-color: #064e19;
  }
  
  .login-link {
    margin-top: 1em;
    font-size: 0.9em;
  }
  
  .login-link a {
    color: #08571e;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  