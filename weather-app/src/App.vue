<template>
    <div id="app">
        <HeaderBar @changeTheme="changeTheme"/>
        <router-view/>
    </div>
</template>

<script>

import HeaderBar from './components/HeaderBar'
export default {
  name: 'App',
  components: {
    HeaderBar
  },
  methods: {
    themeSwitchLocal (localStoreTheme) {
      if (localStoreTheme === 'dark') {
        document.styleSheets[0].disabled = true
      } else if (localStoreTheme === 'light') {
        document.styleSheets[1].disabled = true
      }
    },

    changeTheme () {
      switch (localStorage.getItem('theme')) {
        case 'dark':
          localStorage.setItem('theme', 'light')
          break
        case 'light':
          localStorage.setItem('theme', 'dark')
          break
        default:
          localStorage.setItem('theme', 'light')
      }
      switch (localStorage.getItem('theme')) {
        case 'light':
          document.styleSheets[0].disabled = false
          document.styleSheets[1].disabled = true
          break
        case 'dark':
          document.styleSheets[0].disabled = true
          document.styleSheets[1].disabled = false
          break
      }
    }
  },

  mounted () {
    this.themeSwitchLocal(localStorage.getItem('theme'))
  }
}
</script>

<style lang="scss">
@import "public/css/variables";

* {
    font-family: Consolas, sans-serif;
    margin: 0;
    padding: 0;
}

#app {
    transition: background-color 0.5s;
    max-width: 750px;
    margin: auto;
}
</style>
