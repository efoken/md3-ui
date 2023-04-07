import { compose, style } from "../style"
import { SizingProps } from "./types"

function transform(value: string | number) {
  return typeof value === "number"
    ? value <= 1 && value !== 0
      ? `${value * 100}%`
      : value
    : value
}

const width = style({
  prop: "width",
  transform,
})

const maxWidth = style({
  prop: "maxWidth",
  transform,
})

const minWidth = style({
  prop: "minWidth",
  transform,
})

const height = style({
  prop: "height",
  transform,
})

const maxHeight = style({
  prop: "maxHeight",
  transform,
})

const minHeight = style({
  prop: "minHeight",
  transform,
})

const size = style({
  prop: "size",
  styleProp: ["width", "height"],
  transform,
})

const aspectRatio = style({
  prop: "aspectRatio",
})

export const sizing = compose<SizingProps>(
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  aspectRatio,
)
