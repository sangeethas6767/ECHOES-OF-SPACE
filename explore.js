
let selectedDestination = "";

function selectDestination(destination) {

    selectedDestination = destination;

    document.getElementById("continueBtn").disabled = false;

    document.getElementById("message").textContent =
        destination.toUpperCase() + " selected!";
}

function continueExploration() {

    if (selectedDestination === "") {
        alert("Please select Moon or Mars first!");
        return;
    }

    window.location.href = "planet.html?world=" + selectedDestination;
}
