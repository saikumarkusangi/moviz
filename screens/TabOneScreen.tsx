import * as React from 'react';
import { StyleSheet,Image,ScrollView,Pressable,Alert, TouchableOpacity,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { Actions, Router, Scene } from "react-native-router-flux";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    
    <ScrollView>
      
    <View style={styles.bigframe}>
      
        <TouchableOpacity  onPress={() => Alert.alert('PLOT SUMMARY:',"Squid Game's basic story revolves around 456 heavily debt-ridden people from different age groups and strata of society, who participate in six rounds of various children's games to win a humongous sum of money")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/squidgame.jpg')}
          />
        </TouchableOpacity>
        
        <Text style={styles.title}>SQUID GAME</Text>
        <Image style={{marginStart:110}}

          source={require('/home/nk/moviz/assets/images/sqid5.png')}
        />
        
    </View>
      
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","The plot involves a bank robbery by a group headed by a mastermind, known as The Professor. ... 1.The group of robbers are named after cities -- Tokyo, Moscow, Denver, Nairobi, Rio, Helsinki, Oslo and Berlin. They are seen conducting a successful heist in Spain's Royal Mint in the first two seasons")}>
          < Image style = { styles.bannerpic }

          source = { require('/home/nk/moviz/assets/images/moneyhesit.jpg') }
          />
        </TouchableOpacity>
        
        

        <Text style={styles.title}>MONEY HEIST</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/mon.png')}
        />
        
      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school. ... Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject.")}>
        <Image style={styles.bannerpic}

          source={require('/home/nk/moviz/assets/images/sexeducation.jpg')}
/> 
</TouchableOpacity>
        <Text style={styles.title}>SEX EDUCATION</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/se.png')}
        />

      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","Based on the popular comic series, Netflix's Locke & Key is the story of a group of plucky kids exploring a rambling house filled with magical keys. Those include the Matchstick Key, which starts fires; the Head Key, which lets you rummage around in your brain; and the Ghost Key, which lets you become a ghost")}>
        <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/lockandkey.jpg')}
        /> 
        </TouchableOpacity>
        <Text style={styles.title}>LOCKE & KEY</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/loc.png')}
        />

      </View>
      
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","When three working-class teenagers begin attending an exclusive private school in Spain, the clash between them and the wealthy students leads to murder. ... The clash between those who have everything and those who have nothing to lose creates a perfect storm that ends in a murder.")}>
        <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/elite.jpg')}
        />
        </TouchableOpacity>
        <Text style={{fontSize:30,fontWeight:'bold',marginStart:130}}>ELITE</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/el.png')}
        />

      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","A young boy, Will Byers, goes missing near a top-secret government laboratory. ... As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/stangerthings.jpg')}
          />
        </TouchableOpacity>
      
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 50}}>STRANGER THINGS</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/str.png')}
        />
     </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","Peaky Blinders is an epic following of a gangster family of Irish-Romani origin set in Birmingham, England, in 1919, several months after the end of the First World War in November 1918. The story centres on the Peaky Blinders gang and their ambitious and highly cunning boss Tommy Shelby (Murphy).")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/Peaky_Blinders_4.jpg')}
          />
        </TouchableOpacity>

        
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 50 }}>PEAKY  BLINDERS</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/pea.png')}
        />
      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","In the aftermath of a child's disappearance, Dark follows characters from the fictional German town of Winden as they pursue the truth. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations.")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/dark.png')}
          />
        </TouchableOpacity>

       
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 140 }}>DARK</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/da.png')}
        />
      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","Sense8 follows the story of eight strangers across the world who are thrust into each other's lives, each other's secrets, and in terrible danger. As they attempt to discover the meaning of their unique connection, a shadowy organization commandeered by an elusive figure known as Whispers aims to hunt them down.")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/sense8.jpg')}
          />
        </TouchableOpacity>

       <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 130 }}>SENSE 8</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/sqid5.png')}
        />
      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","Setting out on a journey to save her people from a holy war of extinction, Nimue struggles with the corrupting power of the Sword, while coming to grips with her secret history, the powerful magical legacy that flows in her blood, and what it will mean for her and her people when she embraces her destiny as the Wolf- ...")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/cursed.jpg')}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 130 }}>CURSED</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/sqid5.png')}
        />
      </View>
      <View style={styles.bigframe}>
        <TouchableOpacity onPress={() => Alert.alert("PLOT SUMMARY:","This series focuses on the development by two men, two agents, of a new criminal field and does so through story lines of visiting the sociopathic mind. Mindhunter is based on the 1996 book Mind Hunter: Inside the FBI's Elite Serial Crime Unit, by former special agent John Douglas and Mark Olshaker.")}>
          <Image style={styles.bannerpic}

            source={require('/home/nk/moviz/assets/images/mindhunter.jpg')}
          />
        </TouchableOpacity>
       <Text style={{ fontSize: 30, fontWeight: 'bold', marginStart: 80 }}>MIND HUNTER</Text>
        <Image style={{ marginStart: 110 }}

          source={require('/home/nk/moviz/assets/images/mh.png')}
        />
      </View>
     


    


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    marginStart:75
  },
  separator: {
  
  },
  bigframe:{
width:'98%',
height:530,
    borderRadius: 600,
backgroundColor:'black',
marginBottom:126,



  },
  bannerpic:{
    width:'98%',
    height:'98%',
    resizeMode: 'stretch',
    marginStart:6
    
  }
});
