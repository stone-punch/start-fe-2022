/*
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


//배열 CRUD

//create
var article = {
    title:'제목1',
    url:'asdaad',
};
var articles = [article];
console.log(articles);

var todos = ['운동'];

var todo = '게임';
todos.push(todo);

console.log(todos);

todos.forEach(function(todo){
    console.log(todo);
})


// update
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
})

console.log(updateIndex);
todos[updateIndex] = '공부';
console.log(todos);
*/
//delete
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(todo) {
  return todo !== deleteTodo;
});
console.log(newTodo);