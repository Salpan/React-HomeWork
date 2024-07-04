import { Link } from 'react-router-dom';
import './styles.css'

export const Main = () => {
  return (
    <>
      <h1>
        Choose app
      </h1>
      <div className='link'>
        <Link to="/gallery">Gallery</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </>
  )
}