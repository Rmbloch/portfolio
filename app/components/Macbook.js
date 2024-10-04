import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function MacBook({ screenImage, facingDirection }) {
  const group = useRef()

  useEffect(() => {
    const loader = new GLTFLoader()
    const textureLoader = new THREE.TextureLoader()

    loader.load("/macbook_air_m2.glb", (gltf) => {
      const model = gltf.scene

      const screenTexture = textureLoader.load(screenImage)
      model.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'Object_4') {
            child.material = new THREE.MeshBasicMaterial({ map: screenTexture })
          }
        }
      });

      group.current.add(model)
    });
  }, [screenImage])

  const initialRotation = facingDirection === 'left' ? [0, 0, 0] : [0, -0.5, 0]

  return (
    <group ref={group} rotation={initialRotation} scale={0.45} position={[0, -0.34, 0]} />
  );
}