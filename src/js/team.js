export default class Team {
  constructor() {
    this.members = new Set([]);
  }

  // Добавляет игрока и проверяет на то чтобы небыло повторений выдает ошибку
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Ошибка, такой персонаж уже есть');
    }
    this.members.add(character);
  }

  // Добавляет много игроков и проверяет на то чтобы небыло повторений не выдает ошибку
  addAll(...characters) {
    characters.forEach((char) => {
      if (!this.members.has(char)) {
        this.members.add(char);
      }
    });
  }

  // Производит конвертацию set в массив
  toArray() {
    return Array.from(this.members);
  }
}
