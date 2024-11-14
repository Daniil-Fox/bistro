import './_components.js';


const cart = document.querySelector('.cart')

if(cart){
  const checkAll = document.querySelector('.cart__check input')
  const checkItem = document.querySelectorAll('.cart__items input[type=checkbox]')


  checkAll.addEventListener('change', e => {
    if(checkAll.checked){
      checkItem.forEach(el => el.checked = true)
    } else {
      checkItem.forEach(el => el.checked = false)
    }
  })

  checkItem.forEach(item => {
    item.addEventListener('change', e => {
      if(!item.checked){
        checkAll.checked = false
      }

      if(allChecks()){
        checkAll.checked = true
      }
    })
  })

  function allChecks(){
    let flag = true
    checkItem.forEach(el => {
      if(el.checked == false) {
        flag = false
      }
    })
    return flag
  }



}
const rowInp = document.querySelectorAll('.cart-item__row')
if(rowInp.length > 0){
  rowInp.forEach(el => {
    const minus = el.querySelector('.minus')
    const plus = el.querySelector('.plus')
    const inp = el.querySelector('input')

    inp.addEventListener('input', e => {
      if(inp.value < 1){
        inp.value = 1
      }
    })
    inp.addEventListener('change', e => {
      if(inp.value < 1){
        inp.value = 1
      }
    })
    plus.addEventListener('click', e => {
      inp.value++
    })
    minus.addEventListener('click', e => {
      inp.value--

      if(inp.value < 1){
        inp.value = 1
      }
    })
  })
}


const burger = document.querySelector('.header__burger')

if(burger){
  const menu = document.querySelector('.menu')

  burger.addEventListener('click', e => {
    e.preventDefault()
    let active = menu.classList.toggle('active')
    burger.classList.toggle('active')

    document.body.style.overflow = active ? 'hidden' : null
  })
}



const addToCartBtns = document.querySelectorAll('.add-to-cart')

if(addToCartBtns.length > 0){
  function addInputCount(){
    const container = document.createElement('div')
    container.classList.add('cart-item__row')
    container.classList.add('prod__count')

    const minus = document.createElement('div')
    minus.classList.add('minus')
    minus.innerHTML = '-'

    const inputNum = document.createElement('input')
    inputNum.type = 'number'
    inputNum.value = 1

    const plus = document.createElement('div')
    plus.classList.add('plus')
    plus.innerHTML = '+'

    inputNum.addEventListener('input', e => {
      if(inputNum.value < 1){
        inputNum.value = 1
      }
    })
    inputNum.addEventListener('change', e => {
      if(inputNum.value < 1){
        inputNum.value = 1
      }
    })
    plus.addEventListener('click', e => {
      inputNum.value++
    })
    minus.addEventListener('click', e => {
      inputNum.value--

      if(inputNum.value < 1){
        inputNum.value = 1
      }
    })

    container.append(minus)
    container.append(inputNum)
    container.append(plus)

    return container;
  }
  addToCartBtns.forEach(btn => {
    let flag = false
    btn.addEventListener('click', e => {
      if(flag) return
      flag = true
      btn.innerHTML = ''
      btn.insertAdjacentElement('afterbegin', addInputCount())
      btn.classList.add('active')
    })
  })
}
