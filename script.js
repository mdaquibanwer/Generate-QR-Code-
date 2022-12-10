const form = document.getElementById("generate-QR")
const QR = document.getElementById("qrcode-generated")
const spinner = document.getElementById("spinner")
const btn = document.getElementById("btn")



// ---------- Logic Starts Here ---------------

const onSubmitForm = (e)=>{
    e.preventDefault();
    clearQR();
    hideSaveImagebtn();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    if(url === ""){
        alert('Please Enter Your URL')
    }
    else{
        loadSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url,size);
            setTimeout(() => {
                const saveURL = QR.querySelector('img').src
                saveImagebtn(saveURL);
            }, 50);
        }, 1000);
    }
    // console.log(url,size);
}

const loadSpinner = ()=>{
    spinner.style.display = 'block';
}
const hideSpinner = ()=>{
    spinner.style.display = 'none';
}

const clearQR = ()=>{
    QR.innerHTML = '';
}

const generateQRCode = (url,size)=>{
    const qrcode = new QRCode('qrcode-generated',{
        text: url,
        width: size,
        height: size,
    })
}

const saveImagebtn = (saveURL)=>{
    btn.style.display = 'block';
    btn.href = saveURL;
    btn.download = "QRCode";
}
const hideSaveImagebtn = ()=>{
    btn.style.display = 'none';
}

form.addEventListener('submit',onSubmitForm)