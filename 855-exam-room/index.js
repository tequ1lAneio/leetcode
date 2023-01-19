/**
 * @param {number} n
 */
var ExamRoom = function (n) {
  this.students = [];
  this.endPos = n - 1;
};

ExamRoom.prototype.seat = function () {
  if (!this.students.length) {
    this.students.push(0);
    return 0;
  }
  let maxDis = 0;
  let addIndex = 0;
  for (let i = this.students.length - 1; i > 0; i--) {
    let dis = Math.floor((this.students[i] - this.students[i - 1]) / 2);
    if (dis >= maxDis) {
      addIndex = i - 1;
      maxDis = dis;
    }
  }
  let startDis = this.students[0];
  let endDis = this.endPos - this.students[this.students.length - 1];
  let lastDis = Math.max(startDis, maxDis, endDis)
  let newPos;
  if (lastDis === startDis) {
    newPos = 0
    addIndex = 0;
  } else if (lastDis === maxDis) {
    newPos = this.students[addIndex] + maxDis;
  } else {
    newPos = this.endPos
    addIndex = this.students.length;
  }
  if (newPos > this.students[addIndex]) {
    this.students.splice(addIndex + 1, 0, newPos)
  } else {
    this.students.splice(addIndex, 0, newPos)
  }
  return newPos;
};

/**
 * @param {number}
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  let index = this.students.indexOf(p);
  if (index > -1) {
    this.students.splice(index, 1)
  }
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
