<template>
    <div class="website">
        <div class="hero">
            <div class="name">
                <h2>Hello, I'm Axel</h2>
            </div>
            <router-view class="view two" name="hero"></router-view>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Quicksand');

    $font-1: 'Archivo Black', sans-serif;
    $font-2: 'Quicksand', sans-serif;

    $primary-color: #73e47a;

    body{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: $font-2;
        /*Quicksand*/
        #app {

        }
    }
    .hero{
        width: 100%;
        height: 100vh;
        position: relative;
        min-height: 400px;
        h2{
            z-index: 2;
            color: #FFF;
            font-size: 48px;
            left: 50%;
            top: 50%;
            letter-spacing: 3px;
            background: $primary-color;
            position: absolute;
            padding: 10px 20px;
            display: inline-block;
        }
        canvas{
            z-index: 1;
            position: absolute;
            top:0; left: 0; right: 0; bottom: 0;
        }
    }
</style>
