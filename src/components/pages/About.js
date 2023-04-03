import React from 'react';
import profilePic from './images/profile-pic.jpeg'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  greeting: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
};

export default function About() {
  return (
    <div style={styles.content}>
      <h1 style={styles.header}>Dylan Casabona</h1>
      <img src={profilePic} alt='Me standing on a mountain' style={styles.image}></img>
      <div style={styles.text}>
      <h2 style={styles.greeting}>Hello visitors!</h2>
      <p>My name is Dylan Casabona. At the time of writing this, I am attending a full stack software development bootcamp through Denver University. And almost completed. Throughout the 6 month program I have learned so much, and some of the results will be visible here. Select the tabs above to view some different sections like some projects I've worked on and ways to contact me.</p>
      <p>For a bit about me; I grew up in Colorado and Arizona as a teen, returning to Denver for this bootcamp. I currently work as a server/server assistant at the Lariat Lodge Brewery Restaraunt in Littleton, CO.</p>
      <p>My favorite hobbies would be playing some video games; I've love many genres of games from racing, single player stories, cooperative and shooters all since I was a kid. Being someone in Colorado, I do love the outdoors. Particularly hiking, but thanks to my brother I am also partial to some mountain biking and would like to get into some winter sports more, like snowboarding.</p>
      <p>As I learn more about coding and software development, I enjoy finding the many ways to solve various problems. Though if you asked if I prefer any particular part, program or what-not... I frankly wouldn't know how to answer. Needing to keep up a steady stream of learning is my favorite part, I've always loved the phrase "learn something new every day".</p>
      </div>
    </div>
  );
}
