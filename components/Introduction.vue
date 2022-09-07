<template>
  <div class="">
    <div class="c-loader-bg gsap-loader-bg">
      <div class="c-loader-dot gsap-loader-dot-wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="text-center text-gray-700 mb-8">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-10 gsap-title">久米南町　スマホ教室</h2>
      <p class="text-base md:text-xl mb-4 font-bold gsap-lead">"スマホ"をうまく使って、暮らしを便利にしよう！</p>
      <div class="gsap-item">
        <p class="text-base md:text-xl mb-4">スマホで楽しく会話したり、<br class="br-sp">写真を撮ったり、<br class="br-sp">インターネットを使って調べもの・・・<br>
          スマホの活用方法が学べる講習会を<br class="br-sp">開催します。<br>
          <span class="font-bold">参加費無料</span>、お気軽にご参加ください。
        </p>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center content-center text-center mt-8 gsap-item">
      <nuxt-img
        src="/img/9435_color.png"
        quality="70"
        sizes="md:100% lg:500px"
        class="block m-auto"
      />
    </div>
    <div class="wow animate__fadeInUp gsap-item">
      <div class="text-center my-10 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold" id="products">デジタル活用支援推進事業とは</h3>
      </div>
      <div class="text-center text-gray-700 mb-8">
        <p class="text-base md:text-xl mb-4">高齢者をはじめとした様々な方が<br class="br-sp">身近な場所で身近な人から<br>
        デジタル機器・サービスの利用方法を<br class="br-sp">講習会で学ぶことができます。<br>
        スマートフォンを使いこなしたい、<br class="br-sp">オンラインで行政手続を利用したい、<br class="br-sp">という方は<br>
        講習会の開催情報を検索し、<br class="br-sp">お近くの開催場所で<br>「デジタル活用支援講習会」に<br class="br-sp">参加してみましょう。
        </p>
      <div class="mt-4 md:mt-10">
        <section>
          <a href="https://www.deji-katsu.jp/" target="_blank" class="btn_02">事業についての詳細はこちら</a>
        </section>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    index() {
      const gsap = this.$gsap
      const gsapTitle = '.gsap-title span'; // メインビジュアルのタイトル
      const gsapLead = '.gsap-lead'
      const gsapLoaderBg = '.gsap-loader-bg'; // カーテン（黒い背景）
      const gsapDot = '.gsap-loader-dot-wrap > span'; // ドット
      const gsapItem = '.gsap-item';
      gsap.set(
        [gsapTitle,gsapLead,gsapItem],
        //アニメーションさせない静止状態を指定する
        {
          opacity: 0,
          y: 60
        },
      );
      gsap.set(gsapDot, {
        opacity: 0,
        y: -50
      });
      const tl = gsap.timeline();
      tl.to(
        /* ドット */
        /* 0.8秒後に起動 */
        gsapDot, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.8,
          stagger: {
            amount: 0.5,
            from: "start",
            ease: 'power4.inOut'
          }
        },
        ).to(
          /* ドット */
          /* 前のアニメーションが完了した後、ドットを消す */
          gsapDot, {
            opacity: 0
          }
        ).to(
          /* カーテン */
          /* 前のアニメーションが完了した0.5秒後に、カーテンを下へ移動 */
          gsapLoaderBg, {
            y: '100%'
          },
          '+=0.5'
          ).to(
        gsapTitle, {
          /* 前のアニメーションが完了する0.1秒前に実行 */
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: "start",
            ease: "sine.in",
          }
        },
        "-=0.1"
        ).to(
          gsapLead, {
          /* 前のアニメーションが完了する0.2秒前に実行 */
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: "start",
            ease: "bounce.in"
          }
        },
        "-=0.2"
      ).to(
        /* 残り */
        /* 前のアニメーションと同時 */
        gsapItem, {
          opacity: 1,
          y: 0,
        },
      );
    },
  },
  mounted() {
    (() => {
      const gsapTitle = document.querySelectorAll('.gsap-title');
      gsapTitle.forEach(target => {
        let newText = '';
        const text = target.textContent;
        const result = text.split('');
        for (let i = 0; i < result.length; i++) {
          newText += '<span>' + result[i] + '</span>';
        }
        target.innerHTML = newText;
      });
    })();
    this.index()
  },
}
</script>

<style>
    .c-loader-bg {
      @apply fixed top-0 left-0 w-full h-full z-50 grid place-items-center pointer-events-none;
      background-color: #A9A9B7;
    }

    .c-loader-dot {
      @apply inline-flex items-center justify-start pointer-events-none;
    }

    .c-loader-dot>span {
      @apply block w-8 h-8;
      border-radius: 50%;
      background-color: #f5f5f7;
    }

    .c-loader-dot>span+span {
      @apply ml-12;
    }
    .gsap-title > span {
      /* transformプロパティを有効にするため */
      display: inline-block;
    }
</style>