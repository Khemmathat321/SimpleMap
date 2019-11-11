<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/SCG">SCG</a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/SCG">Home</a>
          <a class="nav-item nav-link" href="/resume">CV</a>
          <a class="nav-item nav-link" href="/map">Map</a>
        </div>
      </div>
    </nav>

    <div class="container pt-4">
      <router-view />
    </div>

    <footer class="py-4 bg-dark text-white-50 mt-4">
      <div class="container text-center small">
        Copyright &copy;
        <a href="https://www.linkedin.com/in/khemmathat141/" style="text-decoration: none" target="__blank">Khemmathat</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
