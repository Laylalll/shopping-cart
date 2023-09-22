const stepControl = document.querySelector('#stepper-control')
const steps = stepControl.querySelectorAll('.step')
const form = document.querySelector('#a-form')
const formParts = form.querySelectorAll('.part')
const btnControl = document.querySelector('#btn-control')
const nextBtn = document.querySelector('.btn-primary')
const prevBtn = document.querySelector('.btn-outline')
const darkModeToggle = document.querySelector('#darkmode-toggle')


let step = 0

function handleBtnControlClicked(event) {
  event.preventDefault()
  const target = event.target
  const nowStep = steps[step]
  if (target.matches('.btn-primary') && target.innerHTML === '下一步') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    nextStep.lastElementChild.classList.add('active')
    if (!step) {
      nextStep.nextElementSibling.children[1].classList.add('active')
    }
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (target.matches('.btn-outline')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    nowStep.lastElementChild.classList.remove('active')
    if (step === 1) {
      nowStep.nextElementSibling.children[1].classList.remove('active')
    }
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  console.log(step)
  setBtnAction()
}
function setBtnAction() {
  if (!step) {
    prevBtn.classList.add('d-none')
  } else {
    prevBtn.classList.remove('d-none')
  }

  if (step === 2) {
    nextBtn.innerHTML = "確認下單"
  } else {
    nextBtn.innerHTML = "下一步"
  }
}
function darkModeToggleHandler(event) {
  const target = event.target
  if (target.checked) {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }
}

btnControl.addEventListener('click', handleBtnControlClicked)
darkModeToggle.addEventListener("change", darkModeToggleHandler)