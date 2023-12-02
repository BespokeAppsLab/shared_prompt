import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const matadata = {
    title: 'shared prompts',
    description: 'shared prompts for interacting with AI, such as GPT-3, Midjourney and others',
    url: 'https://sharedprompts.com',
    image: 'https://sharedprompts.com/images/og-image.jpg',
    twitterUsername: '@sharedprompts',
    keywords: 'shared prompts, gpt-3, midjourney, ai, artificial intelligence, prompts, shared, writing, writing prompts, ai prompts, ai writing prompts, shared writing prompts, shared ai prompts, shared ai writing prompts, shared prompts for interacting with ai, shared prompts for interacting with gpt-3, shared prompts for interacting with midjourney, shared prompts for interacting with artificial intelligence, shared prompts for interacting with artificial intelligence, shared prompts for interacting with ai, shared prompts for interacting with gpt-3, shared prompts for interacting with midjourney, shared prompts for interacting with artificial intelligence, shared prompts for interacting with artificial intelligence',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">

        
        <body>
            <Provider>

                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>

            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
