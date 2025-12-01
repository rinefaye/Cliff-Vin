
const btns = document.querySelectorAll(".category-btn");
const clickSound = document.getElementById("clickSound");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});


function toggleSection(id) {
    let section = document.getElementById(id);

    
    document.querySelectorAll(".info-section").forEach(sec => {
        if (sec !== section && sec.style.display === "block") {
            sec.classList.add("hide");
            setTimeout(() => {
                sec.style.display = "none";
                sec.classList.remove("hide");
            }, 300);
        }
    });

    
    if (section.style.display === "block") {
        section.classList.add("hide");
        setTimeout(() => {
            section.style.display = "none";
            section.classList.remove("hide");
        }, 300);
    } else {
        section.style.display = "block";
    }
}
