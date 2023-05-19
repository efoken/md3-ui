import { useLocaleContext } from "react-native"

export function useLocale(): { direction: "ltr" | "rtl"; locale?: string } {
  return useLocaleContext()
}
