import butterflySmall from './images/blue-butterfly-small.jpg';
import butterflyMedium from './images/blue-butterfly-medium.jpg';
import brainSmall from './images/brain-small.jpg';
import brainMedium from './images/brain-medium.jpg';
import cloverSmall from './images/clover-small.jpg';
import cloverMedium from './images/clover-medium.jpg';
import deskAssetsSmall from './images/desk-assets-small.jpg';
import deskAssetsMedium from './images/desk-assets-medium.jpg';
import tribalSkullSmall from './images/tribal-skull-small.jpg';
import tribalSkullMedium from './images/tribal-skull-medium.jpg';

interface imgSizesSrc {
  small: string,
  medium: string,
}

export const covers: Map<string, imgSizesSrc> = new Map([
  ['blue-butterfly', { small: butterflySmall, medium: butterflyMedium }],
  ['brain', { small: brainSmall, medium: brainMedium }],
  ['clover', { small: cloverSmall, medium: cloverMedium }],
  ['desk-assets', { small: deskAssetsSmall, medium: deskAssetsMedium }],
  ['tribal-skull', { small: tribalSkullSmall, medium: tribalSkullMedium }],
]);
export default covers;

