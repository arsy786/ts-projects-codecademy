/*
Self-driving cars are set to be the next revolution in the automotive industry. The idea is simple: create a vehicle that can see the world and react to it as a human driver would, but the implementation is fraught with obstacles. You are tasked with creating a program that will allow a car to react to obstacles in the road.
*/

import { getObstacleEvents } from './computer-vision';

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events) {
    if (!this.isRunning) {
      return console.log('the car is off');
    }

    Object.keys(events).forEach(eventKey => {
      if (!events[eventKey]) {
        return;
      }
      if (eventKey === 'ObstacleLeft') {
        this.steeringControl.turn('right');
      }
      if (eventKey === 'ObstacleRight') {
        this.steeringControl.turn('left');
      }
    })

  }

}

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface Events {
  [event: string]: boolean;
}

interface Control {
  execute: (command: string) => void; 
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(direction);
  }
}

const steering = new SteeringControl();

const autonomousCar = new Car({
  isRunning: true,
  steeringControl: steering
})

autonomousCar.respond(getObstacleEvents());