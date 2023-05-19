interface Md3Duration {
  short1: number
  short2: number
  short3: number
  short4: number
  medium1: number
  medium2: number
  medium3: number
  medium4: number
  long1: number
  long2: number
  long3: number
  long4: number
  extraLong1: number
  extraLong2: number
  extraLong3: number
  extraLong4: number
}

interface Md3Easing {
  linear: [number, number, number, number]
  standard: [number, number, number, number]
  standardAccelerate: [number, number, number, number]
  standardDecelerate: [number, number, number, number]
  emphasized: [number, number, number, number]
  emphasizedDecelerate: [number, number, number, number]
  emphasizedAccelerate: [number, number, number, number]
  legacy: [number, number, number, number]
  legacyDecelerate: [number, number, number, number]
  legacyAccelerate: [number, number, number, number]
}

export interface Motion {
  duration: Md3Duration
  easing: Md3Easing
  create: (
    props?: string | string[],
    options?: {
      delay?: number
      duration?: number
      easing?: string | [number, number, number, number]
    },
  ) => string
}

// Follows https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
const duration: Md3Duration = {
  short1: 50,
  short2: 100,
  short3: 150,
  short4: 200,
  medium1: 250,
  medium2: 300,
  medium3: 350,
  medium4: 400,
  long1: 450,
  long2: 500,
  long3: 550,
  long4: 600,
  extraLong1: 700,
  extraLong2: 800,
  extraLong3: 900,
  extraLong4: 1000,
}

const easing: Md3Easing = {
  linear: [0, 0, 0, 1],
  standard: [0.2, 0, 0, 1],
  standardAccelerate: [0.3, 0, 1, 1],
  standardDecelerate: [0, 0, 0, 1],
  emphasized: [0.2, 0, 0, 1],
  emphasizedDecelerate: [0.05, 0.7, 0.1, 1],
  emphasizedAccelerate: [0.3, 0, 0.8, 0.15],
  legacy: [0.4, 0, 0.2, 1],
  legacyDecelerate: [0, 0, 0.2, 1],
  legacyAccelerate: [0.4, 0, 1, 1],
}

function formatMs(milliseconds: number) {
  return `${Math.round(milliseconds)}ms`
}

interface CreateMotionOptions {
  duration?: Partial<Md3Duration>
  easing?: Partial<Md3Easing>
}

export function createMotion(motion: CreateMotionOptions = {}): Motion {
  const mergedDuration = {
    ...duration,
    ...motion.duration,
  }

  const mergedEasing = {
    ...easing,
    ...motion.easing,
  }

  const create = (
    props: string | string[] = ["all"],
    {
      delay = 0,
      duration: durationOption = mergedDuration.medium1,
      easing: easingOption = mergedEasing.standard,
    }: {
      delay?: number
      duration?: number
      easing?: string | [number, number, number, number]
    } = {},
  ) => {
    if (typeof props !== "string" && !Array.isArray(props)) {
      throw new TypeError('create: argument "props" must be a string or array')
    }

    if (Number.isNaN(durationOption)) {
      throw new TypeError(
        `create: argument "duration" must be a number but found ${durationOption}`,
      )
    }

    if (typeof easingOption !== "string" && !Array.isArray(easingOption)) {
      throw new TypeError('create: argument "easing" must be a string or array')
    }

    if (Number.isNaN(delay)) {
      throw new TypeError('create: argument "delay" must be a number')
    }

    return (Array.isArray(props) ? props : [props])
      .map(
        (prop) =>
          `${prop} ${formatMs(durationOption)} ${
            Array.isArray(easingOption)
              ? `cubic-bezier(${easingOption.join(", ")})`
              : easingOption
          } ${formatMs(delay)}`,
      )
      .join(",")
  }

  return {
    create,
    ...motion,
    duration: mergedDuration,
    easing: mergedEasing,
  }
}
