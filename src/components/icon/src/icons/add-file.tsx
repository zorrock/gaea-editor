import * as React from 'react';

export default (size: number) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size}>
    <path d="M860 768H704v-156q0-15.008-10.496-25.504T668 576t-25.504 10.496-10.496 25.504V768h-148q-15.008 0-25.504 10.496t-10.496 25.504 10.496 25.504 25.504 10.496h148v148q0 15.008 10.496 25.504t25.504 10.496 25.504-10.496 10.496-25.504V840h156q15.008 0 25.504-10.496t10.496-25.504-10.496-25.504-25.504-10.496z m15.008-465.984L596.992 21.024q-6.016-6.016-15.008-11.008-2.016-2.016-4-2.016-0.992-0.992-3.008-2.016-14.016-6.016-28.992-6.016H199.968q-30.016 0-51.008 20.992t-20.992 51.008v880q0 30.016 20.992 51.008t51.008 20.992h212q15.008 0 25.504-10.496t10.496-25.504-10.496-25.504-25.504-10.496H199.968v-880h312v240q0 30.016 20.992 51.008t51.008 20.992h240v156q0 15.008 10.496 25.504t25.504 10.496 25.504-10.496 10.496-25.504v-188q0-28.992-20.992-50.016z m-291.008 9.984V109.984L784 312h-200z" />
  </svg>
);
