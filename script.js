fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const rangeContainer = document.querySelector(".range");
    rangeContainer.innerHTML = "";

    const colors = {
      Reaction: { bg: "hsl(0, 100%, 95%)", text: "hsl(0, 100%, 67%)" },
      Memory: { bg: "hsl(39, 100%, 93%)", text: "hsl(39, 100%, 56%)" },
      Verbal: { bg: "hsl(166, 100%, 94%)", text: "hsl(166, 100%, 37%)" },
      Visual: { bg: "hsl(233, 100%, 93%)", text: "hsl(234, 85%, 45%)" },
    };

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("range-div");
      div.style.background = colors[item.category].bg;
      div.innerHTML = `
          <div>
            <img src="${item.icon}" alt="${item.category}" />
            <span class="name" style="color:${colors[item.category].text}">${
        item.category
      }</span>
          </div>
          <div>
            <span class="num1">${item.score}</span>
            <span class="num2">/ 100</span>
          </div>
        `;
      rangeContainer.appendChild(div);
    });
  });
