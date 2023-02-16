import { 
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

} from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            When using Redux, the centralized store is now the only place where
            the state will be changed in your application.The state can be
            changed in your store by dispatching different actions.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://rohtashtalan.com/projects/javascript/dom-task/',
              )
            }>
            <Text style={styles.readMoreLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://instagram.com/rohtashtalan')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ActionCard;

const styles = StyleSheet.create({
    container:{
        margin:16
    },
    headingText:{},
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:150
    },
    bodyContainer: {},
    footerContainer:{},
    socialLinks:{},
    readMoreLink:{}




})