function sequence(start, end, steps) {
  var arr = [];
  this.start = start;
  this.end = end;
  this.steps = steps;
  for (var i = start; i <= end; i += steps) {
    arr.push(i);
  }

  this.getArr = function () {
    return arr;
  };

  this.setArr = function (list) {
    arr = list;
  };

}

sequence.prototype.append = function (val) {
  var list = this.getArr();
  if (val == list[list.length - 1] + this.steps) {
    list.push(val);
    this.setArr(list);
  } else {
    throw console.log(" wrong value ");
  }
};

sequence.prototype.prepend = function (val) {
  var list = this.getArr();
  if (val == this.start - this.steps) {
    list.unshift(val);
    this.setArr(list);
  } else {
    throw console.log(" wrong value ");
  }
};

// sequence.prototype.pop = function (){
//     arr=this.getArr()
//     poppedArr=arr.pop()
//     console.log(poppedArr);
//     console.log(arr); 
// }

sequence.prototype.shiftArr = function () {
  arr = this.getArr();
  unshiftArrele = arr.shift();
  console.log(unshiftArrele);
  console.log(arr);
};

var list1 = new sequence(1, 10, 1);
console.log(list1.getArr());

// list1.append(11);
// console.log(list1.getArr());

list1.prepend(-1);
console.log(list1.getArr());

// list1.pop()

// list1.shiftArr();