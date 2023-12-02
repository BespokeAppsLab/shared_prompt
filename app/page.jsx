import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share {' '}
            <br className="max-md:hidden"/>
            <span className="orange_gradient">
            AI-Powered Prompts
            </span>
        </h1>

        <p className="desc text-center">
            Shared Prompts is a community of writers, artists and creators who share prompts for interacting with AI, such as GPT-3, Midjourney and others.
        </p>

        <Feed />
    </section>
  )
}

export default Home
