import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';

const RECIPES = [
  {
    id: '1',
    title: 'Classic Fried Rice',
    time: '20 mins',
    serves: 2,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
    ingredients: ['2 cups cooked rice', '1 egg', '1/2 cup peas & carrots', '2 tbsp soy sauce', '1 tbsp oil', 'salt & pepper'],
    steps: ['Heat oil in a pan.', 'Scramble the egg, set aside.', 'Sauté veggies, add rice.', 'Mix soy sauce and season.', 'Stir in egg and serve hot.'],
  },
  {
    id: '2',
    title: 'Tomato Pasta',
    time: '25 mins',
    serves: 2,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['200g pasta', '2 tomatoes', '1 clove garlic', '2 tbsp olive oil', 'salt & basil'],
    steps: ['Boil pasta until al dente.', 'Sauté garlic and tomatoes.', 'Mix pasta with sauce.', 'Add basil and serve.'],
  },
  {
    id: '3',
    title: 'Avocado Toast',
    time: '10 mins',
    serves: 1,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7890abcdef1234567890',
    ingredients: ['2 slices bread', '1 ripe avocado', 'salt & pepper', 'lemon juice'],
    steps: ['Toast the bread.', 'Mash avocado with lemon, salt.', 'Spread on toast and serve.'],
  },
];

export default function Recipes() {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => setSelected(item)}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>{item.time} • Serves {item.serves}</Text>
      </View>
    </TouchableOpacity>
  );

  // If showPage is true, render the full recipes page (with back button)
  if (showPage) {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.pageHeader}>
          <TouchableOpacity onPress={() => setShowPage(false)} style={styles.backButton} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={styles.backText}>{'< Back'}</Text>
          </TouchableOpacity>
          {/* header removed as requested */}
        </View>

        <FlatList
          data={RECIPES}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={[styles.list, { paddingBottom: 100 }]}
        />

        <Modal visible={!!selected} animationType="slide" onRequestClose={() => setSelected(null)}>
          <ScrollView contentContainerStyle={styles.detailContainer}>
            {selected && (
              <>
                <Image source={{ uri: selected.image }} style={styles.detailImage} resizeMode="cover" />
                <Text style={styles.detailTitle}>{selected.title}</Text>
                <Text style={styles.detailMeta}>{selected.time} • Serves {selected.serves}</Text>

                <Text style={styles.sectionTitle}>Ingredients</Text>
                {selected.ingredients.map((ing, idx) => (
                  <Text key={idx} style={styles.listItem}>• {ing}</Text>
                ))}

                <Text style={styles.sectionTitle}>Steps</Text>
                {selected.steps.map((s, idx) => (
                  <Text key={idx} style={styles.listItem}>{idx + 1}. {s}</Text>
                ))}

                <Pressable style={styles.closeButton} onPress={() => setSelected(null)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </>
            )}
          </ScrollView>
        </Modal>
        {/* bottom back button */}
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => setShowPage(false)} style={styles.bottomBackButton} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={styles.bottomBackText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Default view: centered header only
  return (
    <View style={[styles.container, styles.centerContainer]}>
      <TouchableOpacity onPress={() => setShowPage(true)} activeOpacity={0.9}>
        <Text style={styles.centerHeader}>Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerWrap: { paddingHorizontal: 12, paddingTop: 12 },
  header: {
    fontSize: 28,
    fontWeight: '700',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#0a84ff',
    color: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  headerHint: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
    fontSize: 13,
  },
  centerContainer: { justifyContent: 'center', alignItems: 'center' },
  centerHeader: {
    fontSize: 36,
    fontWeight: '800',
    color: '#0a84ff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#0a84ff',
    borderRadius: 14,
    textAlign: 'center',
    overflow: 'hidden',
  },
  pageContainer: { flex: 1, backgroundColor: '#fff' },
  pageHeader: { paddingTop: 12, paddingHorizontal: 12, alignItems: 'center' },
  backButton: { position: 'absolute', left: 12, top: 8, padding: 8, zIndex: 10 },
  backText: { color: '#0a84ff', fontSize: 16 },
  bottomBar: { position: 'absolute', left: 0, right: 0, bottom: 20, alignItems: 'center' },
  bottomBackButton: { backgroundColor: '#0a84ff', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 999 },
  bottomBackText: { color: '#fff', fontWeight: '600' },
  list: { paddingHorizontal: 12, paddingBottom: 24 },
  card: { backgroundColor: '#fafafa', borderRadius: 12, marginBottom: 12, overflow: 'hidden' },
  image: { width: '100%', height: 160 },
  cardBody: { padding: 12 },
  title: { fontSize: 18, fontWeight: '600' },
  meta: { marginTop: 4, color: '#666' },

  detailContainer: { padding: 16, paddingBottom: 40 },
  detailImage: { width: '100%', height: 220, borderRadius: 8, marginBottom: 12 },
  detailTitle: { fontSize: 22, fontWeight: '700' },
  detailMeta: { color: '#666', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 6 },
  listItem: { fontSize: 15, marginBottom: 6, color: '#333' },
  closeButton: { marginTop: 20, backgroundColor: '#0a84ff', padding: 12, borderRadius: 8, alignItems: 'center' },
  closeButtonText: { color: '#fff', fontWeight: '600' },
});
