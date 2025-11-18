import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Profile({ user }) {
  const u = user || {
    name: 'Uttam Kumar',
    job: 'Mobile Developer',
    email: 'uttam@example.com',
    bio: 'Mobile developer and fitness enthusiast.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    projects: [
      { title: 'Trainer Search App', description: 'A React Native app to find fitness trainers nearby with filters and profiles.', link: '' },
      { title: 'Workout Tracker', description: 'An app to log workouts and track progress over time.', link: '' },
    ],
    experience: [
      { company: 'Acme Soft', role: 'Software Engineer', period: '2022 - Present', details: 'Worked on mobile apps and backend services.' },
      { company: 'Tech Solutions', role: 'Junior Developer', period: '2020 - 2022', details: 'Contributed to cross-platform React Native projects.' },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.card}>
      <Image source={{ uri: u.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{u.name}</Text>
        {u.job ? <Text style={styles.job}>{u.job}</Text> : null}
        {u.email ? <Text style={styles.email}>{u.email}</Text> : null}
        {u.bio ? <Text style={styles.bio}>{u.bio}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        {u.projects && u.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {u.projects.map((p, idx) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemTitle}>{p.title}</Text>
                <Text style={styles.itemText}>{p.description}</Text>
                {p.link ? (
                  <Text style={styles.link} onPress={() => Linking.openURL(p.link)}>{p.link}</Text>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {u.experience && u.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {u.experience.map((e, idx) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemTitle}>{e.role} — {e.company}</Text>
                <Text style={styles.itemMeta}>{e.period}</Text>
                <Text style={styles.itemText}>{e.details}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    color: '#666',
    marginBottom: 8,
  },
  bio: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 12,
  },
  job: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    fontWeight: '500',
  },
  section: { marginTop: 18, alignSelf: 'stretch' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  item: { marginBottom: 10 },
  itemTitle: { fontSize: 15, fontWeight: '600' },
  itemMeta: { color: '#666', marginBottom: 4 },
  itemText: { color: '#333' },
  link: { color: '#0a84ff', marginTop: 6 },
  button: {
    backgroundColor: '#0a84ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
