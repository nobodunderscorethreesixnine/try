import './to_do.css'
import editBtnImg from '../images/edit-icon.png'
import dltBtnImg from '../images/dlt-icon.png'
import AddProject from './addProject'

class ToDoApp {
  constructor() {
    this.userSelectedProject = null;
    this.projectNames = []
    this.todoData = {}
    this.initializeElement()
    this.setupEventListeners()

    // this.addPrjBtn = document.querySelector('#prj-plus')
    // this.prjInput = document.querySelector('.prj-input')
    // this.prjContainer = document.querySelector('.prj-list')
    // this.toDoContainer = document.querySelector('.to-do-list')
    // this.dialogBox = document.querySelector('dialog')

    // // querying dialog elements
    // this.saveToDo = document.querySelector('#save')
    // this.exitToDo = document.querySelector('#exit')
    // this.date = document.querySelector('#date')
    // this.title = document.querySelector('#title')
    // this.priority = document.querySelector('#priority-option')
    // this.notes = document.querySelector('textarea')

    // this.priorityLabel = document.querySelector('.priority-label')
    // this.editedToDoIndex = null;
    // adding listeners
    this.setupEventListeners();


  }
  initializeElement() {
    this.addPrjBtn = document.querySelector('#prj-plus')
    this.prjInput = document.querySelector('.prj-input')
    this.prjContainer = document.querySelector('.prj-list')
    this.toDoContainer = document.querySelector('.to-do-list')
    this.dialogBox = document.querySelector('dialog')

    // querying dialog elements
    this.saveToDo = document.querySelector('#save')
    this.exitToDo = document.querySelector('#exit')
    this.date = document.querySelector('#date')
    this.title = document.querySelector('#title')
    this.priority = document.querySelector('#priority-option')
    this.notes = document.querySelector('textarea')

    this.priorityLabel = document.querySelector('.priority-label')
    this.editedToDoIndex = null;
  }
  // method to update localStorage
  updateLocalStorage() {
    localStorage.setItem('todoData', JSON.stringify(this.data))
  }
  // method to add event listener and invoke respective func
  setupEventListeners() {
    this.addPrjBtn.addEventListener('click', () => this.showProjectInput());
    this.prjInput.addEventListener('keyup', (e) => this.addProject(e));
  }
  // method to show input field
  showProjectInput() {
    this.prjInput.style.visibility = 'visible'
    this.prjInput.focus()
  }

  addProject(e){
    const pName = this.prjInput.value;
    if (e.key === 'Enter' && pName.length > 1 && !this.projectNames.includes(pName)){
      this.prjInput.blur();
      this.projectNames.push(pName)
      this.createProjectDOM(pName)
      this.todoData[pName] = [];
      this.updateLocalStorage()
      this.prjInput.value =''
    }
  }

  createProjectDOM(projectName){
    const pTag = document.createElement('p')
    pTag.classList.add('prj-name')
    pTag.textContent = projectName
  }


}

new ToDoApp()