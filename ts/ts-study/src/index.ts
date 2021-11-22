/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-22 10:54:56
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-22 23:53:44
 * @LastEditors: Harry
 */

// 手写实现一个数组扁平化问题
// function _flatten(arr: any) {
//   while (arr.some((item: any) => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// console.log(_flatten([2, 2, 1, 321, [1, [2, [32, 213]], [2, 3]]]));

// 使用toString方法
// function _flatten(arr: any) {
//   return arr.toString().split(',').map((x: any) => Number(x))
// }
// 使用 reduce+递归的方法实现
// function _flatten(arr: any) {
//   return arr.reduce((a: any, b: any) => {
//     return a.concat(Array.isArray(b) ? _flatten(b) : b)
//   },[])
// }

// 使用for循环实现数组的扁平化操作
// function _flatten(arr: any): Object {
//   let res: any = []
//   for (let i = 0; i < arr.length; i++) {
//     res = Array.isArray(arr[i]) ? res.concat(_flatten(arr[i])) : res.concat(arr[i])
//   }
//   return res
// }
// console.log(_flatten([2, 2, 1, 321, [1, [2, [32, 213]], [2, 3]]]));

// 手写实现一个倒序
// function _reserve(str: string) {
//   let arr = str.split('')
//   let res = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res.push(arr[i])
//   }
//   return res.join('')
// }
// console.log(_reserve('dawdeqda'));

// 统计数组中出现次数最少的字母
// function countword(str: string) {
//   let map = new Map()
//   let res = {
//     key: '',
//     nums: 1
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (!map.has(str[i])) {
//       map.set(str[i], 1)
//     } else {
//       let nums = map.get(str[i])
//       map.set(str[i], ++nums)
//     }
//     let n_nums = map.get(str[i])
//     if (res.nums >= n_nums) {
//       res = {
//         key: str[i],
//         nums: n_nums
//       }
//     }
//   }
//   return res
// }
// console.log(countword('dawdadsdaw'));

// function _reserve(a: any, m = 4, n = 2) {
//   // 假设m=3 n = 2
//   function _res(A: any, start: number, end: number) {
//     let mid = (start + end) / 2
//     for (let i = 0; i <= mid - start; i++) {
//       [A[start + i], A[end - i]] = [A[end - i], A[start + i]]
//     }
//     return a
//   }
//   // 循环
//   _res(a, 0, m + n - 1)
//   _res(a, 0, n - 1)
//   return _res(a, n, m + n - 1)
// }

function _reserve(a: any, m = 4, n = 2) {
  /*
   s 参数表示开始的索引位置，
   e 表示结束的索引位置
  **/
  function _res(A: any, s: number, e: number) {
    while (e - s >= 0) {
      let t = A[s]
      A[s] = A[e]
      A[e] = t
      s++;
      e--
    }
  }
  // 全逆置 （0,5）
  _res(a, 0, m + n - 1)
  _res(a, 0, n - 1)
  _res(a, n, m + n - 1)
  return a
}
console.log(_reserve([1, 2, 5, 4, 6, 9], 4, 2));  // 返回 [6, 9, 1, 2, 5, 4]
// function _reserve(arr: any, m: number, n: number) {
//   return arr.slice(m).concat(arr.slice(0, m))
// }

// console.log(_reserve([1, 2, 5, 4, 6, 9], 4, 2));
