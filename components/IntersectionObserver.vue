<template>
  <div :ref="sentinalName" class="w-full h-px relative" />
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
  isIntersectingElement: function(value) {
    this.$emit('on-intersection-element', value)
  },
},
mounted() {
  const sentinal = this.$refs[this.sentinalName]
  const handler = (entries) => {
    const elmRectCoor = entries[0].target.getBoundingClientRect();
    // if (entries[0].isIntersecting) {
    //   this.isIntersectingElement = true
    // } 
    // else {
    //   this.isIntersectingElement = false
    // }
    if ( 0 > elmRectCoor.bottom ) {
        this.isIntersectingElement = true
    }
    else {
        this.isIntersectingElement = false
    }
  }
  const observer = new window.IntersectionObserver(handler)
  observer.observe(sentinal)
},
}
</script>