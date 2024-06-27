const testiArea = document.getElementById("testi-area");

var data = [];

(() => {
    fetch("http://192.168.18.12:3000/testimoni",{
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        data = hasil

        for(let i = 0; i < data.length; i++){
            testiArea.innerHTML += `
                 <div class="col-12 col-xl-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2">
                                        <img src="${data[i].foto}" class="img-fluid rounded-circle">
                                    </div>
                                    <div class="col-10">
                                        <p class="m-0">${data[i].nama}</p>
                                        <p class="m-0">${data[i].univ}</p>
                                        <hr>
                                        <p>${data[i].isi}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        }
    }
)})()

const productArea = document.getElementById("product-area");
var data_product = [];

(() => {
    fetch("http://192.168.18.12:3000/product",{
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        console.log(hasil)
        data_product = hasil
        for(let i = 0; i < data_product.length; i++){
            if(data_product[i].status == "active"){
            productArea.innerHTML +=`
              <div class="col-12 col-xl-6 mb-3">
                  <div class="card card-product bg-secondary text-light">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4">
                          <img src="${data_product[i].foto}" alt="" 
                          class="img-fluid"/>
                        </div>
                        <div class="col-8 mt-3">
                            <h5 class="fw-bold">${data_product[i].judul}</h5>
                           ${data_product[i].isi} <br>
                            <a href="${data_product[i].link}" class="btn btn-primary mt-4">Klik Disini</a>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            `
        }
        }})})()





