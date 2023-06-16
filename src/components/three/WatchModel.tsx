import React, {useEffect, useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import * as THREE from 'three'

const Model = () => {
  const {scene} = useGLTF('/images/3D/3d/scene.gltf')
  const hour = useRef<THREE.Object3D[]>([])
  const minute = useRef<THREE.Object3D[]>([])
  const second = useRef<THREE.Object3D>()
  const initialValue = {
    sec: 9.746,
    min: 1.085,
    hou: -0.93,
  }

  scene.traverse(object => {
    // Object_84 초침
    // Object_81 분침, 82 분침 바늘
    // Object_78 시침 79 시침 바늘
    const {name} = object

    if (name === 'Object_84') return (second.current = object)
    if (name === 'Object_81' || name === 'Object_82') return minute.current.push(object)
    if (name === 'Object_78' || name === 'Object_79') return hour.current.push(object)
  })

  // 매 프레임마다 바늘의 회전 각도를 업데이트합니다.
  useEffect(() => {
    const animate = () => {
      const date = new Date()
      const sec = -0.1056 // 1초 : +0.085
      const min = -0.1056
      const hou = -0.1056

      if (hour.current[0] && hour.current[1]) {
        hour.current[0].rotation.z = -(initialValue.hou + ((date.getHours() + 24) % 12 || 12) * hou)
        hour.current[1].rotation.z = -(initialValue.hou + ((date.getHours() + 24) % 12 || 12) * hou)
      }
      if (minute.current[0] && minute.current[1]) {
        minute.current[0].rotation.z = initialValue.min + min * date.getMinutes()
        minute.current[1].rotation.z = initialValue.min + min * date.getMinutes()
      }
      if (second.current) {
        second.current.rotation.z = initialValue.sec + sec * date.getSeconds()
      }
    }
    const intervalId = setInterval(animate, 1000) // 1초마다 animate 함수를 호출합니다.

    return () => {
      clearInterval(intervalId) // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    }
  }, [])
  const scroll = [
    {
      position: [1, -1, 1],
      scale: [0.8, 0.8, 0.8],
      rotation: [0, -0.6, 0],
    },
    {
      position: [0, -1, 0],
      scale: [0.8, 0.8, 0.8],
      rotation: [0, 0, 0],
    },
  ]
  //position={[1, -1, 1]} scale={[.8, .8, .8]} rotation={[0, -0.6, 0]}
  // postions 확대
  // eslint-disable-next-line react/no-unknown-property
  // 1 position={[1, -1, 1]} scale={[.8, .8, .8]} rotation={[0, -0.6, 0]}
  return <CustomPrimitive object={scene} {...scroll[1]} />
}
//
const WatchModel = () => {
  return (
    <CustomCanvas>
      <ambientLight />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight position={[-1, 1, 6]} />

      <Model />
    </CustomCanvas>
  )
}

export default WatchModel

const CustomCanvas = styled(Canvas)`
  position: fixed !important;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -999;
  & canvas {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    & * {
      transition: 0.6s;
    }
  }
`
const CustomPrimitive = styled('primitive')``
