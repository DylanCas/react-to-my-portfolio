import React from 'react';
import profilePic from './profile-pic.jpeg'

const styles = {
  header: {
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    float: 'left',
  }
};

export default function About() {
  return (
    <div>
      <h1 style={styles.header}>Dylan Casabona</h1>
      <img src={profilePic} alt='Me standing on a mountain' style={styles.image}></img>
      <h2>Hello visitors!</h2>
      <p>My name is Dylan Casabona. At the time of writing this, I am attending a full stack software development bootcamp through Denver University. And almost completed. Throughout the 6 month program I have learned so much, and some of the results will be visible here</p>
      <p>For a bit about me; I grew up in Colorado and Arizona as a teen, returning to Denver for this bootcamp. I currently work as a server/server assistant at the Lariat Lodge Brewery Restaraunt in Littleton, CO.</p>
      <p>My favorite hobbies would be playing some video games; I've love many genres of games from racing, single player stories, cooperative and shooters all since I was a kid. </p>
    </div>
  );
}
