<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold font-title" id="products">products</h3>
    </div>
    <div class="project-card flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 bg-white">
      <div style="flex-basis:50%;">
          <img src="../assets/products-1.jpg" class="h-screen/3 block m-auto" alt="">
      </div>
      <div class="flex max-w-lg justify-center" style="flex-basis:50%;">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">米粉パン</h2>
          <p class="text-base text-gray-700 my-3">低農薬で自家栽培したあきたこまちを使った米粉を使用。<br>米粉パン特有のもっちり食感をお楽しみ頂けます。</p>
        </div>
      </div>
    </div>
    <div class="project-card flex flex-col md:flex-row-reverse justify-center items-center content-center text-center mt-8 bg-white">
      <div style="flex-basis:50%;">
          <img src="../assets/products-2.jpg" class="h-screen/3 block m-auto" alt="">
      </div>
      <div class="flex max-w-lg justify-center" style="flex-basis:50%;">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">米粉100%の焼き菓子</h2>
          <p class="text-base text-gray-700 my-3">米粉パンと同様に、自家栽培の米粉を使用。<br>小麦を一切使わず100%米粉を使用した焼き菓子です。</p>
        </div>
      </div>
    </div>
    <div class="project-card flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 bg-white">
      <div style="flex-basis:50%;">
          <img src="../assets/products-3.jpg" class="h-screen/3 block m-auto" alt="">
      </div>
      <div class="flex max-w-lg justify-center" style="flex-basis:50%;">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">国産小麦のパン</h2>
          <p class="text-base text-gray-700 my-3">はるゆたかなどの北海道産小麦と津山産小麦ほほえみを使用。<br>保存料は未使用。添加物も最低限に抑えてあります。</p>
        </div>
      </div>
    </div>
    <div class="mt-4 md:mt-10">
      <section>
        <a href="https://form.run/@blegen-adm--1625995825" target="_blank" class="btn_02">商品のご注文はこちら</a>
      </section>
    </div>
  </div>
</template>

<script>

</script>

<style>
section {
  max-width: 300px;
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
