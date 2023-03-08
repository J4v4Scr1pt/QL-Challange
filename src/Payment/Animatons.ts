import {keyframes} from 'styled-components';
const Shake=keyframes`
0%,
100% {
		  transform: rotate(0deg);
		  transform-origin: 50% 100%;
}
10% {
		  transform: rotate(1deg);
}
20%,
40%,
60% {
		  transform: rotate(-2deg);
}
30%,
50%,
70% {
		  transform: rotate(2deg);
}
80% {
		  transform: rotate(-1deg);
}
90% {
		  transform: rotate(1deg);
}
`;

const ScaleIn=keyframes`
    0% {
              transform: scaleY(0);
      opacity: 1;
    }
    100% {
              transform: scaleY(1);
      opacity: 1;
    }
`;
const ScaleOut=keyframes`
0% {
            transform: scaleY(1);
    opacity: 1;
  }
  100% {
            transform: scaleY(0);
    opacity: 1;
  }
`;
const BtnAnim1=keyframes`
0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;
const BtnAnim2=keyframes`
0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`;
const BtnAnim3=keyframes`
0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`;
const BtnAnim4=keyframes`
0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`;

export {Shake,ScaleIn,ScaleOut,BtnAnim1,BtnAnim2,BtnAnim3,BtnAnim4}