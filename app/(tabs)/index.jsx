import Cards from "../Cards";

import "./style.css";
import { SafeAreaView, View, Text, Pressable, ScrollView, FlatList, dispatch } from "react-native";
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../GlobalStyles'

import { db } from '../../firebaseConfig'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'

import { useRouter, useSegments, Slot } from "expo-router";


export default function Index(){
  const handleContinue = () => {
    console.log('Continue button pressed');
  }
  const router = useRouter();

  const auth = getAuth();
	const currentUser = auth.currentUser;

  const [statsMain, setStatsMain] = useState();
  const [stats, setStats] = useState([]);


  const handleNavFromStats = (route) => {
    if (route === 'leaderboard') {
      router.navigate('/leaderboard')
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let docRef = doc(db, "users", currentUser.uid);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let data = docSnap.data();
          setStatsMain(data);
          console.log("statsMainData: ", data);
          //listen for changes in the database and update xp card realtime after a xp is collected
          onSnapshot(doc(db, 'users', currentUser.uid), async (doc) => {
            docSnap = await getDoc(docRef);
            data = docSnap.data();
            setStatsMain(data);
            setStats([
              { name: 'Lessons completed', stat: completedLevels_String, cta: '' },
              { name: 'Leaderboard standing', stat: data.ranking, cta: 'View leaderboard' },
              { name: 'Experience level', stat: data.exp, cta: '' },
            ]);
          });

          const completedLevels = (completedLevels_DB) => {
            const filteredLevels = completedLevels_DB.filter((obj) =>
              Object.values(obj).some(value => value === true)
            );
            return filteredLevels.length;
          };

          const completedLevels_String = `${completedLevels(data.completedLevels)} / 35`
          console.log("blah blah,", completedLevels(data.completedLevels))
  
          setStats([
            { name: 'Lessons completed', stat: completedLevels_String, cta: '' },
            { name: 'Leaderboard standing', stat: data.ranking, cta: 'View leaderboard' },
            { name: 'Experience level', stat: data.exp, cta: '' },
          ]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
  
    fetchUserData();
  }, []);

  return(
    <ScrollView>
      <SafeAreaView style={{paddingHorizontal: 20, paddingVertical: 20, width: '100%'}}>
        <View>
          <Text style={GlobalStyles.statsTextBase}>Your stats</Text>
          <View style={GlobalStyles.statsGridContainer}>
            {stats.map((item) => (
              <View key={item.name} style={GlobalStyles.statsCard}>
                <View style={GlobalStyles.statsCardUpperHalf}>
                  <Text style={GlobalStyles.statsCardTitle}>{item.name}</Text>
                  {item.stat == undefined ? <Text style={GlobalStyles.statsCardStat}>Check back later!</Text> : <Text style={GlobalStyles.statsCardStat}>{item.stat}</Text>}
                  
                </View>
                {item.name === 'Percentage completed' || item.stat == undefined ? null : 
                <View style={GlobalStyles.statsLinkContainer}>
                <Pressable onPress={() => handleNavFromStats('leaderboard')}>
                  <Text style={GlobalStyles.statsLinkText}>
                    {`${item.cta}`}
                  </Text>
                </Pressable>
              </View>
              }
              </View>
            ))}
          </View>
        </View>

        <View style={GlobalStyles.lessonsBgLight}>
        <View style={GlobalStyles.lessonsContainer}>
          <View style={GlobalStyles.lessonsHeader}>
            <Text style={GlobalStyles.lessonTitle}>Your lessons</Text>
            {/* <Text style={GlobalStyles.lessonSubtitle}>
              
            </Text> */}
          </View>
          </View>
        </View>
        <Cards/>
      </SafeAreaView>
    </ScrollView>
  )
}
