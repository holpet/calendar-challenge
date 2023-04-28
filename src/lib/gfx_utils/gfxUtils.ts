import { tentacles_today } from "../../assets/img";

// tentacles for today
export function createTentacleElement(type: string) {
  if (type === "today") {
    const today_td = document.querySelector(
      ".fc-day-today .fc-daygrid-day-frame"
    );
    today_td?.classList.add("relative");
    const div = document.createElement("div");
    div.className =
      "absolute right-0 top-0 overflow-visible w-4/5 h-auto z-10 pointer-events-none tentacles-today";
    const img = document.createElement("img");
    img.setAttribute("src", tentacles_today);
    img.className = "w-full h-auto";
    div.appendChild(img);
    today_td?.appendChild(div);
    return { parent: today_td, child: div };
  }
}
