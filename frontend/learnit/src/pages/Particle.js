import React from 'react';
import Particles from 'react-particles-js';

export default function Particle() {
  return (
    <Particles 
        height={'99vh'}
        params={{
          'particles': {
                'line_linked': {
                    'enable': true,
                    'distance': 100,
                    'color': '3F3D56',
                    'opacity': 0.4,
                    'width': 1
                },
              'number': {
                  'value': 90
              },
              'size': {
                  'value': 5
              },
              'color': {
                  'value': '#00ACFF'
              },
          },
          'interactivity': {
              'events': {
                  'onhover': {
                      'enable': true,
                      'mode': 'repulse'
                  }
              }
          }
        }} 
      />
  )
};