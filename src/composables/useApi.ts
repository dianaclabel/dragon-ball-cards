import type { CharactersResponse } from '../interfaces/characterResponse'

export const getCharacters = async () => {
  const resp = await fetch(
    'https://dragonball-api.com/api/characters?&limit=20',
  )
  if (!resp.ok) throw new Error('Error fetching characters')
  const data = (await resp.json()) as CharactersResponse
  return data.items
}
