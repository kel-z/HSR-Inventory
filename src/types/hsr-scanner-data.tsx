import { CharacterSkillKey, CharacterTraceKey } from "./game-data";

export type UserData = {
  source: string;
  version: number;
  light_cones: LightCone[];
  relics: Relic[];
  characters: Character[];
};

type LightCone = {
  key: string;
  level: number;
  ascension: number;
  superimposition: number;
  location: string;
  lock: boolean;
};

type Relic = {
  set: string;
  slot: string;
  rarity: number;
  level: number;
  mainstat: RelicMainstatKey;
  substats: RelicSubstat[];
  location: string;
  lock: boolean;
};

type Character = {
  key: string;
  level: number;
  ascension: number;
  eidolon: number;
  skills: {
    [key in CharacterSkillKey]: number;
  };
  traces: {
    [key in Exclude<CharacterTraceKey, "technique">]: number;
  };
};

type RelicMainstatKey =
  | "HP"
  | "ATK"
  | "DEF"
  | "SPD"
  | "Effect Hit Rate"
  | "CRIT Rate"
  | "CRIT DMG"
  | "Wind DMG Boost"
  | "Fire DMG Boost"
  | "Ice DMG Boost"
  | "Lightning DMG Boost"
  | "Quantum DMG Boost"
  | "Imaginary DMG Boost"
  | "Physical DMG Boost"
  | "Energy Regeneration Rate"
  | "Outgoing Healing Boost"
  | "Break Effect";

type RelicSubstatKey =
  | "HP"
  | "HP_"
  | "ATK"
  | "ATK_"
  | "DEF"
  | "DEF_"
  | "SPD"
  | "Effect Hit Rate_"
  | "Effect RES_"
  | "CRIT Rate_"
  | "CRIT DMG_"
  | "Break Effect_";

type RelicSubstat = {
  key: RelicSubstatKey;
  value: number;
};