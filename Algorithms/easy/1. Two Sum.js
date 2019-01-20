// Date   :2019-01-20
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
Approach 1: Brute Force
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
Approach 2: Undefined
var twoSum = function (nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i];
        if (a[tmp] !== undefined) return [a[tmp], i];
        a[nums[i]] = i;
    }
};
