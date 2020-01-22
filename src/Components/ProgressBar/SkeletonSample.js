import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {CircularProgress,LinearProgress} from '@material-ui/core';
import ListMedia from "./ListMedia"
import ListMedia2 from "./ListMedia2"
import CustomizedProgressBars from "./CustomizedProgressBars"
export default function SkeletonSample() {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        function tick() {
          // reset when reaching 100%
          setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }
    
        const timer = setInterval(tick, 20);
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <div>
     
      <div style={{display:"flex", }}>
      <CircularProgress style={{margin:10}}/>
      <CircularProgress color="secondary" style={{margin:10}}/>
      <CircularProgress variant="determinate" value={progress} style={{margin:10}}/>
    <CircularProgress variant="determinate" value={progress} color="secondary" style={{margin:10}}/>

    
    </div>
    <div>
    <LinearProgress />
      <LinearProgress color="secondary" />
    </div>
    <div>
        <CustomizedProgressBars/>
    </div>
    <Skeleton variant="text" width={210} height={50}/>
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} style={{marginTop:10}}/>
      <ListMedia />
      <ListMedia2 />
    </div>
  );
}