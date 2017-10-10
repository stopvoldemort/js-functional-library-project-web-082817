fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(list, iteratee) {
      if (Array.isArray(list)===true) {
        for (let i=0; i<list.length; i++) {
          iteratee(list[i])
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          iteratee(list[key], key)
        }
      }
      return list
    },

    map: function(list, iteratee) {
      new_list = []
      if (Array.isArray(list)===true) {
        for (let i=0; i<list.length; i++) {
          new_list[i] = iteratee(list[i])
        }
      } else if (typeof list === 'object') {
        let i = 0
        for (var key in list) {
          new_list[i] = iteratee(list[key])
          i++
        }
      }
      return new_list
    },

    reduce: function (list, iteratee, memo) {
      let arr = []
      if (typeof list === 'object') {
        let i = 0
        for (var key in list) {
          arr[i] = list[key]
          i++
        }
      } else {
        arr = list.slice(0)
      }
      if (memo) {
        agg = memo
        for (let i=0; i<arr.length; i++) {
          agg = iteratee(arr[i], agg)
        }
      } else {
        agg = arr[0]
        for (let i=1; i<arr.length; i++) {
          agg = iteratee(arr[i], agg)
        }
      }
      return agg
    },

    find: function(list, predicate) {
      if (Array.isArray(list)) {
        for (let i=0; i<list.length; i++) {
          if (predicate(list[i])) {
            return list[i]
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          if (predicate(list[key])) {
            return list[key]
          }
        }
      }
    },

    filter: function(list, predicate) {
      let arr = []
      if (Array.isArray(list)) {
        for (let i=0; i<list.length; i++) {
          if (predicate(list[i])) {
            arr = [...arr, list[i]]
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          if (predicate(list[key])) {
            arr = [...arr, list[key]]
          }
        }
      } return arr
    },

    sortBy: function (list, iteratee) {
      let arr = list.slice(0)
      let counter = 1
      let temp

      while (counter > 0) {
        counter = 0

        for (i=0; i<(arr.length-1); i++) {
          if (iteratee(arr[i]) > iteratee(arr[i+1])) {
            temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
            counter++
          }
        }
      }
      return arr
    },

    size: function (list) {
      let i = 0
      while (list[i]){
        i++
      }
      return i
    },

    first: function (array, n) {
      if (!n){
        return array[0]
      } else {
        return array.slice(0 , n)
      }
    },

    last: function (array, n) {
      if (!n){
        return array.slice(-1)
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let new_array = []
      for (let v of array) {
        if (v) {
          new_array = [...new_array, v]
        }
      }
      return new_array
    },

    uniq: function(array, isSorted, iteratee) {
      let new_array = []
      if (!iteratee) {
        new_array = array.slice(0)
      } else {
        for (let i = 0; i < array.length; i++) {
          new_array[i] = iteratee(array[i])
        }
      }

      if (!isSorted) {new_array.sort()}

      third_array = new_array.slice(0, 1)
      for (let i = 1; i < new_array.length; i++) {
        if (new_array[i] != new_array[i-1]) {
          third_array = [...third_array, new_array[i]]
        }
      }
      return third_array
    },

    keys: function(object) {
      let arr = []
      for (var key in object) {
        arr = [...arr, key]
      }
      return arr
    },

    values: function(object) {
      let arr = []
      for (var key in object) {
        arr = [...arr, object[key]]
      }
      return arr
    },

    functions: function(object) {
      let arr = []
      for (var key in object) {
        if (typeof object[key] === "function") {
          arr = [...arr, key]
        }
      }
      return arr
    },

  }
})()
