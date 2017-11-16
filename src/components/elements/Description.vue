<template>
    <div class="description">
        <div class="description__wrapper" id="description__animation">
            <div class="description__wrapper__white" :class="{ 'active': startAnimation}">
                <p v-html="text_html_1"></p>
                <p v-html="text_html_2"></p>
                <p v-html="text_html_3"></p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Description',
        props:['runAboutAnimation'],
        data () {
            return {
                letters_one : '',
                text_1: 'I’m a 25 years old Full-Stack Developer based in México City, with a big passion to create. They say I am a good designer, however, I feel I have much to learn.',
                text_2: 'My interests are video and motion graphics, live streamings, and even math. I travel around the world listening to live music.',
                text_3: 'OH! I also like to cook; my specialty is Japanese food.',
                text_html_1: '',
                text_html_2: '',
                text_html_3: '',

                startAnimation: false,
                animationJustOne: true,
            }
        },
        watch: {
            runAboutAnimation: function(){
                if(this.animationJustOne){
                    this.animateLetters();
                    this.animationJustOne = false;
                }
            }
        },
        created(){
        },
        mounted(){
            this.text_1 = this.text_1.split(' ');
            this.text_2 = this.text_2.split(' ');
            this.text_3 = this.text_3.split(' ');
            for(let i=0; i<this.text_1.length; i++){
                this.text_html_1 += '<span style="transition-delay: '+ i * 20 +'ms">'+ this.text_1[i] +'</span>'
            }
            for(let i=0; i<this.text_2.length; i++){
                this.text_html_2 += '<span style="transition-delay: '+ ( i + this.text_1.length ) * 20 +'ms">'+ this.text_2[i] +'</span>'
            }
            for(let i=0; i<this.text_3.length; i++){
                this.text_html_3 += '<span style="transition-delay: '+ ( i + this.text_1.length + this.text_2.length ) * 20 +'ms">'+ this.text_3[i] +'</span>'
            }

        },
        methods: {
            animateLetters: function () {
                this.startAnimation = true;
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
                opacity: 1;
                 padding: 20px 40px;
                 background: #FFF;
                p{
                    color: #8d8d8d;
                    font-size: 1.1rem;
                    line-height: 180%;
                    margin: 0 0 20px 0;
                    span{
                        opacity: 0;
                        /*min-width: 6px;*/
                        margin-right: 6px;
                        display: inline-block;
                        transform: translateY(30px);
                        transition: all 600ms $easeInBack;
                    }
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

    .description__wrapper__white{
        &.active{
            /*opacity: 1;*/
            p{
                span{
                    opacity: 1;
                    /*min-width: 6px;*/
                    transform: translateY(0);
                }
            }
         }
    }
</style>
