import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://i.pinimg.com/originals/b2/51/4a/b2514a16ffe8675314ec1fff66e93c0b.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Pic Forest</Text>
            <Text style={styles.cardLabel}>Pic Forest</Text>
            <Text style={styles.cardDescription}>Pic Forest</Text>
            <Text style={styles.cardDescription}>Pic Forest</Text>
            <Text style={styles.cardFooter}>Pic Forest</Text>

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