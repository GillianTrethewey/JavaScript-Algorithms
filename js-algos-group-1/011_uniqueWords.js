/*sentence1 = "the quick"
sentence2 = "brown fox"
return ["the", "quick", "brown", "fox"]

sentence1 = "the tortoise beat the hare"
sentence2 = "the tortoise lost to the hare"
return ["beat", "to", "lost"]

sentence1 = "copper coffee pot"
sentence2 = "hot coffee pot"
return ["copper", "hot"]

 */
//sentence1 = "the tortoise beat the hare";
//sentence2 = "the tortoise lost to the hare" ;
sentence1 = "copper coffee pot"
sentence2 = "hot coffee pot"
uniqueWords = [];
arr1 = sentence1.split(' ');
arr2 = sentence2.split(' ');
longer = arr1.length;
shorter = arr2.length;
if (longer < shorter) {
    longer = arr2.length;
    shorter = arr1.length;
}

function unique(arr1, arr2) {
    for (let i in arr1) {
        if (!arr2.includes(arr1[i])) {
            uniqueWords.push(arr1[i]);
        }
    }
    for (let j in arr2) {
        if (!arr1.includes(arr2[j])) {
            uniqueWords.push(arr2[j]);
        }
    }
    console.log(uniqueWords);
}

unique(arr1,arr2);