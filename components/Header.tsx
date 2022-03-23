import { FC } from 'react'
import DecoderText from './DecoderText'

const Header: FC = () => {
    return (
        <header className="text-center">
            <div className="font-bold text-2xl">
                <h1 className="text-white text-2x-l font-bold">
                    <DecoderText text="Happy Birthday, Inuu!"></DecoderText> 🎉
                    <h2>May all of your wishes come true!</h2>
                </h1>
            </div>
        </header>
    )
}

export default Header
