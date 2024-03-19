document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo')
 
  logo.addEventListener('mouseover', () => {
     const randomDegrees = Math.floor(Math.random() * (Math.random() < 0.5 ? -1 : 1)*15)
     logo.style.transform = `rotate(${randomDegrees}deg)`
  })
  logo.addEventListener('mouseout', () => {
     logo.style.transform = 'rotate(0deg)'
  })
})


document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu li')
  
  menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      const randomDegrees = Math.floor(Math.random() * (Math.random() < 0.5 ? -1 : 1)*15)
      item.style.transform = `rotate(${randomDegrees}deg)`
    })
    
    item.addEventListener('mouseout', () => {
      item.style.transform = 'rotate(0deg)'
    })
  })
})

const download = document.querySelectorAll('.download')

const pressedDownload = () => {
  alert('This should sent you to PlayStore or AppStore, depends on you mobile OS')
}

download.forEach(item => {
  item.addEventListener('click', pressedDownload)
})