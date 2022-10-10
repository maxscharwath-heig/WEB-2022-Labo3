import { tick, acceleration, reverse, friction, steeringRadius, height, width } from './constants.js';
import { adjacent, position, opposite } from './util.js';

// TODO: 
// create the MovingEntity, Rocket and Vehicle classes 
// following the instructions in the README.

class MovingEntity {
    /**
     * Construct a MovingObject.
     * @param {*} id The identifier.
     * @param {*} t The time t in milliseconds.
     * @param {*} x The x coordinate.
     * @param {*} y The y coordinate.
     * @param {*} speed The speed expressed in pixels/second.
     * @param {*} angle The angle expressed in radians.
     */
    constructor(id, t, x, y, speed, angle) {}
}
class Rocket {
    /**
     * Construct a Rocket.
     * @param {*} id The identifier.
     * @param {*} t The time t.
     * @param {*} x The x coordinate.
     * @param {*} y The y coordinate.
     * @param {*} speed The speed expressed in pixels/second.
     * @param {*} angle The angle expressed in radians.
     */
    constructor(id, t, x, y, speed, angle) {}
}
class Vehicle {
    /**
     * Construct a Vehicle.
     * @param {*} id The identifier.
     * @param {*} t The time t.
     * @param {*} x The x coordinate.
     * @param {*} y The y coordinate.
     * @param {*} speed The speed expressed in pixels/second.
     * @param {*} angle The angle expressed in radians.
     * @param {*} color The color expressed in RGB hex code.
     */
    constructor(id, t, x, y, speed, angle, isAccelerating, isReversing, isTurningLeft, isTurningRight, color) {}
}

export { MovingEntity, Vehicle, Rocket };
