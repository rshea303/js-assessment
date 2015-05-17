if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var indexPosition = arr.indexOf(item);
      return indexPosition

    },

    sum : function(arr) {
      var total = arr.reduce(function(a,b) {
        return a + b;
      });
      return total;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item) 
            arr.splice(i, 1);
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var i, len;

        for (i = 0, len = arr.length; i < len; i++) {
          if (arr[i] === item) { 
            arr.splice(i, 1);
            i = i -1;
            len = len -1;
          };
        };
        return arr;
    },

    append : function(arr, item) {
       arr.push(item);
       return arr;
    },

    truncate : function(arr) {
       arr.pop();
       return arr;
    },

    prepend : function(arr, item) {
       arr.unshift(item);
       return arr;
    },

    curtail : function(arr) {
       arr.shift();
       return arr;
    },

    concat : function(arr1, arr2) {
      var result = arr1.concat(arr2);
      return result;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr; 
    },

    count : function(arr, item) {
      var counter = 0;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === item)
          counter += 1;
      }
      return counter;
    },

    duplicates : function(arr) {
      function onlyUnique(value, index, self){
        return self.indexOf(value) === index;
      }
      var unique = arr.filter( onlyUnique );
      return unique;
    },

    square : function(arr) {
      return arr.map(function (x) {
        return Math.pow(x,2);
      });
    },

    findAllOccurrences : function(arr, target) {
      var result = [];                     
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
          result.push(i);
      }
      return result;
    }
  };
});
