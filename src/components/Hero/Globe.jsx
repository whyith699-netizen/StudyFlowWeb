import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Globe() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 3.5

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Globe
    const globeRadius = 1.2
    const sphereGeometry = new THREE.SphereGeometry(globeRadius, 64, 64)

    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0x1d4ed8) },
        uColor2: { value: new THREE.Color(0x3b82f6) },
        uColor3: { value: new THREE.Color(0x60a5fa) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main() {
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.5);
          float latitude = vUv.y;
          vec3 baseColor = mix(uColor1, uColor2, latitude);
          float gridX = step(0.02, mod(vUv.x * 30.0 + uTime * 0.1, 1.0));
          float gridY = step(0.02, mod(vUv.y * 30.0, 1.0));
          float grid = 1.0 - (1.0 - gridX) * (1.0 - gridY);
          float n = noise(vUv * 10.0 + uTime * 0.05);
          float landmass = smoothstep(0.4, 0.6, n);
          vec3 finalColor = mix(baseColor, uColor3, landmass * 0.5);
          finalColor = mix(finalColor, uColor3, grid * 0.15);
          finalColor += vec3(0.3, 0.5, 1.0) * fresnel * 0.8;
          float alpha = 1.0 - fresnel * 0.3;
          gl_FragColor = vec4(finalColor, alpha * 0.9);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
    })

    const globe = new THREE.Mesh(sphereGeometry, globeMaterial)
    scene.add(globe)

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(globeRadius * 1.15, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 0.3) * intensity;
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Connection points
    const pointsGroup = new THREE.Group()
    for (let i = 0; i < 50; i++) {
      const phi = Math.acos(-1 + (2 * i) / 50)
      const theta = Math.sqrt(50 * Math.PI) * phi
      const pointGeometry = new THREE.SphereGeometry(0.015, 8, 8)
      const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.8 })
      const point = new THREE.Mesh(pointGeometry, pointMaterial)
      point.position.setFromSphericalCoords(globeRadius * 1.01, phi, theta)
      pointsGroup.add(point)
    }
    scene.add(pointsGroup)

    // Animation
    let time = 0
    let animFrameId

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      time += 0.01
      globe.rotation.y += 0.002
      pointsGroup.rotation.y += 0.002
      atmosphere.rotation.y += 0.001
      globeMaterial.uniforms.uTime.value = time
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      sphereGeometry.dispose()
      globeMaterial.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
    }
  }, [])

  return (
    <div id="globe-container" ref={containerRef}>
      <canvas id="globe-canvas" ref={canvasRef} />
      <div className="globe-glow" />
      <div className="globe-mask" />
    </div>
  )
}
