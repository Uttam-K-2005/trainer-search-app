import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Profile from './Profile';
import Recipes from './Recipes';

export default function App() {
  const [tab, setTab] = useState('Profile');

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {tab === 'Profile' ? <Profile user={user} /> : <Recipes />}
      </View>

      <View style={styles.tabBar}>
        <TabButton title="Profile" active={tab === 'Profile'} onPress={() => setTab('Profile')} />
        <TabButton title="Recipes" active={tab === 'Recipes'} onPress={() => setTab('Recipes')} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function TabButton({ title, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.tabButton, active && styles.tabButtonActive]} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: { flex: 1 },
  tabBar: { flexDirection: 'row', height: 64, borderTopWidth: 1, borderColor: '#eee' },
  tabButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabButtonActive: { backgroundColor: '#f0f7ff' },
  tabText: { color: '#333', fontSize: 16 },
  tabTextActive: { color: '#0a84ff', fontWeight: '700' },
});
