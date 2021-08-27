/**
  * 1，依次删除，求最后一位
  **/
/* //S1
function del(arr) {
  let key = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log('i--->', i)
    arr.splice(key, 1)
    if (arr.length > 1) {
      key++;
    } else {
      return arr
    }
  }
  return del(arr)
}
//S2
function del(array) {
  if (array.length === 1) {
    return array;
  }
  var index = 0;
  var len = (array.length + 1) / 2
  for (var i = 0; i < len; i++) {
    array.splice(index, 1);
    index++;
  }
  return del(array);
}
//test
let arr = [1, 2, 3, 4, 5]
let b = del(arr)
console.log(b) */

/**
 * 2递归 阶乘
**/
//S1普通递归
/* const factorial = (n, res = 1) => {
  if (n == 1) {
    return res
  } else {
    return res = n * factorial(n - 1)
  }
} 

//S2 事件驱动
 function factorial (number, result = 1) {
  if (number === 1) {
    console.log('result', result)
    return result
  }
  setTimeout(() => {
    factorial(number - 1, number * result)
  }, 0)
} 

//S3 尾递归
'use strict';
function factorial (number, result = 1) {
  if (number === 1) return result
  return factorial(number - 1, number * result)
}

//test 
console.log(factorial(1000000))*/

/* 数组扁平化 */
//S1 递归 -- flatten
/* function flatten(arr) {
  let res=[];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res=res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
} */

//S2 reduce
/* function flatten(arr){
  return arr.reduce((prev,cur,index,arr)=>{
    console.log('PREV--?',prev)
    if(Array.isArray(cur)){
      return prev.concat(flatten(cur))
    }else{
      return prev.concat(cur)
    }
  },[])
}

//test
console.log(flatten([1,[1,2,[1,2,3]]])) */


//排序
//S1冒泡排序
/* function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {        //相邻元素两两对比
              var temp = arr[j+1];        //元素交换
              arr[j+1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr)); */

/* //S2选择排序
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  console.time('选择排序耗时');
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] */

/* //S3 快速排序
function fastSort(arr) {
  if (arr.length <= 1) { return arr; }
  let left = [], right = [];
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return fastSort(left).concat([pivot], fastSort(right))
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(fastSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
 */

//S4插入排序
/* function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      console.time('插入排序耗时：');
      for (var i = 1; i < array.length; i++) {
          var key = array[i];
          var j = i - 1;
          while (j >= 0 && array[j] > key) {
              array[j + 1] = array[j];
              j--;
          }
          array[j + 1] = key;
      }
      console.timeEnd('插入排序耗时：');
      return array;
  } else {
      return 'array is not an Array!';
  }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] */


/* //S5 桶排序
//插入排序
function insertion_sort(A){
  for(let i=1; i<A.length; i++){
      let p = i-1
      const x = A[i]
      while(p>=0 && A[p]>x){
          A[p+1] = A[p]
          p--
      }
      A[p+1] = x
  }
}
//桶排序
function bucket_sort(A, k, s){ //A排序数组,k桶子数量,s桶子空间尺度
  const buckets = Array.from({length:k}, ()=>[]) //创建桶子
  //把元素放入对应桶子
  for(let i=0; i<A.length; i++){
      //计算需要放入桶子序号
      const idx = ~~(A[i]/s) 
      buckets[idx].push(A[i])
  }
  
  //对每个桶子进行排序
  for(let i=0; i<buckets.length; i++){
      //此处选取插入排序, 空间消耗少,元素少常数时间消耗短
      insertion_sort(buckets[i])
  }
  
  //把每个桶子数据合并
  return [].concat(...buckets)
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bucket_sort(arr,6,10));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] */



/** 
* @description 实现一个观察者模式方法说明：桶排序
* @param  array 数组
* @param  num   桶的数量
*/
/* function bucketSort(array, num) {
  if (array.length <= 1) {
      return array;
  }
  var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
  num = num || ((num > 1 && regex.test(num)) ? num : 10);
  console.time('桶排序耗时');
  for (var i = 1; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
  }
  space = (max - min + 1) / num;
  for (var j = 0; j < len; j++) {
      var index = Math.floor((array[j] - min) / space);
      if (buckets[index]) {   //  非空桶，插入排序
          var k = buckets[index].length - 1;
          while (k >= 0 && buckets[index][k] > array[j]) {
              buckets[index][k + 1] = buckets[index][k];
              k--;
          }
          buckets[index][k + 1] = array[j];
      } else {    //空桶，初始化
          buckets[index] = [];
          buckets[index].push(array[j]);
      }
  }
  while (n < num) {
      result = result.concat(buckets[n]);
      n++;
  }
  console.timeEnd('桶排序耗时');
  return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] */

/* let a = 1
while (a < 5) {
  console.log(a);
  a++;  //在循环体内间接计算迭代
}

const ajax = (method, url, params) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(req.statusText);
      }
    }

    if (method == 'post' || method == 'POST') {
      req.open(method, url, true);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      req.send(JSON.stringify(params));
    }
    if (method == 'get' || method == 'GET') {
      if (typeof params === 'object') {
        params = Object.keys(params).map(key => key + '=' + params[key]).join('&')
      }
      url = params ? url + '?' + params : url
      req.open(method, url, true);
      req.send()
    }
  })
}

ajax('get', 'test.json').then((res) => {
  console.log(res)
})
 */

/**
 * @description实现一个观察者模式
*/

/* let data = {
  hero: '凤凰',
  count: '1'
};
//用来储存 订阅者 的数组
let subscribers = [];
//订阅 添加订阅者 方法
const addSubscriber = function (fn) {
  subscribers.push(fn)
}
//发布
const deliver = function (name) {
  data.hero = name;
  console.log(666, subscribers)
  //当数据发生改变，调用（通知）所有方法（订阅者）
  for (let i = 0; i < subscribers.length; i++) {
    const fn = subscribers[i]
    fn()
  }
}
//通过 addSubscriber 发起订阅
addSubscriber(() => {
  console.log(data.hero)
})
addSubscriber(() => {
  console.log(++data.count)
})
//改变data，就会自动打印名称
deliver('发条')
deliver('狐狸')
deliver('卡牌')

let total=[1, 2, 3, 4].reduce((total, value) => { return total + value }, 0)
console.log(total,9090)
 */

/* let taskQueue = [
  () => {
    console.log('task1 start')
    console.log('task1 end')
  },
  () => {
    console.log('task2 start')
    console.log('task2 end')
  },
  () => {
    console.log('task3 start')
    console.log('task3 end')
  }
]

const performUnitWork = () => {
  // 取出第一个队列中的第一个任务并执行
  taskQueue.shift()()
}

const workloop = (deadline) => {
  console.log('deadline->',deadline)
  console.log(`此帧的剩余时间为: ${deadline.timeRemaining()}`)
  // 如果此帧剩余时间大于0或者已经到了定义的超时时间（上文定义了timeout时间为1000，到达时间时必须强制执行），且当时存在任务，则直接执行这个任务
  // 如果没有剩余时间，则应该放弃执行任务控制权，把执行权交还给浏览器
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskQueue.length > 0) {
    performUnitWork()
  }

  // 如果还有未完成的任务，继续调用requestIdleCallback申请下一个时间片
  if (taskQueue.length > 0) {
    window.requestIdleCallback(workloop, { timeout: 1000 })
  }
}

requestIdleCallback(workloop, { timeout: 1000 }) 
 */


/* requestIdleCallback = (callback,timeoutObj) => {
  setTimeout(callback({
    timeRemaining() {
      return Infinity
    },
    didTimeout:timeoutObj<100
    
  }),16)
}


 const CB = (deadline)=>{
  console.log('deadline-->',deadline.didTimeout)
  console.log('deadlinetimeRemaining-->',deadline.timeRemaining())
}
requestIdleCallback(CB,{ timeout: 1000 }) */


/**
 * @description 利用requestAnimationFrame 实现宽度增加
*/

/* function run(){
let d1 = document.querySelector('.d1')
console.log(11,d1.offsetWidth)
  d1.style.width = d1.offsetWidth + 10 +'px'
  if(d1.offsetWidth<500){
    window.requestAnimationFrame(run)
  }
}
run() */


