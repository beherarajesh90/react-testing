import './styles.scss';

const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-test='logoImg' src='logo512.png' alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
