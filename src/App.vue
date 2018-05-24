
<template>
  <v-app
    id="inspire"
    
  >
    <v-navigation-drawer class="grey lighten-2"
      v-model="drawer"
      fixed
      clipped
      app 
    >
      <v-list dense class="grey lighten-2">
        <v-btn class="green" dark large flat to="/studentlogin">START EXAM</v-btn>
        <v-list-tile v-for="item in items" :key="item.text"
        router
        :to="item.link" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 black--text text--darken-1">DEVELOPERS</v-subheader>
        <v-list class=" grey lighten-2">
          <v-list-tile v-for="item in items2" :key="item.text" avatar >
            <v-list-tile-avatar>
              <img :src="``" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" >
          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-4" dark
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">ONLINE ENTRANCE EXAMINATION</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      

      
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
        
      </v-container>
       <v-footer color="blue darken-4" dark absolute>
<span>This is a footer</span>
    </v-footer>
    </v-content>
  </v-app>
  
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        { icon: 'home', text: 'Home',link:'/'},
        { icon: 'web', text: 'About College',link:'/aboutcollege' },
        { icon: 'help', text: 'FAQ' ,link:'/faq'},
        { icon: 'phone', text: 'Contact Us',link:'/contact' },
        { icon: 'contacts', text: 'About Us',link:'/about' }
      ],
      items2: [
        { picture: 28, text: 'Deepak' },
        { picture: 38, text: 'Niroj' },
        { picture: 48, text: 'Prashant' },
        { picture: 58, text: 'Rupesh' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>