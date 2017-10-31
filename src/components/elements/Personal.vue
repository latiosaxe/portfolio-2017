<template>

    <div class="container">
        <div class="global_title">
            <p><span>Personal Projects</span></p>
        </div>


        <div class="personal">
            <div class="personal__block">
                <img src="/static/images/doctor-advisor.jpg" alt="Doctor Advisor" class="personal__block__image">
                <div class="personal__block__description">
                    <strong class="personal__block__description__title">Doctor Advisor</strong> is one of my favorite projects. With <strong>Sergio</strong> (Sales Director) and
                    <strong>Grissel</strong> (UX and UI Designer) we made an incredible
                    directory of medical experts around México, we provide information about
                    Doctors and Hospital.
                    In the future we want to include scheduling medical appointments.
                </div>
            </div>
            <div class="personal__block">
                <img src="/static/images/photo-inspiration.jpg" alt="Photo Inspiration" class="personal__block__image">
                <div class="personal__block__description">
                    <p>
                        Right know I’m working on three projects; one of them is <strong class="personal__block__description__title">Photography Inspiration</strong>,
                        a website where you can find photographies by color, It’s still on development.
                        I’m working on it to build a whole platform of photographers (Also a new UI and
                        many changes to get a better UX). I use flickr’s API to get
                        the photos and use PHP to get the color palette.
                        Try searching some red or blue photos to experience it.
                    </p>

                    <p>
                        <small>(Right now I have only 1,700 photos, so maybe some intense color searches might not have results).</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Personal',
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

    .personal{
        & &__block{
            margin-bottom: 30px;
            &__image{
                width: 100%;
                display: block;
                border: 10px solid $primary-color;
             }
             &__description{
                width: 100%;
                display: block;
                max-width: 800px;
                margin: 0 auto;
                color: #FFF;
                line-height: 135%;
                font-size: 1.2rem;
                padding: 25px 40px;
                background: $primary-color;
                  p{
                      margin: 0 0 20px 0;
                      &:last-of-type{
                        margin-bottom: 0;
                       }
                  }
                &__title{
                    font-size: 1.5rem;
                    font-family: $font-2;
                 }
              }
       }
    }
</style>
