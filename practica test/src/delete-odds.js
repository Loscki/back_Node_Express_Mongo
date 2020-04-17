export function deletOdds(){
    const caseArray = [1,2,3,4,5,6,7,8,9]
    const case1 = [];

    
       for (let element of caseArray){
        if (element % 2 === 0)
          case1= caseArray.push(element)
       }

    return case1;
}

