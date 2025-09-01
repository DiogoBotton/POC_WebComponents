import { Portfolio } from './components/portfolio/Portfolio'
import { Post } from './components/post/Post'

function App() {

  return (
    <div>
      <h1>Home</h1>

      <Portfolio name='Diogo' githuburl='https://github.com/DiogoBotton'/>
      <Post />
    </div>
  )
}

export default App
