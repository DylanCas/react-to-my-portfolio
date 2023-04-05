import React from 'react';
import dcResume from './assets/DC-DevResume.pdf';

const styles = {
  header: {
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    margin: 20,
  }
};

export default function Resume() {
  return (
    <div>
      <h1 style={styles.header}>Resume</h1>
    <a href='{dcResume}' style={styles.button}><button>Download Resume</button></a>
    </div>
  );
}
