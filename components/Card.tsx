import { FC } from 'react'
import Image from 'next/image'
import DecoderText from './DecoderText'

const Card: FC<{ author: string; text: string; i?: number }> = ({ author, text, i = 0 }) => {
    // tailwind class to move an element to the right is:
    return (
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm mx-auto my-4 p-4">
            <Image
                className="w-64 h-64 rounded-half mx-auto object-cover rounded-lg border-solid"
                src={`/images/${i + 1}.jpg`}
                alt=""
                width="256"
                height="256"
            />
            <header className="text-red-400 p-3 font-bold text-2xl">
                <DecoderText text={author} />
            </header>
            <p className="text-gray-700 text-base p-3">{text}</p>
        </div>
    )
}

export default Card
