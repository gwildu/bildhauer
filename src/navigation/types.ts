export interface INavigationItem<INavigationItem> {
  level: number;
  name: string;
  displayName: DisplayName;
  path: string;
  sub?: INavigationItem[];
}

type DisplayName = Partial<DisplayNameRecord>;
type DisplayNameRecord = Record<AllowedLocaleKeys, string>;
type AllowedLocaleKeys = "de-CH" | "en";
