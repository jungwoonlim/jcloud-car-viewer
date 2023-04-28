import classNames from 'classnames';
import { useState } from 'react';

export const MainContainer = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="main-wrapper">
      <div className={classNames(
        'main-container',
        {
          'hidden': !showModel,
        },
      )}>
        <div className="card">
          <div className="title">
            Mclaren MP4-12C Ultimate
          </div>
          <div className="description">
            <p>
              The McLaren MP4-12C, later known simply as the McLaren 12C, is a sports car that was designed and manufactured by McLaren Automotive. It was the first ever production car wholly designed and built by McLaren, and their first production road car since the McLaren F1, which was last built in 1998. The car's final design was unveiled in September 2009 and was launched in mid-2011.
            </p>
            <p>
              The MP4-12C uses a carbon fibre composite chassis, and is powered by a longitudinally-mounted McLaren M838T 3.8 L (3,799 cc) twin-turbocharged V8 engine, generating approximately 600 PS (592 hp; 441 kW) at 7,500 rpm and 600 N⋅m (443 lbf⋅ft) of torque at 5,600 rpm. The car makes use of Formula 1-sourced technologies such as "brake steer", where the inside rear wheel is braking during fast cornering to reduce understeer. Power is transmitted to the wheels through a seven-speed dual-clutch transmission Seamless-Shift gearbox (SSG) manufactured by Graziano Trasmissioni.
            </p>
            <p>
              A convertible version of the car called the MP4-12C Spider, renamed the 12C Spider in 2012, was also available. In February 2014, McLaren announced the related 650S, with revised bodywork, upgraded engine and other technical improvements. In April 2014, McLaren announced the end of production of the 12C.
            </p>
            <div className="button color1" onClick={() => setShowModel(!showModel)}>
              Show Model
            </div>
          </div>
        </div>
      </div>
      <div className={
        classNames(
          'back-container',
          {
            'hidden': showModel,
          },
        )
      }>
        <div className="title">
          Mclaren MP4-12C Ultimate
        </div>
        <div className="button color2" onClick={() => setShowModel(!showModel)}>
          Show Description
        </div>
      </div>
    </div>
  )
};
