import { useEffect } from "react";

export default function useGlobe(globeRef) {
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    let renderer;
    let frameId;
    let disposed = false;
    const cleanupFns = [];

    import("three").then((THREE) => {
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      globe.classList.add("is-rendered");
      globe.appendChild(renderer.domElement);

      const globeSize = () => {
        const bounds = globe.getBoundingClientRect();
        return Math.max(180, Math.min(500, Math.round(Math.min(bounds.width, bounds.height) || 500)));
      };

      const geometry = new THREE.SphereGeometry(5, 48, 48);
      const material = new THREE.MeshStandardMaterial({ color: 0x2e7fd1 });

      new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
        (loadedTexture) => {
          material.map = loadedTexture;
          material.color.set(0xffffff);
          material.needsUpdate = true;
        },
        undefined,
        () => {
          globe.classList.add("is-fallback");
        }
      );

      const earth = new THREE.Mesh(geometry, material);
      const light = new THREE.DirectionalLight(0xffffff, 2);
      const rotationState = {
        isDragging: false,
        lastX: 0,
        lastY: 0,
        velocityX: 0,
        velocityY: 0
      };

      scene.add(earth);
      light.position.set(5, 3, 5);
      scene.add(light);
      camera.position.z = 10;

      function resizeGlobe() {
        const size = globeSize();
        renderer.setSize(size, size, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      }

      function clampLatitude(value) {
        return Math.max(-1.1, Math.min(1.1, value));
      }

      function handlePointerDown(event) {
        if (!event.isPrimary) return;
        rotationState.isDragging = true;
        rotationState.lastX = event.clientX;
        rotationState.lastY = event.clientY;
        rotationState.velocityX = 0;
        rotationState.velocityY = 0;
        renderer.domElement.setPointerCapture?.(event.pointerId);
      }

      function handlePointerMove(event) {
        if (!rotationState.isDragging || !event.isPrimary) return;
        event.preventDefault();

        const deltaX = event.clientX - rotationState.lastX;
        const deltaY = event.clientY - rotationState.lastY;
        const rotationSpeed = 0.006;

        rotationState.lastX = event.clientX;
        rotationState.lastY = event.clientY;
        rotationState.velocityX = deltaX * rotationSpeed;
        rotationState.velocityY = deltaY * rotationSpeed;

        earth.rotation.y += rotationState.velocityX;
        earth.rotation.x = clampLatitude(earth.rotation.x + rotationState.velocityY);
      }

      function handlePointerUp(event) {
        if (!event.isPrimary) return;
        rotationState.isDragging = false;
        if (renderer.domElement.hasPointerCapture?.(event.pointerId)) {
          renderer.domElement.releasePointerCapture(event.pointerId);
        }
      }

      resizeGlobe();
      window.addEventListener("resize", resizeGlobe, { passive: true });
      window.visualViewport?.addEventListener("resize", resizeGlobe, { passive: true });
      renderer.domElement.addEventListener("pointerdown", handlePointerDown);
      renderer.domElement.addEventListener("pointermove", handlePointerMove, { passive: false });
      renderer.domElement.addEventListener("pointerup", handlePointerUp);
      renderer.domElement.addEventListener("pointercancel", handlePointerUp);

      function animate() {
        frameId = requestAnimationFrame(animate);
        if (!rotationState.isDragging) {
          earth.rotation.y += 0.003 + rotationState.velocityX * 0.92;
          earth.rotation.x = clampLatitude(earth.rotation.x + rotationState.velocityY * 0.92);
          rotationState.velocityX *= 0.92;
          rotationState.velocityY *= 0.92;
        }
        renderer.render(scene, camera);
      }

      animate();

      cleanupFns.push(() => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resizeGlobe);
        window.visualViewport?.removeEventListener("resize", resizeGlobe);
        renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
        renderer.domElement.removeEventListener("pointermove", handlePointerMove);
        renderer.domElement.removeEventListener("pointerup", handlePointerUp);
        renderer.domElement.removeEventListener("pointercancel", handlePointerUp);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      });
    }).catch(() => {
      globe.classList.add("is-fallback");
    });

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [globeRef]);
}
