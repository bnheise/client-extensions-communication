interface Liferay {
  ThemeDisplay: ThemeDisplay;
  authToken: string;
  Util: Util;
  custom: SugarCustom;
  Language: Language;
  fire: (eventName: string, payload: any) => void;
  on: (eventName: string, cb: (payload: any) => void) => void;
}

interface ThemeDisplay {
  getPathThemeImages: () => string;
  getPortalURL: () => string;
  getLanguageId: () => string;
  getSiteAdminURL: () => string;
  getDefaultLanguageId: () => string;
}

interface Language {
  available: {
    [key: string]: string;
  };
}

interface Util {
  isPhone: () => boolean;
}

interface SugarCustom {
  userPortraitUrl: string;
}

declare global {
  interface Window {
    Liferay: Liferay;
  }
}

export const getLiferay = (): Liferay => {
  const Liferay = window.Liferay;
  if (Liferay === null || Liferay === undefined)
    throw new Error("Liferay global object not found");

  return Liferay;
};
