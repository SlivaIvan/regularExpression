import Team from './team';
import Character from './character';

const archerAlaster = new Character('Alaster', 'archer');
const archerAlfi = new Character('Alfi', 'archer');

const teamIvan = new Team();

teamIvan.add(archerAlaster);
teamIvan.add(archerAlfi);
