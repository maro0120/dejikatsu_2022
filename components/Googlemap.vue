<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold font-title" id="map">Access</h3>
    </div>
    <div class="flex flex-row justify-center items-center content-center text-center mt-8 bg-white">
      <div class="my-8 px-2" style="flex-basis:50%;">
          <img src="../assets/exterior-1.jpg" class="block m-auto" alt="">
      </div>
      <div class="my-8 px-2" style="flex-basis:50%;">
          <img src="../assets/exterior-2.jpg" class="block m-auto" alt="">
      </div>
    </div>
    <div class="gmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6541.784906603395!2d133.9712992358667!3d34.93423409130636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35543cf174bf9c2b%3A0x305a9e74df2c104f!2z44OR44Oz44Gu44GE44GIIOODluODrA!5e0!3m2!1sja!2sjp!4v1626142664424!5m2!1sja!2sjp" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>
</template>

<style>
.gmap {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
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

