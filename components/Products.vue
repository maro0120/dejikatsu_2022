<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold font-title" id="products">開催形式</h3>
    </div>
    <div class="project-card flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 bg-white">
      <div>
          <img src="../assets/Brainstorming.png" class="block m-auto" alt="">
      </div>
      <div class="flex max-w-lg justify-center" >
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">講習会</h2>
          <p class="text-left text-base text-gray-700 m-3">受講者に対し、実施会場において支援員が講師となっていずれかの講座に関する講習を行う形態の講習会です。<br>
            週替わりで各会場にて開催するので最寄りの会場にお申込みください。<br>（要予約）
          </p>
        </div>
      </div>
    </div>
    <div class="project-card flex flex-col md:flex-row-reverse justify-center items-center content-center text-center mt-8 bg-white">
      <div style="flex-basis:50%;">
          <img src="../assets/Team presentation.png" class="block m-auto" alt="">
      </div>
      <div class="flex max-w-lg justify-center" style="flex-basis:50%;">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">相談会</h2>
          <p class="text-left text-base text-gray-700 m-3">日時・場所を事前に周知した上で、参加者に実施会場を開放し、講座を特定せずに参加者の求めに応じてデジタル活用全般の助言・相談を行うよろず相談会です。<br>
            各会場の講習会実施後に開催いたしますので、お気軽にお越しください。<br>（予約不要）
          </p>
        </div>
      </div>
    </div>
    <!--<div class="project-card flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 bg-white">-->
    <!--  <div style="flex-basis:50%;">-->
    <!--      <img src="../assets/products-3.jpg" class="h-screen/3 block m-auto" alt="">-->
    <!--  </div>-->
    <!--  <div class="flex max-w-lg justify-center" style="flex-basis:50%;">-->
    <!--    <div class="txt md:px-5 lg:px-0">-->
    <!--      <h2 class="text-xl font-semibold text-gray-800">国産小麦のパン</h2>-->
    <!--      <p class="text-base text-gray-700 my-3">はるゆたかなどの北海道産小麦と津山産小麦ほほえみを使用。<br>保存料は未使用。添加物も最低限に抑えてあります。</p>-->
    <!--    </div>-->
    <!--  </div>-->
    <!--</div>-->
    <div class="mt-4 md:mt-10">
      <section>
        <a href="https://reserva.be/rantan" target="_blank" class="btn_02">講習会のご予約はこちらから</a>
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
