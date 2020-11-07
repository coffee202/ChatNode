(()=>{
  const FADE_TIME= 150
  const TYPING_TIMER_LENGTH = 100
  const COLORS =[ 
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ]

  const usernameIput = document.getElementsByClassName('usernameInput')[0]
  const messagesContainer = document.getElementsByClassName('messages')[0]
  const inputMessage= document.getElementsByClassName('inputMenssage')[0]

  const loginPage = document.getElementsByClassName('login page')[0]
  const chatPage = document.getElementsByClassName('chat page')[0]

  let username
  let isConnected = false
  let isTyping = false
  let lastTypingTime
  let currentInput = usernameInput

  const socket= io()

  const log = (message, options = {}) =>{
    const el = document.createElement('li')
    el.className= 'log'
    el.innerHTML= message

     addMessageElement(el, options);
     console.log(message)
  }
})