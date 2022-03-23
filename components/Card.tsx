import { FC } from 'react'
import Image from 'next/image'
import DecoderText from './DecoderText'

const Card: FC<{ author: string; text: string; i?: number }> = ({ author, text, i = 0 }) => {
    // tailwind class to move an element to the right is:
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-2xl w-full max-w-sm mx-auto my-4 p-4 items-center justify-center">
            <div className=' w-3/4'>
            <Image
                className="w-64 h-64 rounded-half mx-auto object-cover rounded-lg"
                src={`/images/${i + 1}.jpg`}
                alt=""
                width="270"
                height="270"
            />
            </div>
            <header className="text-red-400 p-3 font-bold text-2xl">
                <DecoderText text={author} />
            </header>
            <p className="text-gray-700 p-3 text-base">{text}</p>
        </div>
    )
}

export default Card
