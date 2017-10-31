<template>
    <div class="work">
        <div class="container">
            <div class="global_title">
                <p><span>My Work</span></p>
            </div>

            <div :class="[ (activateSingleWork === true || auxInActive === true)?'active':'', 'single-work']">
                <div  :class="[ (activateSingleWork === true)?'active':'', 'single-work__animation']">
                    <div class="single-work__animation__content">
                        <div class="single-work__animation__content__close" @click="inActivateWork">X</div>
                        <div class="container">
                            <div class="single-work__animation__content__title">
                                {{actualWork.title}}
                            </div>
                            <div class="single-work__animation__content__gif">
                                <img :src="actualWork.gif" :alt="actualWork.title">
                            </div>
                            <div class="single-work__animation__content__grid">
                                <div class="single-work__animation__content__grid__description">
                                    <p>
                                        {{actualWork.description}}
                                    </p>
                                    <p><strong>{{actualWork.sub_title}}</strong></p>
                                </div>
                                <div class="single-work__animation__content__grid__extra">
                                    <img :src="actualWork.aditional_image" :alt="actualWork.title">
                                </div>
                            </div>
                            <div class="single-work__animation__content__url">
                                <a :href="actualWork.url" :style="{color: actualWork.color}" target="_blank">Visit Website</a>
                            </div>
                        </div>
                    </div>
                    <div class="single-work__animation__columns"></div>
                    <div class="single-work__animation__columns"></div>
                    <div class="single-work__animation__columns"></div>
                </div>
            </div>
            <div class="work__recient-work">
                <div v-for="work in works" class="work__recient-work__element">
                    <div class="work__recient-work__element__square" :style="{backgroundColor: work.color}" @click="activateWork(work.position)">
                        <div class="work__recient-work__element__square__title">{{work.title}}</div>
                        <div class="work__recient-work__element__square__sub-title">{{work.resume}}</div>
                        <div class="work__recient-work__element__square__resume">
                            <div class="work__recient-work__element__square__resume__background"><strong>Brand:</strong> {{work.sub_title}}</div>
                        </div>
                        <div class="work__recient-work__element__square__gradient"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Work',
        data () {
            return {
                activateSingleWork: false,
                auxInActive: false,
                actualWork: {},
                works: [
                    {
                        position: 1,
                        title: 'Masthead YouTube',
                        sub_title: 'Victoria, 2017',
                        resume: 'Interactive masthead with sounds and animations',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fugit mollitia. Corporis dolore dolores explicabo harum ipsam, labore molestias mollitia provident quia quis quod ratione sapiente sint tenetur ut voluptatem.',
                        gif: '/static/images/projects/victoria-masthead/hero-gif.gif',
                        aditional_image: '/static/images/projects/victoria-masthead/pattern.png',
                        url: 'http://previews.ktbo.mx/banners/victoria/sound-loop/',
                        color: '#b31f29'
                    },{
                        position: 2,
                        title: 'Nano 6.0',
                        sub_title: 'Reebok, 2016',
                        resume: 'Parallax website promoting Nano 6.0 shoes',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fugit mollitia. Corporis dolore dolores explicabo harum ipsam, labore molestias mollitia provident quia quis quod ratione sapiente sint tenetur ut voluptatem.',
                        gif: '/static/images/projects/nano-6/hero-gif.gif',
                        aditional_image: '/static/images/projects/nano-6/preview.png',
                        url: 'http://nano.reebokmexico.com/',
                        color: '#02bab6'
                    },{
                        position: 3,
                        title: 'The bar MX',
                        sub_title: 'Diageo, 2016',
                        resume: 'Cocktails, Mixed Drinks and Cocktail Recipes',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fugit mollitia. Corporis dolore dolores explicabo harum ipsam, labore molestias mollitia provident quia quis quod ratione sapiente sint tenetur ut voluptatem.',
                        gif: '/static/images/projects/thebar/hero-gif.gif',
                        aditional_image: '/static/images/projects/thebar/preview.png',
                        url: 'https://thebar.com.mx/',
                        color: '#ff5e00'
                    },{
                        position: 3,
                        title: 'KTBO MX',
                        sub_title: 'KTBO, 2016',
                        resume: 'Official Website',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fugit mollitia. Corporis dolore dolores explicabo harum ipsam, labore molestias mollitia provident quia quis quod ratione sapiente sint tenetur ut voluptatem.',
                        gif: '/static/images/projects/ktbo/hero-gif.gif',
                        aditional_image: '/static/images/projects/ktbo/preview.png',
                        url: 'https://thebar.com.mx/',
                        color: '#000000'
                    }
                ]
            }
        },
        created(){
        },
        mounted(){
        },
        methods: {
            activateWork: function (index) {
                this.activateSingleWork = true;
                this.auxInActive = true;
                console.log(index);
                this.actualWork = this.works[index - 1];
                console.log(this.actualWork);
            },
            inActivateWork: function () {
                console.log("Byebye");
                this.activateSingleWork = false;
                setTimeout(function () {
                    this.auxInActive = false;
                }.bind(this), 1200);
            }
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


    @mixin striped-bg($bg-color: #ccc){
        background-color: $bg-color;
        background: linear-gradient(-45deg, $bg-color 0, transparent 100%);
        /*background: linear-gradient(-45deg, $stripe-color 25%, transparent 25%, transparent 50%, $stripe-color 50%, $stripe-color 75%, transparent 75%, transparent);*/
        /*@include background-image(linear-gradient(-45deg, $stripe-color 25%, transparent 25%, transparent 50%, $stripe-color 50%, $stripe-color 75%, transparent 75%, transparent));*/
        background-size: 100% 100%;
    }

    .single-work{
        z-index: 99;
        opacity: 0;
        position: fixed;
        pointer-events: none;
        top:0; right: 0; bottom: 0; left: 0;
        & &__animation{
            &__content{
                 z-index: 5;
                 opacity: 0;
                 position: absolute;
                left: 0;
                right: 0;
                 top: 2rem;
                bottom: 2rem;
                overflow: auto;
                 transition: all 350ms 1000ms ease-in-out;
                 &__close{
                    color: #FFF;
                    font-family: $font-2;
                    top: 1rem;
                    right: 2rem;
                    z-index: 10;
                    position: fixed;
                    font-size: 7rem;
                  }

                &__title{
                    color: #FFF;
                    text-align: center;
                    padding: 10rem 0 4rem;
                    font-family: $font-2;
                    font-size: 5rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
               }
                 &__gif{
                    width: 100%;
                    text-align: center;
                    img{
                        margin: 0 auto;
                        display: block;
                    }
                  }
                 &__url{
                    width: 100%;
                    text-align: center;
                    a{
                        background: #FFF;
                        padding: 20px 40px;
                        font-family: $font-2;
                        font-size: 1.8rem;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        display: inline-block;
                        text-decoration: none;
                    }
                  }
                &__grid{
                    width: 100%;
                    font-size: 0;
                    margin: 3rem 0;
                    background: #FFF;
                    padding: 10px 20px;
                    position: relative;
                    &__description{
                        width: 50%;
                        padding: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 1rem;
                     }
                    &__extra{
                         width: 49.5%;
                         display: inline-block;
                         vertical-align: middle;
                        img{
                            max-width: 80%;
                            display: block;
                            margin: 0 auto;
                        }
                     }

                 }
             }

            &__columns{
                 height: 100vh;
                z-index: 1;
                 width: 33.33%;
                 position: absolute;
                 border: 1px solid #FFF;
                 background: $primary-color;
                 transition: all 500ms $easeInOutBack;
                 transform: translateY(100%);
            }

            &.active{
                .single-work__animation__content {
                    opacity: 1;
                }
                .single-work__animation__columns{
                    transform: translateY(0);
                }
            }
       }

        &.active{
            opacity: 1;
            pointer-events: all;
        }
    }

    .single-work .single-work__animation .single-work__animation__columns:nth-of-type(2){
        left: 33.33%;
        transition-delay: 250ms;
    }
    .single-work .single-work__animation .single-work__animation__columns:nth-of-type(3){
        left: 66.66%;
        transition-delay: 500ms;
    }


    .work{
        & &__recient-work{
           width: 100%;
           /*padding: 5rem 0;*/
            &__element{
                width: 100%;
                position: relative;
                clear: both;
                &__square{
                    /*width: 100%;*/
                    max-width: 48%;
                    padding: 40px 80px;
                    position: relative;
                    cursor: pointer;
                     margin-bottom: 6rem;
                    /*overflow: hidden;*/
                    &__title{
                        z-index: 5;
                         font-family: $font-2;
                         color: #FFF;
                        position: relative;
                         font-size: 2rem;
                         padding: 1rem 0 0;
                         letter-spacing: 2px;
                     }
                    &__sub-title{
                         z-index: 5;
                         font-family: $font-1;
                         color: #FFF;
                        position: relative;
                         font-size: 1.5rem;
                         margin-bottom: 2rem;
                         padding: 0.5rem 0 1rem;
                         letter-spacing: 2px;
                     }
                    &__resume{
                         z-index: 5;
                         font-size: 1.3rem;
                         font-family: $font-1;
                         position: relative;
                        float: right;
                        transform: translateX(6.5rem);
                         width: 300px;
                         &__background{
                            z-index: 2;
                            position: relative;
                              padding: 10px 20px;
                              text-align: center;
                              background: #FFF;
                          }
                        &:before{
                            left: 0;
                            right: 0;
                            bottom: 0;
                            top: 0;
                            z-index: -1;
                            background: rgba(0,0,0,0.5);
                            transform: translate3d(10px, 10px, 0);
                            content: '';
                            position: absolute;
                         }
                     }
                    &__gradient{
                         z-index: 1;
                        opacity: 0.5;
                        @include striped-bg(#000);
                        transition: opacity 350ms ease-out;
                        top: 0; right: 0; bottom: 0; left: 0;
                        position: absolute;
                     }
                     &:before{
                        content: '';
                        z-index: 5;
                        border: 2px solid #FFF;
                          top: 20px; right: 30px; bottom: 20px; left: 30px;
                          position: absolute;
                      }
                     &:after{
                        content: '';
                        z-index: -1;
                        border: 5px solid $primary-color;
                        /*transform: scale(2);*/
                        top: -25%;
                          width: 50%;
                          height: 150%;
                          position: absolute;
                      }
                     &:hover{
                        .work__recient-work__element__square__gradient{
                            opacity: 1;
                         }
                      }
                 }
             }
       }


        .work__recient-work__element{
            &:nth-of-type(2n + 1){
                .work__recient-work__element__square{
                    float: left;
                }
            }

            &:nth-of-type(2n){
                .work__recient-work__element__square{
                    float: right;
                }
            }
        }
    }
</style>
