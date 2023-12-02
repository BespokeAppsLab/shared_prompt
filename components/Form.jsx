import Link from 'next/link'
import React from 'react'

const Form = ({type, post,  setPost, handleSubmit, submitting}) => {
  return (
   <section className="w-full max h-full flex-start flex-col">
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Prompt
        </span>
      </h1>

      <p className='desc text-left max-w-md'>
        {type} a prompt to share with the community. You can use this prompt to generate a story, poem, song, or other creative work.
      </p>

      <form 
        onSubmit={handleSubmit}
        className='w-full flex flex-col mt-10 max-w-2xl gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            className='form_textarea'
            required
            placeholder='Write your prompt here...'
          />
        </label>
        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
            <span className='font-normal'> (#webDevelopment, #idea, #Image)</span>
          </span>
          <input
            type='text'
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            className='form_input'
            required
            placeholder='#tag'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-7'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white '
          >
            {submitting ? `${type}...` : type}
          </button>
          
        </div>
      </form>

   </section>
  )
}

export default Form
