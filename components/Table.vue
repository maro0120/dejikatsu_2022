<template>
  <div class="container text-xs md:text-xl ">
    <vue-good-table :columns="columns" :rows="rows" :search-options="{
        enabled: false
      }" :sort-options="{
        enabled: false,
      }" />
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        columns: [{
            label: '開催会場',
            field: 'kaijou',
            filterOptions: {
              enabled: true,
              placeholder: 'すべて',
              filterDropdownItems: [
                { value: '文化センター', text: '弓削' },
                { value: '神目公民館', text: '神目' },
                { value: '誕生寺公民館', text: '誕生寺' }
              ]
            }
          },
          {
            label: '内容',
            field: 'naiyou',
            // filterOptions: {
            //   enabled: true,
            //   placeholder: 'すべて',
            //   filterDropdownItems: [
            //     { value: 'スマートフォンの基本的な使い方', text: '基本操作' },  
            //     { value: 'カメラ等基本的なアプリの使い方', text: 'カメラ等アプリ' },  
            //     { value: '地図アプリの使い方', text: '地図アプリ' },
            //     { value: 'インターネットの使い方', text: 'インターネット' },  
            //     { value: 'LINEの使い方', text: 'LINEの使い方' },  
            //     { value: 'マイナンバーカード', text: 'マイナンバーカード' }
            //   ]
            // }
          },
          {
            label: '日程',
            field: 'date',
            type: 'date',
            thClass: 'text-left',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'MM/dd',
          },
        ],
        rows: [
          { id: 1, kaijou: "文化センター", naiyou: "電源の入れ方、電話のかけ方、カメラの使い方、アプリのインストール", date: '2022-09-9' },
          { id: 2, kaijou: "文化センター", naiyou: "インターネット、メールの使い方", date: '2022-09-16' },
          { id: 3, kaijou: "文化センター", naiyou: "地図アプリ、SNSの使い方", date: '2022-09-23' },
          { id: 4, kaijou: "文化センター", naiyou: "マイナンバーカードの申請、新型コロナワクチン接種証明書の発行方法", date: '2022-09-30' },
          { id: 5, kaijou: "神目公民館", naiyou: "電源の入れ方、電話のかけ方、カメラの使い方、アプリのインストール", date: '2022-10-7' },
          { id: 6, kaijou: "神目公民館", naiyou: "インターネット、メールの使い方", date: '2022-10-14' },
          { id: 7, kaijou: "神目公民館", naiyou: "地図アプリ、SNSの使い方", date: '2022-10-21' },
          { id: 8, kaijou: "神目公民館", naiyou: "マイナンバーカードの申請、新型コロナワクチン接種証明書の発行方法", date: '2022-10-28' },
          { id: 9, kaijou: "誕生寺公民館", naiyou: "電源の入れ方、電話のかけ方、カメラの使い方、アプリのインストール", date: '2022-11-4' },
          { id: 10, kaijou: "誕生寺公民館", naiyou: "インターネット、メールの使い方", date: '2022-11-11' },
          { id: 11, kaijou: "誕生寺公民館", naiyou: "地図アプリ、SNSの使い方", date: '2022-11-25' },
          { id: 12, kaijou: "誕生寺公民館", naiyou: "マイナンバーカードの申請、新型コロナワクチン接種証明書の発行方法", date: '2022-12-2' },
        ],
      }
    }
  }
</script>

<style>
  .container {
    height: 100%;
    width: 100%;
    /*padding: 20px;*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vgt-select {
    font-size: inherit;
    width: inherit !important;
  }

  table.vgt-table td {
    padding: .8em .4em !important;
  }

  .vgt-table th {
    padding: .5em;
  }

  .vgt-table thead th {
    padding: .5em;
  }

  .text-left {
    text-align: left;
  }
</style>
