var reverse = function(x) {
    var y=0;
    var min = -Math.pow(2,31);
    var max = Math.pow(2,31)-1;
    for (y = 0; x != 0; x = x / 10 >> 0) {
        y = y * 10 + x % 10;            
    }
    if (y > max || y < min) {
        return 0;
    }else{
        return y;
    }
};
