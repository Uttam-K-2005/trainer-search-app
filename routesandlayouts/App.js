import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from './Profile';

export default function App() {
  const user = {
    name: 'UTTAM k',
    job: 'Software Engineer',
    email: 'uttam@example.com',
    bio: 'Software engineer building cross-platform mobile apps.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    projects: [
      {
        title: 'Trainer Search App',
        description: 'A React Native app to find fitness trainers nearby with filters, profiles, and booking.',
        link: '',
      },
      {
        title: 'Workout Tracker',
        description: 'An app to log workouts, visualize progress, and set goals.',
        link: '',
      },
    ],
    experience: [
      {
        company: 'Acme Soft',
        role: 'Software Engineer',
        period: '2022 - Present',
        details: 'Built and maintained mobile applications using React Native and backend APIs.',
      },
      {
        company: 'Tech Solutions',
        role: 'Junior Developer',
        period: '2020 - 2022',
        details: 'Worked on cross-platform projects and assisted in UI/UX improvements.',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Profile user={user} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
