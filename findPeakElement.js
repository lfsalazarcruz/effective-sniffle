/**
 * 
 * A peak element is an element that is strictly greater than its neighbors.
 * 
 * Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 * 
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * 
 * You must write an algorithm that runs in O(log n) time.} nums
 */

var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1

  while (left <= right) {
      let mid = Math.floor((left + right)/2)
      let midVal = nums[mid]
      let leftVal = mid > 0 ? nums[mid - 1] : -Infinity
      let rightVal = mid < nums.length - 1 ? nums[mid + 1] : -Infinity

      if (leftVal < midVal && midVal > rightVal) {
          return mid
      } else if (leftVal < midVal && midVal < rightVal) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
};
