<template>
    <div class="contact">
        <div class="contact__center">
            <p>If you want to know more about me or just talk, send me a message at <a href="mailto:latiosaxe@gmail.com">latiosaxe@gmail.com</a></p>
            <p class="twitter">Or send me a Tweet: <a href="https://twitter.com/latiosaxe" target="_blank">@latiosaxe</a></p>
            <p>Thank you for your time :)</p>

            <p class="small"><a href="https://github.com/latiosaxe/portfolio-2017" target="_blank">Check this website on Github</a></p>
        </div>
        <div class="contact__bottom">
            <p>
                Oh! I almost forgot; I don’t have a degree even though it is needed in many companies,
            </p>
            <p>
                I am, however, a self-taught developer.
            </p>
        </div>
        <div class="contact__triangle"></div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data () {
            return {

            }
        },
        created(){
        },
        mounted(){
        },
        methods: {
        }
    }
</script>

<style lang="scss">


    $font-1: 'Quicksand', sans-serif;
    $font-2: 'Archivo Black', sans-serif;

    $primary-color: #73e47a;

    $easeInBack      :  cubic-bezier(0.600, -0.280, 0.735, 0.045);
    $easeOutBack     :  cubic-bezier(0.175,  0.885, 0.320, 1.275);
    $easeInOutBack   :  cubic-bezier(0.680, -0.550, 0.265, 1.550);

    .contact{
        overflow: hidden;
       width: 100%;
       height: 100vh;
        position: relative;
        color: #FFF;
        text-align: center;
        background: $primary-color;
        & &__center{
            top: 50%;
            left: 0;
            right: 0;
            width: 100%;
            max-width: 600px;
            position: absolute;
            text-align: center;
            margin: 0 auto;
            transform: translateY(-50%);
            p{
                font-size: 2rem;
                a{
                    color: #FFF;
                    font-family: $font-2;
                    text-decoration: none;
                }
            }
            p.twitter{
                color: #487ac6;
                a{
                    color: #487ac6;
                }
            }
            p.small{
                font-size: 1rem;
                a{
                    font-family: $font-1;
                    &:hover{
                         text-decoration: underline;
                     }
                }
            }
       }
        & &__bottom{
            bottom: 5%;
            left: 0;
            right: 0;
            position: absolute;
            text-align: center;
            p{
                font-size: 1.5rem;
                margin: 0;
            }
       }
        & &__triangle{
           width: 0;
           height: 0;
            pointer-events: none;
           border-bottom: 100vh solid rgba(255,255,255,0.1);
           border-right: 100vw solid transparent;
           position: absolute;
           left: 0;
           bottom: 0;
           z-index: 0;
       }
    }
</style>
