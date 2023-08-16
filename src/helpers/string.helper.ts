//write a function to capitalize first letter of a string even with accents

export function capitalize(str: string): string {
    return str.charAt(0).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() + str.slice(1);;
}

export function normalizeString(str: string) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }