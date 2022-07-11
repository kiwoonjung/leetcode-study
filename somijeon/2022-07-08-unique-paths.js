// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n));

  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (row === m - 1 || col === n - 1) dp[row][col] = 1;
      else dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }
  return dp[0][0];
};
