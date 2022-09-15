<template>
  <div id="home">
    <div class="wrapper md:px-10 pt-10">
      <div class="header mt-5">
        <Introduction />
      </div>
      <div class="mt-16">
        <Products />
        <Googlemap />
        <Information />
        <Table />
        <Reserve ref="reserve" />
        <Swiperimage />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.index();
    },
    methods: {
      index() {
        const gsap = this.$gsap
        // 親コンポーネントから子コンポーネントを操作
        const reserveTitle = this.$refs.reserve.$refs.reserveTitle;
        const contactTitle = this.$refs.reserve.$refs.contactTitle;
        this.$ScrollTrigger.matchMedia({
          // スマホは順番
          "(max-width: 767px)": function() {
            gsap.set(
              [reserveTitle, contactTitle], {
                opacity: 0,
                y: 60
              }, );
            const tl = gsap.timeline({
              scrollTrigger: reserveTitle
            });
            tl.to(reserveTitle, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: {
                from: "start",
                ease: "sine.in",
              }
            }, ).to(contactTitle, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: {
                from: "start",
                ease: "sine.out",
              }
            }, );
          },
          // PCは同時表示
          "(min-width: 768px)": function() {
            gsap.set(
              [reserveTitle, contactTitle], {
                opacity: 0,
                y: 60
              }, );
            const tl = gsap.timeline({
              scrollTrigger: reserveTitle
            });
            tl.to(reserveTitle, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: {
                from: "start",
                ease: "sine.in",
              }
            }, ).to(contactTitle, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: {
                from: "start",
                ease: "sine.out",
              }
            }, '<');
          },
        });
      }
    }
  };
</script>

<style>

</style>
