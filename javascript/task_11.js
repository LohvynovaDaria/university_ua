function count (num1, num2, mark) {
    switch(mark) {
    case "+":
        return num1 + num2;
        break;
    case "-":
        return num1 - num2;
        break;
    case "*":
        return num1 * num2;
        break;
    case "/":
        return num1 / num2;
        break;
    default:
        console.log("This operation is not possible");
    }
}
