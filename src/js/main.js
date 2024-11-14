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
