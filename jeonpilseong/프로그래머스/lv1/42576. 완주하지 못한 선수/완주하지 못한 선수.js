function solution(participant, completion) {
    dict = {};
    for(let i of participant){
        if(!(i in dict)) dict[i] = 1;
        else dict[i] += 1;
    }
    
    for(let i of completion){
        dict[i] -= 1;
    }
    
    for(let i in dict){
        if(dict[i] == 1) return i;
    }
}
