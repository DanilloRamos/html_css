import React from 'react'
import './Thanks.css'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>Sua opinião é muito importante. Em breve, você receberá um cumpom de 10% de desconto para a sua próxima compra</p>
        <p>Para concluir a sua avaliação, clique no botão "Enviar" abaixo</p>
        <h3>Aqui está o resumo de sua avaliação {data.name}:</h3>
        <p className="review-data">
          <span>Satisfação com o produto: </span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks