/*
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 
t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10
1 ≤ t ≤ 15
*/

// 내가 작성한 코드
function solution(n, t) {
    for(let i = 1; i <= t; i++){
        n *= 2 
    } return n;
}

// 반복문을 사용하지 않는다면
function solution(n, t) {
    return n*(2**t);    // 소괄호 생략
}

// Math 함수 사용
function solution(n, t) {
    return n*(Math.pow(2,t));   // 소괄호 생략
}
