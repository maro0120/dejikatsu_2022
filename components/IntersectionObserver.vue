<template>
  <div :ref="sentinalName" class="w-full h-px relative"/>

</template>
<script>
export default {
  name: 'IntersectionObserver',
  props: {
    sentinalName: {
      type: String,
      required: true,
    },

  },
  data(){
    return {
      isIntersectingElement: false,
    }
  },
  watch: {
    isIntersectingElement(val) {
      this.$emit("input", val);
    },
  },
// mounted() {
//   const sentinal = this.$refs[this.sentinalName]
//   const handler = (entries) => {
//     const elmRectCoor = entries[0].target.getBoundingClientRect();
//     if (entries[0].isIntersecting) {
//       this.isIntersectingElement = true
//       // console.log(sentinal)
//     } 
//     else {
//       this.isIntersectingElement = false
//       // console.log("False")
//     }
//     // if ( 0 > elmRectCoor.bottom ) {
//     //     this.isIntersectingElement = true
//     // }
//     // else {
//     //     this.isIntersectingElement = false
//     // }
//   }
//   const observer = new window.IntersectionObserver(handler)
//   observer.observe(sentinal)
//   },
  mounted() {
    const sentinal = this.$refs[this.sentinalName];

    const handler = (entries) => {
      this.isIntersectingElement = entries[0].isIntersecting;
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
}
</script>