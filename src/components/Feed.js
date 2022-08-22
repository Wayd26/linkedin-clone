import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import {db} from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Feed.css';
import InputOption from './InputOption';
import Post from './Post';


function Feed() {   

    // Variables
    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('')

    // Methods
    const sendPost = (e) => {
        e.preventDefault();
        console.log('input ', inputValue)
        db.collection("posts").add({
            name: "Wassiou Ayedoun",
            description: "Web Frontend Developer - React",
            message: inputValue,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInputValue('')
        fetchPosts();
    }

    const fetchPosts = () => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(
                snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )).reverse()
            )
        })
    }

    // Effects

    useEffect(() => {
        fetchPosts()
        
    }, [])


    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form onSubmit={sendPost}>
                        <input value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type="text"
                             />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title={'Photo'} color={'#70B5F9'} />
                    <InputOption Icon={Subscriptions} title={'Video'} color={'#E7A33E'} />
                    <InputOption Icon={EventNote} title={'Event'} color={'#C0CBCD'} />
                    <InputOption Icon={CalendarViewDay} title={'Write article'} color={'#7FC15E'} />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } } )=> 
            (<Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}

            />)
            )}
        </div>
    )
}

export default Feed