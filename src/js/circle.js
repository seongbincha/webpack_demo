//es6 export 하는 방법
// named exports : 여러개 사용 가능
export var area = function(r) {
    return Math.PI * r * r;
};

export var circumference = function (r) {
    return 2 * Math.PI * r;
};