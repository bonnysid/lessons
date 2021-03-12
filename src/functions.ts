const sum = (a: number, b: number): number => a + b;

interface IMyPos {
    x: number | undefined
    y: number | undefined
}

interface IMyPosDefault extends IMyPos {
    default: number
}

function position(): IMyPos
function position(a: number): IMyPosDefault
function position(a: number, b: number): IMyPos

function position(a?:number, b?:number) {
    if(!a && !b) return {x: undefined, y:undefined}
    else if (!b) return {x: a, y: undefined, default: 5}
    return {x: a, y: b}
}

const printArr = <T>(arr: T[]): void => console.log(arr)
const printArrRest = (...arr: number[]): void => console.log(arr)

console.log(position())
console.log(position(5))
console.log(position(1, 6))