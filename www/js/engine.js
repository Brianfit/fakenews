function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, true);
    console.log('onload called')
}

// function onDeviceReady() {
//  alert('device ready');
// 					 console.log('onDeviceReadyFired');
// 					 		displayText();
//       document.removeEventListener('deviceready', onDeviceReady, false);
//       
//       // Set AdMobAds options:
//       admob.setOptions({
//         publisherId:          "ca-app-pub-3019545823086402~4376524592",  // Required
//         interstitialAdId:     "ca-app-pub-3019545823086402/9037307411",  // Optional
// //         tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
// //         tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
// //         tappxShare:           0.5                                        // Optional
//   adSize:               admob.AD_SIZE.SMART_BANNER,
//   bannerAtTop:          true,
//   overlap:              false,
//   offsetStatusBar:      false,
//   isTesting:            true,
//   adExtras :            {},
//   autoShowBanner:       true,
//   autoShowInterstitial: true
//       });
//       
//       // Start showing banners (atomatic when autoShowBanner is set to true)
//       admob.createBannerView();
//       
//       // Request interstitial (will present automatically when autoShowInterstitial is set to true)
//       admob.requestInterstitialAd();
//     }

