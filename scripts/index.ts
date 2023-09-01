import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";

document.addEventListener('DOMContentLoaded', () => {

    const controller = new Controller( new Model(), new View())
    controller.addGrid()
    controller.addGrid()
    controller.addGrid()
})