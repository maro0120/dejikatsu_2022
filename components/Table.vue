<template>
  <div class="container text-xs md:text-xl wow animate__fadeInUp">        
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: false
      }"
      :sort-options="{
        enabled: false,
      }"/>
  </div>
</template>
 
<script>
export default {
  components: {
  },
  data() {
    return {
      columns: [
        {
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
          filterOptions: {
            enabled: true,
            placeholder: 'すべて',
            filterDropdownItems: [
              { value: 'スマートフォンの基本的な使い方', text: '基本操作' },  
              { value: 'カメラ等基本的なアプリの使い方', text: 'カメラ等アプリ' },  
              { value: '地図アプリの使い方', text: '地図アプリ' },
              { value: 'インターネットの使い方', text: 'インターネット' },  
              { value: 'LINEの使い方', text: 'LINEの使い方' },  
              { value: 'マイナンバーカード', text: 'マイナンバーカード' }
            ]
          }
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
        { id:1, kaijou:"文化センター", naiyou: "スマートフォンの基本的な使い方", date: '2021-09-17'},
        { id:2, kaijou:"神目公民館", naiyou: "スマートフォンの基本的な使い方", date: '2021-09-24'},
        { id:3, kaijou:"誕生寺公民館", naiyou: "スマートフォンの基本的な使い方", date: '2021-10-01'},
        { id:4, kaijou:"文化センター", naiyou: "カメラ等基本的なアプリの使い方", date: '2021-10-08'},
        { id:5, kaijou:"神目公民館", naiyou: "カメラ等基本的なアプリの使い方", date: '2021-10-15'},
        { id:6, kaijou:"誕生寺公民館", naiyou: "カメラ等基本的なアプリの使い方", date: '2021-10-22'},
        { id:7, kaijou:"文化センター", naiyou: "地図アプリの使い方", date: '2021-10-29'},
        { id:8, kaijou:"神目公民館", naiyou: "地図アプリの使い方", date: '2021-11-05'},
        { id:9, kaijou:"誕生寺公民館", naiyou: "地図アプリの使い方", date: '2021-11-12'},
        { id:10, kaijou:"文化センター", naiyou: "インターネットの使い方", date: '2021-11-19'},
        { id:11, kaijou:"神目公民館", naiyou: "インターネットの使い方", date: '2021-11-26'},
        { id:12, kaijou:"誕生寺公民館", naiyou: "インターネットの使い方", date: '2021-12-03'},
        { id:13, kaijou:"文化センター", naiyou: "LINEの使い方", date: '2021-12-10'},
        { id:14, kaijou:"神目公民館", naiyou: "LINEの使い方", date: '2021-12-17'},
        { id:15, kaijou:"誕生寺公民館", naiyou: "LINEの使い方", date: '2022-01-21'},
        { id:16, kaijou:"文化センター", naiyou: "マイナンバーカード", date: '2022-01-28'},
        { id:17, kaijou:"神目公民館", naiyou: "マイナンバーカード", date: '2022-02-04'},
        { id:18, kaijou:"誕生寺公民館", naiyou: "マイナンバーカード", date: '2022-02-11'},

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
.vgt-select{
  font-size: inherit;
  width: inherit!important;
}
table.vgt-table td{
  padding: .8em .4em!important;
}
.vgt-table th{
  padding: .5em;
}
.vgt-table thead th{
  padding: .5em;
}
.text-left {
  text-align: left;
}
</style>