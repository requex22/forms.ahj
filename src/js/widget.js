export default class Widget {
  constructor() {
    this.widget = {
      name: "widget1",
      title: "Popover title",
    };

    this.clickToBtn();
  }

  clickToBtn() {
    const btn = document.querySelector(".widget-button");

    btn.addEventListener("click", () => {
      if (!document.querySelector(".popover")) {
        btn.insertAdjacentHTML(
          "beforebegin",
          `
                    <div class="popover">
                        <p class="popover-title">${this.widget.title}</p>
                    </div>
                `
        );
        const popover = document.querySelector(".popover");
        popover.style.top = btn.offsetTop - btn.offsetHeight * 2 + "px";
        popover.style.left =
          btn.offsetLeft -
          (popover.offsetWidth / 2 - btn.offsetWidth / 2) +
          "px";

        console.log(popover.style.padding);
        popover.classList.toggle("popover-visible");
      } else {
        document.querySelector(".popover").classList.toggle("popover-visible");
      }
    });
  }
}
