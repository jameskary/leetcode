
var twoSum = function (nums, target) {
    var a = [0, 0];
    for (var i = 0, len = nums.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                a[0] = i;
                a[1] = j;
                return a;
            }
        }
    }
};
