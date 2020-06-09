import { getRenderedVm } from '../utils/util';
import main from '../../packages/main.vue';

describe('main', () => {
  it('render nothing when the show is false', () => {
    let nAlertVm = getRenderedVm(main, {
      show: false
    });
    expect(nAlertVm.message).toEqual('');
  });
});
