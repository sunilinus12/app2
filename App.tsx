import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedbackBase, ImageBackground } from 'react-native';
import Hello from './components/Hello';
import React from 'react';
import Slider from './components/Slider';

export default function App() {
  const data = "some data";
  const data1 = "second data";
  return (
    <ScrollView style={{ flex: 1 }} >

      <Slider />

      <View style={{ flex: 1, marginVertical: 5 }}>
        <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>What's New</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/what's_new/w-1.jpg")}
            />
            <Text style={styles.wnh}>Gadgets</Text>

          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, marginVertical: 5 }}>
        <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>Shop For</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/s-1.jpg")}
            />
            <Text style={styles.wnh}>Watches</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/s-1.jpg")}
            />
            <Text style={styles.wnh}>Watches</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/s-1.jpg")}
            />
            <Text style={styles.wnh}>Watches</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/s-1.jpg")}
            />
            <Text style={styles.wnh}>Watches</Text>

          </View>
          <View style={styles.box}>
            <Image

              style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
              source={require("./assets/s-1.jpg")}
            />
            <Text style={styles.wnh}>Watches</Text>

          </View>
        </ScrollView>
      </View>



      {/* products */}
      <View style={{ flexWrap: 'wrap', flex: 2, flexDirection: "row", }}>
        <View style={{ backgroundColor: "black", margin: 4 }}>
          <Image

            style={{ width: 170, height: 100, }}
            source={require("./assets/what's_new/w-1.jpg")} />
        </View>
        <View style={{ margin: 4 }}>
          <Image

            style={{ width: 170, height: 100, }}
            source={require("./assets/what's_new/w-1.jpg")} />

        </View>
        <View style={{ margin: 4 }}>
          <Image

            style={{ width: 170, height: 100, }}
            source={require("./assets/what's_new/w-1.jpg")} />

        </View>
        <View style={{ margin: 4 }}>
          <Image

            style={{ width: 170, height: 100, }}
            source={require("./assets/what's_new/w-1.jpg")} />

        </View>


      </View>


      {/* square pics */}
      <View style={{ flex: 1, marginVertical: 5 }}>
        <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>New & NoteWorthy</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>


        </ScrollView>
      </View>
        {/* for men */}
      <View style={{ flex: 1, marginVertical: 5 }}>
        <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>For Men</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>


        </ScrollView>
      </View>

      {/* for wormen */}
      <View style={{ flex: 1, marginVertical: 5 }}>
        <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>New & NoteWorthy</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>
          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>

          <View style={styles.outdiv}>
            <View style={styles.inner}>
              <Image

                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                source={require("./assets/what's_new/w-1.jpg")}
              />


            </View>
            <Text style={styles.nn}>Personalised name</Text>
            <Text style={styles.amt}>Rs.5999</Text>


          </View>


        </ScrollView>
      </View>




    </ScrollView>



  );
}

const styles = StyleSheet.create({
  nn: { textAlign: 'center', color: 'gray' },

  amt: { textAlign: 'center', color: 'black',fontWeight:'100', },
  wnh: { textAlign: 'center', color: 'black', },
  box: {
    height: 120, width: 110,
    padding: 1, flex: 1,
  },
  inner: {
    height: 140, width: 130, 
     backgroundColor: 'yellow',
  },
  outdiv: {
    height: '100%', width: 130, marginHorizontal: 3,
    padding: 1, flex: 1, 
  },
  con: {
    flex: 1, backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

    justifyContent: 'center',
  },
});
