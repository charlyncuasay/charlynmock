<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/minsu.png" alt="Logo" class="logo" />
      <span class="clinic-name">Mindoro State University Clinic - Calapan Campus</span>
    </div>
    <div class="links">
      <router-link to="/">Login</router-link>
      <span>|</span>
      <router-link to="/SignupPage">Sign Up</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 5px;
}

.clinic-name {
  font-size: 1.1em;
  font-weight: bold;
  color: #08571e;
}

.links {
  display: flex;
  align-items: center;
  gap: 5px; /* Space between Home, About, and the separator */
}

nav a {
  font-weight: bold;
  color: #0c3a28;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #42b983;
}
</style>
