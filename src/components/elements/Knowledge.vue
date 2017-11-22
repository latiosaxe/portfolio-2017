<template>

    <div class="container">
        <div class="global_title">
            <p><span>Knowledge</span></p>
        </div>

        <div class="knowledge">
            <div v-for="group in knowlegde" class="knowledge__group">
                <div class="knowledge__group__title" v-text="group.title"></div>
                <div class="knowledge__group__elements">
                    <ul>
                        <li v-for="element in group.elements" v-text="element"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Knowledge',
        data () {
            return {
                knowlegde: [
                    {
                        title: "Development",
                        elements: [
                            'Vanilla JS',
                            'Vuejs',
                            'ES6',
                            'Angular 1',
                            'React JS *',
                            'Node.js',
                            'GraphQL',
                            'RESTful Web Services',
                            'Laravel',
                            'PHP 5.6 - 7',
                            'Webpack / jQuery / mootools',
                            'Grunt / Gulp',
                            'Nginx / Apache',
                            'SQL',
                            'git / svn'
                        ]
                    },{
                        title: "Design, Audiovisual",
                        elements: [
                            'Adobe PS, AI, AE',
                            'Motion graphics',
                            'Sketch *',
                            'Zeplin / invision',
                            'Livestream',
                            'Final Cut / Adobe Pr',
                            'Maya, Blender *'
                        ]
                    },{
                        title: "Extra",
                        elements: [
                            'Google: Google Analytics, HTML5 Studio Certificatied & Rich Media Expert',
                            'Amazon: AWS (S3, SES), Amazon Associates',
                            'Spanish'
                        ]
                    }
                ]
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

    .knowledge{
        font-size: 0;
        & &__group{
            display: inline-block;
            vertical-align: top;
            width: 33.33%;
            &__title{
                font-size: 2rem;
            }
            &__elements{
                margin-top: 1rem;
                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    li{
                        padding: 10px 0;
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .knowledge .knowledge__group{
            width: 100%;
            .knowledge__group__elements ul{
                overflow: hidden;
                margin-bottom: 40px;
                li{
                    width: 50%;
                    float: left;
                }
            }
        }
    }
    @media (max-width: 480px) {
        .knowledge .knowledge__group{
            .knowledge__group__elements ul{
                li{
                    width: 100%;
                }
            }
            &:last-of-type{
                .knowledge__group__elements ul{
                    margin-bottom: 0;
                }
            }
        }


    }


</style>
