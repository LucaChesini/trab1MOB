import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

function ObtendoToken() {

  return (
    <View style={styles.container}>
        <View style={styles.loadingContainer}>
            <Text>Obtendo token...</Text>
            <ActivityIndicator size="large" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ObtendoToken;