import * as React from 'react';
import { StyleSheet,ScrollView,Image, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>CRIME </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


            
              <View>
                
                  <ScrollView horizontal={true}>
                        <TouchableOpacity>
                    <View style={{paddingHorizontal:10}}>
                        <Image source={require('/home/nk/moviz/assets/images/crimebook.jpg')} style={{width:200,height:250,resizeMode:'stretch'}}/>
                            <Text style={{ marginStart: 30, fontSize: 18, fontWeight: '200' }}>THE CRIME BOOK</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ paddingHorizontal: 20 }}>
                        <Image source={require('/home/nk/moviz/assets/images/killerbook.jpeg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: -15, fontSize: 18, fontWeight: '200' }}>THE KILLER OF TRUE CRIME</Text>
                                
                    </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Image source={require('/home/nk/moviz/assets/images/scene.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                            <Text style={{ marginStart: 5, fontSize: 18, fontWeight: '200' }}>SCENE OF TRUE CRIME</Text>
                        </View>
                            </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Image source={require('/home/nk/moviz/assets/images/girla.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                                <Text style={{ marginStart: 90, fontSize: 18, fontWeight: '200' }}>GIRL A</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Image source={require('/home/nk/moviz/assets/images/girlinice.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                                <Text style={{ marginStart: 10, fontSize: 18, fontWeight: '200' }}>THE GIRL IN THE ICE</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Image source={require('/home/nk/moviz/assets/images/darkwater.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                                <Text style={{ marginStart: 50, fontSize: 18, fontWeight: '200' }}>DARK WATER</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Image source={require('/home/nk/moviz/assets/images/lastbreath.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                                <Text style={{ marginStart: 50, fontSize: 18, fontWeight: '200' }}>LAST BREATH</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </ScrollView>
                    

                    
                   
              </View>
               
        </View>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title}>HARRY POTTER</Text>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          
            <ScrollView horizontal={true}>
            <TouchableOpacity>
                <View style={{ paddingHorizontal: 10 }}>
                    <Image source={require('/home/nk/moviz/assets/images/globetoffire.png')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                    <Text style={{ marginStart: 30, fontSize: 18, fontWeight: '200' }}>GOBLET OF FIRE</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{ paddingHorizontal: 23 }}>
                    <Image source={require('/home/nk/moviz/assets/images/deathlyhallons.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                    <Text style={{ marginStart: 30, fontSize: 18, fontWeight: '200' }}>DEATHLY HALLONS</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/halfblood.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 20, fontSize: 18, fontWeight: '200' }}>HALF BLOOD PRINCE</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/camberofsecrets.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 10, fontSize: 18, fontWeight: '200' }}>CHAMBER OF SECRETS</Text>
                    </View>
                </TouchableOpacity>

        </ScrollView>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title}>ROMANCE</Text>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <ScrollView horizontal={true}>
                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Image source={require('/home/nk/moviz/assets/images/thedeal.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 50, fontSize: 18, fontWeight: '200' }}>THE DEAL</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/hatinggame.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 20, fontSize: 18, fontWeight: '200' }}>THE HATING GAME</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/thekiss.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 20, fontSize: 18, fontWeight: '200' }}>THE KISS QUOTIENT</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/fixherup.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 50, fontSize: 18, fontWeight: '200' }}>FIX HER UP</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/trouble.png')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: -16, fontSize: 18, fontWeight: '200' }}>TROUBLE WITH HATING YOU</Text>
                    </View>
                </TouchableOpacity>


          </ScrollView>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title}>CHETAN BHAGAT</Text>
            <View style={{ height: 5, width: '96%', marginVertical: 15 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
           <ScrollView horizontal={true}>
            <TouchableOpacity>
                <View style={{ paddingHorizontal: 10 }}>
                        <Image source={require('/home/nk/moviz/assets/images/halfgirlfriend.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                    <Text style={{ marginStart: 30, fontSize: 18, fontWeight: '200' }}>HALF GIRLFRIEND</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{ paddingHorizontal: 23 }}>
                    <Image source={require('/home/nk/moviz/assets/images/oneindian.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                    <Text style={{ marginStart: 30, fontSize: 18, fontWeight: '200' }}>ONE INDIAN GIRL</Text>
                </View>
            </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/onearranged.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: -20, fontSize: 18, fontWeight: '200' }}>ARRANGED MARRIAGE MURDER</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/girlinroom.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 20, fontSize: 18, fontWeight: '200' }}>GIRL IN ROOM 105</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ paddingHorizontal: 23 }}>
                        <Image source={require('/home/nk/moviz/assets/images/twostates.jpg')} style={{ width: 200, height: 250, resizeMode: 'stretch' }} />
                        <Text style={{ marginStart: 50, fontSize: 18, fontWeight: '200' }}>TWO STATES</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    separator: {
        marginVertical: 10,
        height: 5,
        width: '96%',
    },
});
