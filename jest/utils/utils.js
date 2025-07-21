function sum(num1, num2) {
  return num1 + num2;
}

function checkTypeSum(num1, num2) {
  if (typeof num1 !== "number") {
    throw new Error("invalid num1");
  }

  if (typeof num2 !== "number") {
    throw new Error("invalid num2");
  }
}

function fetchData() {
  return {
    name:'abc'
  }
}

export { sum,checkTypeSum,fetchData };
