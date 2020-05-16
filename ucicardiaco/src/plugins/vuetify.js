import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


Vue.use(Vuetify,{
  theme: {

        primary: '#03A9F4',
        secondary: '#81D4FA',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    
  
  customProperties:true,
  iconfont: 'md',
  

})


