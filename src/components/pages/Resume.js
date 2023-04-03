import React from 'react';
import dcResume from './DC-DevResume.pdf';

const styles = {
  header: {
    textAlign: 'center',
  }
};

// TODO: Upload completed resume to assets folder. Update link to resume.
export default function Resume() {
  return (
    <div>
      <h1 style={styles.header}>Resume</h1>
    <a href='{dcResume}'><button>Download Resume</button></a>
    </div>
  );
}
