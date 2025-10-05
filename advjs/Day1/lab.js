var lnkdListObj = {
  data: [{ value: 1 }, { value: 2 }, { value: 4 }, { value: 6 }],
};

// push *********

function pushToLinkedList(value) {
  var last = lnkdListObj.data[lnkdListObj.data.length - 1].value;
  if (value > last) {
    lnkdListObj.data.push({ value: value });
  } else {
    throw "push an item at the end of the list with the";
  }
  return lnkdListObj.data;
}

// pushToLinkedList(9);
// console.log(pushToLinkedList(7));

// pop  ****************

function popFromLinkedList() {
  var popEle = lnkdListObj.data.pop();
  return popEle;
  //  lnkdListObj.data
}
// popFromLinkedList()
// console.log(popFromLinkedList());
// console.log(lnkdListObj.data);



// Enqueue  *****************

function enqueLnk(value) {
  if (value < lnkdListObj.data[0].value) {
    lnkdListObj.data.unshift({ value: value });
  }
  return lnkdListObj.data;
}
// enqueLnk(0);
// console.log(enqueLnk(0));
// console.log(lnkdListObj.data);

// Dequeue  ***********************

function dequeLnk() {
  lnkdListObj.data.shift();
  return lnkdListObj.data;
}
// dequeLnk();

// console.log(dequeLnk());
// console.log(lnkdListObj.data);

// insert  **********************

function insertLnk(value) {
  if (value < lnkdListObj.data[0].value) {
    lnkdListObj.data.splice(0, 0, { value: value });
  } else if (value > lnkdListObj.data[lnkdListObj.data.length - 1].value) {
    lnkdListObj.data.push({ value: value });
  } else {
    for (var i = 0; i < lnkdListObj.data.length; i++) {
      if (
        value > lnkdListObj.data[i].value &&
        value < lnkdListObj.data[i + 1].value
      ) {
        lnkdListObj.data.splice(i + 1, 0, { value: value });

        return lnkdListObj.data;
      }
    }
    console.log("value is't between two values");
  }
}

// insertLnk(3);
// insertLnk(4);
// insertLnk(5);
// insertLnk(3);
// insertLnk(7);
// insertLnk(0)

// remove   **************************************

function removeLnk(value) {
  for (i = 0; i < lnkdListObj.data.length; i++) {
    if (value == lnkdListObj.data[i].value) {
      lnkdListObj.data.splice(i, 1);
      return lnkdListObj.data;
    }
  }
}
// removeLnk(4);

// display ******************

function displayLnk() {
  console.log(lnkdListObj.data);
}

displayLnk();
