import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default class video extends Component {

  render() {
    return (
      <View style={{ height: 240 }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/ojRmZ-AyR54" }}

        />
      </View>
    );
  }
}
