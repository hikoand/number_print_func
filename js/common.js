//변수선언
let num = "";
let count = 0;

//함수생성
// function repeat(i, j) {
//   //1. 첫 실행
//   if (count == 0) {
//     num += i; //문자열 반환
//     //2. i가 j보다 큰 경우에 false 값 반환
//   } else if (i > j) {
//     return 0;
//     //3.초기값이 아니면 i 앞에 ,를 추가
//   } else {
//     num += "." + i;
//     //4.i값이 j값과 같으면 콘솔창에 숫자 출력
//     if (i === j) {
//       console.log(num);
//       console.log("count: " + count);
//     }
//   }
//   i++;
//   count++;
//   repeat(i, j);
// }

// //함수호출
// repeat(10, 20);

function repeat(i, j) {
  if (count == 0) {
    if (i % 2 === 0) {
      num += i;
      count++;
    }
  } else if (i > j) {
    return 0;
  } else {
    if (i % 2 === 0) {
      num += "," + i;
      count++;
    }
    if (i === j) {
      console.log(num);
      console.log("count: " + count);
    }
  }
  i++;
  repeat(i, j);
}

repeat(10, 20);
