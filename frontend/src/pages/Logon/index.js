import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { SectionForm } from './styles';

import Container from '../../components/Container';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem(
        '@ONG',
        JSON.stringify({ id, name: response.data.name })
      );

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt="Be The Hero" />
        <Form marginTop="100px" onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </SectionForm>
      <img src={heroesImg} alt="heroes" />
    </Container>
  );
}
