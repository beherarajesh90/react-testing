import './styles.scss';

const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img
            data-test='logoImg'
            src='https://cdn-icons-png.flaticon.com/512/7293/7293690.png'
            alt=''
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
