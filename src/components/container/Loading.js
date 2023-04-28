import Lottie from 'lottie-react';
import animationData from '../../assets/loading.json'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div className='loading'>
      <Lottie
        options={defaultOptions}
        width={100}
        height={100}
      />
    </div>
  );
};
