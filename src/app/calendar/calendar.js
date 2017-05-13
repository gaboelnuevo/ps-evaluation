function CalendarController() {

}

angular.module('app').component('calendar', {
  templateUrl: 'app/calendar/calendar.html',
  controller: CalendarController,
  bindings: {
    data: '<'
  }
});
