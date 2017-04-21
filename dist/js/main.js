document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});


let config = {
    apiKey: "AIzaSyDy7YR4x5P99TmzflWTaAbcSwSVrMcz97A",
    authDomain: "react-mongo-test.firebaseapp.com",
    databaseURL: "https://react-mongo-test.firebaseio.com",
    projectId: "react-mongo-test",
    storageBucket: "react-mongo-test.appspot.com",
    messagingSenderId: "355923043574"
};
    firebase.initializeApp(config);
