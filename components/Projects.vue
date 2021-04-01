<template>
  <div class="wrapper-small my-5">
    <div class="project-card md:flex mt-8 opacity-0"
    :class="{
        'anime-right': isIntersectingElement,
      }">
        <div class="img max-w-lg md:max-w-sm mx-auto">
            <img src="~/assets/project-img-1.jpg" class="rounded-xl" alt="">
        </div>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
            <div class="txt md:px-5 lg:px-0">
            <h2 class="text-xl font-semibold text-gray-800">Project Title Goes Here.</h2>
            <p class="text-base text-gray-700 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga consequuntur earum maiores suscipit alias atque quod aut.</p> 
            </div>
        <div>
            <div class="md:px-5 lg:px-0 py-3">
                <a href="#" class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold font-medium rounded-full">See Project</a>
                <a href="#" class="ml-6 text-indigo-600 hover:underline">Source Code</a>
            </div>
        </div>
      </div>
    </div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement">
    </intersection-observer>
    <div class="project-card md:flex mt-16 fiu"
    :class="{
        'fadeInUp': isIntersectingElement1,
      }">
        <div class="img max-w-lg md:max-w-sm mx-auto">
            <img src="~/assets/project-img-1.jpg" class="rounded-xl" alt="">
        </div>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
            <div class="txt md:px-5 lg:px-0">
            <h2 class="text-xl font-semibold text-gray-800">Project Title Goes Here.</h2>
            <p class="text-base text-gray-700 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga consequuntur earum maiores suscipit alias atque quod aut.</p> 
        </div>
        <div>
            <div class="md:px-5 lg:px-0 py-3">
                <a href="#" class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold rounded-full">See Project</a>
                <a href="#" class="ml-6 text-indigo-600 hover:underline">Source Code</a>
            </div>
        </div>
      </div>
    </div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement1">
    </intersection-observer>
  </div>
</template>

<script>
import IntersectionObserver from "../components/IntersectionObserver"
  export default {
    components:{
          IntersectionObserver
        },
    data() {
      return {
        isIntersectingElement: false,
        isIntersectingElement1: false,
      };
    },
    methods: {
      onIntersectionElement(value) {
        this.isIntersectingElement = value;
        console.log('1')
        // let target = document.querySelectorAll('.project-card')
        // console.log(target.length)
        // for(let i = 0; i < target.length; i++){
        //   if( value ){
        //     target[i].classList.add("fadeInUp")
        //     console.log(target[i])
        //   } else {
        //     target[i].classList.remove("fadeInUp")
        //   }
        // }
        // if( value ){
        //   document.querySelector('.project-card').classList.add("fadeInUp")
        // } else {
        //   document.querySelector('.project-card').classList.remove("fadeInUp")
        // }
      },
      onIntersectionElement1(value) {
        this.isIntersectingElement1 = value
        console.log('2')
      }
    },
  }
</script>

<style>
  /*----- フェードインしながら上へスライド -----*/
  .fiu{
  	opacity: 0;
  	transform: translate(0, 60px);
  	-webkit-transform: translate(0, 60px);
  }
  
  .fadeInUp{
  	opacity: 1.0;
  	transform: translate(0, 0);
  	-webkit-transform: translate(0, 0);
  	transition: .8s;
  }
  .anime-right {
    animation: right-to-left 1s ease-out .1s 1 forwards;
  }
  @keyframes right-to-left {
    0% {
        opacity:0;
        transform: translate3d(20px,0,0);
    }
    100% {
        opacity:1;
        transform: translate3d(0,0,0);
    }
  }
</style>