def solution(participant, completion):
    hashed_participants = {}
    sum_hash = 0
    
    for i in participant:
        hashed_participants[hash(i)] = i
        sum_hash += hash(i)
        
    for j in completion:
        sum_hash -= hash(j)
        
    return hashed_participants[sum_hash]