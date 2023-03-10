// @ts-expect-error: `useLocaleContext` is Web exclusive
import { I18nManager, Platform, useLocaleContext } from "react-native"

export function useLocale(): { direction: "ltr" | "rtl"; locale?: string } {
  if (Platform.OS === "web") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useLocaleContext()
  }
  return { direction: I18nManager.isRTL ? "rtl" : "ltr" }
}
