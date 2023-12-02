"use client";

import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {

    const router = useRouter();

    const {data: session} = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: '',
        tag: '',
    })

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userID: session?.user.id,
                })
            })

            if (response.ok) {
                router.push('/')
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <Form
        type="create"
        post={post}
        setPost={setPost}
        handleSubmit={createPrompt}
        submitting={submitting}
    />
  )
}

export default CreatePrompt
