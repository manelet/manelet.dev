import React from "react"
import { RecoilRoot } from 'recoil';

import './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './src/styles/main.css'

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)
