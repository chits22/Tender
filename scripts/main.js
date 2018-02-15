var app = angular.module('calendar', []);

app.controller('calendarController', function($scope, $document, $element) {

  // DATA //
  $scope.week = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  $scope.times = [
    "1:00am",
    "2:00am",
    "3:00am",
    "4:00am",
    "5:00am",
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
    "11:00pm"
  ];


  // INIT //
  var hours = 24;
  var days = 7;
  $scope.schedule = new Array(days);
  for (var i = 0; i < days; i++) {
    $scope.schedule[i] = new Array(hours);
  }


  // DRAG TO SELECT //
  var startCell = null;
  var dragging = false;

  function mouseUp(el) {
    startCell = null;
    dragging = false;
  }

  function mouseDown(el) {
    dragging = true;

    var cell = getCoords(el);
    if ($scope.schedule[cell.day][cell.hour] === 1) {
      $scope.schedule[cell.day][cell.hour] = null;
    } else {
      $scope.schedule[cell.day][cell.hour] = 1;
    }
    startCell = cell;
  }

  function mouseEnter(el) {
    if (!dragging) return;

    var cell = getCoords(el);
    if ($scope.schedule[startCell.day][startCell.hour] === 1) {
      $scope.schedule[cell.day][cell.hour] = 1;
    } else {
      $scope.schedule[cell.day][cell.hour] = null;
    }
  }

  function getCoords(cell) {
    var column = cell[0].cellIndex;
    var row = cell.parent()[0].rowIndex;
    return {
      day: column,
      hour: row
    };
  }

  function wrap(fn) {
    return function() {
      var el = angular.element(this);
      $scope.$apply(function() {
        fn(el);
      });
    }
  }

  $element.delegate('.c', 'mousedown', wrap(mouseDown));
  $element.delegate('.c', 'mouseenter', wrap(mouseEnter));
  $document.delegate('body', 'mouseup', wrap(mouseUp));


  // CALCULATE TIMES //
  $scope.scheduleTimes = function() {
    var offset = new Date().getTimezoneOffset()*60*1000;
    var date = Math.floor(new Date()/604800000)*604800000 - 345600000 + offset;

    $scope.startTimes = [];
    $scope.durations = [];
    var block = false;
    var duration;
    for (var day = 0; day < 7; day++) {
      for (var hour = 0; hour < 24; hour++) {
        if ($scope.schedule[day][hour] === 1) {
          if (block) {
            duration++;
          } else {
            $scope.startTimes.push(date + day*86400000 + hour*3600000);
            // console.log(new Date(date + day*86400000 + hour*3600000));
            block = true;
            duration = 1;
          }
        } else {
          if (block) {
            $scope.durations.push(duration);
            block = false;
          }
        }
      }
      if (block) {
        $scope.durations.push(duration);
        block = false;
      }
    }
  }
});
