import './_components.js';


const cart = document.querySelector('.cart')

if(cart){
  const checkAll = document.querySelector('.cart__check input')
  const checkItem = document.querySelectorAll('.cart__items input[type=checkbox]')

  const rowInp = document.querySelectorAll('.cart-item__row')
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
