import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const FullSizeModel = ({ src, width = "100%", height = "100%" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        containerRef.current.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(
            45,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            5000
        );

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        let model;

        loader.load(
            src,
            (gltf) => {
                model = gltf.scene;
                scene.add(model);

                // Center and Scale the Model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                model.position.sub(center); // Center the model

                const maxDimension = Math.max(size.x, size.y, size.z);
                const scale = Math.min(
                    (containerRef.current.clientWidth * 0.6) / maxDimension, // Reduced scale factor to zoom out
                    (containerRef.current.clientHeight * 0.6) / maxDimension // Reduced scale factor to zoom out
                );
                model.scale.setScalar(scale); // Scale the model to fit 60% of container space

                const distance = maxDimension * 2.5; // Increase the distance for more zoom out
                camera.position.set(0, distance * 0.6, distance); // Adjust for a wider view
                camera.lookAt(0, 0, 0);
            },
            undefined,
            (error) => {
                console.error("Error loading model:", error);
            }
        );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        const animate = () => {
            requestAnimationFrame(animate);

            if (model) {
                model.rotation.y += 0.003; // Slower rotation speed (as before)
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [window.onresize]);

    return (
        <div
            ref={containerRef}
            style={{
                width,
                height,
                overflow: "hidden",
                position: "relative",
                backgroundColor: "transparent",
            }}
        ></div>
    );
};

const CompanyOverview = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center"
            style={{
                backgroundImage: "url('/d2.png')",
                backgroundSize: "cover", // Ensures the image covers the entire background
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents tiling
            }}
        >
            {/* Heading Section */}
            <div className="mt-10 flex justify-start flex-col items-start w-full pl-60">
                <h1 className="text-6xl font-extrabold text-gray-700">Why CONNEX ?</h1>
                <h1 className="text-6xl font-extrabold text-gray-700 mt-2">Right Now!</h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-wrap justify-center items-center w-full max-w-6xl mt-10">
                {/* Left Side (Mannequin/Image Placeholder) */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div
                        className="model-container sm:w-[250px] md:w-[200px] lg:w-[400px] sm:mt-5 lg:mt-0 mr-18"
                        style={{
                            margin: "0 auto",
                        }}
                    >
                        <FullSizeModel
                            src="/models/farm_house.glb"
                            width="400px"
                            height="400px"
                        />
                    </div>
                </div>

                {/* Right Side (Content) */}
                <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0">
                    <ul className="space-y-6 text-gray-800">
                        <li>
                            <h3 className="text-2xl font-bold">TRY IT ON IN SECONDS</h3>
                            <p className="text-lg font-medium ">
                                CONNEX allows your customers to try on products in seconds
                                without waiting for days!
                            </p>
                        </li>
                        <li>
                            <h3 className="text-2xl font-bold">ACCURATE, FAST & LIGHTWEIGHT</h3>
                            <p className="text-lg font-medium ">
                                CONNEX is proven to be accurate, fast and lightweight virtual
                                try on, helps you in brand differentiation.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-2xl font-bold">DOUBLE SALES, HALF RETURNS</h3>
                            <p className="text-lg font-medium ">
                                We have been helping global brands to achieve double sales,
                                triple visitors and half the product returns.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;
