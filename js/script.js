

let saveRegistrationInfo = () =>{
    console.log("jhfhieincjhi");
            //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;


    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn)
    window.localStorage.setItem('last_name',ln)
    //Page reload
    window.location.reload();
}

let logout = () =>{
    window.localStorage.clear();

    //Page reload
    window.location.reload();
}
let playSound = () =>{
    console.log('Good Morning');
    let at = document.querySelector('.r_audio')
    at.play();
}



// ()(); IIFE Immediatelt Invoked Function Expression
(()=>{
    let fn = window.localStorage.getItem('first_name')
    let ln = window.localStorage.getItem('last_name')
    console.log('Page loaded successfully');
    // Get a reference to the modal element
    var modal = document.getElementById('registrationModal');

    // Create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);

    // Call the `show` method on the modal instance to
    console.log(fn);
    if(window.localStorage.getItem('first_name') === null ){
        //True
        modalInstance.show();
    }
    // Check if the localStorage is set or not
    if(fn !== null){
        document.querySelector('.r_welcome').innerHTML = 'Welcome '+fn +" "+ln + '<button class="r_welcome1 btn btn-sm float-end btn-danger mt-3 me-3" onclick="logout()" >Log Out</button>';
    }


    //Keypress sound play
    document.addEventListener('keypress',()=>{
        console.log('welcome');
    })
    //documen = whole website


})();