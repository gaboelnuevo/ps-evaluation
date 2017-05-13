function CalendarListController() {

}

angular.module('app').component('heroList', {
  templateUrl: 'app/calendar/calendarList.html',
  controller: CalendarListController,
  bindings: {
    calendarList: '<'
  }
});
