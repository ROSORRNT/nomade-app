import React, { useState } from 'react';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';
import '../../places/pages/PlaceForm.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
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

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2 className="authentication__header title">Connexion</h2>

      <form className="place-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Nom"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Vueillez entrer un nom."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          error="Veuillez entrez une adresse email valide."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Mot de passe"
          validators={[VALIDATOR_MINLENGTH(5)]}
          error="Veuillez, entrez un mot de passe valide (minimum de 5 caractères)"
          onInput={inputHandler}
        />
        {/* {!isLoginMode && (
          <Input
            element="input"
            id="password-confirm"
            type="password"
            label="Confirmation du mot de passe"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Veuillez, entrez un mot de passe valide (minimum de 5 caractères)"
            onInput={() => {}}
          />
        )} */}
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "S'identifier" : "S'inscrire"}
        </Button>
      </form>
      <Button onClick={switchModeHandler}>
        {isLoginMode ? "S'inscrire" : "S'identifier"}
      </Button>
    </Card>
  );
};

export default Auth;
