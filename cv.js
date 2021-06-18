let internJson = {
    "interns": [
        {
            "id": "1",
            "name": "Ashot Sargsyan",
            "email": "ashot@gmaul.com"
        },
        {
            "id": "2",
            "name": "Eduard Manukyan",
            "email": "eduard@gmail.com"
        },
        {
            "id": "3",
            "name": "Emilia Babajanyan",
            "email": "emilia@gmail.com"
        },
        {
            "id": "4",
            "name": "Frunz Grigoryan",
            "email": "frunz@gmail.com"
        },
        {
            "id": "5",
            "name": "Gago Simonyan",
            "email": "gago@gmail.com"
        },
        {
            "id": "6",
            "name": "Ghevond Tunyan",
            "email": "ghevond@gmail.com"
        },
        {
            "id": "7",
            "name": "Gor Melqonyan",
            "email": "gor@gmail.com"
        },
        {
            "id": "8",
            "name": "Hovhannes Petrosyan",
            "email": "hovhannes@gmail.com"
        },
        {
            "id": "9",
            "name": "Koryun Boksyan",
            "email": "koryun@gmail.com"
        },
        {
            "id": "10",
            "name": "Manuk Manukyan",
            "email": "manuk@gmail.com"
        },
        {
            "id": "11",
            "name": "Melik Grigoryna",
            "email": "melik@gmail.com"
        },
        {
            "id": "12",
            "name": "Nare Khachatryan",
            "email": "nare@gmail.com"
        },
        {
            "id": "13",
            "name": "Narek",
            "email": "narek@gmail.com"
        },
        {
            "id": "14",
            "name": "Robert Hovhannisyan",
            "email": "obert@gmail.com"
        },
        {
            "name": "NewJohn",
            "email": "Smith@NewJohn.com",
            "id": "QX7e55u"
        }
    ]
}
function createCards(obj) {

    for (let elem of internJson.interns) {
        createDiv(elem.id, elem.name, elem.email)
    }
}

function createDiv(id,name,email){
    document.getElementById("content").innerHTML += `
        <div class="">
        <h1>${id}</h1>
         <h1>${name}</h1>
          <h1>${email}</h1>
</div>
<br>
    
    `
}

function remove() {
    document.getElementById("content").innerHTML = ""
}