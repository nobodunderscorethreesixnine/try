// import './to_do.css'
// import editBtnImg from '../images/edit-icon.png'
// import dltBtnImg from '../images/dlt-icon.png'
// import AddProject from './addProject'

// // to know which project does user select so i can manipulate to that project
// let userSelectedProject;
// let projectNames = ['this is fun project']/* storing project name that user created */
// let data = {
//   'this is fun project':[]
// }/* to store objects and its related todos */


// const addPrjBtn = document.querySelector('#prj-plus')
// const prjInput = document.querySelector('.prj-input')
// // queyring prj list which store the projects
// const prjList = document.querySelector('.prj-list')

// const toDoListSection = document.querySelector('.to-do-list')

// // let projectNames = ['this is fun project']/* storing project name that user created */

// addPrjBtn.addEventListener('click', ()=>{
//   console.log('clicked')
//   prjInput.style.visibility='visible'
//   prjInput.focus()
// })


// prjInput.addEventListener('keyup', (e)=>{
//   const pName = prjInput.value
//   if (e.key === "Enter" && pName.length >1 && !projectNames.includes(pName)){
//     prjInput.blur()
//     prjDomCreator()
//     projectNames.push(prjInput.value)
//     // trying to add prject in data object
//     data[prjInput.value] = [];
//   }

//   console.log(e.key)
// })


// function prjDomCreator(){
//   const p = document.createElement('p')
//   p.classList.add('prj-name')
//   p.textContent = prjInput.value;
//   prjList.appendChild(p)

// }

// // let userSelectedProject;

// prjList.addEventListener('click', (e)=>{
//   // e.target.classList.remove('active')
//   if (projectNames.includes(e.target.textContent) && e.target.textContent in data){
//     toDoListSection.textContent = ''
//     userSelectedProject = e.target.textContent
//     toDoDom()
//     console.log('project has already maked')
//   }
//   else if (projectNames.includes(e.target.textContent)){
//     const prjNames = document.querySelectorAll('.prj-name')
//     prjNames.forEach((pName) =>{
//         pName.classList.remove('active')
//     })
//     e.target.classList.add('active')
//     console.log(projectNames)
//     userSelectedProject = e.target.textContent
//     toDoListSection.textContent = ''
//   }
//   console.log('user select prj',userSelectedProject)
//   console.log(projectNames)
// })

// // querying add to do btn
// const addTODoBtn = document.querySelector('#to-do-plus');
// // querying dialog box
// const dialog = document.querySelector('dialog')
// addTODoBtn.addEventListener('click',()=>{
//   if (userSelectedProject){
//     console.log('to do added')
//     dialog.style.display='flex';
//     dialog.show()
//     // console.log(data);
//     // try to adding todo in object
//     // data[userSelectedProject].push('todo added')
//   }
//   else{
//     console.log('select project')
//   }
// })


// // querying save img btn
// const saveToDo = document.querySelector('#save')
// // querying exit img btn
// const exitToDo = document.querySelector('#exit')

// exitToDo.addEventListener('click', ()=>{
//   dialog.style.display = 'none';
//   dialog.close()
//   console.log('close')
// })

// // querying dialog elements
// const date = document.querySelector('#date')
// const title = document.querySelector('#title')
// const option = document.querySelector('#priority-options')
// const textArea = document.querySelector('textarea')
// saveToDo.addEventListener('click',()=>{
//   if (date.value && title.value && option.value){
//     let isTextArea = textArea.value || 'put something here...'
//     // toDoDomCreator(title.value, date.value, option.value,textArea.value)
//     // toDoDomCreator(title.value, date.value, option.value,isTextArea)
//     data[userSelectedProject].push([title.value,date.value,option.value,isTextArea])
//     toDoDom()
//   }

//   else{
//     console.log('nothing')
//   }
// })

// // const toDoListSection = document.querySelector('to-do-list')

// function toDoDom(){
//   console.log(data[userSelectedProject])
//   data[userSelectedProject].forEach(element =>{
//     console.log('this is array',element)
//     console.log('array title start from here')
//     const [title,date,option,notes] = element
//     toDoDomCreator(title, date, option, notes)

//   })
// }
// // now try to print data[userSelectedProject] and see if it returns
// // all the array or not, cause it should retur all the arrays
// // and print it out

// function toDoDomCreator(title,date,priority,textarea){
//   const label = document.createElement('label')
//   const inputCheckbox = document.createElement('input')
//   inputCheckbox.type = 'checkbox'
//   inputCheckbox.id = 'check'
//   label.appendChild(inputCheckbox)
//   // label.textContent = title;
//   const titleNode = document.createTextNode(title);
//   label.appendChild(titleNode)

//   const p = document.createElement('p')
//   p.textContent = textarea

//   const span = document.createElement('span')
//   span.textContent = priority
//   priorityLabelChecker(priority, span)

//   const editImg = document.createElement('img')
//   editImg.src = editBtnImg;
//   // editImg.id = 'edit-icon'
//   editImg.classList.add('edit-icon')
//   const dltImg = document.createElement('img')
//   dltImg.src = dltBtnImg;
//   // dltImg.id = 'dlt-icon'
//   dltImg.classList.add('dlt-icon')
//   const h4 = document.createElement('h4')
//   h4.textContent = date

//   const div = document.createElement('div')
//   div.classList.add('to-dos')
//   div.appendChild(label)
//   div.appendChild(p)
//   div.appendChild(span)
//   div.appendChild(editImg)
//   div.appendChild(dltImg)
//   div.appendChild(h4)

//   toDoListSection.appendChild(div)

// }
// function priorityLabelChecker(priority, tagname){
//   if (priority == 'Low'){
//     tagname.classList.add('p-l')
//   }
//   else if (priority == 'High'){
//     tagname.classList.add('p-h')
//   }
//   else{
//     tagname.classList.add('p-m')
//   }
// }

// // now today make the logic to check before adding todo if 
// // user have click the project or not , if user haven't click 
// // the project then do nothing(don't add to do)
// //   if user click project then try to add todo then 
// //   execute, 

// //   2) and make logic to check and update the edit btn 
// //   and dlt btn of todo 

// //   3) and now when user click project and click the priority label
// //   then only show or sort from high to low if user click high
// //   sorting or only showing high if user click is up to u
// //   try to figure out which is easy and implement it 

// //   4) now try to write some of the logic in class and execute it
// //   remember u can't write all the  logic in class
// //   just make class whichever u can. and push to github and make
// //   notion and complete that section in 1week, 
// //   and continue with python movie sorter , 
// //   make sure u give the additional days to python.AddProject

// //   and remember u can do it , and u will do it , u 
// //   are fucking man and devloper.


// // const prjAddBtn = document.querySelector('#prj-plus')
// // const prjList = document.querySelector('.prj-list')
// // const prjInput = document.querySelector('.prj-input')
// // let intervalId;
// // const toDoList = document.querySelector('.to-do-list')


// // prjAddBtn.addEventListener('click',()=>{
// //   clearTimeout(intervalId)
// //   prjInput.style.visibility = 'visible'
// //   prjInput.focus()
// //   focusChecker()
// //   inputHandler()

// // })

// // function focusChecker(){
// //   prjInput.addEventListener('focusout', (e)=>{
// //     intervalId = setTimeout(() => {
// //       prjInput.style.visibility = 'hidden'
// //     }, 1000);
// //   }, {once:true})
// // }

// // function inputHandler(){
// //   prjInput.addEventListener('keyup', (e)=>{
// //     if (prjInput.value.length > 1 && e.key === 'Enter'){
// //       console.log(prjInput.value)
// //       addDom()
// //       toDoList.textContent = ''
// //       prjInput.blur()
// //     }

// //   })
// // }

// // function addDom(){
// //   const p = document.createElement('p')
// //   p.classList.add('prj-name')
// //   p.textContent = prjInput.value;
// //   prjList.appendChild(p)
// // }

import './to_do.css'
import editBtnImg from '../images/edit-icon.png'
import dltBtnImg from '../images/dlt-icon.png'
import AddProject from './addProject'

// to know which project does user select so i can manipulate to that project
let userSelectedProject;
let projectNames = ['this is fun project']/* storing project name that user created */
let data = {
  'this is fun project': []
}/* to store objects and its related todos */

const addPrjBtn = document.querySelector('#prj-plus')
const prjInput = document.querySelector('.prj-input')
// queyring prj list which store the projects
const prjList = document.querySelector('.prj-list')

const toDoListSection = document.querySelector('.to-do-list')

// let projectNames = ['this is fun project']/* storing project name that user created */

addPrjBtn.addEventListener('click', () => {
  console.log('clicked')
  prjInput.style.visibility = 'visible'
  prjInput.focus()
})


prjInput.addEventListener('keyup', (e) => {
  const pName = prjInput.value
  if (e.key === "Enter" && pName.length > 1 && !projectNames.includes(pName)) {
    prjInput.blur()
    prjDomCreator()
    projectNames.push(prjInput.value)
    // trying to add prject in data object
    data[prjInput.value] = [];
  }

  console.log(e.key)
})


function prjDomCreator() {
  const p = document.createElement('p')
  p.classList.add('prj-name')
  p.textContent = prjInput.value;
  prjList.appendChild(p)

}

// let userSelectedProject;

prjList.addEventListener('click', (e) => {
  // e.target.classList.remove('active')
  const prjNames = document.querySelectorAll('.prj-name')
  if (projectNames.includes(e.target.textContent) && e.target.textContent in data) {
    toDoListSection.textContent = ''
    userSelectedProject = e.target.textContent
    toDoDom()
    console.log('project has already maked')
    prjNames.forEach((pName) => {
      pName.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  else if (projectNames.includes(e.target.textContent)) {
    prjNames.forEach((pName) => {
      pName.classList.remove('active')
    })
    e.target.classList.add('active')
    console.log(projectNames)
    userSelectedProject = e.target.textContent
    toDoListSection.textContent = ''
  }
  console.log('user select prj', userSelectedProject)
  console.log(projectNames)
})

// querying add to do btn
const addTODoBtn = document.querySelector('#to-do-plus');
// querying dialog box
const dialog = document.querySelector('dialog')
addTODoBtn.addEventListener('click', () => {
  if (userSelectedProject) {
    console.log('to do added')
    dialog.style.display = 'flex';
    dialog.show()
    // console.log(data);
    // try to adding todo in object
    // data[userSelectedProject].push('todo added')
  }
  else {
    console.log('select project')
  }
})


// querying save img btn
const saveToDo = document.querySelector('#save')
// querying exit img btn
const exitToDo = document.querySelector('#exit')

exitToDo.addEventListener('click', () => {
  dialog.style.display = 'none';
  dialog.close()
  console.log('close')
})

// querying dialog elements
const date = document.querySelector('#date')
const title = document.querySelector('#title')
const option = document.querySelector('#priority-options')
const textArea = document.querySelector('textarea')
// saveToDo.addEventListener('click', () => {
//   if (date.value && title.value && option.value) {
//     let isTextArea = textArea.value || 'put something here...'
//     // toDoDomCreator(title.value, date.value, option.value,textArea.value)
//     // toDoDomCreator(title.value, date.value, option.value,isTextArea)
//     data[userSelectedProject].push([title.value, date.value, option.value, isTextArea])
//     toDoDom()
//   }

//   else {
//     console.log('nothing')
//   }
// })
saveToDo.addEventListener('click', addTODo)

function addTODo() {
  if (date.value && title.value && option.value) {
    let isTextArea = textArea.value || 'put something here...'
    // toDoDomCreator(title.value, date.value, option.value,textArea.value)
    // toDoDomCreator(title.value, date.value, option.value,isTextArea)
    data[userSelectedProject].push([title.value, date.value, option.value, isTextArea])
    toDoDom()
  } else {
    console.log('nothing')
  }

}

// const toDoListSection = document.querySelector('to-do-list')

function toDoDom() {
  toDoListSection.textContent = '';
  console.log(data[userSelectedProject])
  data[userSelectedProject].forEach(element => {
    console.log('this is array', element)
    console.log('array title start from here')
    const [title, date, option, notes] = element
    toDoDomCreator(title, date, option, notes)

  })
}
// now try to print data[userSelectedProject] and see if it returns
// all the array or not, cause it should retur all the arrays
// and print it out

function toDoDomCreator(title, date, priority, textarea) {
  const label = document.createElement('label')
  const inputCheckbox = document.createElement('input')
  inputCheckbox.type = 'checkbox'
  inputCheckbox.id = 'check'
  label.appendChild(inputCheckbox)
  // label.textContent = title;
  const titleNode = document.createTextNode(title);
  label.appendChild(titleNode)

  const p = document.createElement('p')
  p.textContent = textarea

  const span = document.createElement('span')
  span.textContent = priority
  priorityLabelChecker(priority, span)

  const editImg = document.createElement('img')
  editImg.src = editBtnImg;
  // editImg.id = 'edit-icon'
  editImg.classList.add('edit-icon')
  const dltImg = document.createElement('img')
  dltImg.src = dltBtnImg;
  // dltImg.id = 'dlt-icon'
  dltImg.classList.add('dlt-icon')
  const h4 = document.createElement('h4')
  h4.textContent = date

  const div = document.createElement('div')
  div.classList.add('to-dos')
  div.appendChild(label)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(editImg)
  div.appendChild(dltImg)
  div.appendChild(h4)

  toDoListSection.appendChild(div)

}
function priorityLabelChecker(priority, tagname) {
  if (priority == 'Low') {
    tagname.classList.add('p-l')
  }
  else if (priority == 'High') {
    tagname.classList.add('p-h')
  }
  else {
    tagname.classList.add('p-m')
  }
}



// toDoListSection.addEventListener('click', (e) => {
//   if (e.target.classList.contains('dlt-icon')) {
//     const todoDiv = e.target.closest('.to-dos');
//     const title = todoDiv.querySelector('label').textContent;
//     deleteToDo(title);
//   }
// });

// function deleteToDo(title) {
//   const projectTodos = data[userSelectedProject];
//   const index = projectTodos.findIndex(todo => todo[0] === title);

//   if (index !== -1) {
//     projectTodos.splice(index, 1);
//   }

//   toDoDom();
// }
toDoListSection.addEventListener('click', (e) => {

  if (e.target.classList.contains('dlt-icon')) {
    const todoDiv = e.target.closest('.to-dos');
    const title = todoDiv.querySelector('label').textContent;
    deleteToDo(title);
  }
  else if (e.target.classList.contains('edit-icon')) {
    const todoDiv = e.target.closest('.to-dos');
    const title = todoDiv.querySelector('label').textContent;
    console.log('clicked')
    editToDo(title)
  }

});

function deleteToDo(tt) {
  const projectTodos = data[userSelectedProject];
  const index = projectTodos.findIndex(todo => todo[0] === tt);

  if (index !== -1) {
    projectTodos.splice(index, 1);
  }

  toDoDom();
}

let editedToDoIndex;
function editToDo(ttt) {
  const projectTodos = data[userSelectedProject];
  const index = projectTodos.findIndex(todo => todo[0] === ttt);
  const [todoTitle, todoDate, todoOption, todoNote] = projectTodos[index]
  title.value = todoTitle
  date.value = todoDate
  option.value = todoOption
  textArea.value = todoNote
  dialog.style.display = 'flex';
  dialog.show()
  editedToDoIndex = index;
  saveToDo.removeEventListener('click', addTODo)
  saveToDo.removeEventListener('click', saveEditedToDo)
  saveToDo.addEventListener('click', saveEditedToDo)
  // saveToDo.addEventListener('click', () => function (){
  //   saveEditedToDo(index)
  // })
}

function saveEditedToDo() {
  const projectTodos = data[userSelectedProject];
  console.log(projectTodos[editedToDoIndex])
  data[userSelectedProject][editedToDoIndex] = [title.value,
  date.value,
  option.value,
  textArea.value,
  ]
  toDoDom()
  saveToDo.removeEventListener('click', saveEditedToDo)
  saveToDo.addEventListener('click', addTODo)
}



// now work on filtering and displaying from low on the top
const levelLow = document.querySelector('.p-l')
const levelMedium = document.querySelector('.p-m')
const levelHigh = document.querySelector('.p-h')


const array = ['high', 'low', 'low', 'medium', 'low']

// levelLow.addEventListener('click', () => {
//   console.log(array)
//   const orderLowToHigh = ['low', 'medium', 'high']
//   const sorterArray = array.sort((a, b) => orderLowToHigh.indexOf(a) - orderLowToHigh.indexOf(b))
//   console.log(sorterArray)
// })
// levelMedium.addEventListener('click', () => {
//   console.log(array)
//   const orderLowToHigh = ['medium', 'high', 'low']
//   const sorterArray = array.sort((a, b) => orderLowToHigh.indexOf(a) - orderLowToHigh.indexOf(b))
//   console.log(sorterArray)
// })
// levelHigh.addEventListener('click', () => {
//   console.log(array)
//   const orderLowToHigh = ['high', 'medium', 'low']
//   const sorterArray = array.sort((a, b) => orderLowToHigh.indexOf(a) - orderLowToHigh.indexOf(b))
//   console.log(sorterArray)
// })

// levelLow.addEventListener('click', () => {
//   if (userSelectedProject) {
//     const orderLowToHigh = ['low', 'medium', 'high']
//     data[userSelectedProject].sort((a, b) => orderLowToHigh.indexOf(a[2]) - orderLowToHigh.indexOf(b[2]))
//     console.log(data)
//   }
//   toDoDom()
// })

levelLow.addEventListener('click', () => {
  if (userSelectedProject) {
    const orderLowToHigh = ['Low', 'Medium', 'High'];
    console.log('Before Sorting:', data[userSelectedProject]);

    console.log(data[userSelectedProject].sort((a, b) => orderLowToHigh.indexOf(a[2]) - orderLowToHigh.indexOf(b[2])));

    console.log('After Sorting:', data[userSelectedProject]);
    // Update the DOM after sorting
    toDoDom();
  }
});

now work on other sorting for medium and high 
before it was not working cause in sorted array u have given name
in lowercase so 
now implement logic to add in session storage and 
make class and implement it and finish today u
can DO it and now from tomorrow if possible today try to update
notin and continue with python also 
U will Be great developer u have learn so much now 
NOW wake up the beast inside u .. U can do it never give up
always remember for father , mother , and remeber u have to prove
pragay->teacher->all