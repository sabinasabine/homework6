function getSevenCol(arr) {
    let arr2=[];
    let count=0;

    for (let i=0; i<arr.length; i++){
        arr2= arr[i].toString(10).split("").map(function (t){
           return parseInt(t)
       }
       );
        for (let j=0; j<arr2.length; j++){
            if(arr2[j]==7){
                count++;
            }
        }
    }
 return count;
}
const an=[1,7,4,77,73];
console.log(getSevenCol(an));




function arrToStr(arr) {
    let strArray=[];
    let left=0;
    let right=arr.length-1;
    while(left<right){
        strArray.push(arr[left++]);
        strArray.push(arr[right--]);
    }
    return strArray.join('');
}
const arrayOfStrings =["a","b","c","d","e","f"];
console.log(arrToStr(arrayOfStrings));
