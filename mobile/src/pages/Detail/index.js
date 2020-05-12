import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { sendMail } from '../../lib/Mail';
import { sendMessage } from '../../lib/Whatsapp';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso '${
    incident.name
  }' com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  async function sendEmail() {
    await sendMail(incident.email, incident.name, message);
  }

  async function sendWhatsapp() {
    await sendMessage(incident.whatsapp, message);
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentProperty first>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendEmail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
