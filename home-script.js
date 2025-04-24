document.addEventListener("DOMContentLoaded", ()=>{
    const logoButton = document.getElementById("logoButton");
    if (logoButton) {
        logoButton.addEventListener("click", () => {
            window.location.href = "home.html";
        });
    }
});