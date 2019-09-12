$(document).ready(function (){
    initTerm();
});

function initTerm() {
    this.term = rTerm({
        height: 500,
        username: "arata-nvm",
        hostname: "host",
        file: "./static/profile.json"
    });
};
