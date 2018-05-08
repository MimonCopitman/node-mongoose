const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5af1e076955f14643e4c7d8c';

if (!ObjectId.isValid(id)){
  console.log('Id not valid');
}


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('todo', todo);
// }).catch((e)=> {
//   console.log(e);
// });

var userId = '5af173f6ad5999594cffdf8c';

if (!ObjectId.isValid(userId)){
  console.log('Id not valid');
}

User.findById(userId).then((user) => {
  if (!user){
    return console.log('User not found');
  }
  console.log('User', user)
}).catch((e) => {
  console.log(e);
})
