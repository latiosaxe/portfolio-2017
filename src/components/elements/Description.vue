<template>
    <div class="description">
        <div class="description__wrapper">
            <div class="description__wrapper__white">
                <p>
                    I’m a 25 years old Full-Stack Developer <strong>based in México City</strong>, with a big passion to create. They say I am a good designer, however, I feel I have much to learn. My interests are video and motion graphics, live streamings, and even math. I travel around the world listening to live music.
                </p>
                <p>
                    OH! I also like to cook; my specialty is Japanese food.
                </p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Hero',
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

    .description{
        border-bottom: 1px solid #dadada;
        & &__wrapper{
            display: block;
            margin: 0 auto;
            width: 100%;
            z-index: 4;
            max-width: 600px;
            padding: 4rem 0 12rem;
            position: relative;
            &__white{
                 padding: 20px 40px;
                 background: #FFF;
                p{
                    margin: 0;
                    color: #8d8d8d;
                    line-height: 180%;
                    margin-bottom: 20px;
                strong{
                    color: #000;
                }
                &:last-of-type{
                     margin-bottom: 0;
                 }
                }
                &:before{
                     content: '';
                     width: 80px;
                     height: 2px;
                     position: absolute;
                     left: 50%;
                     bottom: 10rem;
                     background: #8d8d8d;
                     transform: translateX(-50%);
                 }
           }
        }

    }
</style>
