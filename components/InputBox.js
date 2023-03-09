import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { RiLiveFill } from 'react-icons/ri'
import { MdPhotoCamera } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { collection, addDoc, serverTimestamp, setDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from '@/firebase'
import { getDownloadURL, listAll, ref, uploadString } from "firebase/storage";
import { getDatabase, set } from "firebase/database";

function InputBox() {
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const sendPost = async (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    try {
      await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      }).then(post => {
        if (imageToPost) {
          const imageRef = ref(storage, `posts/${post.id}`)
          uploadString(imageRef, imageToPost, 'data_url').then(() => {
            console.log('Uploaded a raw string!');
          });
          removeImage()
          const imageList = ref(storage, "posts")
          listAll(imageList).then((res) => {
            res.items.map((item) => {
              getDownloadURL(item).then(url => {
                const dataRef = doc(db, `posts/${post.id}`);
                setDoc(dataRef,{
                    postImage: url
                  },{ merge: true })
              })
            })
          })
        }
      })
    } catch (e) {
      console.error("Error adding document: ", e)
    }
    inputRef.current.value = ''
  }
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }
  const removeImage = () => {
    setImageToPost(null)
  }
  return (
    <div className='bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          alt="user"
          width={40}
          height={40}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <form className='flex flex-1'>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type={"text"}
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button type='submit' hidden onClick={sendPost}>Sumbit</button>
        </form>
        {
          imageToPost && (
            <div onClick={removeImage} className="flex flex-col filter transition duration-150 transform cursor-pointer hover:brightness-110 hover:scale-105">
              <img className='h-10 object-contain' alt='image' src={imageToPost} />
              <p className='text-xs text-red-500 text-center'>Remove</p>
            </div>
          )
        }
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <RiLiveFill className="text-red-500" size={21} />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={() => filepickerRef.current.click()} className='inputIcon'>

          <MdPhotoCamera className="text-green-500" size={21} />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input type={"file"} className="" onChange={addImageToPost} hidden ref={filepickerRef} />
        </div>

        <div className='inputIcon'>
          <BsEmojiSmile className="text-yellow-500" size={21} />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox