import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>

      </View>
    </View>
  )
}

export default FancyCard;

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    cardElevated: {},
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle: {
        color:"#000000",
        fontSize:22,
        fontWeight: 'bold',
        marginBottom:4,

    },
    cardLabel: {
        color:"#000",
        fontSize:14,
        marginBottom:6,
    },
    cardDescription: {
        color:"#242b2e",
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:"#000"
    }

})