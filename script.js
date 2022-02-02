let objArr = [];
const roleArray = ['admin', 'client', 'saler'];
const objKeys = ['id','name','role', 'date', 'age', 'status'];
const thead = document.getElementById('thead');
const tbody = document.getElementById('tbody')
for (let i = 0; i < 10; i++) {
    let user = newUser();
    user.id = i +1;
    objArr.push(user);
}
for (let i = 0; i < objKeys.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = objKeys[i]
    thead.append(th)
}
for(let i = 0; i < objArr.length; i++){
    let tr = document.createElement('tr');
    for (let j in objArr[i]) {
        if (j == 'role') {
            let select = document.createElement('select');
            select.classList.add("form-control")
            select.addEventListener('change',  function (event){
                objArr.map((item) => {
                    if (item.id == objArr[i]['id'] ) {
                        item.role = event.target.value
                    }
                })
            })
            for(let l = 0; l < roleArray.length; l++) {
                let option = document.createElement('option');
                option.innerHTML = roleArray[l]
                if(option.innerText == objArr[i][j]) {
                    option.selected = 'selected'
                }
                select.append(option)
            }
            tr.append(select);
        }  else if (j == 'name' ) {
            let td = document.createElement('td')
            let input = document.createElement('input');
            input.addEventListener('input', function () {
                objArr.map((item) => {
                    if (item.id == objArr[i]['id'] ) {
                        item.name = input.value
                    }
                })
                console.log(objArr)
            })
            input.classList.add('form-input')
            input.value = objArr[i][j];
            td.append(input);
            tr.append(td);

        } else {
            let td = document.createElement('td')
            td.innerHTML = objArr[i][j];
            td.dataset.id = objArr[i]['id']
            tr.append(td);
        }
    }
    tbody.append(tr)
}


function newUser() {
    const obj = {
        id: null,
        name: 'John',
        role: roleArray[Math.floor(Math.random()*roleArray.length)],
        date: new Date().toISOString().slice(0,10),
        age: Math.floor(Math.random()*25),
        status: 'online'
    }
    return obj
}