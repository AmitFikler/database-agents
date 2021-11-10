const cities = document.getElementById("cities");
const agents = document.getElementById("agents");

window.addEventListener("load", getAllCities);
cities.addEventListener("change", showAgents);

async function getAllCities() {
  try {
    const response = await axios.get(`http://localhost:3000/cities`);
    const allCities = response.data;
    allCities.forEach((element) => {
      const newOption = createElement("option", element, "city");
      newOption.value = element;
      cities.appendChild(newOption);
    });
  } catch (error) {
    console.error(error);
  }
}

async function showAgents() {
  const city = cities.value;
  const response = await axios.get(
    `http://localhost:3000/agents/?city=${city}`
  );
  const agentsArr = response.data;
  agents.innerHTML = ""
  agentsArr.forEach((element) => {
    const agent = createElement("div", "", "agents");
    const licenseId = createElement("label", element.license_id);
    const fullname = createElement("label", element.full_name);
    agent.appendChild(licenseId);
    agent.appendChild(fullname);
    agents.appendChild(agent);
  });
}

function createElement(tagName, textContent, className) {
  const newElem = document.createElement(tagName);
  newElem.textContent = textContent;
  newElem.classList.add(className);
  return newElem;
}
