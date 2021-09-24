const panels = document.querySelectorAll(".panel") //creates a node list(similar to array)

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active"); //removes curent active element
        panel.classList.add("active")
    })
})