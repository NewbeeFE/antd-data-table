import { configure } from '@storybook/react'

/** Import ant design less style */
import 'antd/dist/antd.less'

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
