import React from 'react'
import BookCard from '../BookCard'


export default function ListOfBooks(){
  return (
    <div
      style={{
        display:'flex',
      }}>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
    </div>
  )
}