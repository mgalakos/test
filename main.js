var xhr = new XMLHttpRequest()
xhr.open('get', '/data.json')
xhr.onload = function() { 
    var r = JSON.parse(this.responseText)
    var ul = document.querySelector('#data')
    r.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        ul.appendChild(li)
    })
}
xhr.send()