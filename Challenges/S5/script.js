const advice_id = document.querySelector("#advice-id");
const advice_text = document.querySelector("#advice-text");
const advice_btn = document.querySelector("#advice-btn");

async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  
  advice_id.innerText = `${json.slip.id}`;
  advice_text.innerText = `"${json.slip.advice}"`;
}

document.addEventListener("DOMContentLoaded", fetchData);
advice_btn.addEventListener('click', fetchData);
