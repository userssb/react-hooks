import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentText(event.target.value)

  const commentDetails = {name, commentText}

  const onAddComment = event => {
    event.preventDefault()
    setName('')
    setCommentText('')
    setComment({name, commentText})
    const newComment = {
      id: uuidv4,
      name,
      commentText,
    }
    setCommentsList(prevList => [...prevList, newComment])
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          onChange={onChangeName}
          value={name}
          placeholder="Your name"
        />
        <CommentTextInput
          placeholder="Your comment"
          onChange={onChangeCommentText}
          value={commentText}
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
