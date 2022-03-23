import { Component, FC, useEffect, useState } from 'react'

// prettier-ignore
const Glyphs = [
        'ア', 'イ', 'ウ', 'エ', 'オ',
        'カ', 'キ', 'ク', 'ケ', 'コ',
        'サ', 'シ', 'ス', 'セ', 'ソ',
        'タ', 'チ', 'ツ', 'テ', 'ト',
        'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
        'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
        'マ', 'ミ', 'ム', 'メ', 'モ',
        'ヤ', 'ユ', 'ヨ', 'ー',
        'ラ', 'リ', 'ル', 'レ', 'ロ',
        'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
        'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
        'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
        'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
        'バ', 'ビ', 'ブ', 'ベ', 'ボ',
        'パ', 'ピ', 'プ', 'ペ', 'ポ',
]

const DecoderText: FC<{ text: string }> = ({ text }) => {
    const [decodedText, setDecodedText] = useState(
        text
            .split('')
            .map(() => Glyphs[Math.floor(Math.random() * Glyphs.length)])
            .join('')
    )

    const { length } = text

    let dc = decodedText.split('')
    useEffect(() => {
        const interval = setInterval(async () => {
            for (let i = 0; i < length; i++) {
                await new Promise<void>((resolve) =>
                    setTimeout(() => {
                        dc[i] = text[i]
                        setDecodedText(dc.join(''))
                        resolve()
                    }, 100)
                )
            }
        }, 100)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>{decodedText}</div>
}

export default DecoderText
