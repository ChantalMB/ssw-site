import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
        <Particles className="page-particles"
          params={{
            particles: {
                number: {
                    value: 500,
                    density: {
                        enable: true,
                        value_area: 9750
                    }
                },
                color: {
                    value: '#B3E3DD'
                },
                opacity: {
                    value: 0.55,
                    anim: {
                        enable: true
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 0.3
                }
             }
          }}
        />
    );
  }

export default Particle;