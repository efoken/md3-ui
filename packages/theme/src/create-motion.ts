export interface Motion {
  duration: {
    short: [number, number, number, number]
    medium: [number, number, number, number]
    long: [number, number, number, number]
    "extra-long": [number, number, number, number]
  }
  easing: {
    linear: [number, number, number, number]
    standard: {
      default: [number, number, number, number]
      accelerate: [number, number, number, number]
      decelerate: [number, number, number, number]
    }
    emphasized: {
      default: [number, number, number, number]
      decelerate: [number, number, number, number]
      accelerate: [number, number, number, number]
    }
    legacy: {
      default: [number, number, number, number]
      decelerate: [number, number, number, number]
      accelerate: [number, number, number, number]
    }
  }
  path: string
}

export function createMotion(motion?: Partial<Motion>): Motion {
  return {
    ...motion,
    duration: {
      short: [50, 100, 150, 200],
      medium: [250, 300, 350, 400],
      long: [450, 500, 550, 600],
      "extra-long": [700, 800, 900, 1000],
      ...motion?.duration,
    },
    easing: {
      linear: [0, 0, 0, 1],
      standard: {
        default: [0.2, 0, 0, 1],
        accelerate: [0.3, 0, 1, 1],
        decelerate: [0, 0, 0, 1],
      },
      emphasized: {
        default: [0.2, 0, 0, 1],
        decelerate: [0.05, 0.7, 0.1, 1],
        accelerate: [0.3, 0, 0.8, 0.15],
      },
      legacy: {
        default: [0.4, 0, 0.2, 1],
        decelerate: [0, 0, 0.2, 1],
        accelerate: [0.4, 0, 1, 1],
      },
      ...motion?.easing,
    },
    path: motion?.path ?? "linear",
  }
}
