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
    obj.startDate = i === 0 ? startDate : addDays(shedule[i - 1].endDate, 1);
    obj.endDate = i === (times - 1) ? endDate : getLastDayOfMonth(obj.startDate);
    shedule.push({
      startDate: startDate,
      endDate: endDate
    });
  }

  return shedule;
}

function getLastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, days) {
  var copyOf = new Date(date.valueOf());
  var dateInMs = copyOf.setDate(copyOf.getDate() + days);
  return new Date(dateInMs);
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
