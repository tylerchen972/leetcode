var containsDuplicate = function(nums) {
    var list = []
    for (i=0; i<nums.length; i++) {
        for (j=0; j<list.length; j++) {
            if (nums[i] == list[j]) {
                return true
            }
        }
        list.push(nums[i])
    }
    return false;
};