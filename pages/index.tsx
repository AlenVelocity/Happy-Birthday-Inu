import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Header from '../components/Header'

const Home: NextPage<{ cards: Array<{ author: string, text: string }>}> = (props)  => {
    console.log(props)
    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-red-300 to-pink-400">
            <Head>
                <title>Happy Birthday Inu! 🎉</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property='og:image' content='https://images2.alphacoders.com/106/1067611.jpg' />
            </Head>

            <Header></Header>

            <main className="flex flex-col items-center col-span-2">
            <div className='flex flex-col items-center col-span-2'>
                {props.cards.map((card, index) => <Card author={card.author} text={card.text} i={index} key={index}/>)}
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
