function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    console.log(i);
    if (i === 1) {
      array.push("I am 1 strange loop.");
      console.log(array[i]);
    }
    else {
      array.push("I am " + i + " strange loops.");
      console.log(array[i]);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done"
}

function doWhileLoop(array) {

  do {
    array.shift();
    console.log(array);
  } while(array.length > 0);
}
