/*
var foo = 42;
var foo = "bar"
//var foo = true;

console.log(foo);

var isMan = true
if("test"){
    console.log("true");
}

console.log('2' + 2);
console.log(5 + '2' + 1 + 3);
*/

/*
var a = 1;
var b = a;
b = 2;
console.log(a, b);
*/

/*
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);
*/

/*
var a = {x: 1};
var b = a;
b.x = 2;
console.log(a, b);
*/

/*
function byValue(count){
    count = count + 2;
}
var count = 3;
byValue(count);
console.log(count);
*/

/*
function byReference(count) {
    count.push('2');
  }
  var count = ['1'];
  byReference(count);
  console.log(count);  
*/

/*
var isMan = true;
if(isMan){
    console.log('남자');
}
else{
    console.log('여자');
}

var gender = isMan ? '남자' : '여자';
console.log(gender);
*/

/*
for(var count = 0; count < 5; count++){
    console.log(count+1);
}

var obj = {a:1, b:2};
*/

/*
function log(str){
    console.log(str);
}
var result = log('hello');
console.log(result);
*/

/*
var isDelete = confirm('re');
if(isDelete){
    //..............
}

if(confirm('re')){
    //................
}
*/

/*
function test() {
    console.log('test()');
  }
  
  var id = setInterval(test, 1000); //1초후 1번실행
*/

/*
var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age);
*/

/*
var name = 'global';
function test() {
  console.log(name);
  var name = 'local';
  console.log(name);
}
test();

test2();
function test2() {
  console.log('test');
}
*/

/*
function sum(a, b) {
    return a + b;
}
sum(1, 3);

(function() {
    console.log('start');
  })();

function sum(x,y){
    //if(!y) y = 1;
    console.log(x + y);
}
sum(3);
*/

/*
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc d/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true
*/

/*
array = [1,2,3];
copy = [...array];
b[0] = 100;
*/

var todos = ['운동'];

function array_create(array, content){
    array.push(content);
    console.log(array);
}
array_create(todos, '게임');


function array_read(array){
    array.forEach(function(array){
        console.log(array)
    });
}
array_read(todos);

function array_delete(del){
    var delete_content = del;
    var delete_index = array.
}



