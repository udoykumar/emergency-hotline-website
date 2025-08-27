function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
const copyBtn = getElement("copy-count");
let totalCopy = Number(copyBtn.innerText);
const heartBtn = getElement("heart-count").innerText;
let heartCount = Number(heartBtn);
const starBtn = getElement("star-count").innerText;
let starNumber = Number(starBtn);

document
  .getElementById("hotline-card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("copy-btn")) {
      const number =
        e.target.parentNode.parentNode.children[1].children[2].innerText;
      console.log(number);
      navigator.clipboard.writeText(number);
      totalCopy++;
      copyBtn.innerText = totalCopy;
      return alert(`Number Copied ${number}`);
    }

    if (e.target.className.includes("heart-btn")) {
      heartCount++;
      document.getElementById("heart-count").innerText = heartCount;
    }

    if (e.target.className.includes("call-btn")) {
      if (starNumber <= 0) {
        return alert("❌ Low coin, You need at least 20 coins to make a call");
      }
      const callBtn = e.target;
      const hotlineTitle =
        callBtn.parentNode.parentNode.children[1].children[0].innerText;
      const hotlineNumber =
        callBtn.parentNode.parentNode.children[1].children[2].innerText;
      console.log(hotlineTitle, hotlineNumber);
      starNumber -= 20;
      document.getElementById("star-count").innerText = starNumber;

      const asidContainer = getElement("asid-card-container");
      const div = document.createElement("div");

      const currentDate = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      const currentTime12Hour = currentDate.toLocaleString("en-BD", options);

      div.innerHTML = `
            <div class="flex justify-between items-center mx-auto mt-5 bg-gray-200 p-2 rounded-lg">
                <div class="">
                    <p class="mb-4 text-lg font-semibold text-nowrap">${hotlineTitle}</p>
                    <p class="font-semibold" >${hotlineNumber} </p>
                </div>
                <div>
                    <p class="font-semibold">${currentTime12Hour}</p>
                </div>
            </div>
      `;
      asidContainer.appendChild(div);
      return alert(`📞 Calling ${hotlineTitle}, ${hotlineNumber}...`);
    }
  });

const clearBtn = getElement("clearBtn");
clearBtn.addEventListener("click", function () {
  getElement("asid-card-container").innerHTML = "";
});
