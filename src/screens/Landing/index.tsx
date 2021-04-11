import React, { useState } from 'react';
import { Text, View } from "react-native";
import { BorderlessButton, TextInput } from 'react-native-gesture-handler';
import UserCard, {User} from '../../components/UserCard';

import api from '../../services/api';

import SearchIcon from '../../assets/searchIcon';
import styles from './styles';
import { ProfileProps } from '../Profile';

function Landing() {
  const [input, setInput] = useState('');
  const [card, setCard] = useState<User>();

  async function handleGetUser(user: string) {
    if(user) {
      try {
        const response = await api.get(`/users/${user}`);

        const profile:ProfileProps = {
          name: response.data.name,
          login: response.data.login,
          location: response.data.location,
          avatar_url: response.data.avatar_url,
          id: response.data.id,
          followers: response.data.followers,
          public_repos: response.data.public_repos
        }

        setCard({
          profile,
          name: response.data.name,
          login: response.data.login,
          location: response.data.location,
          avatar_url: response.data.avatar_url,
        })
        
      } catch(err) {
        console.log(err);
      }
    } else {
      console.log('Digite um usuário')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput 
          style={styles.input}
          value={input}
          onChangeText={ (text) => setInput(text) }
        />

        <BorderlessButton 
          style={styles.searchButton}
          onPress={ () => { handleGetUser(input) }}
        >
          <SearchIcon width={'100%'} height={'100%'} />
        </BorderlessButton>
      </View>

      <View style={styles.resultContainer}>
        {!card &&
          <Text style={styles.description}>
            Utilize a barra de pesquisa acima{'\n'}para encontrar usuários!
          </Text>
        }

        {card &&
          <UserCard props={card} />
        }
      </View>

      <View style={styles.lastSearchsContainer}>
        <Text style={styles.title}>
          Pesquisas Recentes
        </Text>
      </View>
    </View>
  );
}

export default Landing;