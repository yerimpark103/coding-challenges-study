function solution(answers) {
    var answer = [];
    
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score = {
        supo1 : 0,
        supo2 : 0,
        supo3 : 0,
    };
    
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === supo1[(i % 5)]){
            score.supo1 ++;
        }
        if (answers[i] === supo2[(i % 8)]){
            score.supo2 ++;
        }
        if (answers[i] === supo3[(i % 10)]){
            score.supo3 ++;
        }
    }
    
    const scoreByPerson = Object.values(score);
    const maxScore = Math.max(...scoreByPerson);
    const formattedPersonBasedOnMaxScore = Object.keys(score).filter(key => score[key] === maxScore).map(a => Number(a.slice(-1)))
    
    answer = formattedPersonBasedOnMaxScore;
    return answer;
}