let container = document.querySelector(".contenedorDeMenu");
let profile = document.querySelector(".perfil");

const toggle = () => {
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "flex"; 
    } else {
        container.style.display = "none"; 
    }
};

profile.addEventListener("click", toggle);

