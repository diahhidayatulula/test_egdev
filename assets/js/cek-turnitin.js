function cekTurnitin(){
    const data = {
        file: document.getElementsByName('file')[0].value,
        Kutipan: document.getElementsByName('Kutipan')[0].checked,
        daftarpustaka: document.getElementsByName('daftarpustaka')[0].checked,
        sumber: document.getElementsByName('sumber')[0].checked,
        Whatsapp: document.getElementsByName('Whatsapp')[0].value,
        code: document.getElementsByName('code')[0].value,
    }
    console.log (data);
    fetch("http://192.168.18.12:3000/cek-turnitin",{
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