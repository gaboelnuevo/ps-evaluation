function diffMonth(startDate, endDate) {
  var startMonths = startDate.getMonth() + (startDate.getFullYear() * 12);
  var endMonths = endDate.getMonth() + (endDate.getFullYear() * 12);
  return endMonths - startMonths;
}

function generateMonthly(startDate, endDate, times) {
  var i;
  var shedule = [];
  for (i = 0; i < times; i++) {
    var obj = {};
    obj.startDate = i === 0 ? startDate : getFirstDayOfMonth(addDays(shedule[i - 1].endDate, 1));
    obj.endDate = i === (times - 1) ? endDate : getLastDayOfMonth(obj.startDate);
    obj.days = generateDays(obj.startDate, obj.endDate);
    shedule.push(obj);
  }

  return shedule;
}

function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, days) {
  var copyOf = new Date(date.valueOf());
  var dateInMs = copyOf.setDate(copyOf.getDate() + days);
  return new Date(dateInMs);
}

function generateDays(startDate, endDate) {
  var times = (endDate.getDate() - startDate.getDate()) + 1;
  var days = [];
  for (var i = 0; i < times; i++) {
    days.push(startDate.getDate() + i);
  }
  return days;
}

angular
  .module('app')
  .component('root', {
    templateUrl: 'app/root/root.html',
    controller: function () {
      var self = this;
      self.title = 'Prosoft Evaluation!';
      self.startDate = new Date();
      self.endDate = new Date();
      self.contryCode = 'us';
      self.shedule = [];
      self.onGenerate = function () {
        var nMonths = diffMonth(self.startDate, self.endDate) + 1;
        var shedule = generateMonthly(self.startDate, self.endDate, nMonths);
        self.shedule = shedule;
      };
    }
  });
