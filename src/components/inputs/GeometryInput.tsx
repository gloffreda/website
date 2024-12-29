import React from 'react';

import { NumberInput } from './Input';

type TGeometryInput = {
  coordinates: [string, string];
  onChange: (ev: [string, string]) => void;
};

export default function CoordinatesInput({ coordinates, onChange }: TGeometryInput) {
  return (
    <div className='flex gap-3'>
      <div>
        <NumberInput
          label={{ text: 'LATITUDE' }}
          input={{
            name: 'lat',
            value: coordinates[1],
            onValueChange: ev => onChange([coordinates[0].toString(), ev.value]),
          }}
        />
      </div>
      <div>
        <NumberInput
          label={{ text: 'LONGITUDE' }}
          input={{
            name: 'lng',
            value: coordinates[0],
            onValueChange: ev => onChange([ev.value, coordinates[1].toString()]),
          }}
        />
      </div>
    </div>
  );
}
