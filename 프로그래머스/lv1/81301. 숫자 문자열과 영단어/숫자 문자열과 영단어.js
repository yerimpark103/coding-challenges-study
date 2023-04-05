function solution(s) {
    let sToArray = Array.from(s);
    const wordToNum = {
       'zero' : 0,
       'one' : 1,
       'two' : 2,
       'three' : 3,
       'four' : 4,
       'five' : 5,
       'six' : 6,
       'seven' : 7,
       'eight' : 8,
       'nine' : 9,
    }
    let answer = '';
    let counter = 0;
    let letterPool = '';
    sToArray.forEach(input => {
        if (!isNaN(input)) {
            answer += input;
        }
        else {
            letterPool += input;
             if (Object.keys(wordToNum).includes(letterPool)){
                answer += wordToNum[letterPool];
                 letterPool = '';
            }
        }
    });
    
    return Number(answer);
}