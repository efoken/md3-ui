import { compose, style } from "../style"
import { SizingProps } from "./types"

function transform(value: string | number) {
  return typeof value === "number"
    ? value <= 1 && value !== 0
      ? `${value * 100}%`
      : value
    : value
}

export const width = style({
  prop: "width",
  transform,
})

export const maxWidth = style({
  prop: "maxWidth",
  transform,
})

export const minWidth = style({
  prop: "minWidth",
  transform,
})

export const height = style({
  prop: "height",
  transform,
})

export const maxHeight = style({
  prop: "maxHeight",
  transform,
})

export const minHeight = style({
  prop: "minHeight",
  transform,
})

export const size = style({
  prop: "size",
  styleProp: ["width", "height"],
  transform,
})

export const maxSize = style({
  prop: "size",
  styleProp: ["maxWidth", "maxHeight"],
  transform,
})

export const minSize = style({
  prop: "size",
  styleProp: ["minWidth", "minHeight"],
  transform,
})

export const aspectRatio = style({
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
