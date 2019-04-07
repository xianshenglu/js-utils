/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: D:/Demo/github/jsSnippets/src/utils/index.js
/**
 * @description put the repetitive letter together
 * @param {String} str string needs to sort
 * @returns {Array}
 * @example
 * sortCharacters('sfdaffaadaafafsfed') // ["e", "ss", "ddd", "aaaaaa", "ffffff"]
 */
function sortCharacters(str) {
  if (typeof str !== 'string') {
    throw new Error('input should be String!')
  }
  if (str === '') {
    return ['']
  }
  return str
    .split('')
    .sort()
    .join('')
    .match(/(.)\1*/gu)
    .sort((a, b) => a.length - b.length)
}

/**
 * @description sort array randomly
 * @param {Array} arr
 * @returns {Array} array randomly sorted
 * @example
 * getPseudorandom([1,2,3,4,5,6]) //not equal [1,2,3,4,5,6]
 */
function getPseudorandom(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

/**
 * @description delete the last `0` when a number calls toFixed
 * @param {Number} num
 * @param {Number} precise
 * @returns {String}
 * @example
 * toFixedNoLast0(12.230, 4) //"12.23"
 */
function toFixedNoLast0(number, precise) {
  return number.toFixed(precise).replace(/\.?0+$/, '')
}

/**
 * @description camel to hyphen
 * @param {String} str
 * @returns {String}
 * @example
 * camelToHyphen('camelToHyphen') // "camel-to-hyphen"
 */
function camelToHyphen(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * @description hyphen to camel
 * @param {String} str
 * @returns {String}
 * @example
 * hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
 */
function hyphenToCamel(str) {
  return str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())
}
/**
 * @description detect if it is a generalized object
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * isObject(new RegExp()) //true
 * isObject('') //false
 */
function isObject(obj) {
  let type = typeof obj
  return obj !== null && (type === 'object' || type === 'function')
}
/**
 * @description detect if it is a narrow object
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * isPlainObject(new Function()) //false
 * isPlainObject({}) //true
 */
function isPlainObject(obj) {
  return (
    Object.prototype.toString
      .call(obj)
      .slice(8, -1)
      .toLocaleLowerCase() === 'object'
  )
}
/**
 * @description execute state[property[.property.[...]]] = data
 * @param {Object} state
 * @param {{path:String,data:*}} param
 * @example
 * replaceProperty({a:{b:{c:1}}},{path:'a.b.c',data:2})// {a:{b:{c:2}}}
 * replaceProperty({a:{b:{c:[1,2,3]}}},{path:'a.b.c.1',data:1}) // {a:{b:{c:[1,1,3]}}}
 */
function replaceProperty(state, { path, data }) {
  path = path.split('.')
  let terminalProp = path.pop()
  let target = path.reduce((re, key) => {
    return re[key]
  }, state)
  target[terminalProp] = data
  return state
}
/**
 * @description put nested children in one dimension
 * @param {Array} array
 * @param {string} [children='children'] key name of children
 * @returns {Array}
 * @example
 * flattenArr([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
 */
function flattenArr(array, childrenKey = 'children') {
  function iterator(arr, res) {
    return arr.reduce((re, obj) => {
      re.push(obj)
      let children = obj[childrenKey]
      if (Array.isArray(children)) {
        iterator(children, re)
      }
      return re
    }, res || [])
  }
  return iterator(array)
}
/**
 * @description add error handler when using JSON.parse()
 * @param {*} jsonText
 * @param {string} [errorPropertyName='error']
 * @param {*} [valueForNull={ [errorPropertyName]: null }]
 * @returns {Object} new Object, with the original text saved in errorPropertyName
 * @example
 * tryJsonParse('str') //{error:'str'}
 * tryJsonParse(null,null) //{'null':null}
 * tryJsonParse(null,null,null) //null
 * tryJsonParse('{"name":"test","value":1}') //{name: "test", value: 1}
 */
function tryJsonParse(
  jsonText,
  errorPropertyName = 'error',
  valueForNull = { [errorPropertyName]: null }
) {
  try {
    return JSON.parse(jsonText) || valueForNull
  } catch (e) {
    return { [errorPropertyName]: jsonText }
  }
}
/**
 * @description calculate the max size child can be without change respect ratio
 * @param {{width:Number,height:Number}} parentRect parent container size
 * @param {{width:Number,height:Number}} childRect child container size
 * @param {string} [mode='contain'] calculate by contain or cover, which is similar to background-size values
 * @returns {{width,height,offsetX,offsetY}} target child size
 * @example
 * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200}) //{width:25,height:100,offsetX:75,offsetY:0}
 * calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200},'cover') //{width:100,height:400,offsetX:0,offsetY:-300}
 */
function calcSizeWithRespectRatio(
  parentRect,
  childRect,
  mode = 'contain'
) {
  let holderWid = parentRect.width
  let holderHei = parentRect.height
  let targetWid = childRect.width
  let targetHei = childRect.height

  let widthScaleRatio = holderWid / targetWid
  let heightScaleRatio = holderHei / targetHei
  let targetRespectRatio = targetWid / targetHei

  let calcOnHeight = {
    width: holderHei * targetRespectRatio,
    height: holderHei,
    offsetX: holderWid - holderHei * targetRespectRatio,
    offsetY: 0
  }
  let calcOnWidth = {
    width: holderWid,
    height: holderWid / targetRespectRatio,
    offsetX: 0,
    offsetY: holderHei - holderWid / targetRespectRatio
  }
  switch (mode) {
  case 'contain':
    return widthScaleRatio > heightScaleRatio ? calcOnHeight : calcOnWidth
  case 'cover':
    return widthScaleRatio > heightScaleRatio ? calcOnWidth : calcOnHeight
  }
}

/**
 * @author luxiansheng
 * @param { Object } obj
 * @param { Function } [transformer]
 * @returns { String } serialized string
 * @example
 * // returns x=1&y=2
 * serializeObj({x:1,y:2})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:undefined})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:null})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:''})
 * @example
 * // returns x=1&y=15030230023
 * serializeObj({ x: 1, y: new Date() }, (key, value) => value instanceof Date ? key+'='+value.getTime() : key+'='+value)
 */

function serializeObj(obj, transformer) {
  let reducer = (re, [key, value]) => {
    if (typeof value === 'undefined' || value === null || re + value === re) {
      return re
    }
    re += key + '=' + value + '&'
    return re
  }
  if (typeof transformer === 'function') {
    reducer = (re, [key, value]) => {
      const result = transformer(key, value)
      if (result === false) {
        return re
      }
      re += result + '&'
      return re
    }
  }
  return Object.entries(obj)
    .reduce(reducer, '')
    .replace(/&$/, '')
}

/**
 * @description get common date info of a date
 * @todo need correction
 * @returns {Array}
 * @example
 * // {"year":2019,"month":4,"date":21,"hour":13,"minute":26,"second":1,"millisecond":1555824361000}
 * getDateInfo({inputDate:new Date(2019,3,21,13,26,1)})
 * @example
 * //{"year":2019,"month":3,"date":21,"hour":13,"minute":26,"second":1,"millisecond":1555824361000}
 * getDateInfo({inputDate:new Date(2019,3,21,13,26,1),correctMonth:false})
 * @example
 * // {"yyyy":"2019","MM":"04","dd":"21","hh":"13","mm":"26","ss":"01","millisecond":"1555824361000"}
 * getDateInfo({inputDate:new Date(2019,3,21,13,26,1),padStart:true,type:'string'})
 */
function getDateInfo({
  inputDate = new Date(),
  correctMonth = true,
  padStart = false,
  type = 'number'
} = {}) {
  var year = inputDate.getFullYear()
  var month = inputDate.getMonth()
  var date = inputDate.getDate()
  var hour = inputDate.getHours()
  var minute = inputDate.getMinutes()
  var second = inputDate.getSeconds()
  var millisecond = inputDate.getTime()
  if (correctMonth) {
    month += 1
  }
  if (type === 'string') {
    year = String(year)
    month = String(month)
    date = String(date)
    hour = String(hour)
    minute = String(minute)
    second = String(second)
    millisecond = String(millisecond)
  }
  if (padStart) {
    if (type !== 'string') {
      throw new Error('padStart:true have to work with type:\'string\' ')
    }
    month = month.padStart(2, 0)
    date = date.padStart(2, 0)
    hour = hour.padStart(2, 0)
    minute = minute.padStart(2, 0)
    second = second.padStart(2, 0)
  }
  return [[year, month, date], [hour, minute, second], millisecond]
}
/**
 *
 * @param {{Array}} rules
 * @param {String} separator
 * @example
 * // [{"message":"field1 rule1！"},{"message":"field2 rule1！"},{"message":"field2 rule2！"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1！' } ], field2: [ {  message: 'field2 rule1！' }, {  message: 'field2 rule2！' }]})
 * @example
 * // [{"message":"field1 rule1！"},{"message":"field2 rule1！"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1！' } ], field2: [ {  message: 'field2 rule1！' },]})

 */
function flatFormRules(rules) {
  return [].concat(...Object.values(rules))
}

// CONCATENATED MODULE: ./index.js

document.body.innerHTML =
  'you import getPseudorandom, and run getPseudorandom([1,2,3,4,5,6]), then you got' +
  getPseudorandom([1, 2, 3, 4, 5, 6])


/***/ })
/******/ ]);