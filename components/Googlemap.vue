<template>
  <div class="wow animate__fadeInUp">
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold" id="map">会場案内</h3>
    </div>
    <!--<div class="flex flex-row justify-center items-center content-center text-center mt-8">-->
    <!--  <div class="my-8 px-2" style="flex-basis:50%;">-->
    <!--      <img src="../assets/exterior-1.jpg" class="block m-auto" alt="">-->
    <!--  </div>-->
    <!--  <div class="my-8 px-2" style="flex-basis:50%;">-->
    <!--      <img src="../assets/exterior-2.jpg" class="block m-auto" alt="">-->
    <!--  </div>-->
    <!--</div>-->
    <div class="text-center" >
    <h2 class="text-xl text-gray-800">弓削会場</h2>
    <div class="gmap mb-5">
      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.0620403274997!2d133.95894461523847!3d34.92998098037621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35543cdf8f0442f3%3A0x143f330793f15a51!2z5LmF57Gz5Y2X55S65paH5YyW44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1634107215733!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <h2 class="text-xl text-gray-800">神目会場</h2>
    <div class="gmap mb-5">
      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.4102679499274!2d133.92974895065154!3d34.89615238013682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355418105385f113%3A0x6bd18dbddc663d59!2z5LmF57Gz5Y2X55S6IOWFrOawkemkqOelnuebruaUr-mkqA!5e0!3m2!1sja!2sjp!4v1634107304395!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <h2 class="text-xl text-gray-800">誕生寺会場</h2>
    <div class="gmap mb-5">
      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.132428390251!2d133.95422295065305!3d34.95328937705994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35543cb96f4ae025%3A0xdc55e726936c5703!2z5LmF57Gz5Y2X55S6IOWFrOawkemkqOiqleeUn-WvuuaUr-mkqA!5e0!3m2!1sja!2sjp!4v1634107349090!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    </div>
  </div>
</template>

<style>
.gmap {
  height: 0;
  overflow: hidden;
  padding-bottom: 40.25%;
  position: relative;
}
.gmap iframe {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>

<script>
// export default {
//   data() {
//     return {
//       maplocation: { lng: 133.97486038214467, lat: 34.93573559399174 },
//       zoom: 15,
//       styleMap: {
//         width: '100%',
//         height: '400px',
//       },
//       mapOptions: {
//         streetViewControl: false,
//         styles: [],
//       },
//       markers: [
//         {
//           title: 'パンの家ブレ',
//           pinicon: {
//             url: '/img/bure_logo.jpg',
//             scaledSize: { width: 40, height: 40, f: 'px', b: 'px' },
//           },
//           position: { lng: 133.97486038214467, lat: 34.93573559399174 },
//         },
//       ],
//     }
//   },
// }
</script>

