import React from 'react';

import { useForm } from '../../shared/hooks/form-kook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import './Auth.css';
import '../../places/pages/PlaceForm.css';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const userSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Card className="authentication">
      <h2 className="authentication__header title">Connexion</h2>

      <form className="place-form" onSubmit={userSubmitHandler}>
        <Input
          id="email"
          element="input"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          error="S'il vous plaît, entrez une adresse email valide."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Mot de passe"
          validators={[VALIDATOR_MINLENGTH(5)]}
          error="S'il vous plaît, entrez un mot de passe valide."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          S'identifer
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
