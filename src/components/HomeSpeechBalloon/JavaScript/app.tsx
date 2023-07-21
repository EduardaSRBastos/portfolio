import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import React from 'react';

export function SpeechBalloon() {

const canvasRef = useRef<HTMLCanvasElement>(null);
const isMobile = window.matchMedia('(max-width: 767px)').matches;
useEffect(()=> {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth - 10, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (!isMobile) {
        var targetAspectRatio = 16 / 9; 
      } else {
        var targetAspectRatio = 1 / 1; 
      }

    function aspectSize(availableWidth: number, availableHeight: number) {
    var currentRatio = availableWidth / availableHeight;
    if (currentRatio > targetAspectRatio) {
        //the height is the limiting factor
        return {
        width: availableHeight * targetAspectRatio,
        height: availableHeight
        };
    } else {
        // the width is the limiting factor
        return {
        width: availableWidth,
        height: availableWidth / targetAspectRatio
        };
    }
    }

    function onWindowResize() {
    var newDimensions = aspectSize(window.innerWidth, window.innerHeight);
    camera.aspect = targetAspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(newDimensions.width, newDimensions.height);

    renderer.domElement.style.marginLeft = (newDimensions.width >= window.innerWidth ? 0 : (window.innerWidth - newDimensions.width) / 2) + "px";
    }
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);

    if (!isMobile) {
        camera.fov = 75;
      } else {
        camera.fov = 83;
      }

    camera.position.z = 6;
    
    camera.updateProjectionMatrix();

    //cube with length, height and depth
    var cubeGeometry = new THREE.BoxGeometry(8.6,4.5,1);
    
    //white color material
    var material = new THREE.MeshBasicMaterial({color: 0xffffff});
    
    //cube mesh
    var cube = new THREE.Mesh(cubeGeometry, material);
    cube.position.set(0,1,0);
    scene.add(cube);

    const triangleGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
        0.5, 0.9, 0.5,
        -1.0, -1.0, 0.5,
        0.2, -1.0, 0.5
    ]);

    triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const triangle = new THREE.Mesh(triangleGeometry, material);
    triangle.position.set(-2.95, -3.0, 0.0);
    triangle.rotation.z = Math.PI;
    cube.add(triangle);

    var cubeOutlineGeometry = new THREE.BoxGeometry(9,4.9,0.99);
    var cubeOutlineMaterial = new THREE.MeshBasicMaterial( { color: 0x00 } );
    var cubeOutlineMesh = new THREE.Mesh( cubeOutlineGeometry, cubeOutlineMaterial );
    cube.add(cubeOutlineMesh);

    const triangleOutlineGeometry = new THREE.BufferGeometry();
    const verticesOutline = new Float32Array([
        0.5, 0.9, 0.1,
        -1.0, -1.0, 0.1,
        0.2, -1.0, 0.1
    ]);

    triangleOutlineGeometry.setAttribute('position', new THREE.BufferAttribute(verticesOutline, 3));
    const triangleOutline = new THREE.Mesh(triangleOutlineGeometry, cubeOutlineMaterial);
    triangleOutline.position.set(-2.95, -3.0, 0.0);
    triangleOutline.rotation.z = Math.PI;
    triangleOutline.scale.set(2.2, 2.2, 2.2);
    cube.add(triangleOutline);

    // Load a font for the text
    const fontLoader = new FontLoader();
    fontLoader.load( 'Pacifico_Regular.json', function ( font ) {
        const textGeometry = new TextGeometry( 'Eduarda', {
            font: font,
            size: 0.8,
            height: 0,
        } );
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFC524 });
        // create a mesh for the text and position it relative to the cube
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-2, 0, 0.54);
        cube.add(textMesh);

        const textGeometry2 = new TextGeometry( 'Software and Web Developer', {
            font: font,
            size: 0.4,
            height: 0,
        } );
        const textMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00 });
      
        // create a mesh for the text and position it relative to the cube
        const textMesh2 = new THREE.Mesh(textGeometry2, textMaterial2);
        textMesh2.position.set(-3.5, -0.8, 0.54);
        cube.add(textMesh2);
    } );

    //cube rotation
    var cubeCoordRotation: { x: any; y: any;};

    canvas.addEventListener('mouseenter', () => {
        canvas.addEventListener('mousemove', onMouseMove);
    });
    
    canvas.addEventListener('mouseleave', () => {
        cubeCoordRotation = {x:0, y:0}
        canvas.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(ev:any) {
        // calculate the mouse position relative to the scene
        const rect = ev.currentTarget.getBoundingClientRect();
        var x = (ev.clientX - rect.left)/(rect.width )*2 - 1;
        var y = (ev.clientY - rect.top)/(rect.height)*2 - 1;
            
        //rotation to apply to cubeCoordRotation
        cubeCoordRotation = {x:x, y:y}
    }
  
    const MAX_ROTATION_ANGLE = Math.PI / 6; // 90 degrees in radians
    const MIN_ROTATION_ANGLE = -Math.PI / 6;
    
    //function to create animations
    function update(){
        //changes rotation of the cube on the axis with the position of the mouse
        if(cubeCoordRotation != null)
        {
            cube.rotation.x +=cubeCoordRotation.y * 0.003;
            cube.rotation.y +=cubeCoordRotation.x * 0.003;

            cube.rotation.x = Math.max(MIN_ROTATION_ANGLE, Math.min(MAX_ROTATION_ANGLE, cube.rotation.x));
            cube.rotation.y = Math.max(MIN_ROTATION_ANGLE, Math.min(MAX_ROTATION_ANGLE, cube.rotation.y));
        }
    
        //render scene
        renderer.render(scene, camera);
    
        requestAnimationFrame(update);
    }

    update();

    window.addEventListener('resize', onWindowResize, false);
    onWindowResize(); // call onWindowResize initially to set canvas size
  
    return () => {
      window.removeEventListener('resize', onWindowResize);
    }
}, []);

return <canvas ref={canvasRef} />
}