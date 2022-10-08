const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
    // Write your code here
    let soma1 = arr[1] + arr[2] + arr[3] + arr[4];
    let soma2 = arr[0] + arr[2] + arr[3] + arr[4];
    let soma3 = arr[0] + arr[1] + arr[3] + arr[4];
    let soma4 = arr[0] + arr[1] + arr[2] + arr[4];
    let soma5 = arr[0] + arr[1] + arr[2] + arr[3];

    let max = Math.max(soma1, soma2, soma3, soma4, soma5);
    let min = Math.min(soma1, soma2, soma3, soma4, soma5);
    console.log(min, max);
}

miniMaxSum(arr);