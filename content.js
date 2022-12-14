function querySelectorIncludesText(selector, text) {
  return Array.from(document.querySelectorAll(selector)).find((el) =>
    el.textContent.includes(text)
  );
}

function removePrNoise() {
  document.querySelectorAll(".js-timeline-item").forEach((el) => {
    if (el.innerText.includes("temporarily deployed to")) {
      el.style.display = "none";
    }
  });
  document.querySelectorAll(".TimelineItem").forEach((el) => {
    if (el.innerText.includes("Merge branch 'main' into")) {
      el.style.display = "none";
    }
  });
}

async function loadMore() {
  removePrNoise();
  if (querySelectorIncludesText("button", "Load more")) {
    querySelectorIncludesText("button", "Load more").click();
    await new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
    await loadMore();
    removePrNoise();
  }
}

loadMore();
