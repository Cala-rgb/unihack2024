import 'package:trafic_tm/screens/home.dart';
import 'package:trafic_tm/screens/mapscreen.dart';
import 'package:trafic_tm/screens/dashcam.dart'; // Import the Dashcam screen
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:persistent_bottom_nav_bar/persistent_bottom_nav_bar.dart';

import '../shared/constants.dart';

class NavBar extends StatefulWidget {
  const NavBar({super.key});

  @override
  State<NavBar> createState() => _NavBarState();
}

class _NavBarState extends State<NavBar> {
  late PersistentTabController _controller;

  List<Widget> _buildScreens() {
    return [
      const MapScreen(),
      const Dashcam(), // Move Dashcam to the middle
      const Home(),
    ];
  }

  List<PersistentBottomNavBarItem> _navBarsItems() {
    return [
      PersistentBottomNavBarItem(
        icon: const Icon(Icons.map),
        title: ("Map"),
        activeColorPrimary: CupertinoColors.white,
        inactiveColorPrimary: CupertinoColors.black,
        routeAndNavigatorSettings: RouteAndNavigatorSettings(
          initialRoute: "/",
          routes: {
            "/first": (final context) => const Home(),
          },
        ),
      ),
      PersistentBottomNavBarItem( // Dashcam item in the middle
        icon: const Icon(Icons.videocam),
        title: ("Dashcam"),
        activeColorPrimary: CupertinoColors.white,
        inactiveColorPrimary: Colors.black,
        routeAndNavigatorSettings: RouteAndNavigatorSettings(
          initialRoute: "/",
          routes: {
            "/first": (final context) => const Dashcam(),
          },
        ),
      ),
      PersistentBottomNavBarItem(
        icon: const Icon(CupertinoIcons.profile_circled),
        title: ("Profile"),
        activeColorPrimary: CupertinoColors.white,
        inactiveColorPrimary: Colors.black,
        routeAndNavigatorSettings: RouteAndNavigatorSettings(
          initialRoute: "/",
          routes: {
            "/first": (final context) => const MapScreen(),
          },
        ),
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    Constants constants = Constants();
    Color? primaryColor = constants.getPrimaryColor();

    _controller = PersistentTabController(initialIndex: 0);
    return PersistentTabView(
      context,
      controller: _controller,
      screens: _buildScreens(),
      items: _navBarsItems(),
      handleAndroidBackButtonPress: true,
      resizeToAvoidBottomInset: true,
      stateManagement: true,
      hideNavigationBarWhenKeyboardAppears: true,
      padding: const EdgeInsets.only(top: 8),
      backgroundColor: primaryColor!,
      isVisible: true,
      animationSettings: const NavBarAnimationSettings(
        navBarItemAnimation: ItemAnimationSettings(
          duration: Duration(milliseconds: 400),
          curve: Curves.ease,
        ),
        screenTransitionAnimation: ScreenTransitionAnimationSettings(
          animateTabTransition: true,
          duration: Duration(milliseconds: 200),
          screenTransitionAnimationType: ScreenTransitionAnimationType.fadeIn,
        ),
      ),
      confineToSafeArea: true,
      navBarHeight: kBottomNavigationBarHeight,
    );
  }
}
