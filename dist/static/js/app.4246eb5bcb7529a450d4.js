webpackJsonp([0],{"/2GL":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"description"},[i("div",{staticClass:"description__wrapper",attrs:{id:"description__animation"}},[i("div",{staticClass:"description__wrapper__white",class:{active:t.startAnimation}},[i("p",{domProps:{innerHTML:t._s(t.text_html_1)}}),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.text_html_2)}}),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.text_html_3)}})])])])},n=[],a={render:s,staticRenderFns:n};e.a=a},"0y7U":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"global_title"},[i("p",[i("span",[t._v("Personal Projects")])])]),t._v(" "),i("div",{staticClass:"personal"},[i("div",{staticClass:"personal__block"},[i("div",{staticClass:"personal__block__title"},[t._v("Doctor Advisor")]),t._v(" "),i("img",{staticClass:"personal__block__image",attrs:{src:"static/images/doctor-advisor.jpg",alt:"Doctor Advisor"}}),t._v(" "),i("div",{staticClass:"personal__block__description"},[i("strong",{staticClass:"personal__block__description__title"},[t._v("Doctor Advisor")]),t._v(" is one of my favorite projects. With "),i("strong",[t._v("Sergio")]),t._v(" (Sales Director) and\n                "),i("strong",[t._v("Grissel")]),t._v(" (UX and UI Designer) we made an incredible\n                directory of medical experts around México, we provide information about\n                Doctors and Hospital.\n                In the future we want to include scheduling medical appointments.\n            ")])]),t._v(" "),i("div",{staticClass:"personal__block"},[i("div",{staticClass:"personal__block__title"},[t._v("Photography Inspiration")]),t._v(" "),i("img",{staticClass:"personal__block__image",attrs:{src:"static/images/photo-inspiration.jpg",alt:"Photo Inspiration"}}),t._v(" "),i("div",{staticClass:"personal__block__description"},[i("p",[t._v("\n                    Right know I’m working on three projects; one of them is "),i("strong",{staticClass:"personal__block__description__title"},[t._v("Photography Inspiration")]),t._v(",\n                    a website where you can find photographies by color, It’s still on development.\n                    I’m working on it to build a whole platform of photographers (Also a new UI and\n                    many changes to get a better UX). I use flickr’s API to get\n                    the photos and use PHP to get the color palette.\n                    Try searching some red or blue photos to experience it.\n                ")]),t._v(" "),i("p",[i("small",[t._v("(Right now I have only 1,700 photos, so maybe some intense color searches might not have results).")])])])])])])}],a={render:s,staticRenderFns:n};e.a=a},"19qb":function(t,e,i){"use strict";e.a={name:"Home",data:function(){return{preloadIMG:["static/images/projects/victoria-masthead/hero-gif.gif","static/images/projects/nano-6/hero-gif.gif","static/images/projects/thebar/hero-gif.gif","static/images/projects/ktbo/hero-gif.gif","static/images/tame-impala.jpg","static/images/overwatch.jpg"],totalIMGLoaded:0,loaded:!1,fadeIn:!1,lastScrollTop:0,prevLastScrollTop:0,scrollDate:0,prevScrollDate:0,websiteScroll:"",plusDirection:0,showingDots:!1,dotsTimer:"",contextDots:!1,winW:0,winH:0,dots:[],particleCount:0,settings:{dotsLimit:10,factorDistance:50},workElement:"",windowHeight:0,runAboutAnimation:!1}},created:function(){this.preloadIMG.forEach(function(t){var e=new Image;e.src=t,e.onload=function(){++this.totalIMGLoaded===this.preloadIMG.length&&(console.log("Loaded"),this.loaded=!0,setTimeout(function(){this.enableScrollListener(),this.drawCanvasLines(),this.workElement=document.getElementById("description__animation"),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),setTimeout(function(){this.fadeIn=!0}.bind(this),150)}.bind(this),150))}.bind(this)}.bind(this))},methods:{enableScrollListener:function(){this.websiteScroll=document.getElementById("websiteScroll")},detectDirectionScroll:function(t){this.prevLastScrollTop=this.websiteScroll.scrollTop,this.scrollDate=(new Date).getTime(),this.websiteScroll.scrollTop+this.windowHeight/2>this.workElement.offsetTop?this.runAboutAnimation=!0:this.runAboutAnimation=!1,this.scrollDate-this.prevScrollDate<50&&(this.prevLastScrollTop-this.lastScrollTop>this.settings.factorDistance||this.prevLastScrollTop-this.lastScrollTop<-1*this.settings.factorDistance?(this.prevLastScrollTop>this.lastScrollTop?(console.log("Down"),this.plusDirection=this.prevLastScrollTop-this.lastScrollTop):(console.log("Up"),this.plusDirection=this.prevLastScrollTop-this.lastScrollTop),console.log(this.plusDirection),this.showingDots=!0):(clearTimeout(this.dotsTimer),this.dotsTimer=setTimeout(function(){this.showingDots=!1}.bind(this),200))),this.prevScrollDate=this.scrollDate,this.lastScrollTop=this.prevLastScrollTop},drawCanvasLines:function(){var t=document.body;this.winW=t.clientWidth,this.winH=t.clientHeight;var e=document.getElementById("top-canvas-line");console.log(e),e.width=this.winW,e.height=this.winH,console.log(this.winW,this.winH),this.contextDots=e.getContext("2d"),this.drawCircles()},drawCircles:function(){function t(t,e,i,s,n){this.radius=t,this.speed=e,this.width=i,this.xPos=s,this.yPos=n,this.opacity=.05+.5*Math.random(),this.counter=0;var a=Math.floor(2*Math.random());this.sign=1==a?-1:1}for(var e=this,i=0,s=0,n=0,a=0,o=0;o<this.settings.dotsLimit;o++){i=Math.random()*e.winW,s=Math.random()*e.winH,n=.1+Math.random(),a=4;var r=new t(100,n,a,i,s);e.dots.push(r)}t.prototype.update=function(){this.counter+=this.sign*this.speed,e.contextDots.beginPath(),e.contextDots.arc(this.xPos+Math.cos(this.counter/100)*this.radius,this.yPos+e.plusDirection,this.width,0,2*Math.PI,!1),e.contextDots.closePath(),e.contextDots.fillStyle="rgba(115, 228, 122, 1)",e.contextDots.fill(),e.plusDirection>0?(e.plusDirection--,console.log(e.plusDirection)):e.plusDirection<0&&(e.plusDirection++,console.log(e.plusDirection)),e.particleCount>=e.settings.dotsLimit-1&&(e.particleCount=0)},this.draw()},draw:function(){var t=this;this.contextDots.clearRect(0,0,this.winW,this.winH);for(var e=0;e<t.dots.length;e++){t.dots[e].update()}requestAnimationFrame(this.draw)}}}},"1Z1d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work"},[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{class:[{active:!0===t.activateSingleWork||!0===t.auxInActive},"single-work"]},[i("div",{class:[{active:t.activateSingleWork},"single-work__animation"]},[i("div",{staticClass:"single-work__animation__content"},[i("div",{staticClass:"single-work__animation__content__close",on:{click:t.inActivateWork}},[t._v("X")]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"single-work__animation__content__title"},[t._v("\n                            "+t._s(t.actualWork.title)+"\n                        ")]),t._v(" "),i("div",{staticClass:"single-work__animation__content__gif"},[i("img",{attrs:{src:t.actualWork.gif,alt:t.actualWork.title}})]),t._v(" "),i("div",{staticClass:"single-work__animation__content__grid"},[i("div",{staticClass:"single-work__animation__content__grid__description"},[i("p",[t._v("\n                                    "+t._s(t.actualWork.description)+"\n                                ")]),t._v(" "),i("p",[i("strong",[t._v(t._s(t.actualWork.sub_title))])])]),t._v(" "),i("div",{staticClass:"single-work__animation__content__grid__extra"},[i("img",{attrs:{src:t.actualWork.aditional_image,alt:t.actualWork.title}})])]),t._v(" "),i("div",{staticClass:"single-work__animation__content__url"},[i("a",{attrs:{href:t.actualWork.url,target:"_blank"}},[t._v("Check project")])])])]),t._v(" "),i("div",{staticClass:"single-work__animation__columns"}),t._v(" "),i("div",{staticClass:"single-work__animation__columns"}),t._v(" "),i("div",{staticClass:"single-work__animation__columns"})])]),t._v(" "),i("div",{staticClass:"work__recient-work"},t._l(t.works,function(e){return i("div",{staticClass:"work__recient-work__element"},[i("div",{class:["work__recient-work__element__square","gradient-"+e.gradient],on:{click:function(i){t.activateWork(e.position)}}},[i("div",{staticClass:"work__recient-work__element__square__title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"work__recient-work__element__square__sub-title"},[t._v(t._s(e.resume))]),t._v(" "),i("div",{staticClass:"work__recient-work__element__square__resume"},[i("div",{staticClass:"work__recient-work__element__square__resume__background"},[i("strong",[t._v("Brand:")]),t._v(" "+t._s(e.sub_title))])]),t._v(" "),i("div",{staticClass:"work__recient-work__element__square__gradient"})])])}))])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"global_title"},[i("p",[i("span",[t._v("My Work")])])])}],a={render:s,staticRenderFns:n};e.a=a},"62Or":function(t,e){},"65Co":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"knowledge"},t._l(t.knowlegde,function(e){return i("div",{staticClass:"knowledge__group"},[i("div",{staticClass:"knowledge__group__title",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("div",{staticClass:"knowledge__group__elements"},[i("ul",t._l(e.elements,function(e){return i("li",{domProps:{textContent:t._s(e)}})}))])])}))])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"global_title"},[i("p",[i("span",[t._v("Knowledge")])])])}],a={render:s,staticRenderFns:n};e.a=a},"7+Fp":function(t,e,i){"use strict";function s(t){i("OeN3")}var n=i("WRrU"),a=i("/2GL"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},"8Qjh":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[t.loaded?i("div",[i("div",{staticClass:"intro",class:{active:t.fadeIn}},[i("div",{staticClass:"website",attrs:{id:"websiteScroll"},on:{scroll:function(e){t.detectDirectionScroll(this)}}},[i("canvas",{class:[!0===t.showingDots?"active":""],attrs:{id:"top-canvas-line"}}),t._v(" "),i("div",{attrs:{id:"canvas-area"}},[i("router-view",{attrs:{name:"Hero",scrollPosition:t.lastScrollTop}}),t._v(" "),i("router-view",{attrs:{name:"Description",runAboutAnimation:t.runAboutAnimation}})],1),t._v(" "),i("router-view",{attrs:{name:"Work",id:"workModel",scrollPosition:t.lastScrollTop}}),t._v(" "),i("router-view",{attrs:{name:"Knowledge"}}),t._v(" "),i("router-view",{attrs:{name:"Personal"}}),t._v(" "),i("router-view",{attrs:{name:"Hobbies"}}),t._v(" "),i("router-view",{attrs:{name:"Contact"}})],1)])]):i("div",[t._m(0)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"holder"},[i("div",{staticClass:"circle-stripes-preloader"},[i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div")])])}],a={render:s,staticRenderFns:n};e.a=a},A3A7:function(t,e,i){"use strict";function s(t){i("yMGM")}var n=i("n1ak"),a=i("JCEP"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},CCzX:function(t,e){},CP8P:function(t,e,i){"use strict";e.a={name:"HeroCanvas",data:function(){return{}},mounted:function(){},created:function(){setTimeout(function(){this.initHero()}.bind(this),1e3)},methods:{initHero:function(){var t=this;this.winW=document.body.clientWidth,this.winH=document.body.clientHeight;var e=document.getElementById("hero__canvas");e.width=this.winW,e.height=this.winH,console.log(this.winW,this.winH),this.context=e.getContext("2d"),this.drawCircles(),e.addEventListener("mousedown",function(e){t.speedChange=!0,t.mouseDown=!0},!1),e.addEventListener("mouseup",function(e){t.speedChange=!0,t.mouseDown=!1},!1)},drawCircles:function(){function t(t,e,i,s,n){this.radius=t,this.speed=e,this.width=i,this.xPos=s,this.yPos=n,this.opacity=.05+.5*Math.random(),this.counter=0;var a=Math.floor(2*Math.random());this.sign=1==a?-1:1}for(var e=this,i=0,s=0,n=0,a=0,o=0;o<this.settings.circlesLimit;o++){i=Math.random()*e.winW,s=Math.random()*e.winH,n=.1+2*Math.random(),a=5+100*Math.random();var r=new t(100,n,a,i,s);e.circles.push(r)}t.prototype.update=function(){this.counter+=this.sign*this.speed,this.particleCount++,!0===e.speedChange&&(!0===e.mouseDown&&(this.counter<0?this.counter-=2:this.counter+=2),e.particleCount>=e.settings.circlesLimit-1&&(e.speedChange=!1)),e.context.beginPath(),e.context.arc(this.xPos+Math.cos(this.counter/100)*this.radius,this.yPos+Math.sin(this.counter/100)*this.radius,this.width,0,2*Math.PI,!1),e.context.arc(this.xPos+Math.cos(this.counter/100)*this.radius,this.yPos+Math.sin(this.counter/100)*this.radius,.8*this.width,0,2*Math.PI,!0),e.context.closePath(),e.context.fillStyle="rgba(115, 228, 122,"+this.opacity+")",e.context.fill(),e.particleCount>=e.settings.circlesLimit-1&&(e.particleCount=0)},this.draw()},draw:function(){var t=this;this.context.clearRect(0,0,this.winW,this.winH);for(var e=0;e<t.circles.length;e++){t.circles[e].update()}!1===t.showedCanvas&&(t.showedCanvas=!0,t.$emit("canvasShowed",!0)),requestAnimationFrame(this.draw)}}}},Fvwo:function(t,e,i){"use strict";e.a={name:"hobbies",data:function(){return{}},mounted:function(){},created:function(){},methods:{}}},GFAo:function(t,e,i){"use strict";e.a={name:"Contact",data:function(){return{}},created:function(){},mounted:function(){},methods:{}}},J3XL:function(t,e,i){"use strict";function s(t){i("62Or")}var n=i("iAQb"),a=i("65Co"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},JCEP:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["hero",t.welcomeShow]},[t._m(0),t._v(" "),i("canvas",{staticClass:"hero__canvas",style:{top:-t.scrollPosition/2+"px"},attrs:{id:"hero__canvas"}})])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero__name"},[i("h2",[i("span",[t._v("Hello, I'm Axel González")])]),t._v(" "),i("p",{staticClass:"hero__name__subtitle"},[i("span",[t._v("Full-Stack Developer, "),i("small",[t._v("also mom says that I’m a good boy")])])])])}],a={render:s,staticRenderFns:n};e.a=a},JOA4:function(t,e,i){"use strict";function s(t){i("apgA")}var n=i("mX/i"),a=i("0y7U"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},KjZT:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("div",{staticClass:"contact__center"},[i("p",[t._v("If you want to know more about me or just talk, send me a message at "),i("a",{attrs:{href:"mailto:latiosaxe@gmail.com"}},[t._v("latiosaxe@gmail.com")])]),t._v(" "),i("p",{staticClass:"twitter"},[t._v("Or send me a Tweet: "),i("a",{attrs:{href:"https://twitter.com/latiosaxe",target:"_blank"}},[t._v("@latiosaxe")])]),t._v(" "),i("p",[t._v("Thank you for your time :)")]),t._v(" "),i("p",{staticClass:"small"},[i("a",{attrs:{href:"https://github.com/latiosaxe/portfolio-2017",target:"_blank"}},[t._v("Check this website on Github")])])]),t._v(" "),i("div",{staticClass:"contact__bottom"},[i("p",[t._v("\n            Oh! I almost forgot; I don’t have a degree even though it is needed in many companies,\n        ")]),t._v(" "),i("p",[t._v("\n            I am, however, a self-taught developer.\n        ")])]),t._v(" "),i("div",{staticClass:"contact__triangle"})])}],a={render:s,staticRenderFns:n};e.a=a},M93x:function(t,e,i){"use strict";function s(t){i("qrJZ")}var n=i("xJD8"),a=i("MJCP"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);c.exports},MCR8:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},n=[],a={render:s,staticRenderFns:n};e.a=a},MJCP:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=(i("M93x"),i("Ob7w")),a=(i("A3A7"),i("sLQq"),i("YaEn"));s.a.config.productionTip=!1,window.myGlobal="production";new s.a({router:a.a,template:"<Home/>",components:{Home:n.a}}).$mount("#app")},Ob7w:function(t,e,i){"use strict";function s(t){i("d9DP")}var n=i("19qb"),a=i("8Qjh"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},OeN3:function(t,e){},Qc7U:function(t,e,i){"use strict";e.a={name:"Work",data:function(){return{activateSingleWork:!1,auxInActive:!1,actualWork:{},works:[{position:1,title:"Masthead YouTube",sub_title:"Victoria, 2017",resume:"Interactive masthead with sounds and animations",description:"Dia de muertos is a famous celebration full of flavors, colors and sounds. The famous Mexican beer Victoria launched a campaign called 'Hacemos tanto ruido que despertamos a los muertos' which in English means 'We make so much noise that we wake up the dead'. \n \n We created an incredible experience for YouTube with the help of a musician, an illustrator and an animator.",gif:"static/images/projects/victoria-masthead/hero-gif.gif",aditional_image:"static/images/projects/victoria-masthead/pattern.png",url:"http://previews.ktbo.mx/banners/victoria/sound-loop/",color:"#b31f29",gradient:1},{position:2,title:"Nano 6.0",sub_title:"Reebok, 2016",resume:"Parallax website promoting Nano 6.0 shoes",description:"Reebok is famous for making high quality shoes for athletes, Nano 6.0 is a model focused on the CrossFit community, the movement experience was very important for the whole micro-site. I did not develop the CGI, I just asked for the sequence of images.",gif:"static/images/projects/nano-6/hero-gif.gif",aditional_image:"static/images/projects/nano-6/preview.png",url:"http://nano.reebokmexico.com/",color:"#02bab6",gradient:2},{position:3,title:"The bar MX",sub_title:"Diageo, 2016",resume:"Cocktails, Mixed Drinks and Cocktail Recipes",description:"The biggest website for cocktail recipes in Mexico was a big challenge because we had very little time to develop it, an European company had tried to developt the project and it took a year to say 'We can not do it', that's why when the project arrives to KTBO in Mexico, we had to develop it in 3 months (The first version). The Bar MX has an important job in SEO as information Schema validated by W3",gif:"static/images/projects/thebar/hero-gif.gif",aditional_image:"static/images/projects/thebar/preview.jpg",url:"https://thebar.com.mx/",color:"#ff5e00",gradient:3},{position:4,title:"KTBO MX",sub_title:"KTBO, 2016",resume:"Official Website",description:"They say, 'Try something differente', so here it is.",gif:"static/images/projects/ktbo/hero-gif.gif",aditional_image:"static/images/projects/ktbo/preview.jpg",url:"https://thebar.com.mx/",color:"#000000",gradient:4}]}},props:["scrollPosition"],created:function(){},mounted:function(){},methods:{activateWork:function(t){this.activateSingleWork=!0,this.auxInActive=!0,console.log(t),this.actualWork=this.works[t-1],console.log(this.actualWork)},inActivateWork:function(){console.log("Byebye"),this.activateSingleWork=!1,setTimeout(function(){this.auxInActive=!1}.bind(this),1200)}}}},TRIo:function(t,e){},WRrU:function(t,e,i){"use strict";e.a={name:"Description",props:["runAboutAnimation"],data:function(){return{letters_one:"",text_1:"I’m a 25 years old Full-Stack Developer based in México City, with a big passion to create. They say I am a good designer, however, I feel I have much to learn.",text_2:"My interests are video and motion graphics, live streamings, and even math. I travel around the world listening to live music.",text_3:"OH! I also like to cook; my specialty is Japanese food.",text_html_1:"",text_html_2:"",text_html_3:"",startAnimation:!1,animationJustOne:!0}},watch:{runAboutAnimation:function(){this.animationJustOne&&(this.animateLetters(),this.animationJustOne=!1)}},created:function(){},mounted:function(){this.text_1=this.text_1.split(" "),this.text_2=this.text_2.split(" "),this.text_3=this.text_3.split(" ");for(var t=0;t<this.text_1.length;t++)this.text_html_1+='<span style="transition-delay: '+20*t+'ms">'+this.text_1[t]+"</span>";for(var e=0;e<this.text_2.length;e++)this.text_html_2+='<span style="transition-delay: '+20*(e+this.text_1.length)+'ms">'+this.text_2[e]+"</span>";for(var i=0;i<this.text_3.length;i++)this.text_html_3+='<span style="transition-delay: '+20*(i+this.text_1.length+this.text_2.length)+'ms">'+this.text_3[i]+"</span>"},methods:{animateLetters:function(){this.startAnimation=!0}}}},YaEn:function(t,e,i){"use strict";var s=i("7+uW"),n=i("/ocq"),a=i("Ob7w"),o=i("A3A7"),r=i("7+Fp"),c=i("yrLg"),l=i("J3XL"),h=i("JOA4"),u=i("lH82"),d=i("r4bi");s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",components:{Home:a.a,Hero:o.a,Work:c.a,Description:r.a,Knowledge:l.a,Personal:h.a,Hobbies:u.a,Contact:d.a}}]})},Z7gT:function(t,e){},a7zM:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"global_title small"},[i("p",[i("span",[t._v("Hobbies")])])])]),t._v(" "),i("div",{staticClass:"hobbies"},[i("p",{staticClass:"hobbies__title"},[t._v("I love videogames and concerts")]),t._v(" "),i("div",{staticClass:"hobbies__squear squear-1"},[i("img",{staticClass:"hobbies__squear__image",attrs:{src:"static/images/videogames.gif",alt:"Videogames"}}),t._v(" "),i("div",{staticClass:"hobbies__squear__wrapper"},[i("p",{staticClass:"hobbies__squear__wrapper__title"},[t._v("My favorites are fighting and rhythm games")])])]),t._v(" "),i("div",{staticClass:"hobbies__squear squear-2"},[i("img",{staticClass:"hobbies__squear__image",attrs:{src:"static/images/tame-impala.jpg",alt:"Concerts"}}),t._v(" "),i("div",{staticClass:"hobbies__squear__wrapper"},[i("p",{staticClass:"hobbies__squear__wrapper__title"},[t._v("Listen to my beat")])])]),t._v(" "),i("div",{staticClass:"hobbies__squear squear-1"},[i("img",{staticClass:"hobbies__squear__image",attrs:{src:"static/images/overwatch.jpg",alt:"Overwatch"}}),t._v(" "),i("div",{staticClass:"hobbies__squear__wrapper"},[i("p",{staticClass:"hobbies__squear__wrapper__title"},[t._v("Main Junkrat on Overwatch (Platinum | PS4)")])])])])])}],a={render:s,staticRenderFns:n};e.a=a},apgA:function(t,e){},d9DP:function(t,e){},iAQb:function(t,e,i){"use strict";e.a={name:"Knowledge",data:function(){return{knowlegde:[{title:"Development",elements:["Vanilla JS","Vuejs","ES6","Angular 1","React JS *","Node.js","GraphQL","RESTful Web Services","Laravel","PHP 5.6 - 7","Webpack / jQuery / mootools","Grunt / Gulp","Nginx / Apache","SQL","git / svn"]},{title:"Design, Audiovisual",elements:["Adobe PS, AI, AE","Motion graphics","Sketch *","Zeplin / invision","Livestream","Final Cut / Adobe Pr","Maya, Blender *"]},{title:"Extra",elements:["Google: Google Analytics, HTML5 Studio Certificatied & Rich Media Expert","Amazon: AWS (S3, SES), Amazon Associates","Spanish"]}]}},created:function(){},mounted:function(){},methods:{}}},lH82:function(t,e,i){"use strict";function s(t){i("CCzX")}var n=i("Fvwo"),a=i("a7zM"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},"mX/i":function(t,e,i){"use strict";e.a={name:"Personal",data:function(){return{}},created:function(){},mounted:function(){},methods:{}}},n1ak:function(t,e,i){"use strict";e.a={name:"Hero",data:function(){return{velocityDecimal:1e-4,sizeCircle:0,sizeDirection:0,welcomeShow:"",settings:{sizeCircles:50,circlesLimit:40},delayHelper:!0,context:!1,showedCanvas:!1,winW:0,winH:0,circles:[],mouseDown:!1,speedChange:!1,particleCount:0}},props:["scrollPosition"],created:function(){},mounted:function(){this.initHero()},methods:{initHero:function(){var t=document.getElementById("canvas-area");this.winW=t.clientWidth,this.winH=t.clientHeight;var e=document.getElementById("hero__canvas");e.width=this.winW,e.height=this.winH,console.log(this.winW,this.winH),this.context=e.getContext("2d"),this.drawCircles(),e.addEventListener("mousedown",function(t){this.speedChange=!0,this.mouseDown=!0}.bind(this),!1),e.addEventListener("touchstart",function(t){this.speedChange=!0,this.mouseDown=!0}.bind(this),!1),e.addEventListener("mouseup",function(t){this.speedChange=!1,this.mouseDown=!1}.bind(this),!1),e.addEventListener("touchend",function(t){this.speedChange=!1,this.mouseDown=!1}.bind(this),!1)},drawCircles:function(){function t(t,e,i,s,n,a){this.radius=t,this.speed=e,this.width=i,this.xPos=s,this.yPos=n,this.delay=a,this.opacity=.05+.5*Math.random(),this.counter=0,this.sizeCircle=0,this.sizeDirection=0;var o=Math.floor(2*Math.random());this.sign=1==o?-1:1}for(var e=this,i=0,s=0,n=0,a=0,o=void 0,r=0;r<this.settings.circlesLimit;r++){i=Math.random()*this.winW,s=Math.random()*this.winH,n=.1+1*Math.random(),a=Math.floor(Math.random()*this.settings.sizeCircles)+this.settings.sizeCircles/2,o=.09*Math.random();var c=new t(100,n,a,i,s,o);e.circles.push(c)}t.prototype.update=function(){this.counter+=this.sign*this.speed,e.particleCount++,!0===e.speedChange&&(!0===e.mouseDown&&(this.counter<0?this.counter-=2:this.counter+=2),this.particleCount>=e.settings.circlesLimit-1&&(e.speedChange=!1)),this.sizeCircle>=.2?this.sizeDirection=1:this.sizeCircle<0&&(this.sizeDirection=0),e.delayHelper&&(0===this.sizeDirection?this.sizeCircle+=e.velocityDecimal+this.delay:this.sizeCircle-=e.velocityDecimal+this.delay,e.particleCount>=e.settings.circlesLimit-1&&(e.delayHelper=!1)),0===this.sizeDirection?this.sizeCircle+=e.velocityDecimal:this.sizeCircle-=e.velocityDecimal,e.context.beginPath(),e.context.arc(this.xPos+Math.cos(this.counter/300)*this.radius,this.yPos+Math.sin(this.counter/300)*this.radius,this.width,0,2*Math.PI,!1),e.context.arc(this.xPos+Math.cos(this.counter/300)*this.radius,this.yPos+Math.sin(this.counter/300)*this.radius,this.width*(.8+this.sizeCircle),0,2*Math.PI,!0),e.context.closePath(),e.context.fillStyle="rgba(115, 228, 122,"+this.opacity+")",e.context.fill(),e.particleCount>=e.settings.circlesLimit-1&&(e.particleCount=0)},this.draw()},draw:function(){this.context.clearRect(0,0,this.winW,this.winH);for(var t=0;t<this.circles.length;t++){this.circles[t].update()}!1===this.showedCanvas&&(this.showedCanvas=!0,setTimeout(function(){this.initTitle()}.bind(this),500)),requestAnimationFrame(this.draw)},initTitle:function(){console.log("Hero is running"),this.welcomeShow="hero--pre_active",setTimeout(function(){this.welcomeShow="hero--pre_active hero--active"}.bind(this),1200)}}}},qrJZ:function(t,e){},r4bi:function(t,e,i){"use strict";function s(t){i("Z7gT")}var n=i("GFAo"),a=i("KjZT"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},sLQq:function(t,e,i){"use strict";var s=i("CP8P"),n=i("MCR8"),a=i("VU/8"),o=a(s.a,n.a,!1,null,null,null);o.exports},xJD8:function(t,e,i){"use strict";e.a={name:"app"}},yMGM:function(t,e){},yrLg:function(t,e,i){"use strict";function s(t){i("TRIo")}var n=i("Qc7U"),a=i("1Z1d"),o=i("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.4246eb5bcb7529a450d4.js.map