<template>
    <div class="website">
        <div id="canvas-area">
            <router-view name="Hero"></router-view>
            <router-view name="Description"></router-view>
        </div>
        <router-view name="Work"></router-view>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        data () {
            return {

            }
        },
        created(){
            console.log("Created");
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Quicksand');

    $font-1: 'Quicksand', sans-serif;
    $font-2: 'Archivo Black', sans-serif;

    $primary-color: #73e47a;

    $easeInBack      :  cubic-bezier(0.600, -0.280, 0.735, 0.045);
    $easeOutBack     :  cubic-bezier(0.175,  0.885, 0.320, 1.275);
    $easeInOutBack   :  cubic-bezier(0.680, -0.550, 0.265, 1.550);

    body{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: $font-1;
        *{
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        *, *:before, *:after {
            box-sizing: border-box;
        }
    }
</style>
