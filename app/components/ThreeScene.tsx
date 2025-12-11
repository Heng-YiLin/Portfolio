"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export default function ThreeScene() {
    const mountRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (!mountRef.current) return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Geometry
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(
            "/911.glb",
            (gltf) => {
                const car = gltf.scene;
                // Optional: Adjust scale or position if needed
                car.scale.set(0.5, 0.5, 0.5);
                scene.add(car);
            },
            undefined,
            (error: unknown) => {
                console.error("An error occurred loading the model:", error);
            }
        );

        // Animation loop
        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            renderer.dispose();
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{ width: "100%", height: "300px", background: "#000" }}
        />
    );
}
