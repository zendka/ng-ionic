import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "analytics",
      isDisabled: true
    },
    {
      title: "Photos",
      url: "/photos",
      icon: "images",
      isDisabled: true
    },
    {
      title: "Albums",
      url: "/albums",
      icon: "list",
      isDisabled: false
    },
    {
      title: "My List",
      url: "/my-list",
      icon: "list-box",
      isDisabled: true
    },
    {
      title: "Chat",
      url: "/chat",
      icon: "chatbubbles",
      isDisabled: true
    },
    {
      title: "Sing In",
      url: "/signin",
      icon: "log-in",
      isDisabled: false
    },
    {
      title: "Date/Time picker",
      url: "/datetime",
      icon: "calendar",
      isDisabled: false
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
