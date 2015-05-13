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
    },

    removeWithoutCopy : function(arr, item) {

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
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
      return arr.map(function (x) {
        return Math.pow(x,2);
      });

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
