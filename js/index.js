//document.addEventListener('DOMContentLoaded', searchUser)

//getting data from HTML
const submitButton = document.getElementById('submit-button');
const formInput = document.getElementById('search')



//function for obtaining the data from the server 
submitButton.addEventListener('click', searchUser)
function searchUser(e){
    e.preventDefault(),
    fetch('https://api.github.com/')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}


//fucntion for dispplaying data
function displayData(){

}

