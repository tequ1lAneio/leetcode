/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

let n, dislikes
n = 4, dislikes = [[1,2],[1,3],[2,4]]
// n = 3, dislikes = [[1,2],[1,3],[2,3]]
// n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]

// dfs
// const possibleBipartition = (n, dislikes) => {
//   const color = new Array(n + 1).fill(0)
//   const groups = new Array(n + 1).fill(0).map(g => [])
//
//   for (const p of dislikes) {
//     groups[p[0]].push(p[1])
//     groups[p[1]].push(p[0])
//   }
//
//   let dfs = (currentNode, currentColor) => {
//     color[currentNode] = currentColor
//
//     for (const nextNode of groups[currentNode]) {
//       if (color[nextNode] !== 0 && color[nextNode] === currentColor) {
//         return false
//       }
//
//       if (color[nextNode] === 0 && !dfs(nextNode, 3 ^ currentColor)) {
//         return false
//       }
//     }
//
//     return true
//   }
//
//   for (let i = 1; i <= n; i++) {
//     if (color[i] === 0 && !dfs(i, 1)) {
//       return false
//     }
//   }
//
//   return true
// }

// bfs
// const possibleBipartition = (n, dislikes) => {
//   const color = new Array(n + 1).fill(0)
//   const groups = new Array(n + 1).fill(0).map(g => [])
//   for (const p of dislikes) {
//     groups[p[0]].push(p[1])
//     groups[p[1]].push(p[0])
//   }
//
//   for (let i = 1; i <= n; i++) {
//     if (color[i] === 0) {
//       const queue = []
//       queue.push(i)
//       color[i] = 1
//
//       while (queue.length) {
//         const cur = queue.shift()
//
//         for (const next of groups[cur]) {
//           if (color[next] !== 0 && color[next] === color[cur]) {
//             return false
//           }
//
//           if (color[next] === 0) {
//             color[next] = 3 ^ color[cur]
//             queue.push(next)
//           }
//         }
//       }
//     }
//   }
//
//   return true
// }

var possibleBipartition = function(n, dislikes) {
  const fa = new Array(n + 1).fill(-1);
  const g = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; ++i) {
    g[i] = [];
  }
  for (const p of dislikes) {
    g[p[0]].push(p[1]);
    g[p[1]].push(p[0]);
  }
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < g[i].length; ++j) {
      console.log(g)
      unit(g[i][0], g[i][j], fa);
      if (isconnect(i, g[i][j], fa)) {
        return false;
      }
    }
  }
  return true;
}

const unit = (x, y, fa) => {
  x = findFa(x, fa);
  y = findFa(y, fa);
  if (x === y) {
    return
  }
  if (fa[x] < fa[y]) {
    const temp = x;
    x = y;
    y = temp;
  }
  fa[x] += fa[y];
  fa[y] = x;
}

const isconnect = (x, y, fa) => {
  x = findFa(x, fa);
  y = findFa(y, fa);
  return x === y;
}

const findFa = (x, fa) => {
  return fa[x] < 0 ? x : (fa[x] = findFa(fa[x], fa));
}


console.log(possibleBipartition(n, dislikes))
