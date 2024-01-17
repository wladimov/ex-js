document.querySelector('form')
.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    
    console.log(data.user_name);


    const jsonn = JSON.stringify(data)
    const tipo = typeof(jsonn)
    console.log(jsonn);
    console.log(tipo);
})