from collections import deque

def solution(n, computers):
    def bfs(i):
        queue = deque()
        queue.append(i)
        while queue:
            i = queue.popleft()
            visited_node_list[i] = 1
            for j in range(n):
                if computers[i][j] and not visited_node_list[j]:
                    queue.append(j)
                    
    answer = 0
    visited_node_list = [0 for i in range(len(computers))]
    for i in range(n):
        if not visited_node_list[i]:
            bfs(i)
            answer += 1
            
    return answer