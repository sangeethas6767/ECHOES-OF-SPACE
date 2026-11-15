
const worlds = {

    moon: {
        name: "THE MOON",
        label: "DESTINATION 01 | LUNAR EXPLORATION",
        intro: "Earth's closest celestial neighbour holds billions of years of history, mysterious craters and the footprints of human exploration.",
        background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        facts: [
            ["01", "Earth's Natural Satellite",
             "The Moon is Earth's only natural satellite and orbits our planet."],
            ["02", "One-Sixth Gravity",
             "Gravity on the Moon is approximately one-sixth of Earth's gravity."],
            ["03", "A Long Lunar Orbit",
             "The Moon completes one orbit around Earth in approximately 27.3 days relative to the stars."],
            ["04", "No Breathable Air",
             "The Moon has an extremely thin exosphere, not an atmosphere humans can breathe."],
            ["05", "A World of Craters",
             "Its rocky surface contains impact craters, mountains and ancient lava plains."],
            ["06", "The Hidden Far Side",
             "The Moon's rotation is synchronized with its orbit, so we generally see the same hemisphere from Earth."]
        ],
        images: [
            ["Apollo Moon Landing",
             "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"],
            ["Lunar Landscape",
             "https://images.unsplash.com/photo-1451187580459-43490279c0fa"],
            ["Earth from Space",
             "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4"],
            ["The Universe",
             "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"]
        ]
    },

    mars: {
        name: "THE RED PLANET",
        label: "DESTINATION 02 | MARTIAN EXPLORATION",
        intro: "A mysterious world of red deserts, giant volcanoes and robotic explorers. Discover the machines that brought Mars closer to humanity.",
        background: "https://images.unsplash.com/photo-1614728263952-84ea256f9679",
        facts: [
            ["01", "Fourth Planet",
             "Mars is the fourth planet from the Sun."],
            ["02", "The Red Planet",
             "Iron-rich minerals in Martian dust give the planet its reddish appearance."],
            ["03", "Two Small Moons",
             "Mars has two natural moons named Phobos and Deimos."],
            ["04", "A Martian Day",
             "One Martian day, called a sol, lasts approximately 24 hours and 39 minutes."],
            ["05", "Giant Volcano",
             "Olympus Mons is a giant shield volcano on Mars and the tallest known volcano in the Solar System."],
            ["06", "A Giant Canyon",
             "Valles Marineris is an enormous canyon system stretching thousands of kilometres across Mars."]
        ],
        images: [
            ["The Red Planet",
             "https://images.unsplash.com/photo-1614728263952-84ea256f9679"],
            ["Mars in Space",
             "https://images.unsplash.com/photo-1614732484003-ef9881555dc3"],
            ["Deep Space",
             "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"],
            ["Planetary Exploration",
             "https://images.unsplash.com/photo-1451187580459-43490279c0fa"]
        ]
    }

};

const params = new URLSearchParams(window.location.search);

const worldName = params.get("world") || "moon";

const world = worlds[worldName] || worlds.moon;

document.title = world.name + " | Echoes of Space";

document.getElementById("planetName").textContent = world.name;

document.getElementById("planetLabel").textContent = world.label;

document.getElementById("planetIntro").textContent = world.intro;

document.getElementById("hero").style.backgroundImage =
    `url("${world.background}")`;

const factsGrid = document.getElementById("factsGrid");

world.facts.forEach(fact => {

    const card = document.createElement("div");

    card.className = "fact-card";

    card.innerHTML = `
        <span class="fact-number">${fact[0]}</span>
        <h3>${fact[1]}</h3>
        <p>${fact[2]}</p>
    `;

    factsGrid.appendChild(card);

});

const gallery = document.getElementById("gallery");

world.images.forEach(image => {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = image[1];
    img.alt = image[0];
    img.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = image[0];

    item.appendChild(img);
    item.appendChild(caption);

    gallery.appendChild(item);

});

document.getElementById("quizLink").href =
    "quiz.html?world=" + worldName;
