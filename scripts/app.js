audioEl = document.querySelector('#audio')
buttonGrid = document.querySelector('#button-grid')

arrayOfButtonNames = ['work_it', 'make_it', 'do_it', 'makes_us', 'harder', 'better', 'faster', 'stronger', 'more_than', 'hour', 'our', 'never', 'ever', 'after', 'work_is', 'over']

// capitalizes the first letter of a word
function titleCase(string) {
    return string.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')

}

arrayOfButtonNames.map(name => {
    button = document.createElement('button')
    button.className = 'button'
    button.id = name
    button.innerHTML = titleCase(name.replace('_', ' '))
    buttonGrid.appendChild(button)
})

playsound = function (event) {
    audioEl.src = './sounds/' + event.target.id + '.WAV'
    audioEl.play()
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', playsound)
})