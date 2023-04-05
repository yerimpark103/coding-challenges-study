const numbersAsCoords = {
    '*': {x : 0, y : 0},
    0 : {x : 1, y : 0},
    '#': {x : 2, y : 0},
    7 : {x : 0, y : 1},
    8 : {x : 1, y : 1},
    9 : {x : 2, y : 1},
    4 : {x : 0, y : 2},
    5 : {x : 1, y : 2},
    6 : {x : 2, y : 2},
    1 : {x : 0, y : 3},
    2 : {x : 1, y : 3},
    3 : {x : 2, y : 3},
}

function getDistance(point1, point2){
        return Math.abs(numbersAsCoords[point1].x - numbersAsCoords[point2].x) + Math.abs(numbersAsCoords[point1].y - numbersAsCoords[point2].y)
}

function solution(numbers, hand) {
    var answer = '';
    
    // Define left-only, right-only numbers
    const leftOnlyNums = [1, 4, 7];
    const rightOnlyNums = [3, 6, 9];
    
    // get which number each hand is on
    let leftNum = '*';
    let rightNum = '#';
    
    // iterate through numbers, move left/rightNum based on cases 
    numbers.forEach(num => {
        // if num is left/right only, push 'L/R'
        if (leftOnlyNums.includes(num)) {
            leftNum = num;
            answer += 'L';
        }
        else if (rightOnlyNums.includes(num)) {
            rightNum = num;
            answer += 'R';
        } 
        // if not, get distance from left hand, and right hand
        else {
            const distanceFromLeft = getDistance(leftNum, num);
            const distanceFromRight = getDistance(rightNum, num);
             // if two distances are the same, go with dominant hand
            if (distanceFromLeft === distanceFromRight){
                answer += hand[0].toUpperCase(); 
                hand === 'left' ? leftNum = num : rightNum = num;
            }
            // if distances are different, go with the smaller one
            else {
                if (distanceFromLeft < distanceFromRight){
                    answer += 'L';
                    leftNum = num;
                }
                else {
                    answer += 'R';
                    rightNum = num;
                }
            }
        }
    });
    return answer;
}