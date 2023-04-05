def solution(numbers, target):
    answer = 0
    length_numbers = len(numbers)
    def dfs(idx, result):
        if idx == length_numbers:
            if result == target:
                nonlocal answer
                answer += 1
            return
        else:
            dfs(idx+1, result+numbers[idx])
            dfs(idx+1, result-numbers[idx])
    dfs(0,0)
    return answer