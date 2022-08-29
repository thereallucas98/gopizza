import React from "react";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container } from "./styles";

function SignIn() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input placeholder="Senha" type="secondary" secureTextEntry />

      <Button title="Entrar" isLoading={false} type="secondary" />
    </Container>
  );
}

export { SignIn };
