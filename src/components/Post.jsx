import Header from './Header.jsx'

const Main = function() {
    return  <main>lorem...</main>
  };
  const Footer = () => {
    return  <footer>Like it!</footer>
  };
  
 
  function Post() {
    return (
    <div>
        Post:
      <Header name="Adam" surname="Nowak"/>
     <Main />
      <Footer />
    </div>
    );
  }
    
  export default Post;