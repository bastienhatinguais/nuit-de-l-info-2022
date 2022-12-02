import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import React from 'react';

export default function AuthStatus() {
  let auth = useContext(AuthContext);

  if (!auth.user) {
    return <p>Vous n'êtes pas connecté.</p>;
  }

  return (
    <p>
      Bienvenue {auth.user.prenom}!{' '}
      <button
        onClick={() => {
          auth.logout();
        }}
      >
        Sign out
      </button>
    </p>
  );
}
