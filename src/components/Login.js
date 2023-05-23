import AuthForm from './AuthForm';

const Login = () => {

  const verificationUser = ({email, password}) => {
    console.log(`Пользователь - ${ email } Пароль - ${ password }`);
  }

  return (
    <AuthForm
      handleSubmit={ verificationUser }
      title={ 'Вход' }
      name={ 'login' }
      buttonText={ 'Войти' }
    />
  );
};

export default Login;
