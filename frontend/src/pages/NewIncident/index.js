import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

import { Section } from './styles';

import api from '../../services/api';

export default function NewIncidents() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const { id } = JSON.parse(localStorage.getItem('@ONG'));

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: id,
        },
      });

      alert('Caso criado com sucesso.');

      history.push('/profile');
    } catch (error) {
      alert('Não foi possível cadastrar um novo caso, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Heroes" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolver.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para profile
          </Link>
        </Section>
        <Section>
          <Form maxWidth="480" onSubmit={handleNewIncident}>
            <Input
              type="text"
              placeholder="Título do Caso"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              type="text"
              placeholder="Descrição do Caso"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Valor em reais"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </Section>
      </Content>
    </Container>
  );
}
