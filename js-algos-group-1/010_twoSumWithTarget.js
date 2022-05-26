function twosum(nums, target) {
    let i = 0;
    while (i < nums.length) {
    	let j = 0;
    	while (j < nums.length) {
    		if (i !== j && nums[i] + nums[j] === target) {
    			console.log('nums[' , i , '] + nums[' , j , '] = ', target);
    		}
    		j++;
    	}
    	i++;
    }
return (nums,target);

}

nums = [3,5,2,-4,8,11]
target = 7

twosum(nums, target);