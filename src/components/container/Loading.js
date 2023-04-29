import { useLottie } from 'lottie-react';
import animationData from '../../assets/loading.json'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    animationData,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className='loading'>
      { View }
    </div>
  );
};
