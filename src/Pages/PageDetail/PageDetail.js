import React from 'react'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import data from './assets/data'

function PageDetail () {
  const { text, title, date, img } = data
  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={img} alt='none' />
      <Wysiwyg text={text} />
    </div>
  )
}

export default PageDetail
