function solution(participant, completion) {
    // 해시맵 대신 빈 딕셔너리 생성
    dict = {};
    
    // 참여자 이름을 키 값으로 하고, value값 1로 초기화, 동명이인 나오면 인원 수 하나 씩 증가
    for(let i of participant){
        if(!(i in dict)) dict[i] = 1;
        else dict[i] += 1;
    }
    
    // 딕셔너리에 완주자 명단이 있으면 완주자에 해당하는 인원 수 하나 빼기 -> 인원 수 0이 되면 완주자임
    for(let i of completion){
        dict[i] -= 1;
    }
    
    // 딕셔너리에 value값이 0이 아닌 1이면 -> 1에 해당하는 키 값(참여자)가 바로 미완주자
    for(let i in dict){
        if(dict[i] == 1) return i;
    }
}
