document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateButton').addEventListener('click', generatePassword);
});

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    const n = charset.length;
    for (let i = 0; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").innerText = password;
}
