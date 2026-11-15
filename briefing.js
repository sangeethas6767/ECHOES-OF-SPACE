
function acceptMission() {

    const button = document.getElementById("acceptBtn");

    button.innerHTML = "MISSION ACCEPTED ✓";

    button.disabled = true;

    button.style.background = "#16865F";

    const confirmation =
        document.getElementById("confirmation");

    confirmation.style.display = "block";

    confirmation.scrollIntoView({
        behavior: "smooth"
    });

}

function continueMission() {

    alert(
        "Your next destination is ready! Moon and Mars exploration coming next."
    );

}
