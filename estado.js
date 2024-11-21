window.onload = function () {
    const statusBar = document.getElementById("status-bar");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const isOpen = (
        (currentDay === 5 || currentDay === 6 || currentDay === 0) &&
        (currentHour >= 1 && currentHour < 23)
    );

    if (isOpen) {
        statusBar.textContent = "ABIERTO";
        statusBar.style.backgroundColor = "green";
        localStorage.setItem("estadoPedido", "abierto");
    } else {
        statusBar.textContent = "CERRADO";
        statusBar.style.backgroundColor = "red";
        localStorage.setItem("estadoPedido", "cerrado");
    }
};
