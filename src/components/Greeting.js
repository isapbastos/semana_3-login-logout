import 	React from 'react';

function UserGreeting(props) {
  return <h2>Você está logado!</h2>;
}

function GuestGreeting(props) {
  return <h2>Você não está logado!</h2>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;