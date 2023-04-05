# from collections import Counter

def solution(nums):
    # print(dict(Counter(nums)))
    pickable_num = len(nums) / 2
    formatted_nums = {}
    for i in nums:
        if i in formatted_nums:
            formatted_nums[i] += 1
        else:
            formatted_nums[i] = 1
    if pickable_num < len(formatted_nums.keys()):
        return pickable_num
    else:
        return len(formatted_nums.keys())