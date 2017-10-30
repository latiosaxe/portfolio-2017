<template>
    <div class="website">
        <div :class="['hero',(welcomeShow===true)?'active':'']">
            <div class="name">
                <h2><span>Hello, I'm Axel</span></h2>
            </div>
            <router-view @canvasShowed="initHome" class="view two" name="hero"></router-view>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        data () {
            return {
                welcomeShow: false
            }
        },
        created(){
//            this.initHome();
        },
        methods: {
            showTitle: function () {

            },
            initHome: function () {
                console.log("Hero is running");
                this.welcomeShow = true;
            }
        }
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
        .name{
            top: 50%;
            left: 50%;
            z-index: 2;
            position: absolute;
            h2{
                opacity: 0;
                color: #FFF;
                margin: 0;
                font-size: 48px;
                letter-spacing: 3px;
                display: inline-block;
                transform: translateY(20px);
                transition: all 350ms ease-out;
                span{
                    z-index: 2;
                    display: block;
                    position: relative;
                    padding: 10px 20px;
                }
                &:before{
                     content: '';
                     top:0;
                     z-index: 1;
                     left: 0;
                     width: 0;
                     bottom: 0;
                     position: absolute;
                     background: $primary-color;
                     transition: all 350ms 500ms ease-out;
                 }
            }
        }
        canvas{
            z-index: 1;
            position: absolute;
            top:0; left: 0; right: 0; bottom: 0;
        }
        &.active{
             .name{
                h2{
                    opacity: 1;
                    transform: translateY(0);
                    span{
                    }
                    &:before{
                         width: 100%;
                     }
                }
            }
        }
    }
</style>
