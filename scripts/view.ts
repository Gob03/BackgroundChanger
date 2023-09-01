export class View {
    private _grids: HTMLElement[] = []

    renderGrid(grid: grid) {
        const mainContainer = document.getElementById('mainContainer')
        const gridElement = this.createGrid(grid)
        mainContainer ? mainContainer.appendChild(gridElement) : console.log('error')

        mainContainer ? this.addGrid(gridElement) : console.log('error')
    }

    private createGrid(grid: grid) {
        const div = document.createElement('div')
        div.classList.add('container__grid')
        div.id = String(grid.id)
        div.style.background = `rgb(${grid.rgb.r}, ${grid.rgb.g}, ${grid.rgb.b})`
        div.style.flexGrow = '0'
        setTimeout(() => div.style.flexGrow = '1', 300)
        return div
    }

    removeGrid() {
        const mainContainer = document.getElementById('mainContainer')
        const lastGrid = this._grids.pop()
        lastGrid ? lastGrid.style.flexGrow = '0' : console.log('error')

        setTimeout(() => {
            lastGrid ?
                mainContainer ? mainContainer.removeChild(lastGrid)
                : console.log('error')
            : console.log('error')
        }, 300)

    }

    private addGrid(grid: HTMLElement) {
        this._grids.push(grid)
    }

    updateGridBg(gridID: string, rgbValues: rgb) {
        const gridV = document.getElementById(gridID)
        gridV ? gridV.style.background = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})` :
            console.log('ERROR')
    }
}