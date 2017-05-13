function CalendarListController() {

}

angular.module('app').component('calendarList', {
  templateUrl: 'app/calendar/calendarList.html',
  controller: CalendarListController,
  bindings: {
    list: '<'
  }
});
