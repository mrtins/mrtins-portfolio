export interface ISkill {
  name: string;
  years: number;
  img: any;
  url: string;
}

export interface ISkillList {
  [x: string]: any;
  [index: number]: ISkill;
}
