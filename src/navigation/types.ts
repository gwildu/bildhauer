export interface INavigationItem {
  level: number;
  name: string;
  displayName: DisplayName;
  path: string;
}

export interface IMainNavigationItem extends INavigationItem {
  sub?: INavigationItem[];
}
export interface ISecondLevelNavigationItem extends INavigationItem {
  // fro now no third level, but we can add it later if needed
}

type DisplayName = Partial<DisplayNameRecord>;
type DisplayNameRecord = Record<AllowedLocaleKeys, string>;
type AllowedLocaleKeys = "de-CH" | "en";
