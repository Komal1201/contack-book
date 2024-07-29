<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/contacts">Contact List</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #f8f9fa;
  text-align: center;
}

nav a {
  margin: 0 15px;
  color: #007bff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
