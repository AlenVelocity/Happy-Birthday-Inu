import { join } from 'path'
import { readdir, readFile } from 'fs/promises'

export const getCards = async () => {
    const path = join(process.cwd(), 'public', 'cards')
    const files = await readdir(path)
    const cards = await Promise.all(
        files.map(async (file) => {
            const content = await readFile(join(path, file), 'utf8')
            const author = file.split('.')[0]
            return { author, text: content }
        })
    )
    return cards
}
