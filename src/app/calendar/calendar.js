function CalendarController() {

}

angular.module('heroApp').component('heroDetail', {
  templateUrl: 'app/calendar/calendar.html',
  controller: CalendarController,
  bindings: {
    data: '<'
  }
});
