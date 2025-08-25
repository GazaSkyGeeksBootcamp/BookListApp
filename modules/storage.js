export class Storage {
  #key;
  constructor(key) {
    this.#key = key;
  }

  getList() {
    const stored = localStorage.getItem(this.#key);
    return JSON.parse(stored);
  }

  save(item) {
    const stored = localStorage.getItem(this.#key);
    const parsed = JSON.parse(stored);
    parsed.push(item);
    localStorage.setItem(this.#key, JSON.stringify(parsed));
  }

  removeItem(id) {
    const stored = localStorage.getItem(this.#key);
    const parsed = JSON.parse(stored);
    const newList = parsed.filter((item) => Number(item.id) !== Number(id));
    localStorage.setItem(this.#key, JSON.stringify(newList));
  }
}
