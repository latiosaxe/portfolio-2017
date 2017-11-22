<template>

</template>

<script>

    export default {
        name: 'HeroCanvas',
        data () {
            return {

            }
        },
        mounted(){
//            this.initHero();
        },
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

                const canvas = document.getElementById("hero__canvas");
                canvas.width = this.winW;
                canvas.height = this.winH;
                console.log(this.winW, this.winH);
                this.context = canvas.getContext("2d");

                this.drawCircles();

                canvas.addEventListener('mousedown', function(event) {
                    $this.speedChange = true;
                    $this.mouseDown = true;
                }, false);
                canvas.addEventListener('mouseup', function(event) {
                    $this.speedChange = true;
                    $this.mouseDown = false;
                }, false);
            },

            drawCircles: function() {
                let $this = this;
                let randomX = 0, randomY = 0, speed = 0, size = 0;
                for (var i = 0; i < this.settings.circlesLimit; i++) {
                    randomX =  Math.random() * $this.winW;
                    randomY = Math.random() * $this.winH;
                    speed = 0.1 + Math.random() * 2;
                    size = 5 + Math.random() * 100;
                    let circle = new Circle(100, speed, size, randomX, randomY);
                    $this.circles.push(circle);
                }


                function Circle(radius, speed, width, xPos, yPos) {
                    this.radius = radius;
                    this.speed = speed;
                    this.width = width;
                    this.xPos = xPos;
                    this.yPos = yPos;
                    this.opacity = 0.05 + Math.random() * 0.5;

                    this.counter = 0;

                    let signHelper = Math.floor(Math.random() * 2);

                    if (signHelper == 1) {
                        this.sign = -1;
                    } else {
                        this.sign = 1;
                    }
                }

                Circle.prototype.update = function() {
                    this.counter += this.sign * this.speed;

                    this.particleCount ++;
                    if($this.speedChange === true){
                        if($this.mouseDown === true){
                            (this.counter < 0) ? this.counter -= 2 : this.counter += 2
                        }
                        if($this.particleCount >= ($this.settings.circlesLimit - 1)) $this.speedChange = false;
                    }

                    $this.context.beginPath();
                    $this.context.arc(
                        this.xPos + Math.cos(this.counter / 100) * this.radius,
                        this.yPos + Math.sin(this.counter / 100) * this.radius,
                        this.width,
                        0,
                        Math.PI * 2,
                        false);
                    $this.context.arc(
                        this.xPos + Math.cos(this.counter / 100) * this.radius,
                        this.yPos + Math.sin(this.counter / 100) * this.radius,
                        (this.width * 0.8),
                        0,
                        Math.PI * 2,
                        true);

                    $this.context.closePath();
                    $this.context.fillStyle = 'rgba(115, 228, 122,' + this.opacity + ')';
                    $this.context.fill();



                    if($this.particleCount >= ($this.settings.circlesLimit - 1)) $this.particleCount = 0;
                };

                this.draw();
            },

            draw: function() {
                let $this = this;
                this.context.clearRect(0, 0, this.winW, this.winH);
                for (var i = 0; i < $this.circles.length; i++) {
                    var myCircle = $this.circles[i];
                    myCircle.update();
                }
                if($this.showedCanvas === false){
                    $this.showedCanvas = true;

                    $this.$emit('canvasShowed', true);
                }
                requestAnimationFrame(this.draw);
            }

//            initCircles: function (context) {
//                let Paths = [];
//                let $this = this;
//
//                let color = chroma.scale([$this.settings.startColor, $this.settings.middleColor, $this.settings.endColor])
//                        .mode('lch').colors($this.settings.lines);
//                document.body.style = `background: ${$this.settings.startColor}`;
//
//                for (let i = 0; i < $this.settings.lines; i++) {
//                    Paths.push( ( ( $this.winH / $this.settings.lines * i ), color[i] ) );
//                    $this.settings.startY = $this.winH / $this.settings.lines * i;
//                }
//
//                for(let n=0; n < $this.settings.circles; n++) {
//                    let xPos = Math.random() * canvas.width;
//                    let yPos = Math.random() * canvas.height;
//                    let radius = $this.settings.minRadius + (Math.random() * ($this.settings.maxRadius - $this.settings.minRadius));
//                    let color = Paths[n];
//
//                    this.drawCircle(context, xPos, yPos, radius, color);
//                }
//
//
//            },
//            drawCircle: function (context, xPos, yPos, radius, color) {
//                var startAngle        = (Math.PI/180)*0;
//                var endAngle          = (Math.PI/180)*360;
//                context.beginPath();
//                context.arc(xPos, yPos, radius, startAngle, endAngle, false);
//                context.arc(xPos, yPos, (radius * 0.8), startAngle, endAngle, true);
//                context.fillStyle = color;
//                context.fill();
//                context.closePath();
//            },
//            render: function () {
//                let $this = this;
//                canvas.width = this.winW;
//                canvas.height = this.winH;
//
//                if($this.showedCanvas === false){
//                    $this.showedCanvas = true;
//                    $this.$emit('canvasShowed', true);
//                }
//                requestAnimationFrame(this.render);
//            }
        }
    }
</script>
