import React from 'react'

import styled from 'styled-components'
import {useGLTF} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

const Model = () => {
  const gltf = useGLTF('/images/3D/3d/scene.gltf')
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} />
}

const WatchModel = () => {
  return (
    <Can>
      <Canvas>
        <ambientLight />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
    </Can>
  )
}

export default WatchModel

const Can = styled.div`
  width: 100%;
  height: 800px;
  & canvas {
  }
`
