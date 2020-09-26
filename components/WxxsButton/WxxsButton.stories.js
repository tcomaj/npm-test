import { storiesOf } from '@storybook/vue'
import WxxsButton from './WxxsButton.vue'

storiesOf('WxxsButton', module)
    .add('normal', () => ({
        components: { WxxsButton },
        template: `
      <WxxsButton />
    `,
        data: () => ({})
    }))