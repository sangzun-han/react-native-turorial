import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const Home = () => {
  // dummy data
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: '식물1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: '식물2',
      img: images.plant2,
      favourite: false,
    },
    {
      id: 2,
      name: '식물3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: '식물4',
      img: images.plant4,
      favourite: false,
    },
  ]);

  function renderNewPlants(item, index) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15,
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>
                새로운 식물
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('Focus on pressed');
                }}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: SIZES.base}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* today's share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}></View>

      {/* 친구추가 */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
