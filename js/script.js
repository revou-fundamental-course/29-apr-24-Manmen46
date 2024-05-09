
function validation() {

    let username = document.getElementById('form-username').value;
    let password = document.getElementById('form-password').value;
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);

    if (username == '' && password == ''){
        document.getElementById('form-username').style.border = '1px solid red'
        document.getElementById('form-password').style.border = '1px solid red'
        alert('Username anda kosong, periksa kembali inputan anda.');
        alert('Password anda kosong, periksa kembali inputan anda.');
    }

    else if (username == '' & password.length > 0) {
        document.getElementById('form-username').style.border = '1px solid red'
        alert('Username anda kosong, periksa kembali inputan anda.');

        document.getElementById('form-password').style.border = '1px solid green'

    }

    else if (username.length > 0 & password == '') {
        document.getElementById('form-username').style.border = '1px solid green'
        

        document.getElementById('form-password').style.border = '1px solid red'
        alert('Password anda kosong, periksa kembali inputan anda.');

    }

    else  {
        document.getElementById('form-username').style.border = '1px solid green'
        // alert('Username anda kosong, periksa kembali inputan anda.');

        document.getElementById('form-password').style.border = '1px solid green'
        // alert('Password anda kosong, periksa kembali inputan anda.');

        alert('Welcome ' + username);
        console.log(username)

    }

    
        
    
}

function HomeInfo() {
    alert('Welcome to the main page Nurhoiriza Hotel website!');
}

function AboutUsInfo() {
    alert('Welcome to Nurhoiriza Hotel, where comfort, elegance, and hospitality converge. We offer high-quality accommodations, friendly service, and a commitment to guest satisfaction. With a strategic location and comprehensive facilities, Nurhoiriza Hotel is the ideal choice for an unforgettable stay experience.');
}

function CallUsInfo() {
    alert('Call the number +62 xxx xxxxxxx ');
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    console.log('nextslide: ' + n);
    showSlide(indexSlide += n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya image:  ' + listImage.length);

    if (index > listImage.length) { 
        indexSlide = 1;
    }

    let i = 0;

    while (i < listImage.length) {
        listImage[i].style.display = i != indexSlide - 1 ? "none": "block";
        i++;
    }


    console.log('showSlide: ' + index );

}


setInterval(() => nextSlide(1), 3000);

document.getElementById('send-password').addEventListener('click', () => validation());
// document.getElementById('Homebutton').addEventListener('click', () => HomeInfo());