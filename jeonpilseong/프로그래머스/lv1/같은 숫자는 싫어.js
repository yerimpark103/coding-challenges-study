function solution(arr)
{   
    let stack = [];
    
    // 스택이 비었으면 push
    // 또는 스택 마지막 요소가 배열 요소랑 다르면 push
    arr.forEach(i => {
        if(stack.length === 0 || stack[stack.length -1] != i){
            stack.push(i);
        }
    })
    
    return stack;
}
