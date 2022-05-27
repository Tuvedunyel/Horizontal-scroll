import { Vector3 } from "three";
type Args = [
    width: number,
    height: number,
    depth: number
]

export interface spinningBox {
    position: Vector3,
    args?: Args,
    color: string,
    speed: number
}