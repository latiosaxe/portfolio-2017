<template>
    <div :class="['hero', welcomeShow]">
        <div class="hero__name" v-show="1>2">
            <h2><span>Hello, I'm Axel González</span></h2>
            <p class="hero__name__subtitle"><span>Full-Stack Developer, <small>also mom says that I’m a good boy</small></span></p>
        </div>
        <!--<router-view @canvasShowed="initHome" class="view" name="HeroCanvas"></router-view>-->
        <canvas class="hero__canvas" id="hero__canvas" :style="{ top: -(scrollPosition/2) + 'px' }"></canvas>
    </div>
</template>


<script>
    export default {
        name: 'Hero',
        data () {
            return {
                velocityDecimal: 0.0001,
                sizeCircle: 0,
                sizeDirection: 0,
                welcomeShow: '',
                settings: {
                    sizeCircles: 50,
                    circlesLimit: 40,
                },
                delayHelper: true,
                context: false,
                showedCanvas: false,
                winW: 0,
                winH: 0,
                circles: [],
                mouseDown: false,
                speedChange: false,
                particleCount: 0,


            }
        },
        props: ['scrollPosition'],
        created(){
//            this.initHome();
        },
        mounted(){
            this.initHero();
        },
        methods: {
            initHero: function () {
                let $this = this;
                const canvasArea = document.getElementById("canvas-area");
                this.winW = canvasArea.clientWidth;
                this.winH = canvasArea.clientHeight;

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
                let randomX = 0, randomY = 0, speed = 0, size = 0, delay;
                for (var i = 0; i < this.settings.circlesLimit; i++) {
                    randomX =  Math.random() * $this.winW;
                    randomY = Math.random() * $this.winH;
                    speed = 0.1 + Math.random() * 1;
                    size = Math.floor(Math.random() * $this.settings.sizeCircles) + ($this.settings.sizeCircles / 2);
                    delay = Math.random() * 0.09;
                    let circle = new Circle(100, speed, size, randomX, randomY, delay);
                    $this.circles.push(circle);
                }

//                for (var i = 0; i < 10; i++) {
//                    randomX =  Math.random() * $this.winW;
//                    randomY = Math.random() * $this.winH;
//                    speed = 0.1 + Math.random();
//                    size = 10;
//                    let circle = new Circle(100, speed, size, randomX, randomY);
//                    $this.circles.push(circle);
//                }

                function Circle(radius, speed, width, xPos, yPos, delay) {
                    this.radius = radius;
                    this.speed = speed;
                    this.width = width;
                    this.xPos = xPos;
                    this.yPos = yPos;
                    this.delay = delay;
                    this.opacity = 0.05 + Math.random() * 0.5;

                    this.counter = 0;
                    this.sizeCircle = 0;
                    this.sizeDirection = 0;

                    let signHelper = Math.floor(Math.random() * 2);

                    if (signHelper == 1) {
                        this.sign = -1;
                    } else {
                        this.sign = 1;
                    }
                }

                Circle.prototype.update = function() {
                    this.counter += this.sign * this.speed;
                    $this.particleCount ++;
                    if($this.speedChange === true){
                        if($this.mouseDown === true){
                            (this.counter < 0) ? this.counter -= 2 : this.counter += 2
                        }
                        if(this.particleCount >= ($this.settings.circlesLimit - 1)) $this.speedChange = false;
                    }

                    if(this.sizeCircle >= 0.2){
                        this.sizeDirection = 1;

                    }else if ( this.sizeCircle < 0 ){
                        this.sizeDirection = 0;
                    }
                    if($this.delayHelper){
                        if(this.sizeDirection === 0){
                            this.sizeCircle += ($this.velocityDecimal + this.delay);
                        }else{
                            this.sizeCircle -= ($this.velocityDecimal + this.delay);
                        }
                        if($this.particleCount >= ($this.settings.circlesLimit - 1)){
                            $this.delayHelper = false;
                        }
                    }
                    if(this.sizeDirection === 0){
                        this.sizeCircle += $this.velocityDecimal;
                    }else{
                        this.sizeCircle -= $this.velocityDecimal;
                    }

                    $this.context.beginPath();
                    $this.context.arc(
                            this.xPos + Math.cos(this.counter / 300) * this.radius,
                            this.yPos + Math.sin(this.counter / 300) * this.radius,
                            this.width,
                            0,
                            Math.PI * 2,
                            false);
                    $this.context.arc(
                            this.xPos + Math.cos(this.counter / 300) * this.radius,
                            this.yPos + Math.sin(this.counter / 300) * this.radius,
                            (this.width * ( 0.8 + this.sizeCircle)),
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

                    $this.initTitle();
                }
                requestAnimationFrame(this.draw);
            },
            initTitle: function () {
                console.log("Hero is running");
                this.welcomeShow = 'hero--pre_active';
                setTimeout(function(){
                    this.welcomeShow = 'hero--pre_active hero--active';
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
        padding: 10px 55px;
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
         font-family: $font-2;
         letter-spacing: 3px;
         transform: translateY(-20px);
         text-transform: uppercase;
         transition: all 700ms 200ms $easeInOutBack;
        small{
            letter-spacing: 2px;
        }
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
        transition-delay: 900ms !important;
    }
    &:before, &:after{
                   width: 100%;
                   left: 0;
                   right: 0;
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
        color: #FFF;
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
    &__subtitle{
         opacity: 1;
         transform: translateY(0);
     }
    }
    }

    }
</style>
