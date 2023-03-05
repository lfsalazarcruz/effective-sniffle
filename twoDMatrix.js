/**
 * Search a 2D Matrix
 * You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * 
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * 
 * Examples:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
   Output: true

   Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
   Output: false
 */

var searchMatrix = function(matrix, target) {
  let left = 0
  let right = matrix.length - 1

  while (left <= right) {
      const middle = Math.floor((left + right) / 2)

      if (target > matrix[middle][matrix[middle].length - 1]) {
          left = middle + 1
      } else if (target < matrix[middle][0]) {
          right = middle - 1
      } else {
          break
      }
  }

  if (!(left <= right)) return false

  let x = 0
  let y = matrix[left].length - 1
  let row = Math.floor((left + right) / 2)

  while (x <= y) {
      const mid = Math.floor((x + y) / 2)
      const num = matrix[row][mid]

      if (num === target) {
          return true
      } else if (num > target) {
          y = mid - 1
      } else {
          x = mid + 1
      }
  }

  return false
};