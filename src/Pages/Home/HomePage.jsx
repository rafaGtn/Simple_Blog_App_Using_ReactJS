import data from '../../assets/data.json';
import AppPost from '../../components/AppPost/AppPost.jsx';
import './HomePage.css';

function HomePage() {
  return (
    <main>
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Welcome to Simple Blog</h1>
        <p style={{textAlign: 'center', color: '#666', marginBottom: '40px'}}>
          Recent blog posts about React and web development
        </p>
        <ul className='posts_container'>
          {data.map((post) => (
            <AppPost key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
}
export default HomePage;