import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { CameraView, Camera } from "expo-camera";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'http://192.168.1.37:5000/api';

export default function StudentHomeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    const getPermissions = async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(cameraStatus === 'granted' && locationStatus === 'granted');
    };

    getPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setLoading(true);
    setStatusMsg('Verifying Location...');

    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setStatusMsg('Marking Attendance...');
      const token = await AsyncStorage.getItem('token');

      const response = await axios.post(
        `${API_URL}/student/mark-attendance`,
        {
          qrPayload: data,
          latitude,
          longitude
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Alert.alert("Success", "Attendance Marked Successfully!");
    } catch (error) {
      Alert.alert("Failed", error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
      setStatusMsg('');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <TouchableOpacity style={styles.rescanButton} onPress={() => setScanned(false)}>
            <Text style={styles.rescanText}>Tap to Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.infoContainer}>
        {loading ? (
             <View>
                 <ActivityIndicator size="large" color="#6366f1" />
                 <Text>{statusMsg}</Text>
             </View>
        ) : (
            <Text style={styles.instruction}>Scan the Faculty QR Code to mark attendance.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rescanButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 15,
    borderRadius: 25
  },
  rescanText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoContainer: {
    flex: 0.3,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666'
  }
});
