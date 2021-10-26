const cardsContainer = document.getElementById("cardsContainer");

const fetchAPI = async () => {
  try {
    const response = await axios.get("https://api.github.com/repos/miyabitanimchi/React-E-Commerce-App/issues");
    const data = response.data;
    console.log(data);
    createElements(data);
  } catch (err) {
    console.log(err);
  }
}

const createLabels = (labelsArr, card, parentIndex) => {
  const labelsWrapper = document.createElement("div");
  labelsWrapper.classList.add("labels-wrapper");
  labelsArr.map((label, index) => {
    const labelDiv = document.createElement("div");
    labelDiv.setAttribute("id", `${parentIndex}-${index}-${label.name}`);
    labelDiv.innerText = label.name;
    labelDiv.classList.add("label");

    // document.getElementById(`${parentIndex}-${index}-${label.name}`).style.backgroundColor = label.color;
    // labelDiv.innerHTML = `<div class="label" style="background-color:${label.color}>${label.name}</div>`;
    labelsWrapper.appendChild(labelDiv);

  });
  card.appendChild(labelsWrapper);
}

const createElements = (data) => {
  data.map((issue, index) => {
    const card = document.createElement("div");
    card.classList.add("card")
    const iconAndTitleWrapper = document.createElement("div");
    iconAndTitleWrapper.classList.add("icon-and-title-wrapper");
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon")
    iconDiv.innerHTML = `<i class="fas fa-user-circle"></i>`;
    const titleP = document.createElement("p");
    titleP.innerHTML = `<span><a href=${issue.html_url} target="_blank">${issue.number}</a></span>${issue.title}`;
    iconAndTitleWrapper.appendChild(iconDiv);
    iconAndTitleWrapper.appendChild(titleP)
    card.appendChild(iconAndTitleWrapper);
    cardsContainer.appendChild(card);

    if (issue.labels !== 0) {
      createLabels(issue.labels, card, index);
    }
  })
}

fetchAPI();