let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const calc = "";

// 중첩 if문 제거방법
// 1. if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다
// 2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다
// 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단
// 4. else를 제거한다

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }

  if (!numTwo) {
    $result.value = "";
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      default:
        break;
    }
    numOne = $result.value;
    operator = "";
    numTwo = "";
  }
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력해주세요!");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      default:
        break;
    }
    numOne = $result.value;
    $operator.value = "";
    operator = "";
    numTwo = "";
  } else {
    alert("숫자를 먼저 입력해주세요!");
  }
});
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
