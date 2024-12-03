const tabs = document.querySelector('.tabs')

if(tabs){
  const tabsItem = document.querySelectorAll('.tabs__item')
  function clear(){
    tabsItem.forEach(el => el.classList.remove('active'))
  }
  tabsItem.forEach(el => {
    el.addEventListener('click', e => {
      clear()
      el.classList.add('active')

      const addr = document.querySelectorAll('.checkout__form--address')
      if(addr && addr.length > 0){
        addr.forEach(item => {
          if(el.dataset.tab == 'sam'){
            item.style.display = 'block'
          } else {
            item.style.display = null
          }
        })
      }
    })
  })
}
