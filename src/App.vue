<template>
<div className="App">
  <nav>
    <img :src="navpic"/>
    <button v-on:click="goToVisualization">Визуализация</button>
    <button v-on:click="goToTimeline">План-график</button>
  </nav>


  <div className="display">
    <RouterView/>
  </div>
</div>
</template>

<script>
import navpic from "./assets/navpic.png"

export default {  
  name: 'App',
  components: {

  },
  data(){
    return{
      navpic: navpic
    };
  },
  mounted(){

  },
  methods: {
    goToVisualization(){
      this.$router.push('/visualization')
    },
    goToTimeline(){
      this.$router.push('/timeline')
    }
  }

}
</script>

<style>
h2{
  margin: 0px;
}


.App{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: white;
}

nav{
  display: inline-block;
  width: 20vw;
  height: 100vh;
  background-color: rgb(39, 41, 43);
  text-align: center;
  border-right: 20px;
}
nav button{
  display: block;
  width: 100%;
  height: 60px;
  background-color: rgb(39, 41, 43);
  color: white;
  border-radius: 10px;
  font-size: 14px;
}
button:hover{
    cursor: pointer;
    background-color: black;
}
nav img{
  width: 200px;
  height: 150px;
}


</style>
