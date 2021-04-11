import React, { useEffect, useState } from 'react';
import { Image, Route, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RepositoryCard, { Repository } from '../../components/RepositoryCard';
import api from '../../services/api';

import styles from './styles';

export interface ProfileProps {
  name: string
  login: string
  location: string
  avatar_url: string
  id: string
  followers: string
  public_repos: string
}

function Profile(props:Route) {
  const profile:ProfileProps = props.route.params.profile;

  const [repos, setRepos] = useState<[Repository]>();

  async function getRepos() {
    const response = await api.get(`users/${profile.login}/repos`);

    setRepos(response.data);
  }

  useEffect( () => {
    getRepos();
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{uri:profile.avatar_url}}
          style={styles.image}
        />

        <View style={styles.infoCard}>
          <Text style={styles.text}>{profile.name}</Text>

          <Text style={styles.text}>{profile.login}</Text>

          <Text style={styles.text}>{profile.location}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.text}>ID</Text>

          <Text style={styles.text}>{profile.id}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.text}>Followers</Text>

          <Text style={styles.text}>{profile.followers}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.text}>Repositórios</Text>

          <Text style={styles.text}>{profile.public_repos}</Text>
        </View>
      </View>

      <Text style={styles.title}>Repositórios</Text>

      <ScrollView style={styles.scroll}>
      {repos &&
        repos.map(element => {
          const repo:Repository = {
            name: element.name,
            description: element.description,
            created_at: element.created_at,
            html_url: element.html_url,
            language: element.language,
            pushed_at: element.pushed_at
          }

          return (
           <RepositoryCard 
            props={repo} 
            key={repos.indexOf(element)}
           />
          )  
        })
      }
      </ScrollView>
    </View>
  );
}

export default Profile;