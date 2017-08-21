import { configure } from '@storybook/react'

/** Import ant design less style */
import 'antd/dist/antd.less'

const req = require.context('../', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
