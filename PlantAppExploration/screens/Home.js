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

const Home = ({navigation}) => {
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
      favourite: true,
    },
  ]);

  const [frinedList, setFriendList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
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
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}
          onPress={() => {
            console.log('Favourite On Pressed');
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderFriendsComponent() {
    if (frinedList.length == 0) {
      return <View></View>;
    } else if (frinedList.length <= 3) {
      return frinedList.map((item, index) => (
        <View
          key={`friend-${index}`}
          style={index == 0 ? {} : {marginLeft: -20}}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {frinedList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : {marginLeft: -20}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{
              margintLeft: 5,
              color: COLORS.secondary,
              ...FONTS.body3,
            }}>
            +{frinedList.length - 3} More
          </Text>
        </View>
      );
    }
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
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                오늘의 식물
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('모두보기 클릭');
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.h3}}>
                  모두 보기
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
                marginTop: SIZES.base,
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                  }}
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    marginTop: SIZES.font,
                  }}
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1.3}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    margintLeft: SIZES.font,
                  }}
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 친구추가 */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray,
          }}>
          <View
            style={{
              marginTop: SIZES.radius,
              marginHorizontal: SIZES.padding,
            }}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>친구추가</Text>
            <Text style={{color: COLORS.secondary, ...FONTS.bod3}}>5명</Text>
            <View style={{flexDirection: 'row', height: '60%'}}>
              {/* 친구 */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriendsComponent()}
              </View>
              {/* 친구 추가 */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  친구추가
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => {
                    console.log('친구추가 버튼');
                  }}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
