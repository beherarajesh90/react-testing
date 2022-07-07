import './styles.scss';

const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img
            data-test='logoImg'
            src='https://cdn-icons.flaticon.com/png/512/3387/premium/3387987.png?token=exp=1657190331~hmac=a6a780a7e615cc35cbfa195896db8eb1'
            alt=''
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
