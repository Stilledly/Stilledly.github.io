
function addEntry() {
  const input = document.getElementById("aiInput");
  const log = document.getElementById("log");
  const entry = document.createElement("div");
  entry.className = "log-entry ai1";
  entry.textContent = "AI 1: " + input.value;
  log.appendChild(entry);
  input.value = "";
  log.scrollTop = log.scrollHeight;
}
