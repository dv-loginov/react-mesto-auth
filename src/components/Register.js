import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';

const Register = () => {
  const verificationUser = ({email, password}) => {
    console.log(`Пользователь - ${ email } Пароль - ${ password }`);
  }

  return (
    <AuthForm
      handleSubmit={ verificationUser }
      title={ 'Регистрация' }
      name={ 'sign-in' }
      buttonText={ 'Зарегистрироваться' }
    >
    <span className='auth__question'>
      Уже зарегистрированы?
      <Link className='auth__link' to='/login'>Войти</Link>
    </span>
    </AuthForm>
  );
};

export default Register;
