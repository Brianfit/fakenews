/*

 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        console.log('initialized');
    },

  
    onDeviceReady: function() {
        console.log('Device Ready says index.js');

    }
};

app.initialize();



 var isAppForeground = true;
    
    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-3019545823086402~4376524592",
            interstitial : "ca-app-pub-3019545823086402/9037307411"
          }// ,
//           android : {
//             banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
//             interstitial : "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII"
//           }
        };
    	  
        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            
        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOS:       "/net.dopeykleptocrat.onionnotonion/Pub-42160-iOS-7868",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5,
            adSize:               admob.AD_SIZE.SMART_BANNER,
  bannerAtTop:          false,
  overlap:              false,
  offsetStatusBar:      false,
  isTesting:            true,
  adExtras :            {},
  autoShowBanner:       true,
  autoShowInterstitial: false
        });
 
        registerAdEvents();
        
      } else {
        console.log('AdMobAds plugin not ready');
      }
    }
    
    function onAdLoaded(e) {
      if (isAppForeground) {
      if (localStorage.reloadCount){
console.log('yes localstorage.reloadcount exists and is set to' +reloadCount)
reloadCount = Number(localStorage.getItem("reloadCount"));
reloadCount = reloadCount + 1;
localStorage.setItem("reloadCount", reloadCount);} else {
      localStorage.setItem("reloadCount", 0);}
      
      
//       SET The count for how many iterations before the full add shows below in reloadcount > X. It is a multiple of 2 (eg 10 is every 5 refreshes)
      
      
      
        if (e.adType === admob.AD_TYPE.INTERSTITIAL && reloadCount > 20) {
          console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
          admob.showInterstitialAd();
          localStorage.setItem("reloadCount", 0);
        } else if (e.adType === admob.AD_TYPE_BANNER) {
          console.log("New banner received");
        }
      }
    }
    
    function onPause() {
      if (isAppForeground) {
        admob.destroyBannerView();
        isAppForeground = false;
      }
    }
    
    function onResume() {
      if (!isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        isAppForeground = true;
      }
    }
    
    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
      
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }
        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();
 
      // display a banner at startup
      admob.createBannerView();
        
      // request an interstitial
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);


