import React from 'react';
import trailPlanner from './trailPlanner.png';
import maintLogger from './maintLogger.png';

const styles = {
  header: {
    textAlign: 'center',
  },
  projectImg: {
    width: 300,
    height: 200,
  }
};
// TODO: insert images
export default function Deployed() {
  return (
    <div>
      <h1 style={styles.header}>Deployed Works</h1>
      <main>
        <div>
          <section>
            <p>Below are the GitHub links to several projects and assignments I've worked on. Links are to repos as some sites/apps may not be running/live at the time. </p>
          </section>
        </div>
        <div>
          <section>
            <p>Maintenance Logger</p>
            <a href='https://github.com/DylanCas/project2_maintenanceLog' target='_blank' rel="noreferrer"><img alt='Link to vehicle maintenance logger project GitHub' style={styles.projectImg} src={maintLogger}></img></a>
          </section>
          <section>
            <p>Trail Planner</p>
            <a href='https://github.com/josht-dev/trail-planner' target='_blank' rel="noreferrer"><img alt='Link to Trail Planner GitHub' style={styles.projectImg} src={trailPlanner}></img></a>
          </section>
        </div>
      </main>
    </div>
  );
}
