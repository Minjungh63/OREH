import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Dimensions,
} from 'react-native'
import { useState } from 'react'
import styles from '../pages/styles.js'
import { THEME } from '../theme'
import { STRING } from '../string'
import { AntDesign } from '@expo/vector-icons'
import ImageModal from 'react-native-image-modal'

export const Box = ({
  hintNum,
  text,
  text2,
  img,
  img2,
  img3,
  img4,
  img5,
  option,
  slider,
  webtoon,
  name,
}) => {
  const [pressed, setPressed] = useState(1)

  return (
    <View
      style={
        (slider && styles.smallQuestBox) ||
        (webtoon && styles.webtoonBox) ||
        (option === 'quest' && styles.questBox) ||
        styles.textBox
      }
    >
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.boxBgImage}
      >
        <View
          style={
            webtoon
              ? { flex: 1, justifyContent: 'center' }
              : styles.questContainer
          }
        >
          {option === 'quest' ? (
            <View style={{ justifyContent: 'flex-start', height: '90%' }}>
              {hintNum && (
                <Text
                  style={[
                    styles.questText,
                    {
                      marginTop: '8%',
                      fontFamily: 'NanumMyeongjoBold',
                      fontSize: 22,
                    },
                  ]}
                >
                  {hintNum}
                </Text>
              )}
              {img && (
                <>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: '2%',
                      fontSize: 25,
                      color: 'rgba(0, 0, 0, 0.6)',
                      fontWeight: '700',
                    }}
                  >
                    ex
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: 0,
                      height: Dimensions.get('window').height * 0.15,
                      width: Dimensions.get('window').width * 0.7,
                      marginBottom: '8%',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="rgba(0, 0, 0, 0)"
                      style={[
                        styles.questImage,
                        {
                          flexDirection: 'row',
                          height: Dimensions.get('window').height * 0.1,
                          marginHorizontal: '20%',
                        },
                      ]}
                      source={img}
                    />
                  </View>
                </>
              )}
              {name && (
                <Text
                  style={[
                    styles.questText,
                    {
                      fontSize: 24,
                      fontFamily: 'NanumMyeongjoBold',
                      marginBottom: 7,
                    },
                  ]}
                >
                  {name}
                </Text>
              )}
              {text && <Text style={styles.questText}>{text}</Text>}
              {(img3 && (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}
                  style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    height: Dimensions.get('window').height * 0.3,
                    resizeMode: 'contain',
                  }}
                >
                  <ImageModal
                    resizeMode="contain"
                    imageBackgroundColor="rgba(0, 0, 0, 0)"
                    style={img ? styles.questImage : styles.questImage2}
                    source={img2}
                  />
                  <ImageModal
                    resizeMode="contain"
                    imageBackgroundColor="rgba(0, 0, 0, 0)"
                    style={img ? styles.questImage : styles.questImage2}
                    source={img3}
                  />
                </ScrollView>
              )) ||
                img3 ||
                (img2 && (
                  <View
                    style={
                      img
                        ? {
                            height: Dimensions.get('window').height * 0.15,
                            alignSelf: 'center',
                            justifyContent: 'flex-start',
                          }
                        : {
                            flexDirection: 'row',
                            marginTop: '5%',
                            height: Dimensions.get('window').height * 0.3,
                            resizeMode: 'contain',
                          }
                    }
                  >
                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="rgba(0, 0, 0, 0)"
                      style={
                        img
                          ? [
                              styles.questImage,
                              {
                                width: Dimensions.get('window').width * 0.6,
                                resizeMode: 'cover',
                              },
                            ]
                          : [
                              styles.questImage2,
                              { width: Dimensions.get('window').width * 0.7 },
                            ]
                      }
                      source={img2}
                    />
                  </View>
                )) ||
                (img4 && (
                  <View
                    style={{
                      marginTop: '2%',
                      height: Dimensions.get('window').height * 0.3,
                      alignSelf: 'center',
                    }}
                  >
                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="rgba(0,0,0,0)"
                      style={[
                        styles.questImage2,
                        {
                          width: Dimensions.get('window').width * 0.4,
                        },
                      ]}
                      source={img4}
                    />
                  </View>
                )) ||
                (img5 && (
                  <View
                    style={{
                      marginTop: '5%',
                      height: Dimensions.get('window').height * 0.3,
                      alignSelf: 'center',
                    }}
                  >
                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="rgba(0, 0, 0, 0)"
                      style={[
                        styles.questImage2,
                        {
                          height: Dimensions.get('window').height * 0.1,
                          width: Dimensions.get('window').width * 0.7,
                        },
                      ]}
                      source={img5}
                    />
                  </View>
                )) ||
                (webtoon && (
                  <ScrollView style={{ paddingHorizontal: 10 }}>
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.5 },
                      ]}
                      source={require('../assets/webtoon_img/5_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.5 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_0.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.9 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.2 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.5 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_2_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.1 },
                      ]}
                      source={require('../assets/webtoon_img/5_2_3_0.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.55 },
                      ]}
                      source={require('../assets/webtoon_img/5_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 0.9 },
                      ]}
                      source={require('../assets/webtoon_img/5_3_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.2 },
                      ]}
                      source={require('../assets/webtoon_img/5_3_1_0.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/5_3_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/5_3_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.5 },
                      ]}
                      source={require('../assets/webtoon_img/6_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_1_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_1_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_1_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2.5 },
                      ]}
                      source={require('../assets/webtoon_img/6_1_4.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.4 },
                      ]}
                      source={require('../assets/webtoon_img/6_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_2_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_2_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_2_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2.5 },
                      ]}
                      source={require('../assets/webtoon_img/6_2_4.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.77 },
                      ]}
                      source={require('../assets/webtoon_img/6_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 3 },
                      ]}
                      source={require('../assets/webtoon_img/6_3_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2.5 },
                      ]}
                      source={require('../assets/webtoon_img/6_3_2.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 3 },
                      ]}
                      source={require('../assets/webtoon_img/6_3_3.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 1.5 },
                      ]}
                      source={require('../assets/webtoon_img/6_4.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2 },
                      ]}
                      source={require('../assets/webtoon_img/6_4_1.jpg')}
                    />
                    <Image
                      style={[
                        styles.webtoonImage,
                        { height: Dimensions.get('window').height * 2.5 },
                      ]}
                      source={require('../assets/webtoon_img/7_1.jpg')}
                    />
                  </ScrollView>
                ))}
            </View>
          ) : (
            <View
              style={{
                marginVertical: '10%',
                justifyContent: 'space-around',
              }}
            >
              {pressed === 1 ? (
                <View
                  style={{
                    height: Dimensions.get('window').height * 0.8 * 0.7,
                    paddingBottom: '10%',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.noticeText}>{text}</Text>
                  <Text style={[styles.noticeText, { textAlign: 'left' }]}>
                    {text2}
                  </Text>
                </View>
              ) : (
                <Text
                  style={[
                    styles.noticeText,
                    {
                      textAlign: 'left',
                      fontFamily: THEME.titleFont,
                      height: Dimensions.get('window').height * 0.8 * 0.7,
                    },
                  ]}
                >
                  {STRING.mission}
                </Text>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: Dimensions.get('window').height * 0.8 * 0.1,
                }}
              >
                {pressed === 2 ? (
                  <Pressable
                    style={{ resizeMode: 'contain' }}
                    onPress={() => setPressed(1)}
                  >
                    <AntDesign
                      name="left"
                      size={26}
                      color={THEME.buttonColor}
                    />
                  </Pressable>
                ) : (
                  <>
                    <View></View>
                    <Pressable
                      style={{ resizeMode: 'contain' }}
                      onPress={() => setPressed(2)}
                    >
                      <AntDesign
                        name="right"
                        size={26}
                        color={THEME.buttonColor}
                      />
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  )
}
