def solution(clothes):
    # format clothes into wardrobe : key is 2nd string(type)
    hash_map = {}
    for name, type in clothes:
        # initialize hashmap with 1 for case where spy chooses only one item
        hash_map[type] = hash_map.get(type, 1) + 1
    # multiply each occurences of types to get all combinations
    answer = 1
    for type in hash_map:
        answer *= hash_map[type]
    # return case where spy isn't wearing anything
    return answer - 1