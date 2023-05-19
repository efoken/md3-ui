import { I18nManager } from "react-native"

export function useLocale(): { direction: "ltr" | "rtl"; locale?: string } {
  return { direction: I18nManager.isRTL ? "rtl" : "ltr" }
}
