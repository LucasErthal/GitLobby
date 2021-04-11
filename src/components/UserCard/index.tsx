import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileProps } from '../../screens/Profile';
import styles from './styles'

export interface User {
  profile: ProfileProps
  name: string
  login: string
  location: string
  avatar_url: string
}

interface UserCardProps {
  props: User
}

const UserCard: React.FC<UserCardProps> = ({ props }) => {
  const profile = props.profile
  const {navigate} = useNavigation();

  function NavigateToProfile() {
    navigate('Profile', {profile})
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={NavigateToProfile}
      >
        <Image
          style={styles.image}
          source={{ uri: props.avatar_url }}
        />

        <View style={styles.info}>
          <Text style={styles.text}>{props.name}</Text>

          <Text style={styles.text}>{props.login}</Text>

          <Text style={styles.text}>{props.location}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default UserCard;