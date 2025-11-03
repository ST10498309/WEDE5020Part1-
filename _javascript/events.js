const eventsData = [
  {
    title: "Community Fundraisers",
    img: "_images/Fundraisers.jpeg",
    description: "Host a fundraiser with our delicious baked goods and help support your favorite cause or community project."
  }
];

const eventsContainer = document.getElementById("eventsContainer");

eventsData.forEach(event => {
  const eventSection = document.createElement("section");
  eventSection.classList.add("event-item");

  eventSection.innerHTML = `
    <h2>${event.title}</h2>
    <img src="${event.img}" alt="${event.title}">
    <p>${event.description}</p>
  `;

  eventsContainer.appendChild(eventSection);
});
