function solution(clothes) {
    let dict = {};
    for(let i of clothes){
        !(i[1] in dict) ? dict[i[1]] = 2 : dict[i[1]] += 1
    }
    
    let cnt = 1;
    for(let i in dict){
        cnt *= dict[i];
    }
    
    return cnt - 1;
}
