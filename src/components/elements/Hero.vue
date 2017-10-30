<template>
    <div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    var THREE = require('../../assets/scripts/libs/three.min.js');

    export default {
        name: 'hero',
        data () {
            return {
                showedCanvas: false,
            }
        },
        created() {
//            console.log(document.getElementById('container'));
            setTimeout(function () {
                this.initHero();
            }.bind(this), 1000);
        },
        methods: {
            initHero: function () {
                let $this = this;
                let settings = {
                    amplitudeX: 60,
                    amplitudeY: 82,
                    lines: 45,
                    startColor: '#000000',
                    middleColor: '#4d9a4d',
                    endColor: '#73e47a'
                };

                const cavas = document.getElementById("canvas");
                const context = canvas.getContext("2d");
                let winW = document.body.clientWidth;
                let winH = document.body.clientWidth;
                let Paths = [];
                let color = [];
                let mouseY = 0;
                let mouseDown = false;
                let time = 0;
                let curves;
                let velocity;

                class Path {
                    constructor(y, color) {
                        this.y = y;
                        this.color = color;
                        this.root = [];
                        this.create();
                        this.draw();
                    }

                    create() {
                        let rootX = 0;
                        let rootY = this.y;
                        this.root = [{ x: rootX, y: rootY }];
                        while (rootX < winW) {
                            let casual = Math.random() > 0.5 ? 1 : -1;
                            let x = parseInt(
                                settings.amplitudeX / 2 + Math.random() * settings.amplitudeX / 2
                            );
                            let y = parseInt(rootY + casual * (settings.amplitudeY / 2 + Math.random() * settings.amplitudeY / 2));
                            rootX += x;
                            let delay = Math.random() * 100;
                            this.root.push({ x: rootX, y: y, height: rootY, casual: casual, delay: delay });
                        }
                    }

                    draw() {
                        context.beginPath();
                        context.moveTo(0, winH);
                        context.lineTo(this.root[0].x, this.root[0].y);
                        for (let i = 1; i < this.root.length - 1; i++) {
                            let x = this.root[i].x;
                            let y = this.root[i].y;
                            let nextX = this.root[i + 1].x;
                            let nextY = this.root[i + 1].y;
                            let xMid = (x + nextX) / 2;
                            let yMid = (y + nextY) / 2;
                            let cpX1 = (xMid + x) / 2;
                            let cpY1 = (yMid + y) / 2;
                            let cpX2 = (xMid + nextX) / 2;
                            let cpY2 = (yMid + nextY) / 2;

                            context.quadraticCurveTo(cpX1, y, xMid, yMid);
                            context.quadraticCurveTo(cpX2, nextY, nextX, nextY);
                        }
                        const lastPoint = this.root.reverse()[0];
                        this.root.reverse();
                        context.lineTo(lastPoint.x, lastPoint.y);
                        context.lineTo(winW, winH);
                        context.fillStyle = this.color;
                        context.fill();
                        context.closePath();
                    }
                }
                let path;
                function init() {
                    canvas.width = winW;
                    canvas.height = winH;
                    Paths = [];
                    color = chroma.scale([settings.startColor, settings.middleColor, settings.endColor])
                                   .mode('lch').colors(settings.lines);
                    document.body.style = `background: ${settings.startColor}`;
                    for (let i = 0; i < settings.lines; i++) {
                        Paths.push(new Path(winH / settings.lines * i, color[i]));
                        settings.startY = winH / settings.lines * i;
                    }
                }

                window.addEventListener('resize', function () {
                    winW = document.body.clientWidth;
                    winH = document.body.clientHeight;
                    canvas.width = winW;
                    canvas.height = winH;
                    init();
                });

                window.dispatchEvent(new Event("resize"));
                function render() {
                    canvas.width = winW;
                    canvas.height = winH;
                    curves = 4;
                    velocity = 0.8;
                    time += 0.05;
                    curves = mouseDown ? 2 : 4;
                    velocity = mouseDown ? 6 : 0.8;
                    time += mouseDown ? 0.1 : 0.05 ;
                    Paths.forEach(function (path, i) {
                        path.root.forEach(function (r, j) {
                            if (j % curves == 1) {
                                let move = Math.sin(time + r.delay ) * velocity * r.casual;
                                r.y -= (move / 2) - move;
                            }
                            if (j + 1 % curves == 0) {
                                let move = Math.sin(time + r.delay ) * velocity * r.casual;
                                r.x += (move / 2) - move / 10;
                            }
                        });
                        path.draw();
                    });
                    if($this.showedCanvas === false){
                        $this.showedCanvas = true;
                        $this.$emit('canvasShowed', true);
                    }
                    requestAnimationFrame(render);
                }
                render();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    #hero, #container{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*background: #fff;*/
        position: absolute;

        width: 100vw;
        height: 100vh;
        background: transparent;
    }
</style>
