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
    })
  })
}
