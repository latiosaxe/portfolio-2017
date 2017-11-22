<template>
    <div class="loading">
        <div v-if="loaded">
            <div class="intro" :class="{ 'active': fadeIn }">
                <div class="website" id="websiteScroll" @scroll="detectDirectionScroll(this)">
                    <canvas id="top-canvas-line" :class="[(showingDots === true)?'active':'']"></canvas>
                    <div id="canvas-area">
                        <router-view name="Hero" :scrollPosition="lastScrollTop"></router-view>
                        <router-view name="Description" :runAboutAnimation="runAboutAnimation"></router-view>
                    </div>
                    <router-view name="Work" id="workModel" :scrollPosition="lastScrollTop"></router-view>
                    <router-view name="Knowledge"></router-view>
                    <router-view name="Personal"></router-view>
                    <router-view name="Hobbies"></router-view>
                    <router-view name="Contact"></router-view>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="holder">
                <div class="circle-stripes-preloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        data () {
            return {
                preloadIMG: [
                    'static/images/projects/victoria-masthead/hero-gif.gif',
//                    'static/images/projects/nano-6/hero-gif.gif',
//                    'static/images/projects/thebar/hero-gif.gif',
//                    'static/images/projects/ktbo/hero-gif.gif',
//                    'static/images/videogames.gif',
//                    'static/images/tame-impala.jpg',
//                    'static/images/overwatch.jpg'
                ],
                totalIMGLoaded: 0,
                loaded: false,
                fadeIn: false,

                lastScrollTop: 0,
                prevLastScrollTop: 0,

                scrollDate: 0,
                prevScrollDate: 0,
                websiteScroll: '',

                plusDirection: 0,
                showingDots: false,

                dotsTimer: '',

                contextDots: false,
                winW: 0,
                winH: 0,
                dots: [],
                particleCount: 0,

                settings: {
                    dotsLimit: 10,
                    factorDistance: 50
                },
                workElement: '',
                windowHeight: 0,
                runAboutAnimation: false
            }
        },
        created(){
            this.preloadIMG.forEach(function (imageURL) {
                var img = new Image();
                img.src = imageURL;
                img.onload = function() {
                    this.totalIMGLoaded ++;
                    if( this.totalIMGLoaded === this.preloadIMG.length ){
                        console.log("Loaded");
                        this.loaded = true;
                        setTimeout(function(){
                            this.enableScrollListener();
                            this.drawCanvasLines();
                            this.workElement = document.getElementById('description__animation');
                            this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                            setTimeout(function () {
                                this.fadeIn = true
                            }.bind(this), 150);
                        }.bind(this), 150);
                    }
                }.bind(this);
            }.bind(this));
        },
        methods: {
            enableScrollListener: function () {
                this.websiteScroll = document.getElementById('websiteScroll');
            },
            detectDirectionScroll: function (event) {
                this.prevLastScrollTop = this.websiteScroll.scrollTop;
                this.scrollDate = new Date().getTime();


                (  this.websiteScroll.scrollTop + (this.windowHeight / 2) > this.workElement.offsetTop) ? this.runAboutAnimation = true : this.runAboutAnimation = false;
//                console.log((this.scrollDate - this.prevScrollDate));
                if( (this.scrollDate - this.prevScrollDate) < 50 ){
                    if( ( this.prevLastScrollTop - this.lastScrollTop ) > this.settings.factorDistance || ( this.prevLastScrollTop - this.lastScrollTop ) < (this.settings.factorDistance * -1)){
                        if (this.prevLastScrollTop > this.lastScrollTop){
                            console.log("Down");
                            this.plusDirection = this.prevLastScrollTop - this.lastScrollTop;
                        } else {
                            console.log("Up");
                            this.plusDirection = (this.prevLastScrollTop - this.lastScrollTop);
                        }
                        console.log(this.plusDirection);
                        this.showingDots = true;
                    }else{
//                        this.plusDirection = 0;
                        clearTimeout(this.dotsTimer);
                        this.dotsTimer = setTimeout(function () {
                            this.showingDots = false;
                        }.bind(this), 200);
                    }
                }

                this.prevScrollDate = this.scrollDate;
                this.lastScrollTop = this.prevLastScrollTop;
            },
            drawCanvasLines: function () {
                let $this = this;
                const canvasArea = document.body;
                this.winW = canvasArea.clientWidth;
                this.winH = canvasArea.clientHeight;

                const canvas = document.getElementById("top-canvas-line");
                console.log(canvas);
                canvas.width = this.winW;
                canvas.height = this.winH;
                console.log(this.winW, this.winH);
                this.contextDots = canvas.getContext("2d");

                this.drawCircles();
            },
            drawCircles: function() {
                let $this = this;
                let randomX = 0, randomY = 0, speed = 0, size = 0;
                for (var i = 0; i < this.settings.dotsLimit; i++) {
                    randomX =  Math.random() * $this.winW;
                    randomY = Math.random() * $this.winH;
                    speed = 0.1 + Math.random();
                    size = 4;
                    let circle = new Circle(100, speed, size, randomX, randomY);
                    $this.dots.push(circle);
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

                    $this.contextDots.beginPath();
                    $this.contextDots.arc(
                        this.xPos + Math.cos(this.counter / 100) * this.radius,
                        (this.yPos) + $this.plusDirection,
                        this.width,
                        0,
                        Math.PI * 2,
                        false);

                    $this.contextDots.closePath();
                    $this.contextDots.fillStyle = 'rgba(115, 228, 122, 1)';
                    $this.contextDots.fill();

                    if( $this.plusDirection > 0){
                        $this.plusDirection --;
                        console.log($this.plusDirection);
                    }else if ($this.plusDirection < 0){
                        $this.plusDirection ++;
                        console.log($this.plusDirection);
                    }


                    if($this.particleCount >= ($this.settings.dotsLimit - 1)) $this.particleCount = 0;
                };

                this.draw();
            },

            draw: function() {
                let $this = this;
                this.contextDots.clearRect(0, 0, this.winW, this.winH);
                for (var i = 0; i < $this.dots.length; i++) {
                    var myCircle = $this.dots[i];
                    myCircle.update();
                }
                requestAnimationFrame(this.draw);
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Quicksand');

    $font-1: 'Quicksand', sans-serif;
    $font-2: 'Archivo Black', sans-serif;

    $primary-color: #73e47a;

    $easeInBack      :  cubic-bezier(0.600, -0.280, 0.735, 0.045);
    $easeOutBack     :  cubic-bezier(0.175,  0.885, 0.320, 1.275);
    $easeInOutBack   :  cubic-bezier(0.680, -0.550, 0.265, 1.550);


    $bar-height: 5px;
    $bar-bg: transparent;
    $bar-color: #5400ff;
    $bar-color2: #e4514f;
    $page-bg: #fff;

    body{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: $font-1;
        *{
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        *, *:before, *:after {
            box-sizing: border-box;
        }


        .website{
            /*padding: 15px;*/
            width: 100%;
            height: 100vh;
            overflow: auto;
            position: relative;
            border: 15px solid $primary-color;

            #top-canvas-line{
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                z-index: 11;
                width: 100%;
                position: fixed;
                pointer-events: none;
                background: transparent;
                transition: opacity 300ms ease-in-out;
                &.active{
                    opacity: 1;
                }
            }
            /*padding: 75px 15%;*/
        }

        .container{
            display: block;
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 20px;
        }

        .global_title{
            position: relative;
            margin: 8rem 0 8rem;
            p{
                margin: 0;
                font-size: 3rem;
                display: inline-block;
                span{
                    z-index: 4;
                    background: #fff;
                    padding: 0 20px 0 0;
                    position: relative;
                    display: inline-block;
                    color: $primary-color;
                    &:before{

                    }
                }
                &:before{
                    top: 0; right: 0; bottom: 0; left: 0;
                    content: '';
                    z-index: 1;
                    position: absolute;
                    background: $primary-color;
                }
                &:after{
                    top: 75%; bottom: 20%; left: 0;
                    width: 10%;
                    content: '';
                    z-index: 2;
                    position: absolute;
                    background: #FFF;
                    animation: title-animation 2s infinite ;
                    @keyframes title-animation {
                        0%{
                            left: 0;
                        }
                        100% {
                            left: 100%;
                        }
                    }
                }
            }
        }
    }

    .loading{
        .intro{
            opacity: 0;
            transition: opacity 400ms ease-out;
            &.active{
                opacity: 1;
            }
        }
    }

    $count: 10;
    $circleSize: 150;
    $timeMultiplier: 1.5;

    .holder {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #FFF;
    }
    .circle-stripes-preloader {
        top: 50%;
        left: 50%;
        position: absolute;
        width: $circleSize + px;
        height: $circleSize + px;
        transform: translateX(-50%) translateY(-50%);
        animation: rotatePreloader 10s infinite linear;
    }
    @keyframes rotatePreloader {
        0% {
            transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
        }
        100% {
            transform: translateX(-50%) translateY(-50%) rotateZ(360deg);
        }
    }

    .circle-stripes-preloader div {
        top: 50%;
        left: 50%;
        width: 50%;
        position: absolute;
        height: percentage((100 / $count) / 100);
        transform: translateX(-50%) translateY(-50%);
        perspective: $circleSize + px;
    }
    .circle-stripes-preloader div:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: $primary-color;
        transform: rotateY(0deg) translateZ(($circleSize / 2) + px);
        transition: transform 2s;
        animation-name: stripeRotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes stripeRotate {
        0% {
            transform: rotateY(0deg) translateZ(($circleSize / 2) + px);
        }
        100% {
            transform: rotateY(360deg) translateZ(($circleSize / 2) + px);
        }
    }
    @for $i from 1 through $count {
        .circle-stripes-preloader div:nth-child(#{$i}) {
            transform: translateX(-50%) translateY(-50%) rotateZ(((360 / $count) * $i) + deg);
            z-index: $count - $i;
        }
        .circle-stripes-preloader div:nth-child(#{$i}):before {
            animation-duration: ($i * $timeMultiplier) + s;
            background-color: $primary-color;
        }
    }

    @media (max-width: 768px) {
        body .global_title{
            margin: 4rem 0 4rem;
            p{
                font-size: 2rem;
            }
        }
        .hero .hero__name{
            width: 90%;
            h2{
                font-size: 2rem !important;
                span{
                    padding: 10px 5px !important;
                }
            }
        }
    }

    @media (max-width: 480px) {
        body .global_title{
            margin: 2rem 0 2rem;
            p{
                font-size: 1.7rem;
            }
        }
    }
</style>
