import React from 'react'
import { Linking, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'

export interface Repository {
  html_url: string
  name: string
  description: string
  language: string
  created_at: Date
  pushed_at: Date
}

interface RepositoryCardProps {
  props:Repository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({props}) => {
  const created_date = new Date(props.created_at);
  const pushed_date = new Date(props.pushed_at);

  const c_date = `${created_date.getDate()}-${created_date.getMonth() + 1}-${created_date.getFullYear()}`;
  const p_date = `${pushed_date.getDate()}-${pushed_date.getMonth() + 1}-${pushed_date.getFullYear()}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => { Linking.openURL(props.html_url) } }
      >
        <View style={styles.header}>
          <Text style={styles.title}>{props.name}</Text>

          <Text style={styles.text}>{props.description}</Text>
        </View>

        {props.language &&
          <View style={styles.languageContainer}>
            <View style={styles.languageCircle} />
            <Text style={styles.text}>{props.language}</Text>
          </View>
        }

        <Text style={styles.text}>Criado em: {c_date}</Text>

        <Text style={styles.text}>Último push: {p_date}</Text>

      </TouchableOpacity>
    </View>
  );
}

export default RepositoryCard;