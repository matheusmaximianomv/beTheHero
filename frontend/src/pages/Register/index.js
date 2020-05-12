import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Section } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Heroes" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </Section>
        <Form maxWidth="480" onSubmit={handleRegister}>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nome da ONG"
          />
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail"
          />
          <Input
            type="text"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
            placeholder="Whatsapp"
          />

          <div>
            <Input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="Cidade"
            />
            <Input
              type="text"
              onChange={(e) => setUf(e.target.value)}
              value={uf}
              style={{ width: 80 }}
              placeholder="UF"
            />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
