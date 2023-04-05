from collections import deque

def solution(maps):
    answer = 0
    def bfs(x, y):
        queue = deque()
        queue.append((x,y))
        
        while queue:
            x, y = queue.popleft()
            
            # 상하좌우 한칸씩 움직임
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                
                # out of bounds인 경우 지나침
                if nx < 0 or nx >= len(maps) or ny < 0 or ny >= len(maps[0]):
                    continue
                # 벽인 경우 지나침
                if maps[nx][ny] == 0:
                    continue
                # 한번도 다다른 적 없는 노드인 경우 거리를 +1 하고 enque
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    queue.append((nx, ny))
        return maps[len(maps)-1][len(maps[0])-1]
    
    # 움직일 수 있는 좌표인 delta 정의
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    # 도달할 수 없는 경우(bfs returns 1) -1 리턴
    answer = bfs(0,0)
    return -1 if answer == 1 else answer