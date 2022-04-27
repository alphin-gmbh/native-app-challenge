import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PostsProvider, { usePosts } from './context/posts/posts.provider';

import accessTokenInterceptor from './interceptors/access-token.interceptor';
import apiService from './services/api.service';
import postsDataService from './services/posts-data.service';

apiService.attachInterceptor(accessTokenInterceptor);
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PostsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PostsProvider>
  );
};

const HomeScreen = ({ navigation }) => {
  const { postsState } = usePosts();
  const { onPostsLoaded } = usePosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const storePosts = postsState.posts;
    if (storePosts) {
      setPosts(storePosts);
    }
  }, [postsState.posts]);

  const loadData = async () => {
    try {
      const response = await postsDataService.getPosts();
      const result = await response.result;
      onPostsLoaded(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={({ _id }, index) => _id}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Details', { id: item._id })}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.shortcode}</Text>
              <Text>Likes: {item.counts.likes}</Text>
              <Text>Comments: {item.counts.comments}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
const DetailsScreen = ({ navigation, route }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    try {
      const response = await postsDataService.getPost(route.params.id);
      const result = await response.result;
      setPost(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{post.shortcode}</Text>
      <Text>{post.caption}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
