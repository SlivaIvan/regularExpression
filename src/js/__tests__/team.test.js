import Team from '../team';
import Character from '../character';

test('testing the command class', () => {
  const teamIvan = new Team();
  const archerAlaster = new Character('Alaster', 'archer');
  teamIvan.add(archerAlaster);
  expect(teamIvan.members.has(archerAlaster)).toBe(true);
});
