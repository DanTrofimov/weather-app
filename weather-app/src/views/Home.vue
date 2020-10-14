<template>
    <div class="home-page-wrapper wrapper">
        <div>
            <h1 class="wrapper__page-title">
                HomePage
            </h1>
            <h2 class="wrapper__description">
                Vue weather web-application ⛅. If you want to check application press "Get Started".
            </h2>
            <p class="wrapper__navItem navItem">
                <router-link to="/default" class="navItem__link">
                    GET STARTED
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
@import "public/css/mixins.scss";

.wrapper {
    /*display: grid;*/
    /*place-items: center;*/
    @include center-styles();
    height: 70vh;
    max-width: 500px;
    text-align: center;
    margin: auto;
    padding-right: 20px;
    padding-left: 20px;

    .wrapper__page-title {
        margin-bottom: 10px;
    }

    .wrapper__description {
        margin-bottom: 25px;
    }
}

.wrapper__description {
    font-size: 20px;
}

.wrapper__navItem {
    margin: auto;
    max-width: 200px;
    font-weight: 600;
    font-size: 30px;
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    padding: 10px;

    .navItem__link {
        text-decoration: none;
    }
}
</style>
