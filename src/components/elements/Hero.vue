<template>
    <canvas id="canvas"></canvas>
</template>

<script>
    var THREE = require('../../assets/scripts/libs/three.min.js');

    export default {
        name: 'hero',
        data () {
            return {
                showedCanvas: false,
                winW: 0,
                winH: 0,
                circles: [],
                settings: {
                    startY: 0,
                    lines: 30,
                    circles: 10,
                    maxRadius: 20,
                    minRadius: 3,
                    startColor: '#FFFFFF',
                    middleColor: '#73e47a',
                    endColor: '#4d9a4d'
                }
            }
        },
//        mounted(){
//            this.initHero();
//        },
        created() {
            setTimeout(function () {
                this.initHero();
            }.bind(this), 1000);
        },
        methods: {
            initHero: function () {
                let $this = this;

                this.winW = document.body.clientWidth;
                this.winH = document.body.clientHeight;


                const c = document.getElementById("canvas");
                c.width = this.winW;
                c.height = this.winH;
                console.log(this.winW, this.winH);
                var context = c.getContext("2d");

                this.initCircles(context);

//                window.addEventListener('resize', function () {
//                    this.winW = document.body.clientWidth;
//                    this.winH = document.body.clientHeight;
//                    canvas.width = this.winW;
//                    canvas.height = this.winH;
//                });
//                window.dispatchEvent(new Event("resize"));
//
//                this.render();
            },
            initCircles: function (context) {
                let Paths = [];
                let $this = this;

                let color = chroma.scale([$this.settings.startColor, $this.settings.middleColor, $this.settings.endColor])
                        .mode('lch').colors($this.settings.lines);
                document.body.style = `background: ${$this.settings.startColor}`;

                for (let i = 0; i < $this.settings.lines; i++) {
                    Paths.push( ( ( $this.winH / $this.settings.lines * i ), color[i] ) );
                    $this.settings.startY = $this.winH / $this.settings.lines * i;
                }

                for(let n=0; n < $this.settings.circles; n++) {
                    let xPos = Math.random() * canvas.width;
                    let yPos = Math.random() * canvas.height;
                    let radius = $this.settings.minRadius + (Math.random() * ($this.settings.maxRadius - $this.settings.minRadius));
                    let color = Paths[n];
                    
                    this.drawCircle(context, xPos, yPos, radius, color);
                }


            },
            drawCircle: function (context, xPos, yPos, radius, color) {
                var startAngle        = (Math.PI/180)*0;
                var endAngle          = (Math.PI/180)*360;
                context.beginPath();
                context.arc(xPos, yPos, radius, startAngle, endAngle, false);
                context.arc(xPos, yPos, (radius * 0.8), startAngle, endAngle, true);
                context.fillStyle = color;
                context.fill();
                context.closePath();
            },
            render: function () {
                let $this = this;
                canvas.width = this.winW;
                canvas.height = this.winH;

                if($this.showedCanvas === false){
                    $this.showedCanvas = true;
                    $this.$emit('canvasShowed', true);
                }
                requestAnimationFrame(this.render);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
