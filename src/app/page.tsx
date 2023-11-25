"use client"

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from '../data/photoList';
import { useState } from 'react';
import { Modal } from "@/components/Modal";

const Page = () => {
  const [showInput, setShowInput] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setShowInput(true);
      setImageOfModal(photo.url);
    }
  }

  const closeModal = () => {
    setShowInput(false);
  }

  return (
   <div className="mx-2">
    <h1 className="text-3xl font-bold text-center my-10">Fotos intergalacticas</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

      {photoList.map((item, index)=> (
      <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)} />
      ))
      }
      </section>

      {showInput &&
        <Modal image={imageOfModal} closeModal={closeModal} />

      }


      
   </div>
  )
}

export default Page;