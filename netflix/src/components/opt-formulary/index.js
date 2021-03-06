import React from 'react';
import { Container, Input, Button, Text } from './styles/opt-formulary';

export default function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

OptForm.Input = function OptFormInputt({ ...props }) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
