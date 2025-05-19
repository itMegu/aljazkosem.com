document.addEventListener("DOMContentLoaded", () => {
  const nameEl  = document.getElementById("type-name");
  const yourName = "Aljaz Kosem";

  // ⚡ Faster typing: delay lowered from 120 → 80ms
  function typeText(el, text, delay = 80) {
    return new Promise(resolve => {
      let i = 0;
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      el.appendChild(cursor);

      function step() {
        if (i < text.length) {
          el.insertBefore(document.createTextNode(text[i++]), cursor);
          setTimeout(step, delay);
        } else {
          el.removeChild(cursor);
          resolve();
        }
      }
      step();
    });
  }

  (async () => {
    await typeText(nameEl, yourName, 80);
    const finalCursor = document.createElement("span");
    finalCursor.className = "cursor";
    nameEl.appendChild(finalCursor);
  })();
});
