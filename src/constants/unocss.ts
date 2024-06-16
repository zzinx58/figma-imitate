import type { AttributifyNames } from "@unocss/preset-attributify";
export type { AttributifyNames, KeyOfUnoAttri, UnoAttriesObj };

type KeyOfUnoAttri = `un-${AttributifyNames}`;
type UnoAttriesObj = Partial<Record<KeyOfUnoAttri | "className", string>>;
