const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
let idAndColorObj = {};
let issueData;

// call gitHub api for the issues
const fetchAPI = async () => {
  try {
    const response = await axios.get("https://api.github.com/repos/miyabitanimchi/React-E-Commerce-App/issues");
    const data = response.data;
    console.log(data);
    createElements(data);
    issueData = data;
  } catch (err) {
    console.log(err);
  }
}

// add each color on each label
const addStyleforLabels = (idColorObj) => {
  if (idColorObj !== {}) {
    const idArr = Object.keys(idColorObj);
    for (let i = 0; i < idArr.length; i++) {
      document.getElementById(idArr[i]).style.backgroundColor = `#${idColorObj[idArr[i]]}`;
      if (idColorObj[idArr[i]] === "e4e669") {
        document.getElementById(idArr[i]).style.color = "#000000";
      }
    }
  }
}

// create labels in each card
const createLabels = (labelsArr, card, parentIndex) => {
  const labelsWrapper = document.createElement("div");
  labelsWrapper.classList.add("labels-wrapper");
  labelsArr.map((label, index) => {
    const labelDiv = document.createElement("div");
    labelDiv.setAttribute("id", `${parentIndex}-${index}-${label.name}`);
    labelDiv.innerText = label.name;
    labelDiv.classList.add("label");
    idAndColorObj[`${parentIndex}-${index}-${label.name}`] = label.color;
    labelsWrapper.appendChild(labelDiv);
  });
  card.appendChild(labelsWrapper);
}

// create cards
const createElements = (data) => {
  idAndColorObj = {};
  if (data.length === 0) {
    console.log("no result");
    cardsContainer.innerHTML = `<p class="no-result">No Result</p>`;
    return;
  }
  data.map((issue, index) => {
    const card = document.createElement("a");
    card.classList.add("card")
    card.href = issue.html_url;
    card.target = "_blank";
    const iconAndTitleWrapper = document.createElement("div");
    iconAndTitleWrapper.classList.add("icon-and-title-wrapper");
    const linkForIcon = document.createElement("a");
    linkForIcon.classList.add("icon-link")
    linkForIcon.href = `https://github.com/${issue.user.login}`;
    linkForIcon.target = "_blank";
    const icon = document.createElement("img");
    icon.classList.add("icon")
    icon.src = issue.user.avatar_url;
    const titleP = document.createElement("p");
    titleP.innerHTML = `<span>#${issue.number}</span>${issue.title}`;
    linkForIcon.appendChild(icon)
    iconAndTitleWrapper.appendChild(linkForIcon);
    iconAndTitleWrapper.appendChild(titleP)
    card.appendChild(iconAndTitleWrapper);
    cardsContainer.appendChild(card);

    if (issue.labels !== 0) {
      createLabels(issue.labels, card, index);
    }
  })
  addStyleforLabels(idAndColorObj);
}
// call api
fetchAPI();

/* ************************** Search function ************************** */
const showResult = (data) => {
  if (searchInput.value === "") {
    createElements(data)
  }
  const resultArr = data.filter(
    (issue) =>
      issue.title.toLowerCase().search(searchInput.value.toLowerCase()) !== -1
  );
  cardsContainer.innerHTML = "";
  createElements(resultArr);
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  showResult(issueData);
});
searchInput.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    showResult(issueData);
  }
});