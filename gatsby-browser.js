import React from "react"
import { RecoilRoot } from 'recoil';

import './src/styles/main.scss'

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)
