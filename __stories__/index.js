import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@kadira/storybook'
import { EasySteps } from '../src'

const FirstSlide = (props, context) => (
  <div>
    <p>Vai simbora</p>
    <button onClick={context.goToNext}>
      Click Me
    </button>
  </div>
)

FirstSlide.contextTypes = {
  goToNext: PropTypes.func
}

storiesOf('<EasySteps />', module)
.add('default', () => (
  <EasySteps>
    <FirstSlide />
    <div>
      Olar
    </div>
    <div>
      Opãn
    </div>
    <div>
      Como tar
    </div>
  </EasySteps>
))
