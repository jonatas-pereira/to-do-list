const localStorageKey = 'to-do-list'

function newTask() {
    let input = document.getElementById('input-new-task')

    if(!input.value) {
        alert('Digite algo para inserir na lista')
    }

    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }

    input.value = ''
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list   = document.getElementById('to-do-list')

    list.innerHTML = ''

    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `
        <li id="task"> 
            ${values[i]['name']}
            <button id='btn-ok' onClick='removeItem("${values[i]['name']}")'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
            </button>
        </li>`
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index  = values.findIndex(x => x.name == data)

    values.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))

    showValues()
}

showValues()