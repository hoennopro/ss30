function isSymmetricArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function generateRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.random());
  }
  return randomArray;
}

const myArray = generateRandomArray(5);

console.log("Mảng đã khai báo:", myArray);

if (isSymmetricArray(myArray)) {
  console.log("Mảng là đối xứng.");
} else {
  console.log("Mảng không đối xứng.");
}
