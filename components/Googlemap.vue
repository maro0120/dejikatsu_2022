<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold" id="map">map</h3>
    </div>
    <div>
      <GmapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"
        >
        <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :title="m.title"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :icon="m.pinicon"
          />
      </GmapMap>
    </div>
  </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      maplocation: { lng: 133.97486038214467, lat: 34.93573559399174 },
      zoom: 15,
      styleMap: {
        width: '100%',
        height: '400px',
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      markers: [
        {
          title: 'パンの家ブレ',
          pinicon: {
            url: '/img/bure_logo.jpg',
            scaledSize: { width: 40, height: 40, f: 'px', b: 'px' },
          },
          position: { lng: 133.97486038214467, lat: 34.93573559399174 },
        },
      ],
    }
  },
}
</script>

