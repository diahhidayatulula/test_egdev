const fileInput = document.querySelector('#fileInput');
const dropArea = document.querySelector('#dropArea');
const fileList = document.querySelector('#fileList');
const titleProduct = document.querySelector('#title-product');
const productDesc = document.querySelector('#product-desc');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');

    const files = e.dataTransfer.files;
    fileInput.files = files;

    titleProduct.classList.add('hidden')
    productDesc.classList.add('hidden')

    productDesc.classList.add('m-5')

    fileList.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = files[i].name;
        fileList.appendChild(fileItem);
    }
});

