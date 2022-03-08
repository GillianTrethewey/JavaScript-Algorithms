/*
nums1 = [2, 4, 4, 2]
nums2 = [2, 4]
return [2, 4]

nums1 = [1, 2, 3, 3]
nums2 = [3, 3]
return [3]

nums1 = [2, 4, 6, 8]
nums2 = [1, 3, 5, 7]
return []
*/
nums1 = [1, 2, 3, 3]
nums2 = [3, 3]
uniqueNums = [];
arr1 = nums1;
arr2 = nums2;
longer = arr1.length;
shorter = arr2.length;
if (longer < shorter) {
    longer = arr2.length;
    shorter = arr1.length;
}
console.log(longer,shorter);
function unique(arr1, arr2) {
    for (let i in arr1) {
        if (arr2.includes(arr1[i])) {
             if (!uniqueNums.includes(arr1[i])) {
                 uniqueNums.push(arr1[i]);
             }
        }
    }

    console.log(uniqueNums);
}

unique(arr1,arr2);