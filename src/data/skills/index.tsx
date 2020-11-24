import * as javascript from '../../images/skills/javascript.svg';
import * as typescript from '../../images/skills/typescript.svg';
import * as react from '../../images/skills/react.svg';
import * as nodejs from '../../images/skills/nodejs.svg';
import * as java from '../../images/skills/java.svg';
import * as spring from '../../images/skills/spring.svg';
import * as aws from '../../images/skills/aws.svg';
import * as docker from '../../images/skills/docker.svg';
import * as git from '../../images/skills/git.svg';
import * as jest from '../../images/skills/jest.svg';
import * as sql from '../../images/skills/sqlsvg.svg';

import { ISkillList } from './types';

const skills: ISkillList = [
  { name: 'Javascript', years: 3, img: javascript, url: 'https://www.javascript.com/' },
  { name: 'Typescript', years: 2, img: typescript, url: 'https://www.typescriptlang.org/' },
  { name: 'React', years: 3, img: react, url: 'https://pt-br.reactjs.org/' },
  { name: 'Node.Js', years: 3, img: nodejs, url: 'https://nodejs.org/en/' },
  { name: 'Java', years: 3, img: java, url: 'https://www.java.com/' },
  { name: 'Spring Framework', years: 3, img: spring, url: 'https://spring.io/' },
  { name: 'AWS', years: 1, img: aws, url: 'https://aws.amazon.com/' },
  { name: 'Docker', years: 1, img: docker, url: 'https://www.docker.com/' },
  { name: 'Git', years: 3, img: git, url: 'https://git-scm.com/' },
  { name: 'Jest', years: 1, img: jest, url: 'https://jestjs.io/' },
  { name: 'SQL Databases', years: 3, img: sql, url: 'https://www.mysql.com/' },
];

export default skills;
