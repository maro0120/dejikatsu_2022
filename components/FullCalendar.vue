<template>
  <div>
      <FullCalendar
        :options='calendarOptions'
       >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
      <!--<p class="received">{{ variable }}</p>-->
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja"
import swal from 'sweetalert';


const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'All-day event',
    start: "2021-03-10T10:00:00",
  },
  {
    id: 2,
    title: '3day event',
    start: "2021-03-15T10:00:00",
    end: "2021-03-17T17:00:00"
  }
]

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
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
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
    }
  },
  methods: {
    handleEvents(events) {},
    handleWeekendsToggle() {},
    handleDateSelect(selectInfo) {},
    handleEventClick(clickInfo) {
      swal('Event: ' + clickInfo.event.title)
      // alert('Coordinates: ' + clickInfo.jsEvent.pageX + ',' + clickInfo.jsEvent.pageY)
      // alert('View: ' + clickInfo.view.type)
      // change the border color just for fun
      clickInfo.el.style.borderColor = 'red'
    },
  }
}
</script>
