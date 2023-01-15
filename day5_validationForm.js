const name = document.getElementById('name');
const age = document.getElementById('age');
const form = document.getElementById('form');
const errorVar = document.getElementById('error');

form.addEventListener('submit',(e) => {

    let message = []
    if(name.value === '' || name.value == null) {
        message.push('Your Name is mandatory')
    }
    if(age < 10  && age> 75)
    {
        message.push('vaccine is not necessary for your age like group peoples')
    }

    if(message.length > 0) {
        e.privateDefault()
        errorVar.innerText = message.join(',')
    }

})