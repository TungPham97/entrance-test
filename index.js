// Bai 1
function findOppositeNumber(n, firstNum) {
  if (firstNum >= 5) {
    return firstNum - n / 2;
  } else {
    return n / 2 + firstNum;
  }
}

console.log(findOppositeNumber(10, 2));

// Bai 2
function merge2String(s1, s2) {
  let merge2S = '';
  // Solution 1
  if (s1.length >= s2.length) {
    for (let i = 0; i < s1.length; i++) {
      merge2S += s1.charAt(i) + s2.charAt(i);
      // console.log(s1.charAt(i));
    }
  }
  else {
    for (let i = 0; i < s2.length; i++) {
      merge2S += s1.charAt(i) + s2.charAt(i);
    }
  }

  // Solution 2
  let max = Math.max(s1.length, s2.length);
  for (let i = 0; i < max; i++) {
    merge2S += s1.charAt(i) + s2.charAt(i);
  }

  return merge2S;
}

console.log(merge2String('abc', 'xyz'));
