import React, { useMemo, useRef, useEffect } from 'react'

// import { Canvas, useUpdate, useLoader } from 'react-three-fiber'
// import * as THREE from 'three'
// import fontt from './Jost_Bold.json'

const Logo = ({ props, children }) => {
  // const font = useLoader(THREE.FontLoader, '/Jost_Bold.json')  
  // const size = 2
  // const hAlign = 'center'
  // const vAlign = 'center'  
  // const config = useMemo(
  //   () => ({ font, size: 10, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 2, bevelSize: 1, bevelOffset: 0, bevelSegments: 8 }),
  //   [font]
  // )
  // const mesh = useUpdate(
  //   self => {
  //     const size = new THREE.Vector3()
  //     self.geometry.computeBoundingBox()
  //     self.geometry.boundingBox.getSize(size)
  //     self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
  //     self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  //   },
  //   [children]
  // )

  return (
    // <Canvas>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
    //     <mesh ref={mesh}>
    //       <textGeometry attach="geometry" args={[children, config]} />
    //       <meshNormalMaterial attach="material" />
    //     </mesh>
    //   </group>
    // </Canvas> 
    <div>
      Manel Escuer
    </div>
  )
}

export default Logo