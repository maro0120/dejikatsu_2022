<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-title text-2xl" id="event">EVENT SCHEDULE</h3>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 p-5">
        <FullCalendar
          :options='calendarOptions'
         >
          <template v-slot:eventContent='arg'>
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
          </template>
        </FullCalendar>
      </div>
        <!--<p class="received">{{ variable }}</p>-->
      <div class="w-full lg:w-1/2 p-5">
        <FullCalendar
          :options='calendarOptions2'
         >
          <template v-slot:eventContent='arg'>
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
          </template>
        </FullCalendar>
      </div>
    </div>
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja"
import swal from 'sweetalert';
import moment from "moment";

// const INITIAL_EVENTS = [
//   {
//     id: 1,
//     title: 'All-day event',
//     start: "2021-03-10T10:00:00",
//   },
//   {
//     id: 2,
//     title: '3day event',
//     start: "2021-03-15T10:00:00",
//     end: "2021-03-17T17:00:00"
//   }
// ]

export default {
  components: {
    FullCalendar
  },
  props: [
   'event'
  ],
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          // left: 'prev,next',
          left: '',
          center: 'title',
          right: ''
        },
        initialView: 'dayGridMonth',
        initialEvents: this.event,
        locale:jaLocale,
        editable: false,
        selectable: false,
        selectMirror: true,
        dayMaxEvents: false,
        weekends: true,
        select: this.handleDateSelect,
        eventsSet: this.handleEvents,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
        contentHeight: 'auto',
        eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
        displayEventTime: false,
        eventDisplay: "block",
        eventTextColor: "black",
        eventBorderColor: "white"
      },
      calendarOptions2: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: '',
          center: 'title',
          right: ''
        },
        initialView: 'dayGridMonth',
        initialEvents: this.event,
        initialDate: '',
        locale:jaLocale,
        editable: false,
        selectable: false,
        selectMirror: true,
        dayMaxEvents: false,
        weekends: true,
        select: this.handleDateSelect,
        eventsSet: this.handleEvents,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
        contentHeight: 'auto',
        eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
        displayEventTime: false,
        eventDisplay: "block",
        eventTextColor: "black",
        eventBorderColor: "white"
      },
    }
  },
  methods: {
    handleEvents(events) {},
    handleWeekendsToggle() {},
    handleDateSelect(selectInfo) {},
    handleEventClick(clickInfo) {
      swal('時間: ' + moment(clickInfo.event.start).format("YYYY/MM/DD HH:mm") + '\nタイトル: ' + clickInfo.event.title + '\n詳細:\n' + clickInfo.event.extendedProps.detail)
      // alert('Coordinates: ' + clickInfo.jsEvent.pageX + ',' + clickInfo.jsEvent.pageY)
      // alert('View: ' + clickInfo.view.type)
      // change the border color just for fun
      // clickInfo.el.style.borderColor = 'red'
    },
  },
  created(){
    let now = moment();
    now = now.add(1, 'month');
    now = now.format('YYYY-MM-DD')
    this.calendarOptions2.initialDate = now
    // alert(now);
    
  },
}
</script>
<style>
.fc-event-main {
  white-space: normal;
}
.fc-scrollgrid-section-header {
  background-color: #fca45c;
}
.fc-button-primary {
  background-color: #BF5B04 !important;
  border: none !important;
  padding:0.3rem 0.5rem !important;
}
.fc-button-primary:active {
  box-shadow: none !important;
}
.fc-button-primary:focus {
  box-shadow: none !important;
}
.fc-col-header-cell-cushion {
  color: #EEE;
}
</style>