import { configure } from '@kadira/storybook'

function loadStories() {
  require('../__stories__')
}

configure(loadStories, module)
