<template>
    <div>
        <div class="container">
            <div class="global_title small">
                <p><span>Hobbies</span></p>
            </div>
        </div>
        <div class="hobbies">
            <p class="hobbies__title">I love videogames and concerts</p>
            <div class="hobbies__squear squear-1">
                <img src="static/images/videogames.gif" alt="Videogames" class="hobbies__squear__image">
                <div class="hobbies__squear__wrapper">
                    <p class="hobbies__squear__wrapper__title">My favorites are fighting and rhythm games</p>
                </div>
            </div>
            <div class="hobbies__squear squear-2">
                <img src="static/images/tame-impala.jpg" alt="Concerts" class="hobbies__squear__image">
                <div class="hobbies__squear__wrapper">
                    <p class="hobbies__squear__wrapper__title">Listen to my beat</p>
                </div>
            </div>
            <div class="hobbies__squear squear-1">
                <img src="static/images/overwatch.jpg" alt="Overwatch" class="hobbies__squear__image">
                <div class="hobbies__squear__wrapper">
                    <p class="hobbies__squear__wrapper__title">Main Junkrat on Overwatch (Platinum | PS4)</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    $primary-color: #73e47a;
    $font-1: 'Quicksand', sans-serif;
    $font-2: 'Archivo Black', sans-serif;
    .hobbies{
        padding: 0 10rem 9rem 10rem;
        /*background: $primary-color;*/
        &__title{
            font-size: 2.2rem;
         }
         &__squear{
            font-size: 0;
            width: 100%;
              position: relative;
            &__wrapper{
                 width: 50%;
                top: 0;
                left: 0;
                bottom: 0;
                position: absolute;
                 display: inline-block;
                background: $primary-color;
                    &__title{
                        bottom: 3rem;
                        left: 2rem;
                        right: 2rem;
                         z-index: 2;
                        margin: 0;
                        color: #FFF;
                         font-size: 2rem;
                         font-weight: bold;
                         position: absolute;
                        font-family: $font-1;
                        text-align: left;
                     }
            }
            &__image{
                z-index: 2;
                 width: 50%;
                 position: relative;
                 display: inline-block;
                transform: scale(1.05);
             }
         }

    }
    .hobbies__squear{
        &.squear-1{
            .hobbies__squear__wrapper{
                left: 50%;
            }
         }
        &.squear-2{
             text-align: right;
            .hobbies__squear__wrapper{
                background: #FFF;
                .hobbies__squear__wrapper__title{
                    color: $primary-color;
                }
             }
         }
    }
    .global_title.small{
        margin-bottom: 2.5rem;
    }
    @media (max-width: 1200px) {
        .hobbies {
            padding: 0 4rem 5rem 4rem;
        }
    }
    @media (max-width: 1024px) {
        .hobbies {
            padding: 0 20px 4rem 20px;
        }
        .hobbies__squear__wrapper__title{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 1024px) {
        .hobbies__squear__wrapper__title{
            font-size: 1.2rem;
        }
    }
    @media (max-width: 768px) {
        .hobbies__squear__wrapper__title{
            font-size: 1.2rem;
        }
        .hobbies__squear__wrapper, .hobbies__squear__image{
            width: 100%;
            display: block;
            position: static;
        }
        .hobbies__squear__image{
            transform: scale(1);
        }
        .hobbies__squear__wrapper{
            margin-bottom: 20px;
        }
        .hobbies__squear__wrapper__title{
            position: static;
            padding: 20px 40px;
        }
    }
</style>

<script>
    export default {
        name: 'hobbies',
        data () {
            return {

            }
        },
        mounted(){
        },
        created() {

        },
        methods: {

        }
    }
</script>
