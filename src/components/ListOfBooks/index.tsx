import React from 'react'
import BookCard from '../BookCard'

export default function ListOfBooks(){
  return (
    <div
      style={{
        display:'flex',
        justifyContent:'space-between',
      }}>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
    </div>
  )
}