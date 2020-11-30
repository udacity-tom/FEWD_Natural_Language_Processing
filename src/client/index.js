
import { handleSubmit } from './js/formHandler'
import { changeInputArea } from './js/changeInputType'
import { updateUI } from './js/updateUI'
import { checkURLInput } from './js/checkURLInput'
import { notifyError } from './js/notifyError'
import { clearUI } from './js/clearUI.js'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/nav.scss'
import './styles/form.scss'
import './styles/footer.scss'

// import meaning-cloud-logo from './meaning-cloud-logo.png';
import meaningCloudLogo from './views/img/meaning-cloud-logo.png'


// alert("I EXIST")
console.log("CHANGE in SOURCE!!");


export {
    handleSubmit,
    changeInputArea,
    meaningCloudLogo,
    updateUI,
    checkURLInput,
    notifyError,
    clearUI,
}