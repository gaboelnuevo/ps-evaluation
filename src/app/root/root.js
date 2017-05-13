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
      self.onGenerate = function () {
        console.log({
          startDate: self.startDate,
          endDate: self.endDate,
          contryCode: self.contryCode
        });
      };
    }
  });
