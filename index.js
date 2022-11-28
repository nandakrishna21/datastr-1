console.log(
    "Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?"
  );
  
  function pair(arr, sum) {
    for (i = 0; i < arr.length; i++) {
      var first = arr[i];
      for (var j = i + 1; j < arr.length; j++) {
        var second = arr[j];
        if (first + second == sum) {
          console.log(first + " + " + second + " = " + sum);
        }
      }
    }
  }
  
  var arrduo = [5, 4, 8, 2, 1, 4, 3, 7];
  pair(arrduo, 8);
  
  console.log(
    "Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array."
  );
  
  
  var arr_num = [8, 3, 6, 9, 4, 1, 5];
  console.log(arr_num);
  
  function rev() {
    var initialindex = 0;
    var finalindex = arr_num.length - 1;
    var rev;
    while (initialindex < finalindex) {
      rev = arr_num[initialindex];
      arr_num[initialindex] = arr_num[finalindex];
      arr_num[finalindex] = rev;
  
      initialindex += 1;
      finalindex -= 1;
    }
    console.log(arr_num);
  }
  
  rev();
  
  
  console.log(
    "Q3. Write a program to check if two strings are a rotation of each other?"
  );
  
  var str1 = "nanda";
  var str2 = "ndana";
  var str3 = str1 + str1;
  console.log(str2);
  console.log(str3);
  if (str1.length != str2.length) {
    console.log("Two strings length should be of same length");
     
  
    if (str3.indexOf(str2) != -1) {
      console.log("Rotation done");
    } else {
      console.log("Rotation failed");
    }
  }
  
  console.log(
    "Q4. Write a program to print the first non-repeated character from a string?"
  );
  
  var str = "nandakrishna";
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
      console.log(
        "repeating char is " +
          str.charAt(i) +
          "" +
          ", at  " +
          str.indexOf(str.charAt(i))
      );
      break;
    }
  }
  
  console.log(
    "Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it."
  );
  
  function towerOfHanoi(n, pole1, pole3, pole2) {
    if (n === 1) {
      console.log(`Move the disk 1 from ${pole1} to ${pole3}`);
      return;
    }
    towerOfHanoi(n - 1, pole1, pole2, pole3);
    console.log(`Move disk ${n} from ${pole1} to ${pole3}`);
    towerOfHanoi(n - 1, pole2, pole3, pole1);
  }
  
  towerOfHanoi(3, "N", "K", "T");
  
  console.log(
    "Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression."
  );
  
  function char(ch) {
    return (ch >= "a" && char <= "z") || (ch >= "A" && ch <= "Z") || ch >= 0;
  }
  
  function postToPre(post) {
    var stk = [];
    for (var i = 0; i < post.length; i++) {
      if (char(post[i])) {
        stk.push(post[i]);
      } else {
        var op1 = stk[stk.length - 1];
        stk.pop();
  
        var op2 = stk[stk.length - 1];
        stk.pop();
  
        stk.push(post[i] + op2 + op1);
      }
    }
    return stk[stk.length - 1];
  }
  
  console.log(postToPre("NK+TN-*"));
  
  console.log(
    "Q7. Write a program to convert prefix expression to infix expression."
  );
  
  function char(ch) {
    return (ch >= "a" && char <= "z") || (ch >= "A" && ch <= "Z") || ch >= 0;
  }
  
  function preToInf(inf) {
    var stc = [];
    for (var i = inf.length - 1; i >= 0; i--) {
      if (char(inf[i])) {
        stc.push(inf[i]);
      } else {
        var opr1 = stc[stc.length - 1];
        stc.pop();
  
        var opr2 = stc[stc.length - 1];
        stc.pop();
  
        stc.push(opr1 + inf[i] + opr2);
      }
    }
    return stc[stc.length - 1];
  }
  
  console.log(preToInf("NK+TN-*"));
  
  console.log(
    "Q8. Write a program to check if all the brackets are closed in a given code snippet."
  );
  
  function brct(n) {
    var stc = [];
    for (var i = 0; i < n.length; i++) {
      var k = stc[stc.length - 1];
  
      if (n[i] == "(" || n[i] == "{" || n[i] == "[") {
        stc.push(n[i]);
      } else if (
        (n[i] === "(" && k === ")") ||
        (n[i] === "{" && k === "}") ||
        (n[i] === "[" && k === "]")
      ) {
        stc.pop();
      } else if (
        (n[i] !== "(" && k !== ")") ||
        (n[i] !== "{" && k !== "}") ||
        (n[i] !== "[" && k !== "]")
      ) {
        stc.pop();
      }
      if (stc.length === 0) {
        return "All brackets are verified";
      }
    }
    console.log(stc);
    return false;
  }
  
  console.log(brct("[{{}][]}"));
  
  console.log("Q9. Write a program to reverse a stack.");
  
  class Stkrev {
    constructor() {
      this.stk = [];
      this.rev = [];
    }
    add(value) {
      this.stk.push(value);
    }
    revStack() {
      if (this.stk.length == 0) {
        return "Stack is empty";
      } else {
        return this.rev.push(this.stk.pop());
      }
    }
    print() {
      return this.stk.push();
    }
  }
  
  var stclst = new Stkrev();
  
  stclst.add(5);
  stclst.add(4);
  stclst.add(2);
  stclst.add(7);
  
  console.log("Original Stack");
  console.log(stclst.stk);
  stclst.revStack();
  stclst.revStack();
  stclst.revStack();
  stclst.revStack();
  
  console.log("Reversed Stack");
  console.log(stclst.rev);
  
  console.log("Q10. Write a program to find the smallest number using a stack.");
  
  class Smallvalue {
    constructor() {
      this.stk = [];
      this.minval = [];
    }
    add(val) {
      if (this.stk.length == 0) {
        this.stk.push(val);
        this.minval.push(val);
      } else {
        this.stk.push(val);
        this.minval.push(
          Math.min(this.minval[this.minval.length - 1], val)
        );
      }
    }
    remove() {
      if (this.stk.length == 0) {
        this.minval.pop();
        return this.minval.pop();
      }
    }
    top() {
      return this.stk[this.stk.length - 1];
    }
    getVal() {
      return this.minval[this.minval.length - 1];
    }
  }
  
  var stclst = new Smallvalue();
  
  stclst.add(29);
  stclst.add(9);
  stclst.add(1);
  stclst.add(-20);
  stclst.add(14);
  stclst.add(-30);
  
  console.log(stclst.getVal());