function CalendarListController() {

}

angular.module('heroApp').component('heroList', {
  templateUrl: 'app/calendar/calendarList.html',
  controller: CalendarListController,
  bindings: {
    calendarList: '<'
  }
});
