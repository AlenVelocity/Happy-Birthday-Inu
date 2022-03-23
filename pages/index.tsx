import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

const Home: NextPage<{ cards: Array<{ author: string; text: string }> }> = (props) => {
    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-red-300 to-pink-400">
            <Head>
                <title>Happy Birthday Inu! 🎉</title>
                <meta name="description" content="" />

                <meta property="og:url" content="https://happy-birthday-inu.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Happy Birthday Inu! 🎉" />
                <meta property="og:description" content="" />
                <meta property="og:image" itemProp='image' content="https://happy-birthday-inu.vercel.app/banner.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="happy-birthday-inu.vercel.app" />
                <meta property="twitter:url" content="https://happy-birthday-inu.vercel.app/" />
                <meta name="twitter:title" content="Happy Birthday Inu! 🎉" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="https://happy-birthday-inu.vercel.app/banner.png" />
            </Head>

            <Header></Header>

            <main className="flex flex-col items-center col-span-2">
                <audio src="/precious_photographs.mp3" autoPlay loop></audio>
                <div className="flex flex-col items-center col-span-2">
                    {props.cards.map((card, index) => (
                        <Card author={card.author} text={card.text} i={index} key={index} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const { getCards } = await import('../lib/cards')
    const cards = await getCards()
    console.log(cards)
    return { props: { cards: cards } }
}

export default Home
