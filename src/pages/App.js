import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';
import UserInput from '../components/UserInput';

function App() {
  const [user, setUser] = useState('');
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
    try {
      if (!user || !currentRepo) {
        alert('Usuário ou repositório não podem estar vazios.');
        return;
      }

      const { data } = await api.get(`repos/${user}/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }

      alert('Repositório não encontrado');
    } catch (error) {
      console.error('Erro ao buscar o repositório:', error);
      alert('Erro ao conectar com a API');
    }
  };

  const handleRemoveRepo = (id) => {
    const newArray = repos.filter(item => item.id !== id);
    setRepos(newArray);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <UserInput value={user} onChange={(event) => setUser(event.target.value)} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
