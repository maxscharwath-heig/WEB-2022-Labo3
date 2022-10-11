import {
  tick, acceleration, reverse, friction, steeringRadius, height, width,
} from './constants.js';
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
  constructor(id, t, x, y, speed, angle) {
    this.id = id;
    this.t = t;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
  }

  move() {
    throw new Error('Not implemented');
  }

  render(context) {
    throw new Error('Not implemented');
  }
}
class Rocket extends MovingEntity {
  /**
     * Construct a Rocket.
     * @param {*} id The identifier.
     * @param {*} t The time t.
     * @param {*} x The x coordinate.
     * @param {*} y The y coordinate.
     * @param {*} speed The speed expressed in pixels/second.
     * @param {*} angle The angle expressed in radians.
     */
  constructor(id, t, x, y, speed, angle) {
    super(id, t, x, y, speed, angle);
  }

  move() {
    this.t += tick;
    const s = this.speed * (tick / 1000);
    this.x = position(this.x + adjacent(s, this.angle), width);
    this.y = position(this.y + opposite(s, this.angle), height);
  }

  render(context) {
    const r = 5;
    context.beginPath();
    context.arc(this.x, this.y, r, 0, 2 * Math.PI);
    context.fillStyle = 'rgb(255, 0, 0)';
    context.fill();
  }
}
class Vehicle extends MovingEntity {
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
  constructor(id, t, x, y, speed, angle, isAccelerating, isReversing, isTurningLeft, isTurningRight, color) {
    super(id, t, x, y, speed, angle);
    this.isAccelerating = isAccelerating;
    this.isReversing = isReversing;
    this.isTurningLeft = isTurningLeft;
    this.isTurningRight = isTurningRight;
    this.color = color;
  }

  move() {
    this.t += tick;
    this.speed *= friction;
    if (this.isAccelerating) {
      this.speed += acceleration;
    }
    if (this.isReversing) {
      this.speed -= reverse;
    }

    const d = this.speed * (tick / 1000);
    if (this.isTurningLeft) {
      this.angle -= d / steeringRadius;
    }
    if (this.isTurningRight) {
      this.angle += d / steeringRadius;
    }

    this.x = position(this.x + adjacent(d, this.angle), width);
    this.y = position(this.y + opposite(d, this.angle), height);
  }

  render(context) {
    const w = 10;
    const h = 5;
    context.beginPath();
    context.rect(this.x - w / 2, this.y - h / 2, w, h);
    context.strokeStyle = this.color;
    context.stroke();
  }
}

export { MovingEntity, Vehicle, Rocket };
