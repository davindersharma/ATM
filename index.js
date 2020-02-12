var users = [{
    username: "admin",
    password: "admin",
    bankBalance: 100,
}, {
    username: "roneet",
    password: "roneet",
    bankBalance: 200,
}, {
    username: "davin",
    password: "davin",
    bankBalance: 300,
}];

// var loggedUser = {};



const login = () => {
    let username = document.querySelector(`#user`).value;
    let password = document.querySelector(`#pass`).value;

    users.forEach(user => {
        if (username === user.username && password === user.password) {
            document.querySelector('.form').style.display = "none";
            document.querySelector('.transaction').style.display = "block";
            loggedUser = user;
            return;
        }
    });



}
const balance = () => {
    alert("Your current balance is " + loggedUser.bankBalance);
}