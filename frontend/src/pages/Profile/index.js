import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';

import { Container, Header, Title, List } from './styles';

import api from '../../services/api';

export default function Profile() {
  const { name: ongName, id: ongId } = JSON.parse(localStorage.getItem('@ONG'));

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('profile', {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(response.data);
      } catch (error) {
        alert('Erro em carregar seus casos.');
      }
    }

    getData();
  }, [ongId]);

  async function handleDeleteIncident(idIncident) {
    try {
      await api.delete(`incidents/${idIncident}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== idIncident));
    } catch (error) {
      alert(
        error.response.data
          ? error.response.data.error
          : 'Não foi possível Deletar'
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem('@ONG');
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem Vindo(a), {ongName}</span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>

        <Button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </Button>
      </Header>

      <Title>Casos Cadastrados:</Title>

      <List>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>
            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
}
