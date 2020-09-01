<template>
    <div id="app">
        <HeaderBar @changeTheme="darkThemeSwitch"/>
    </div>
</template>

<script>

import HeaderBar from "./components/HeaderBar";
export default {
    name: 'App',
    components: {
        HeaderBar
    },
    methods: {
        _addDarkTheme() {
            let darkThemeLinkEl = document.createElement("link");
            darkThemeLinkEl.setAttribute("rel", "stylesheet");
            darkThemeLinkEl.setAttribute("href", "css/dark-theme.css");
            darkThemeLinkEl.setAttribute("id", "dark-theme-style");

            let docHead = document.querySelector("head");
            docHead.append(darkThemeLinkEl);
        },
        _addLightTheme() {
            let darkThemeLinkEl = document.querySelector("#dark-theme-style");
            let parentNode = darkThemeLinkEl.parentNode;
            parentNode.removeChild(darkThemeLinkEl);

            let lightThemeLinkEl = document.createElement("link");
            darkThemeLinkEl.setAttribute("rel", "stylesheet");
            darkThemeLinkEl.setAttribute("href", "css/light-theme.css");
            darkThemeLinkEl.setAttribute("id", "light-theme-style");

            let docHead = document.querySelector("head");
            docHead.append(lightThemeLinkEl);
        },
        darkThemeSwitch() {
            let darkThemeLinkEl = document.querySelector("#dark-theme-style");
            if (!darkThemeLinkEl) {
                this._addDarkTheme()
            } else {
                this._addLightTheme()
            }
        }
    },
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
      transition: all 0.5s;
      max-width: 800px;
      margin: auto;
}

</style>
