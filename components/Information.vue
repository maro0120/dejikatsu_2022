<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold font-title" id="info">Information</h3>
    </div>
    <div class="flex flex-row justify-center items-center content-center text-center mt-8 bg-white">
      <div class="my-8" style="flex-basis:50%;">
          <h4 class="text-lg md:text-xl lg:text-2xl">営業日</h4>
          <p class="text-base text-gray-700 my-3">毎週土日のみ営業</p>
      </div>
      <div class="my-8" style="flex-basis:50%;">
          <h4 class="text-lg md:text-xl lg:text-2xl">営業時間</h4>
          <p class="text-base text-gray-700 my-3">10:00 ～ 19:00</p>
      </div>
    </div>
    <div class="text-center text-gray-700 mb-8">
      <p class="text-base text-gray-700 my-3">焼きあがったパンからお店に並べています。<br>７時過ぎ頃から並び始めて、１０時頃には全てのパンが焼きあがります。<br>ご予約、取り置き等をご希望のお客様はお気軽にお問い合わせください。</p>
    </div>
    <div class="mt-4 md:mt-10">
      <section>
        <a href="https://form.run/@blegen-adm--1625995825" target="_blank" class="btn_02">お問い合わせはこちら</a>
      </section>
    </div>
  </div>
</template>

<style scoped>
section {
  max-width: 400px;
  margin: 0 auto;
}
a.btn_02 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #5ab3fc;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 6% 0 12%;
  color: #5ab3fc;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  position: relative;
  transition-duration: 0.2s;
}
a.btn_02:hover {
  background: #5ab3fc;
  color: #fff;
}
a.btn_02:before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 7px 8px;
  border-color: transparent transparent transparent #5ab3fc;
  position: absolute;
  top: 50%;
  left: 6%;
  margin-top: -7px;
}
a.btn_02:hover:before {
  border-color: transparent transparent transparent #fff;
}
</style>

<script>

</script>

