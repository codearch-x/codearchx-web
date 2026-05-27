export const LOCALES = ["en", "bg"] as const;

export type AppLocale = (typeof LOCALES)[number];
export type AppMessages = Record<string, string>;

export const loadMessages = async (locale: AppLocale): Promise<AppMessages> => {
  switch (locale) {
    case "bg":
      return (await import("./bg.ts")).default;
    case "en":
    default:
      return (await import("./en.ts")).default;
  }
}
