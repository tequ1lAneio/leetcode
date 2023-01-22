/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */

let logs, k;
logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5;
logs = [[1,1],[2,2],[2,3]], k = 4;

const findingUsersActiveMinutes = (logs, k) => {
  const activeMin = new Map();

  for (const [id, time] of logs) {
    if (!activeMin.has(id)) {
      activeMin.set(id, new Set());
    }

    activeMin.get(id).add(time);
  }

  const ans = new Array(k).fill(0);

  for (const minutes of activeMin.values()) {
    const activeCount = minutes.size;
    ans[activeCount - 1]++;
  }

  return ans;
};

console.log(findingUsersActiveMinutes(logs, k))
