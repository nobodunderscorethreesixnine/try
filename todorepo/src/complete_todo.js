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

function updateSessionStorage() {
  localStorage.setItem('data', JSON.stringify(data))
}



// window.onload = () => {
//   const h = JSON.parse(localStorage.getItem('data'))
//   console.log('local storage', h)
//   data = h
//   // projectNames.push(Object.keys(h))
//   // console.log('demo',projectNames)
//   Object.keys(h).forEach(element => {
//     projectNames.push(element)
//   })
//   prjDomCreator()
//   console.log('demo', projectNames)

// }
window.onload = () => {
  const h = JSON.parse(localStorage.getItem('data'))
  console.log('local storage', h)
  if (h) {
    // data = {}
    // projectNames = []
    data = h
    // projectNames.push(Object.keys(h))
    // console.log('demo',projectNames)
    Object.keys(h).forEach(element => {
      projectNames.push(element)
      prjDomCreator(element)
    })
    console.log('demo', projectNames)
  }

}


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
    projectNames.push(prjInput.value)
    // prjList.textContent = ''
    prjDomCreator(prjInput.value)
    // trying to add prject in data object
    data[prjInput.value] = [];
    sessionStorage.setItem('projectNames', JSON.stringify(projectNames))
    updateSessionStorage()
  }

  console.log(e.key)
})


function prjDomCreator(prjName) {
  const p = document.createElement('p')
  p.classList.add('prj-name')
  // p.textContent = prjInput.value;
  p.textContent = prjName;
  prjList.appendChild(p)
}

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
    data[userSelectedProject].push([title.value, date.value, option.value, isTextArea])
    toDoDom()
    updateSessionStorage()
  } else {
    console.log('nothing')
  }

}

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
    updateSessionStorage()
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
  updateSessionStorage()
  saveToDo.removeEventListener('click', saveEditedToDo)
  saveToDo.addEventListener('click', addTODo)
}

const priorityLabel = document.querySelector('.priority-label')
priorityLabel.addEventListener('click', (e) => {
  console.log('clicked')
  if (e.target.textContent === 'Low' && userSelectedProject) {
    const orderLowToHigh = ['Low', 'Medium', 'High'];
    data[userSelectedProject].sort((a, b) => orderLowToHigh.indexOf(a[2]) - orderLowToHigh.indexOf(b[2]));
    toDoDom();
  }
  else if (e.target.textContent === 'Medium' && userSelectedProject) {
    const orderMediumToLow = ['Medium', 'High', 'Low']
    data[userSelectedProject].sort((a, b) => orderMediumToLow.indexOf(a[2]) - orderMediumToLow.indexOf(b[2]));
    toDoDom();
  }
  else if (e.target.textContent === 'High' && userSelectedProject) {
    const orderHighToLow = ['High', 'Medium', 'Low']
    data[userSelectedProject].sort((a, b) => orderHighToLow.indexOf(a[2]) - orderHighToLow.indexOf(b[2]));
    toDoDom();
  }
})
