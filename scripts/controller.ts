import { Model } from "./model";
import { View } from "./view";
import { Menu } from "./menu";

export class Controller {
    private _intervals: any[] = []
    private _menu: Menu

    constructor(private _model: Model, private _view: View) { 
        this._menu = new Menu()
        this.addMenuEvents()
    }

    generateRandomRGB() {
        const rgb: rgb = {
            r: (Math.random() * 255).toFixed(),
            g: (Math.random() * 255).toFixed(),
            b: (Math.random() * 255).toFixed()
        }
        return rgb
    }

    addGrid = () => {
        const rgb = this.generateRandomRGB()
        const grid: grid = {id: String(this._model.getTotalGrid()), rgb}

        this._model.addGrid(grid)
        this._view.renderGrid(grid)

        this.changeBackgroundInterval(grid.id)
    }

    removeGrid = () => {
        const menos = document.getElementById('menos')
        if(this._model.getTotalGrid() == 0){
            menos? menos.style.opacity = '.5': console.log('error')
            menos ? menos.style.backgroundColor= 'rgba(80, 80, 80, .8);': console.log('error')
        }

        const lastInterval =  this._intervals.pop()
        clearInterval( lastInterval)
        this._model.removeGrid()
        this._view.removeGrid()
    }

    changeBackgroundInterval(gridID: string) {
        this._intervals.push(setInterval(() => {
            const rgb = this.generateRandomRGB()
            
            this._model.updateRGBValues(gridID, rgb)
            this._view.updateGridBg(gridID, rgb)
        }, 4000))
    }

    addMenuEvents(){
        this._menu.addEvent('mas', this.addGrid)
        this._menu.addEvent('menos', this.removeGrid)
    }
}