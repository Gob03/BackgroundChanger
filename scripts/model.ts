export class Model{
    private _grids: grid[] = []

    getGridRGB( gridID: string){
        return this._grids.filter( elem => elem.id == gridID)
    }

    addGrid( grid: grid){
        this._grids.push( grid)
    }

    removeGrid(){
        this._grids.pop()
    }

    getTotalGrid(){
        return this._grids.length
    }

    updateRGBValues( gridID: string, rgbValues: rgb){
        const gridM = this._grids.filter( elem => elem.id == gridID)[0]
        gridM.rgb = rgbValues
    }
}