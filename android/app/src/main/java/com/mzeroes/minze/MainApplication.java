package com.mzeroes.minze;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.RNFirebasePackage;
// optional packages - add/remove as appropriate
import io.invertase.firebase.admob.RNFirebaseAdMobPackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.functions.RNFirebaseFunctionsPackage;
import io.invertase.firebase.instanceid.RNFirebaseInstanceIdPackage;
import io.invertase.firebase.invites.RNFirebaseInvitesPackage;
import io.invertase.firebase.links.RNFirebaseLinksPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.perf.RNFirebasePerformancePackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage;
// App Center Imports
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
// expo unimodules
import org.unimodules.adapters.react.ReactAdapterPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;
import org.unimodules.core.interfaces.SingletonModule;

import expo.modules.constants.ConstantsPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.filesystem.FileSystemPackage;
import expo.modules.webbrowser.WebBrowserPackage;
import expo.modules.imagepicker.ImagePickerPackage;
import expo.modules.location.LocationPackage;
import com.airbnb.android.react.maps.MapsPackage;
// RN VectorIconsPackage
// import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!
import me.furtado.smsretriever.RNSmsRetrieverPackage; // <-- Add the import
import com.RNTextInputMask.RNTextInputMaskPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(Arrays.<Package>asList(
        new ReactAdapterPackage(),
        new ConstantsPackage(),
        new PermissionsPackage(),
        new FileSystemPackage(),
        new WebBrowserPackage(),
        new ImagePickerPackage(),
        new LocationPackage()
      ), Arrays.<SingletonModule>asList());

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new LottiePackage(),
        new SplashScreenReactPackage(),
        new RNGestureHandlerPackage(),
        new RNFirebasePackage(),
        // add/remove these packages as appropriate
        new RNFirebaseAdMobPackage(),
        new RNFirebaseAnalyticsPackage(),
        new RNFirebaseAuthPackage(),
        new RNFirebaseRemoteConfigPackage(),
        new RNFirebaseCrashlyticsPackage(),
        new RNFirebaseDatabasePackage(),
        new RNFirebaseFirestorePackage(),
        new RNFirebaseFunctionsPackage(),
        new RNFirebaseInstanceIdPackage(),
        new RNFirebaseInvitesPackage(),
        new RNFirebaseLinksPackage(),
        new RNFirebaseMessagingPackage(),
        new RNFirebaseNotificationsPackage(),
        new RNFirebasePerformancePackage(),
        new RNFirebaseStoragePackage(),
        // App Center
        new AppCenterReactNativeCrashesPackage(MainApplication.this, getResources().getString(R.string.appCenterCrashes_whenToSendCrashes)),
        new AppCenterReactNativeAnalyticsPackage(MainApplication.this, getResources().getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
        new AppCenterReactNativePackage(MainApplication.this),
        // unimodules
        new ModuleRegistryAdapter(mModuleRegistryProvider),
        // new VectorIconsPackage(),
        new LinearGradientPackage(),
        new RNSmsRetrieverPackage(),
        new RNTextInputMaskPackage(),
        new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
