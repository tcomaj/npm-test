import { storiesOf } from '@storybook/vue'
import UiButton from './UiButton.vue'

storiesOf('Button', module)
    .add('normal', () => ({
        components: { UiButton },
        template: `<ui-button>💥 Button</ui-button>`,
    }))