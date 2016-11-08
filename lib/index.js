const store = {teachers: []}

class Teacher {
  constructor(name, hometown){
    this.name = name;
    this.hometown = hometown;
    store.teachers = [...store.teachers, this];
  }
}

// $('document').ready(function(){

// })



$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    let name = $("[name='teacher[name]']").val()
    let hometown = $("[name='teacher[hometown]']").val()
    // 2. We create a new teacher instance with that data
    new Teacher(name, hometown)
    $("[name='teacher[hometown]']").val('')
    $("[name='teacher[name]']").val('')
    $('.container ul').empty()
    let html = store.teachers.forEach((teacher) => {
      $('.container ul').append(`<li>name: ${teacher.name} hometown: ${teacher.hometown} </li>`)
    })
  })
})
