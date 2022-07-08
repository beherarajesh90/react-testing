import './app.scss';
import SharedButton from './components/button';
import Header from './components/header';
import Headline from './components/headline';
import ListItem from './components/listItem';
import { fetchPosts } from './actions/index';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(props.posts);
  }, [props]);
  const fetch = () => {
    props.fetchPosts();
    setPosts(props.posts);
  };

  const tempArr = [
    {
      name: 'john',
      email: 'john@saveplanet.com',
      age: 22,
      isOnline: true,
    },
  ];
  const btnConfig = {
    buttonText: 'Get Posts',
    emitEvent: fetch,
  };

  return (
    <div className='App' data-test='appComponent'>
      <Header />
      <main>
        <Headline
          heading='Heading'
          desc='lorem ipsum lorem isum'
          tempArr={tempArr}
        />
        <SharedButton {...btnConfig} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              return (
                <ListItem key={index} title={post.title} desc={post.body} />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
const mapPropsToState = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapPropsToState, { fetchPosts })(App);
