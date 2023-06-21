import React, {memo, useEffect, useRef, useState} from 'react'
import {useGLTF} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import * as THREE from 'three'
import {a, useSpring} from '@react-spring/three'
import {scroll} from '../../utility/listItems'

const Model = () => {
  const {scene} = useGLTF('/images/3D/3d/scene.gltf')
  const hour = useRef<THREE.Object3D[]>([])
  const minute = useRef<THREE.Object3D[]>([])
  const second = useRef<THREE.Object3D>()
  const initialValue = {
    sec: 9.746,
    min: 1.085,
    hou: -3.61,
  }
  const [currentSection, setCurrentSection] = useState<number>(0)
  const AnimatedPrimitive = a.primitive as any

  useEffect(() => {
    const handleScroll = () => {
      const {scrollY} = window
      const sectionHeight = window.innerHeight
      const sectionIndex = Math.round(scrollY / sectionHeight)
      setCurrentSection(sectionIndex)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  scene.traverse(object => {
    // Object_84 : 초침
    // Object_81 : 분침, 82 : 분침 바늘
    // Object_78 : 시침, 79 : 시침 바늘
    const {name} = object

    if (name === 'Object_84') return (second.current = object)
    if (name === 'Object_81' || name === 'Object_82') return minute.current.push(object)
    if (name === 'Object_78' || name === 'Object_79') return hour.current.push(object)
  })

  useEffect(() => {
    const animate = () => {
      const date: Date = new Date()
      const sec: number = -0.1056 // 1초 : +0.085
      const min: number = -0.1056
      const hou: number = -0.1056

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
    const intervalId = setInterval(animate, 1000) // 1초마다 animate 함수를 호출

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const props: any = useSpring({
    position: scroll[currentSection].position,
    scale: scroll[currentSection].scale,
    rotation: scroll[currentSection].rotation,
    config: {mass: 5, tension: 500, friction: 120},
  })

  return <AnimatedPrimitive object={scene} {...props} />
}
const FallbackComponent = () => {
  // WebGL이 지원되지 않을 때 보여줄 컴포넌트
  return (
    <NotWebGlMsg>
      <div className={'textBox'}>
        <div>
          사이트의 배경을 Three.js로 3D 애니메이션으로 구성되어 있으나 사용자의 브라우저가 하드웨어 가속이 켜져 있지
          않거나, 지원하지 않습니다.
        </div>
        <div>제대로 된 포트폴리오를 확인하시려면 브라우저 설정에서 하드웨어 가속을 활성화를 부탁드립니다.</div>
      </div>
    </NotWebGlMsg>
  )
}
const WatchModel = () => {
  // WebGL를 지원하는지 확인하는 함수
  const isWebGLAvailable = () => {
    try {
      const canvas = document.createElement('canvas')
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    } catch (e) {
      return false
    }
  }

  return isWebGLAvailable() ? (
    <CustomCanvas>
      <ambientLight />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight position={[-1, 1, 6]} />
      <Model />
    </CustomCanvas>
  ) : (
    <FallbackComponent />
  )
}
export default memo(WatchModel)

const CustomCanvas = styled(Canvas)`
  position: fixed !important;
  height: 100%;
  width: 100%;
  top: 100%;
  z-index: -999;
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
  & canvas {
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
  @keyframes fadeIn {
    to {
      top: 0;
      opacity: 1;
    }
  }
`
const NotWebGlMsg = styled.div`
  position: fixed;
  text-align: center;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 10%;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  line-height: 32px;
  & .textBox {
    position: relative;
    background: rgba(53, 53, 53, 0.6);
    max-width: 700px;
    padding: 2rem;
    border-radius: 14px;
    box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.7);
  }
`
