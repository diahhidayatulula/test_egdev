// hint 1

function LOGIN(){
    const data = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    }
    console.log (data);
    fetch("http://192.168.18.12:3000/login",{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(hasil => {
        console.log(hasil)
    if(hasil.status){
        //TRUE
        window.location = "/cek-turnitin.html"
    }else{
        //FALSE
        alert(hasil.msg);
    }
    })
}