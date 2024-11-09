<template>
  <div class="signup-container">
    <!-- Role Selection -->
    <div v-if="!roleSelected" class="role-selection">
      <h2>Select Your Role</h2>
      <p>Please choose your role to proceed with registration:</p>
      <button @click="selectRole('Student')">Student</button>
      <button @click="selectRole('Doctor')">Doctor</button>
      <button @click="selectRole('Staff')">Staff</button>
    </div>

    <!-- Signup Form (Student) -->
    <div v-else-if="role === 'Student'" class="form-container">
      <h2>Student Registration</h2>
      <form @submit.prevent="handleSignup">
        <label for="universityID">University ID</label>
        <input v-model="universityID" type="text" id="universityID" placeholder="ex. MCC2024-1234" required />

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

        <label for="dob">Date of Birth</label>
        <input v-model="dob" type="date" id="dob" required />

        <div class="form-row">
          <div class="form-column">
            <label for="gender">Gender</label>
            <select v-model="gender" id="gender" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-column">
            <label for="civilStatus">Civil Status</label>
            <select v-model="civilStatus" id="civilStatus" required>
              <option value="">Select Civil Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>

        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />

        <label for="phone">Phone Number</label>
        <input v-model="phone" type="tel" id="phone" required />

        <button type="submit">Sign Up</button>
      </form>

      <p class="login-link">
        Already have an account?
        <router-link to="/">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script >
export default {
  name: "SignupPage",
  data() {
    return {
      role: "",
      roleSelected: false,
      universityID: "",
      lastName: "",
      firstName: "",
      dob: "",
      gender: "",
      civilStatus: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    selectRole(role) {
      this.role = role;
      this.roleSelected = true;
    },
    handleSignup() {
      // Perform signup logic specific to the selected role
      console.log("Student registration submitted");
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

.role-selection,
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
