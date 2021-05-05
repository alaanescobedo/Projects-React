import React from 'react';
import { Container, Title, Row, Column, Link, Text, Break } from './styles/footer';

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}>{children}</Column>;
};
Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};
Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
Footer.Break = function FooterBreak({ children, ...props }) {
  return <Break {...props}>{children}</Break>;
};
