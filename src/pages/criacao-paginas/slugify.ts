// Sugere um endereço a partir do título, respeitando o limite de caracteres.
export const slugify = (text: string) => text
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 30)
  .replace(/-+$/g, '')
