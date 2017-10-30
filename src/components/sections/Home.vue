<template>
    <div class="website">
        <div :class="['hero', welcomeShow]">
            <div class="hero__name">
                <h2><span>Hello, I'm Axel González</span></h2>
                <p class="hero__name__subtitle"><span>Full-Stack Developer, based in México City</span></p>
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
                welcomeShow: ''
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
                this.welcomeShow = 'hero--pre_active';
                setTimeout(function(){
                    this.welcomeShow = 'hero--pre_active hero--active';
                    setTimeout(function(){
                        this.welcomeShow = 'hero--pre_active hero--active hero--finished';
                    }.bind(this), 900);
                }.bind(this), 1200);
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Quicksand');

    $font-1: 'Archivo Black', sans-serif;
    $font-2: 'Quicksand', sans-serif;

    $primary-color: #73e47a;

    $easeInBack      :  cubic-bezier(0.600, -0.280, 0.735, 0.045);
    $easeOutBack     :  cubic-bezier(0.175,  0.885, 0.320, 1.275);
    $easeInOutBack   :  cubic-bezier(0.680, -0.550, 0.265, 1.550);

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
        & &__name {
            top: 50%;
            left: 50%;
            z-index: 2;
            text-align: center;
            position: absolute;
            transform: translate3d(-50%, -50%, 0);
            h2{
                opacity: 0;
                color: #FFF;
                margin: 0;
                font-size: 48px;
                letter-spacing: 3px;
                display: inline-block;
                transition: all 350ms ease-out;
                span{
                    z-index: 5;
                    opacity: 0;
                    color: $primary-color;
                    display: block;
                    position: relative;
                    padding: 10px 20px;
                    transition: all 30ms 700ms ease-out;
                }
                &:before, &:after{
                     content: '';
                     top: 0;
                     left: 0;
                     width: 0;
                     bottom: 0;
                     position: absolute;
                }
                &:before{
                     z-index: 1;
                     background: $primary-color;
                     transition: all 700ms $easeInOutBack;
                 }
                &:after{
                     z-index: 2;
                     background: #FFF;
                     transition: all 500ms 700ms $easeInOutBack;
                 }
            }
            &__subtitle {
                opacity: 0;
                z-index: 1;
                position: relative;
                font-family: $font-1;
                letter-spacing: 3px;
                 transform: translateY(-20px);
                text-transform: uppercase;
                 transition: all 700ms 500ms $easeInOutBack;
            }
        }
        & &__canvas{
            z-index: 1;
            position: absolute;
            top:0; left: 0; right: 0; bottom: 0;
        }
        &--pre_active{
            .hero__name{
                h2{
                    opacity: 1;
                    transform: translateY(0);
                    span{
                        opacity: 1;
                    }
                    &:before, &:after{
                         width: 100%;
                     }
                }
            }
        }
        &--active{
            .hero__name{
                h2{
                    opacity: 1;
                    transform: translateY(0);
                    span{
                        opacity: 1;
                        animation: all 1s 0s ease-out;
                    }
                    &:before{
                       width: 100%;
                   }
                    &:after{
                        left: inherit;
                        right: 0;
                       width: 0;
                   }
                }
            }
        }
        &--finished{
            .hero__name{
                h2{
                    span{
                        color: #FFF;
                    }
                }
                &__subtitle{
                     opacity: 1;
                     transform: translateY(0);
                 }
            }
         }
    }
</style>
