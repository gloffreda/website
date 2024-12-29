export interface ITGeoJSONGeometry {
  type: 'Point' | 'MultiPoints' | 'Feature' | 'FeatureCollection';
  coordinates: number[];
}

export interface ITGeoJSONPoint extends ITGeoJSONGeometry {
  type: 'Point';
  coordinates: number[];
}

export interface ITGeoJSONFeature<T = ITGeoJSONPoint, V = unknown> {
  type: 'Feature';
  properties: V;
  geometry: T;
}
export interface IFeatureCollection<T = ITGeoJSONPoint, V = unknown> {
  type: 'FeatureCollection';
  features: Array<ITGeoJSONFeature<T, V>>;
}
