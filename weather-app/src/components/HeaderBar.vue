<template>
    <div class="header-wrapper">
        <p class="header-wrapper__logo">
            weather-app
        </p>
        <p class="header-wrapper__theme-changer" v-on:click="$emit('changeTheme')">
            change theme
        </p>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
    }
</script>

<style scoped lang="scss">
    @import "public/css/variables";

    .header-wrapper {
        display: flex;
        justify-content: space-between;
        height: 30px;
        margin-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .header-wrapper__logo {
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        font-size: 25px;
        font-weight: bold;
    }

    .header-wrapper__theme-changer {
        font-weight: 600;
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        padding: 5px;
        background-color: rgba(255, 255, 255, 0);
    }
</style>