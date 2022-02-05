
// import axios from 'axios';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';


// document.addEventListener('DOMContentLoaded', function() {

//   ///// プラグイン /////
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin, interactionPlugin ],
//     // 日本語化
//     locale: 'ja',
//     // 時間軸を日本
//     timeZone: 'Asia/Tokyo',
//     // 日曜始まり
//     firstDay: 0,
//     // 土日の色表示
//     businessHours: true,
//     // ボタン表示
//     buttonText: {
//         prevYear: '前年',
//         nextYear: '翌年',
//         today: '今日',
//         month: '月',
//         week: '週',
//         day: '日'
//     },
//     selectable: true,
//     // 日付の’日’部分を非表示
//     dayCellContent: function(e) {
//       e.dayNumberText = e.dayNumberText.replace('日', '');
//     },
//     // イベントの表示
//     events: {
//       url: '/events.json',
//       method: 'get',
//     },
//     // 時間の表示
//     eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
//     // イベントの終了時刻未設定の場合の設定時間
//     defaultTimedEventDuration: '03:00:00',
//     // イベントの色を変える
//     eventColor: '#63ceef',
//     // イベントの文字色を変える
//     eventTextColor: '#000000',
//   });
//   calendar.render();

//   $(".error").click(function(){
//     calendar.refetchEvents();
//   });

//   $('.fc-daygrid-day').click(function(){
//     const dataDate = $(this).data('date')
//     window.location.href = `http://localhost:3000/events/show?date=${dataDate}`; 
//   });

//   $('#event_form_btn').click(function(){
//     const title = $('.form_name').val()
//     const start = $('.start_datetime').val()
//     const end = $('.end_datetime').val()
//     const content = $('.form_content').val()

//     if(!title && !start && !end) {
//       window.alert('タイトルまたは時間を入力してください')
//     } else {
//       axios.post('/events', {
//         event: {
//           title: title,
//           start: start,
//           end: end,
//           content: content
//         }
//       })
//       .then((res) => {
//         var calendarEl = document.getElementById('calendar');
//         var calendar = new Calendar(calendarEl, {
//           plugins: [ dayGridPlugin, interactionPlugin ],
//           // 日本語化
//           locale: 'ja',
//           // 時間軸を日本
//           timeZone: 'Asia/Tokyo',
//           // 日曜始まり
//           firstDay: 0,
//           // 土日の色表示
//           businessHours: true,
//           // ボタン表示
//           buttonText: {
//               prevYear: '前年',
//               nextYear: '翌年',
//               today: '今日',
//               month: '月',
//               week: '週',
//               day: '日'
//           },
//           selectable: true,
//           // 日付の’日’部分を非表示
//           dayCellContent: function(e) {
//             e.dayNumberText = e.dayNumberText.replace('日', '');
//           },
//           // イベントの表示
//           events: {
//           url: '/events.json',
//           method: 'get',
//           extendedProps: {
//             end: '',
//             content: ''
//           }
//           },
//           // 時間の表示
//           eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
//           // イベントの終了時刻未設定の場合の設定時間
//           defaultTimedEventDuration: '03:00:00',
//           // イベントの色を変える
//           eventColor: '#63ceef',
//           // イベントの文字色を変える
//           eventTextColor: '#000000',
//         });

      
//         calendar.render();
      
//         $(".error").click(function(){
//           calendar.refetchEvents();
//         });
//       });
//       // 送信できたらモーダルを閉じる
//       $( '#modal' ).fadeOut( 300 );
//     }
//     });
//   });



