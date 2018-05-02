<template>
  <div id="app">
    <nav class="navbar is-transparent" role="navigation" aria-label="navigation">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Forms
        </router-link>

        <router-link to="/component-transitions" class="navbar-item">
          ComponentTransitions
        </router-link>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bulma/bulma.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
