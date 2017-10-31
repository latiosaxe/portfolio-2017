<template>
    <div class="website">
        <div id="canvas-area">
            <router-view name="Hero"></router-view>
            <router-view name="Description"></router-view>
        </div>
        <router-view name="Work"></router-view>
        <router-view name="Knowledge"></router-view>
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
        .website{
            /*padding: 15px;*/
            width: 100%;
            height: 100vh;
            overflow: auto;
            position: relative;
            border: 15px solid $primary-color;
        }

        .container{
            display: block;
            margin: 0 auto;
            max-width: 1200px;
        }

        .global_title{
            position: relative;
            margin: 8rem 0 8rem;
            p{
                margin: 0;
                font-size: 3rem;
                display: inline-block;
                span{
                    z-index: 4;
                    background: #fff;
                    padding: 0 20px 0 0;
                    position: relative;
                    display: inline-block;
                    color: $primary-color;
                    &:before{

                     }
                }
                &:before{
                    top: 0; right: 0; bottom: 0; left: 0;
                    content: '';
                    z-index: 1;
                    position: absolute;
                    background: $primary-color;
                 }
                &:after{
                    top: 75%; bottom: 20%; left: 0;
                    width: 10%;
                    content: '';
                    z-index: 2;
                    position: absolute;
                    background: #FFF;
                     animation: title-animation 2s infinite ;
                    @keyframes title-animation {
                        0%{
                            left: 0;
                        }
                        100% {
                            left: 100%;
                        }
                    }
                 }
            }
        }
    }
</style>
