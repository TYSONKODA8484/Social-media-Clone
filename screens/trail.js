import { View, Text, Image, Dimensions, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES } from '../constants'
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { posts } from '../constants/data'

const initialLayout = { width: Dimensions.get('window').width };

const PostsRoute = () => (
  <View style={{ flex: 1 }}>
      <FlatList
       data={posts}
       numColumns={3}
       renderItem={
        ({item, index})=>(
            <View style={{
                flex: 1,
                aspectRatio: 1,
                margin: 3
              }}>
                <Image
                  key={index}
                  source={item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 12
                  }}
                />
              
                <View style={{   // Corrected from <view> to <View>
                  position: 'absolute',
                  bottom: 4,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <View style={{   // Corrected from <view> to <View>
                    flexDirection: 'row',
                    alignItems: 'center',
                    msHighContrastAdjust: 6
                  }}>
                    <Ionicons name="eye" size={14} color={COLORS.white} />
                    <Text style={{ color: COLORS.white }}>{item.numOfViews}</Text>
                  </View>
              
                  <View style={{   // Corrected from <view> to <View>
                    flexDirection: 'row',
                    alignItems: 'center',
                    msHighContrastAdjust: 6
                  }}>
                    <Ionicons name="heart-outline" size={14} color={COLORS.white} />
                    <Text style={{ color: COLORS.white }}>{item.numOfViews}</Text>
                  </View>
                </View>
              </View>
              
        )
       }
      />
  </View>
)

const HightLightsRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}>

  </View>
)

const TaggedRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}>

  </View>
)

const renderScene = SceneMap({
  first: PostsRoute,
  second: HightLightsRoute,
  third: TaggedRoute
})

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Posts', icon: 'square-outline' },
    { key: 'second', title: 'Highlights', icon: 'heart-outline' },
    { key: 'third', title: 'Tagged', icon: 'person-outline' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary
      }}
      renderIcon={
        ({ route, color, focused }) => (
          <Ionicons
            name={route.icon}
            size={20}
            color={focused ? COLORS.black : 'gray'}
          />
        )
      }

      style={{
        backgroundColor: "#fff",
        height: 64
      }}

      renderLabel={
        ({ focused, route }) => (
          <Text style={{ color: focused ? COLORS.black : 'gray' }}>{route.title}</Text>
        )
      }

    />
  )

  function renderProfileCard(){
    return (
      <View style={{
        width: SIZES.width - 44,
        height: 280,
        marginHorizontal: 22,
        paddingHorizontal: 6, 
        paddingVertical: 18,
        borderColor: '#F7F7F7',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#18274B',
        shadowOffset:{
          width: 0,
          height: 4.5
        },
        shadowOpacity: 0.12, 
        shadowRadius: 0.65,
        elevation: 2,
        borderRadius: 35
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          {/* Profile image container */}
          <View>
            <Image
              source={require('../assets/images/userC1.jpg')}
              resizeMode='contain'
              style={{
                height: 150,
                width: 96,
                borderRadius: 80,
                borderWidth: 4,
                borderColor: '#FFFFFF'
              }}
            />
          </View>
  
          <View style={{
            flexDirection: 'column',
            flex: 1,
            marginLeft: 6 
          }}>
            <View style={{
              flex:1 ,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <View style={{
                flexDirection: 'column'
              }}>
                <Text style={{ ...FONTS.body3, fontWeight: 'bold'}}>Chandan Kumar </Text>
                <Text style={{...FONTS.body3}}>H6 cult Counciler</Text>
              </View>
              <Feather name="edit" size={24} color={COLORS.black} />
            </View>
  
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View style={{
                backgroundColor: "#FFF9E8",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 8
              }}>
                <Text style={{...FONTS.body4}}>7</Text>
                <Text style={{...FONTS.body4}}>Posts</Text>
              </View>
  
              <View style={{
                backgroundColor: "#FFF9E8",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 8
              }}>
                <Text style={{...FONTS.body4}}>24</Text>
                <Text style={{...FONTS.body4}}>Followers</Text>
              </View>
              
              <View style={{
                backgroundColor: "#FFF9E8",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 8
              }}>
                <Text style={{...FONTS.body4}}>7</Text>
                <Text style={{...FONTS.body4}}>Followings</Text>
              </View>
            </View>
          </View>
        </View>
  
        <View style={{
          flexDirection: 'column',
          marginVertical: 12
        }}>
          <Text style={{...FONTS.body4}}> Jack of all</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...FONTS.body4}}> Product Designer</Text>
            <Text style={{...FONTS.body4, color: COLORS.blue}}> @junior</Text>
          </View>
  
          <View style={{flexDirection: 'row'}}>
          <Text style={{...FONTS.body4}}> Creator of </Text><Text style={{...FONTS.body4, color: COLORS.blue}}>@damppixels</Text>
          </View>
        </View>     
      </View>
    )
  }


  function renderButtons(){
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        marginVertical: 12
      }}>
        <LinearGradient
        colors={['#F68464', '#EEA849']}
        style={{
          height: 40,
          width: 150,
          borderRadius: SIZES.padding * 3,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <AntDesign
            name= "adduser"
            size={24}
            color={COLORS.white}
          />
          <Text style={{...FONTS.body4, marginLeft: 12, color: COLORS.white}}>Follow</Text>
        </LinearGradient>

        <LinearGradient
        colors={['#F68464', '#EEA849']}
        style={{
          height: 40,
          width: 150,
          borderRadius: SIZES.padding * 3,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <AntDesign
            name= "message1"
            size={24}
            color={COLORS.white}
          />
          <Text style={{...FONTS.body4, marginLeft: 12, color: COLORS.white}}>Message</Text>
        </LinearGradient>

      </View>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <View style={{
        flex: 1
      }}>
        {renderProfileCard()}
        {renderButtons()}
        <View style={{
          flex: 1,
          marginHorizontal: 22
        }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
