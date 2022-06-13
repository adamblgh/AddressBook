let kapcsolatok=
[
{ID:1,
"Name":"Bencze Dániel",
"Tel":7652533423,
"Email":"benczedaniel@gmail.com",
"Address":"6000 Kecskemét,Minta utca 1/1"
},
{ID:2,
"Name":"Czeczon Kristóf",
"Tel":3123123123,
"Email":"czeczonkristof@gmail.com",
"Address":"6000 Kecskemét,Minta utca 1/2"
},
{ID:3,
"Name":"Balogh Ádám",
"Tel":65735635,
"Email":"baloghadam@gmail.com",
"Address":"6000 Kecskemét,Minta utca 1/3"
}
]




if(!localStorage.getItem('kapcsolatok'))
    localStorage['kapcsolatok']=JSON.stringify(kapcsolatok)

let myAdatok=JSON.parse(localStorage.getItem('kapcsolatok')) 

function show(){
    document.querySelector('.nevek').innerHTML=""
    for(obj of myAdatok){
        document.querySelector('.nevek').innerHTML+=`<div class="row" id="${obj.ID}">
        <div class="col-md-8 katt p-2 m-1 hatter" id="${obj.ID}" onclick="mutat(this)">${obj.Name}</div>
        <div class="col-md-2 katt2" id="${obj.ID}" onclick="remove(this)"><i class="i fa-xl pt-4 fa-solid fa-trash"></i></div>
    </div> `
    }    
}
show()


function mutat(obj){
    console.log(obj)
    let id=obj.id
    for(let adat of myAdatok){
        if(id==adat.ID){
            document.querySelector('.adatok').style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.15 + ')';
            document.querySelector('.adatok').innerHTML=`
            <div class="p-3">
            <div class="row"><b>Neve:</b> ${adat.Name}</div>
            <div class="row"><b>Telefonszám:</b> ${adat.Tel}</div>
            <div class="row"><b>Email:</b> ${adat.Email}</div>
            <div class="row"><b>Lakcím:</b> ${adat.Address}</div></div>`   
        }
    }
    console.log(id)
    

}





function add(){
    console.log(myAdatok)
    let id = myAdatok.length+1
    let adatok2={}
 
 
    let lnev = document.getElementById('nev').value
    console.log(lnev)
    let llakhely = document.getElementById('cim').value
    console.log(llakhely)
    let email = document.getElementById('email').value
    console.log(email)
    let lszam = document.getElementById('tel').value
    console.log(lszam)
    
    
    adatok2.ID=id
    adatok2.Name=lnev
    adatok2.Address=llakhely
    adatok2.Email = email
    adatok2.Tel = lszam
    console.log(adatok2)
    myAdatok.push(adatok2)
 
    
    localStorage["kapcsolatok"]=JSON.stringify(myAdatok)
    show()
}

function remove(obj){
    console.log(obj.id)
    let id=obj.id
    myAdatok = myAdatok.filter(obj=>obj.ID!=id)
    localStorage['kapcsolatok']=JSON.stringify(myAdatok)
    show()
}