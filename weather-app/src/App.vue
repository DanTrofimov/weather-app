<template>
    <div id="app">
        <HeaderBar @changeTheme="themeChanger"/>
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
    themeChanger () {
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
      this.themeSwitchLocal(localStorage.getItem('theme'))
    },

    themeSwitchLocal (localStoreTheme) {
      if (localStoreTheme === 'dark') {
        this.addDarkTheme()
      } else if (localStoreTheme === 'light') {
        this.addLightTheme()
      }
    },

    addDarkTheme () {
      const darkThemeLinkEl = document.createElement('link')
      darkThemeLinkEl.setAttribute('rel', 'stylesheet')
      darkThemeLinkEl.setAttribute('href', 'css/dark-theme.css')
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style')

      const docHead = document.querySelector('head')
      docHead.append(darkThemeLinkEl)
    },

    addLightTheme () {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style')
      if (darkThemeLinkEl) {
        const parentNode = darkThemeLinkEl.parentNode
        parentNode.removeChild(darkThemeLinkEl)

        const lightThemeLinkEl = document.createElement('link')
        darkThemeLinkEl.setAttribute('rel', 'stylesheet')
        darkThemeLinkEl.setAttribute('href', 'css/light-theme.css')
        darkThemeLinkEl.setAttribute('id', 'light-theme-style')

        const docHead = document.querySelector('head')
        docHead.append(lightThemeLinkEl)
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
