<template>
  <div class="main_imgBox">
    <div class="bg-cover h-screen w-full main_img" :style="{'background-image': `url(${require('@/assets/pexels-pixabay-461060.jpg')})`}"></div>
    <div class="bg-cover h-screen w-full main_img" :style="{'background-image': `url(${require('@/assets/pexels-vaibhav-jadhav-3218467.jpg')})`}"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main_imgBox {
	top: 0;
	left: 0;
	justify-content: center;
	height: 90vh;
	color: #fff;
	text-align: center;
	overflow: hidden;
	position: relative;
}
.main_img {
	z-index:10;
	opacity: 0;
	width: 100%;
	height: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	top: 0;
	/*枚数×6s*/
	-webkit-animation: anime 12s 0s infinite;
	animation: anime 12s 0s infinite; 
}
.main_img:nth-of-type(2) {
  /*2枚目6秒後開始*/
	-webkit-animation-delay: 6s;
	animation-delay: 6s;
}

@keyframes anime {
	0% {
		opacity: 0;
	}
	/*3秒後→3s/12s=25%*/
	25% {
		opacity: 1;
	}
	/*6秒後→6s/12s=25%*/
	50% {
		opacity: 1;
	}
	/*9秒後→9s/12s=25%*/
	75% {
		opacity: 0;
		transform: scale(1.2);
		z-index:9;
	}
	100% { opacity: 0 }
}

@-webkit-keyframes anime {
	0% {
		opacity: 0;
	}
	25% {
		opacity: 1;
	}
	50% {
		opacity: 1;
	}
	75% {
		opacity: 0;
		transform: scale(1.2);
		z-index:9;
	}
	100% { opacity: 0 }
}
</style>