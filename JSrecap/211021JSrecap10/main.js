const cardsContainer = document.getElementById("cardsContainer");

const fetchAPI = async () => {
  try {
    const response = await axios.get("https://api.github.com/repos/miyabitanimchi/React-E-Commerce-App/issues");
    console.log(response.data);
    createElements(response.data);
  } catch (err) {
    console.log(err);
  }
}

const createLabels = (labelsArr) => {
  labelsArr.map((label) => {
    const labelDiv = document.createElement("div");
    console.log(label.name)
    labelDiv.innerText = label.name;
    labelDiv.classList.add("label");
    cardsContainer.appendChild(labelDiv);
  });
}

const createElements = (data) => {
  data.map((issue) => {
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
      createLabels(issue.labels);
    }
  })
}

fetchAPI();