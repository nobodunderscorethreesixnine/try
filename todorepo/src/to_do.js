import './to_do.css'
import editBtnImg from '../images/edit-icon.png'
import dltBtnImg from '../images/dlt-icon.png'
import AddProject from './addProject'
// storing projectNames in array?
const projectNames = []

// query addproject btn
const addPrjBtn = document.querySelector('#prj-plus')
const  prjInput = document.querySelector('.prj-input')
addPrjBtn.addEventListener('click', ()=>{
  prjInput.style.visibility = 'visible';
  prjInput.focus()
})

// queyring prjInput for input
prjInput.addEventListener('keyup', (e)=>{
  const pName = prjInput.value
  console.log(prjInput.value)
  if (e.key === 'Enter' && pName.length>1 && !projectNames.includes(pName)){
    prjInput.blur()
    projectNames.push(pName)
    // call projectDomCreator.js which is 
    another file to create dom  and also .
    if possible store all dom creator in 
    diff file with domCreator.js
    which can be import and use for specific dom 
    creation
  }
})
