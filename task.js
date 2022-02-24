//  checking palindrome and white space
function check(item) {
  console.log("given string is " + item);
  let result4 = item.split(" ").join("");

  let result = result4.split("").reverse().join("");

  if (result === result4) {
    console.log("sting is palindrome  " + result);
  } else {
    console.log("string is not palindrome " + result);
  }
  let result2 = item.indexOf(" ");
  if (result2 === -1) {
    console.log("string has no space " + item);
  } else {
    console.log(
      "string has space at " + result2 + "  answer with out space " + result4
    );
  }
}
check("mad am");
// reverse number
function myfunc(value) {
  let result = value.toString().split("").reverse().join("");
  console.log(result);
}
myfunc(15);
// answer [3,4,5,'hello']
let array = [2, 3, 4, 5, 6, 6, "hello"];
function myfunction(...item) {
  console.log(...item);
  let result = item.splice(1, 3);
  let result2 = item.pop();
  let result1 = [...result, result2];
  console.log(result1);
}
myfunction(...array);
// sort by answer  = [-1,150,160,-1,-1,180,190]
let arr = [-1, 150, 190, -1, -1, 160, 180];
function myfuncAttemp(...n) {
  let array = [...n];
  let first = n.splice(0, 1);
  let second = n.splice(2, 2);
  let item1 = array.splice(1, 2);
  let item2 = array.splice(3, 2);

  let resultItem = [...item1, ...item2];
  let resultItem2 = resultItem.sort();
  let resultItem3 = resultItem2.splice(0, 2);
  let resultItem4 = resultItem2.splice(0, 2);
  let answer = [...first, ...resultItem3, ...second, ...resultItem4];

  console.log(answer);
}
myfuncAttemp(...arr);

// duplicate in array
let arr1 = [1, 2, 4, 1, 3, 1, 2, 6];
function myfunc1(...n) {
  let counts = {};
  for (let i = 0; i < n.length; i++) {
    if (counts[n[i]]) {
      counts[n[i]] += 1;
    } else {
      counts[n[i]] = 1;
    }
  }
  console.log(counts);
}
myfunc1(...arr1);

const obj = [
  {
    id: 1,
    name: "naebel",
  },
];
const obj1 = [
  {
    id: 1,
    post: "related",
  },
];
let result12 = obj.concat(obj1);
console.log(result12);

let myPromise = new Promise((res, rej) => {
  res(arr1[2]);
}).then((val, err) => {
  console.log(val);
});
console.log(arr1[3]);

var inputstr = prompt("neter");

function hi(value) {
  let counts = {};
  for (let i = 0; i < value.length; i++) {
    if (counts[value[i]]) {
      counts[value[i]] += 1;
    } else {
      counts[value[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] > 1) {
      console.log(prop);
    }
    if (counts[prop] === 1) {
      console.log("null");
    }
  }
  console.log(counts);
}
hi(inputstr);
