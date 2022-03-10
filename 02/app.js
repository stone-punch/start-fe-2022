//이름 찍기
var name = 'aj';

//name = 111;

console.log(name);

// 불린형
var isman = 'true';
var isman1 = true;
console.log(isman);
console.log(isman1);

//함수
function log(str) {
    console.log(str);
  }

  log('hello');

//객체
var image = {}; 

image.width = 100;
image.height = 200;
console.log(image);

//연산자
console.log(1+1);
console.log(name + 'hello');

//객체
var me = {
    age : 25,
    name: 'aj',
    isman : true,
    sayhello: function(){
        console.log('hello');
    },
};

var arr = [1,2,3,4,5];
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }


