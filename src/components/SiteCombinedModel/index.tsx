import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GLTFResult } from "./types";

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/site-combined-model.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="water_tank"
          position={[-69.13, -10.41, 98.03]}
          rotation={[Math.PI / 2, 0, 3.12]}
          scale={0.01}
        >
          <mesh
            name="100_water_3"
            castShadow
            receiveShadow
            geometry={nodes["100_water_3"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
          />
          <mesh
            name="25_water_3"
            castShadow
            receiveShadow
            geometry={nodes["25_water_3"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.25]}
          />
          <mesh
            name="50_water_3"
            castShadow
            receiveShadow
            geometry={nodes["50_water_3"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.5]}
          />
          <mesh
            name="75_water_3"
            castShadow
            receiveShadow
            geometry={nodes["75_water_3"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.75]}
          />
          <group name="roof_3" position={[-77.73, -273.1, -1448.3]}>
            <mesh
              name="Mesh059"
              castShadow
              receiveShadow
              geometry={nodes.Mesh059.geometry}
              material={materials["MF Blue"]}
            />
            <mesh
              name="Mesh059_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh059_1.geometry}
              material={
                materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
              }
            />
            <mesh
              name="Mesh059_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh059_2.geometry}
              material={materials["white.002"]}
            />
          </group>
          <mesh
            name="tank_3"
            castShadow
            receiveShadow
            geometry={nodes.tank_3.geometry}
            material={materials["Mat.003"]}
            position={[-77.73, -273.1, -768.14]}
          />
        </group>
        <group
          name="water_tank_1"
          position={[-78.62, -10.41, 89.05]}
          rotation={[Math.PI / 2, 0, 3.12]}
          scale={0.01}
        >
          <mesh
            name="25_water_4"
            castShadow
            receiveShadow
            geometry={nodes["25_water_4"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.25]}
          />
          <mesh
            name="75_water_4"
            castShadow
            receiveShadow
            geometry={nodes["75_water_4"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.75]}
          />
          <mesh
            name="ladder_4"
            castShadow
            receiveShadow
            geometry={nodes.ladder_4.geometry}
            material={materials["white.002"]}
            position={[164.09, 576.54, -24.05]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="tank_4"
            castShadow
            receiveShadow
            geometry={nodes.tank_4.geometry}
            material={materials["Mat.003"]}
            position={[-77.73, -273.1, -768.14]}
          />
          <mesh
            name="100_water_4"
            castShadow
            receiveShadow
            geometry={nodes["100_water_4"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
          />
          <mesh
            name="50_water_4"
            castShadow
            receiveShadow
            geometry={nodes["50_water_4"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.5]}
          />
          <mesh
            name="floor_4"
            castShadow
            receiveShadow
            geometry={nodes.floor_4.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -29.82]}
          />
          <mesh
            name="pipes_4"
            castShadow
            receiveShadow
            geometry={nodes.pipes_4.geometry}
            material={nodes.pipes_4.material}
            position={[164.09, 576.54, 8.95]}
          />
          <mesh
            name="roof_4"
            castShadow
            receiveShadow
            geometry={nodes.roof_4.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -1448.3]}
          />
        </group>
        <group
          name="water_tank_2"
          position={[-78.94, -10.41, -69.22]}
          rotation={[Math.PI / 2, 0, 3.12]}
          scale={0.01}
        >
          <mesh
            name="25_water_2"
            castShadow
            receiveShadow
            geometry={nodes["25_water_2"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.25]}
          />
          <mesh
            name="75_water_2"
            castShadow
            receiveShadow
            geometry={nodes["75_water_2"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.75]}
          />
          <mesh
            name="ladder_2"
            castShadow
            receiveShadow
            geometry={nodes.ladder_2.geometry}
            material={materials["white.002"]}
            position={[164.09, 576.54, -24.05]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="100_water_2"
            castShadow
            receiveShadow
            geometry={nodes["100_water_2"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
          />
          <mesh
            name="50_water_2"
            castShadow
            receiveShadow
            geometry={nodes["50_water_2"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.5]}
          />
          <mesh
            name="floor_2"
            castShadow
            receiveShadow
            geometry={nodes.floor_2.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -29.82]}
          />
          <mesh
            name="pipes_2"
            castShadow
            receiveShadow
            geometry={nodes.pipes_2.geometry}
            material={nodes.pipes_2.material}
            position={[164.09, 576.54, 8.95]}
          />
          <mesh
            name="roof_2"
            castShadow
            receiveShadow
            geometry={nodes.roof_2.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -1448.3]}
          />
          <mesh
            name="tank_2"
            castShadow
            receiveShadow
            geometry={nodes.tank_2.geometry}
            material={materials["Mat.003"]}
            position={[-77.73, -273.1, -768.14]}
          />
        </group>
        <group
          name="water_tank_3"
          position={[-69.45, -10.41, -75.47]}
          rotation={[Math.PI / 2, 0, 3.12]}
          scale={0.01}
        >
          <mesh
            name="25_water"
            castShadow
            receiveShadow
            geometry={nodes["25_water"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.25]}
          />
          <mesh
            name="75_water"
            castShadow
            receiveShadow
            geometry={nodes["75_water"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.75]}
          />
          <mesh
            name="ladder"
            castShadow
            receiveShadow
            geometry={nodes.ladder.geometry}
            material={materials["white.002"]}
            position={[164.09, 576.55, -24.05]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="tank"
            castShadow
            receiveShadow
            geometry={nodes.tank.geometry}
            material={materials["Mat.003"]}
            position={[-77.73, -273.1, -768.14]}
          />
          <mesh
            name="100_water"
            castShadow
            receiveShadow
            geometry={nodes["100_water"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
          />
          <mesh
            name="50_water"
            castShadow
            receiveShadow
            geometry={nodes["50_water"].geometry}
            material={materials["Water - Pool.001"]}
            position={[-77.73, -273.1, -73.72]}
            scale={[1, 1, 0.5]}
          />
          <mesh
            name="floor"
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -29.82]}
          />
          <mesh
            name="pipes"
            castShadow
            receiveShadow
            geometry={nodes.pipes.geometry}
            material={nodes.pipes.material}
            position={[164.09, 576.55, 8.95]}
          />
          <mesh
            name="roof"
            castShadow
            receiveShadow
            geometry={nodes.roof.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.002"]
            }
            position={[-77.73, -273.1, -1448.3]}
          />
        </group>
        <group
          name="batteries"
          position={[-59.17, -10.34, -43.21]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Battery_0_2">
            <mesh
              name="BATTERY_BOX_2"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_2.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_1_2" position={[104, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance_4"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance_4.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_2_2" position={[208, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance_5"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance_5.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_3_2" position={[312, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance_6"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance_6.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
        </group>
        <group
          name="batteries_2"
          position={[-56.06, -10.34, -40.23]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.01}
        >
          <group name="Battery_0">
            <mesh
              name="BATTERY_BOX"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_1" position={[104, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_2" position={[208, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance_2"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance_2.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
          <group name="Battery_3" position={[312, 0, 0]}>
            <mesh
              name="BATTERY_BOX_instance_3"
              castShadow
              receiveShadow
              geometry={nodes.BATTERY_BOX_instance_3.geometry}
              material={materials["Battery Box.002"]}
              position={[0, 153.39, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={-1}
            />
          </group>
        </group>
        <group
          name="Water_Hero"
          position={[-77.54, -10.41, 86.16]}
          rotation={[Math.PI / 2, 0, 3.12]}
          scale={0.01}
        >
          <mesh
            name="floor_4001"
            castShadow
            receiveShadow
            geometry={nodes.floor_4001.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.003"]
            }
            position={[-699.57, 820.27, -14.9]}
            scale={1.21}
          />
          <mesh
            name="pipes_4001"
            castShadow
            receiveShadow
            geometry={nodes.pipes_4001.geometry}
            material={nodes.pipes_4001.material}
            position={[-406.84, 1848.77, 32.03]}
            scale={1.21}
          />
          <mesh
            name="roof_4001"
            castShadow
            receiveShadow
            geometry={nodes.roof_4001.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.003"]
            }
            position={[-699.57, 820.27, -1731.99]}
            scale={1.21}
          />
          <mesh
            name="75_water_4001"
            castShadow
            receiveShadow
            geometry={nodes["75_water_4001"].geometry}
            material={materials["Water - Pool.002"]}
            position={[-699.57, 820.27, -68.04]}
            scale={[1.21, 1.21, 0.91]}
          />
          <mesh
            name="ladder_4001"
            castShadow
            receiveShadow
            geometry={nodes.ladder_4001.geometry}
            material={materials["white.003"]}
            position={[-406.84, 1848.77, -7.92]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.21}
          />
          <mesh
            name="tank_4001"
            castShadow
            receiveShadow
            geometry={nodes.tank_4001.geometry}
            material={materials["Mat.004"]}
            position={[-699.57, 820.27, -908.65]}
            scale={1.21}
          />
        </group>
        <group
          name="Battery_Hero"
          position={[-82.74, -10.34, -53.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Battery_3_2001" position={[312, 0, 0]}>
            <group
              name="BATTERY_BOX_instance_6001"
              position={[-47.62, -541.4, -358.22]}
              rotation={[Math.PI / 2, -0.01, 0]}
              scale={-2.28}
            >
              <mesh
                name="Mesh125"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125.geometry}
                material={materials["Battery Box.003"]}
              />
              <mesh
                name="Mesh125_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_1.geometry}
                material={materials["Power Box.002"]}
              />
              <mesh
                name="Mesh125_2"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_2.geometry}
                material={materials["Battery Box.004"]}
              />
              <mesh
                name="Mesh125_3"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_3.geometry}
                material={materials["Concrete.002"]}
              />
              <mesh
                name="Mesh125_4"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_4.geometry}
                material={materials["Color.002"]}
              />
              <mesh
                name="Mesh125_5"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_5.geometry}
                material={materials["Substation Box.002"]}
              />
              <mesh
                name="Mesh125_6"
                castShadow
                receiveShadow
                geometry={nodes.Mesh125_6.geometry}
                material={materials["Switch Box.002"]}
              />
            </group>
          </group>
        </group>
        <group
          name="Battery_Hero001"
          position={[-82.74, -10.34, -49.4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Battery_3_2002" position={[312, 0, 0]}>
            <group
              name="BATTERY_BOX_instance_6002"
              position={[-47.62, -541.4, -358.22]}
              rotation={[Math.PI / 2, -0.01, 0]}
              scale={-2.28}
            >
              <mesh
                name="Mesh129"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129.geometry}
                material={materials["Battery Box.005"]}
              />
              <mesh
                name="Mesh129_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_1.geometry}
                material={materials["Power Box.003"]}
              />
              <mesh
                name="Mesh129_2"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_2.geometry}
                material={materials["Battery Box.006"]}
              />
              <mesh
                name="Mesh129_3"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_3.geometry}
                material={materials["Concrete.003"]}
              />
              <mesh
                name="Mesh129_4"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_4.geometry}
                material={materials["Color.003"]}
              />
              <mesh
                name="Mesh129_5"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_5.geometry}
                material={materials["Substation Box.003"]}
              />
              <mesh
                name="Mesh129_6"
                castShadow
                receiveShadow
                geometry={nodes.Mesh129_6.geometry}
                material={materials["Switch Box.003"]}
              />
            </group>
          </group>
        </group>
        <group
          name="Warehouse_Hero"
          position={[-82.74, -10.34, -49.4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Battery_3_2003" position={[312, 0, 0]}>
            <group
              name="Warehouse_Hero001"
              position={[-47.62, -541.4, -358.22]}
              rotation={[Math.PI / 2, -0.01, 0]}
              scale={-2.28}
            >
              <mesh
                name="Mesh001"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001.geometry}
                material={materials["Battery Box.001"]}
              />
              <mesh
                name="Mesh001_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_1.geometry}
                material={materials["Power Box.004"]}
              />
              <mesh
                name="Mesh001_2"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_2.geometry}
                material={materials["Battery Box.007"]}
              />
              <mesh
                name="Mesh001_3"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_3.geometry}
                material={materials["Concrete.004"]}
              />
              <mesh
                name="Mesh001_4"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_4.geometry}
                material={materials["Color.004"]}
              />
              <mesh
                name="Mesh001_5"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_5.geometry}
                material={materials["Substation Box.004"]}
              />
              <mesh
                name="Mesh001_6"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_6.geometry}
                material={materials["Switch Box.004"]}
              />
              <mesh
                name="Mesh001_7"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_7.geometry}
                material={materials["Mat.006"]}
              />
              <mesh
                name="Mesh001_8"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_8.geometry}
                material={materials["MF Blue.004"]}
              />
              <mesh
                name="Mesh001_9"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_9.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P2_WALL BLUE Paint.004"]
                }
              />
              <mesh
                name="Mesh001_10"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_10.geometry}
                material={materials["white.004"]}
              />
              <mesh
                name="Mesh001_11"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_11.geometry}
                material={materials["Water - Pool.003"]}
              />
              <mesh
                name="Mesh001_12"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_12.geometry}
                material={materials["logo.004"]}
              />
              <mesh
                name="Mesh001_13"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_13.geometry}
                material={materials["wire_153228184.034"]}
              />
              <mesh
                name="Mesh001_14"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_14.geometry}
                material={materials["BODY_GLOW.004"]}
              />
              <mesh
                name="Mesh001_15"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_15.geometry}
                material={materials["Plastic.003"]}
              />
              <mesh
                name="Mesh001_16"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_16.geometry}
                material={materials["Screen.003"]}
              />
              <mesh
                name="Mesh001_17"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_17.geometry}
                material={materials["Blue.004"]}
              />
              <mesh
                name="Mesh001_18"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_18.geometry}
                material={materials["Mat.007"]}
              />
              <mesh
                name="Mesh001_19"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_19.geometry}
                material={materials["wire_153228184.035"]}
              />
              <mesh
                name="Mesh001_20"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_20.geometry}
                material={materials["Battery Box.008"]}
              />
              <mesh
                name="Mesh001_21"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_21.geometry}
                material={materials["Power Box.005"]}
              />
              <mesh
                name="Mesh001_22"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_22.geometry}
                material={materials["Battery Box.009"]}
              />
              <mesh
                name="Mesh001_23"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_23.geometry}
                material={materials["Concrete.005"]}
              />
              <mesh
                name="Mesh001_24"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_24.geometry}
                material={materials["Color.005"]}
              />
              <mesh
                name="Mesh001_25"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_25.geometry}
                material={materials["Substation Box.005"]}
              />
              <mesh
                name="Mesh001_26"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_26.geometry}
                material={materials["Switch Box.005"]}
              />
              <mesh
                name="Mesh001_27"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_27.geometry}
                material={materials["floor .002"]}
              />
              <mesh
                name="Mesh001_28"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_28.geometry}
                material={
                  materials[
                    "20018 - WYA_PW11_Powdercoat_Monument_Internal Frames.004"
                  ]
                }
              />
              <mesh
                name="Mesh001_29"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_29.geometry}
                material={materials["- WYA_PC1_Colour_(Precast 150).004"]}
              />
              <mesh
                name="Mesh001_30"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_30.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P11_White Wall Paint.004"]
                }
              />
              <mesh
                name="Mesh001_31"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_31.geometry}
                material={materials["MF Blue.005"]}
              />
              <mesh
                name="Mesh001_32"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_32.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P1_White Wall Paint.004"]
                }
              />
              <mesh
                name="Mesh001_33"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_33.geometry}
                material={materials["- WYA_PC1_Colour_(Precast 200).004"]}
              />
              <mesh
                name="Mesh001_34"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_34.geometry}
                material={materials["WYA_Roller Shutter Door.004"]}
              />
              <mesh
                name="Mesh001_35"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_35.geometry}
                material={
                  materials["WYA_Roller Shutter Door_Mainfreight Blue.004"]
                }
              />
              <mesh
                name="Mesh001_36"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_36.geometry}
                material={
                  materials["WYA_Roller Shutter Door Drum_Mainfreight Blue.004"]
                }
              />
              <mesh
                name="Mesh001_37"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_37.geometry}
                material={materials["Metal - Paint Finish - Yellow, Matte.004"]}
              />
              <mesh
                name="Mesh001_38"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_38.geometry}
                material={materials["- WYA_Plasterboard.004"]}
              />
              <mesh
                name="Mesh001_39"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_39.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P13_Basalt Wall Paint.004"]
                }
              />
              <mesh
                name="Mesh001_40"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_40.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P19_Mainfreight White.004"]
                }
              />
              <mesh
                name="Mesh001_41"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_41.geometry}
                material={materials["- WYA_Metal Stud.004"]}
              />
              <mesh
                name="Mesh001_42"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_42.geometry}
                material={materials["Metal-Chrome-Caroma.004"]}
              />
              <mesh
                name="Mesh001_43"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_43.geometry}
                material={materials["Porcelain-White-Caroma.004"]}
              />
              <mesh
                name="Mesh001_44"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_44.geometry}
                material={materials["PW11- POWDERCOAT - DULUX MATT BLACK.004"]}
              />
              <mesh
                name="Mesh001_45"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_45.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P12_DOOR Paint.004"]
                }
              />
              <mesh
                name="Mesh001_46"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_46.geometry}
                material={materials["Default.004"]}
              />
              <mesh
                name="Mesh001_47"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_47.geometry}
                material={materials["- WYA_Plasterboard(Fire Rating).004"]}
              />
              <mesh
                name="Mesh001_48"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_48.geometry}
                material={
                  materials[
                    "- WYA_Plasterboard(Fire Rating)(moisture resistant).004"
                  ]
                }
              />
              <mesh
                name="Mesh001_49"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_49.geometry}
                material={
                  materials["PW1- POWDERCOAT - DULUX MATT BLACK PG1A9.004"]
                }
              />
              <mesh
                name="Mesh001_50"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_50.geometry}
                material={materials["Glass_Panel.002"]}
              />
              <mesh
                name="Mesh001_51"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_51.geometry}
                material={
                  materials["- WYA_Mainfreight_WP1_Barestone Internal.004"]
                }
              />
              <mesh
                name="Mesh001_52"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_52.geometry}
                material={materials["- WYA_CB1_Zincalume_Trimdek Cladding.003"]}
              />
              <mesh
                name="Mesh001_53"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_53.geometry}
                material={
                  materials[
                    "- WYA_Mainfreight_AL1_Blue Wall Aluminium Cladding.004"
                  ]
                }
              />
              <mesh
                name="Mesh001_54"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_54.geometry}
                material={materials["- WYA_GL11_Clear glazing.004"]}
              />
              <mesh
                name="Mesh001_55"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_55.geometry}
                material={materials["- WYA_Visual Indicator Film_FLM11.004"]}
              />
              <mesh
                name="Mesh001_56"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_56.geometry}
                material={
                  materials["Metal-Steel-Powdercoated-Matte Black_PW11.004"]
                }
              />
              <mesh
                name="Mesh001_57"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_57.geometry}
                material={materials["20336 - WYA_Powdercoat_Charcoal_PW1.004"]}
              />
              <mesh
                name="Mesh001_58"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_58.geometry}
                material={materials["Colorback Glass_GC1.004"]}
              />
              <mesh
                name="Mesh001_59"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_59.geometry}
                material={materials["Insulation.004"]}
              />
              <mesh
                name="Mesh001_60"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_60.geometry}
                material={
                  materials["- WYA_CB1_Whitehaven_Kliplok Cladding.004"]
                }
              />
              <mesh
                name="Mesh001_61"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_61.geometry}
                material={materials["- WYA_Paint_Colorbond_whitehaven.004"]}
              />
              <mesh
                name="Mesh001_62"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_62.geometry}
                material={materials["- WYA_Visual Indicator Film_FLM.004"]}
              />
              <mesh
                name="Mesh001_63"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_63.geometry}
                material={
                  materials["- WYA_Mainfreight_CBX_White Wall Cladding.004"]
                }
              />
              <mesh
                name="Mesh001_64"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_64.geometry}
                material={materials["metal.004"]}
              />
              <mesh
                name="Mesh001_65"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_65.geometry}
                material={materials["RESINA.004"]}
              />
              <mesh
                name="Mesh001_66"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_66.geometry}
                material={materials["Concrete - Cast In Situ.004"]}
              />
              <mesh
                name="Mesh001_67"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_67.geometry}
                material={
                  materials["- WYA_Mainfreight_Paint P8_Basalt Door Paint.004"]
                }
              />
              <mesh
                name="Mesh001_68"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_68.geometry}
                material={materials["Skylight.004"]}
              />
              <mesh
                name="Mesh001_69"
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_69.geometry}
                material={materials["Metal - Steel.004"]}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Floor001"
          castShadow
          receiveShadow
          geometry={nodes.Floor001.geometry}
          material={materials["floor .001"]}
          position={[0, -10.36, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="Solar_Real_Right"
          position={[24.63, 4.14, 21.71]}
          rotation={[1.61, 1.54, 0]}
          scale={0.02}
        >
          <mesh
            name="Mesh033"
            castShadow
            receiveShadow
            geometry={nodes.Mesh033.geometry}
            material={materials["solar panels"]}
          />
          <mesh
            name="Mesh033_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh033_1.geometry}
            material={materials["wire_153228184.002"]}
          />
        </group>
        <group
          name="Solar_Hero"
          position={[23.36, 4.37, -41.58]}
          rotation={[2.49, 0, -Math.PI / 2]}
          scale={0.1}
        >
          <mesh
            name="Mesh087"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087.geometry}
            material={materials.Mat}
          />
          <mesh
            name="Mesh087_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_1.geometry}
            material={materials.wire_153228184}
          />
        </group>
        <group
          name="Warehouse_Alternate"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.3}
        >
          <mesh
            name="Mesh130"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130.geometry}
            material={
              materials[
                "20018 - WYA_PW11_Powdercoat_Monument_Internal Frames.003"
              ]
            }
          />
          <mesh
            name="Mesh130_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_1.geometry}
            material={materials["- WYA_PC1_Colour_(Precast 150).003"]}
          />
          <mesh
            name="Mesh130_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_2.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P11_White Wall Paint.003"]
            }
          />
          <mesh
            name="Mesh130_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_3.geometry}
            material={materials["MF Blue.003"]}
          />
          <mesh
            name="Mesh130_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_4.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P1_White Wall Paint.003"]
            }
          />
          <mesh
            name="Mesh130_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_5.geometry}
            material={materials["- WYA_PC1_Colour_(Precast 200).003"]}
          />
          <mesh
            name="Mesh130_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_6.geometry}
            material={materials["WYA_Roller Shutter Door.003"]}
          />
          <mesh
            name="Mesh130_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_7.geometry}
            material={materials["WYA_Roller Shutter Door_Mainfreight Blue.003"]}
          />
          <mesh
            name="Mesh130_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_8.geometry}
            material={
              materials["WYA_Roller Shutter Door Drum_Mainfreight Blue.003"]
            }
          />
          <mesh
            name="Mesh130_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_9.geometry}
            material={materials["Metal - Paint Finish - Yellow, Matte.003"]}
          />
          <mesh
            name="Mesh130_10"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_10.geometry}
            material={materials["- WYA_Plasterboard.003"]}
          />
          <mesh
            name="Mesh130_11"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_11.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P13_Basalt Wall Paint.003"]
            }
          />
          <mesh
            name="Mesh130_12"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_12.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P19_Mainfreight White.003"]
            }
          />
          <mesh
            name="Mesh130_13"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_13.geometry}
            material={materials["- WYA_Metal Stud.003"]}
          />
          <mesh
            name="Mesh130_14"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_14.geometry}
            material={materials["Metal-Chrome-Caroma.003"]}
          />
          <mesh
            name="Mesh130_15"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_15.geometry}
            material={materials["Porcelain-White-Caroma.003"]}
          />
          <mesh
            name="Mesh130_16"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_16.geometry}
            material={materials["PW11- POWDERCOAT - DULUX MATT BLACK.003"]}
          />
          <mesh
            name="Mesh130_17"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_17.geometry}
            material={materials["- WYA_Mainfreight_Paint P12_DOOR Paint.003"]}
          />
          <mesh
            name="Mesh130_18"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_18.geometry}
            material={materials["Default.003"]}
          />
          <mesh
            name="Mesh130_19"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_19.geometry}
            material={materials["- WYA_Plasterboard(Fire Rating).003"]}
          />
          <mesh
            name="Mesh130_20"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_20.geometry}
            material={
              materials[
                "- WYA_Plasterboard(Fire Rating)(moisture resistant).003"
              ]
            }
          />
          <mesh
            name="Mesh130_21"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_21.geometry}
            material={materials["PW1- POWDERCOAT - DULUX MATT BLACK PG1A9.003"]}
          />
          <mesh
            name="Mesh130_22"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_22.geometry}
            material={materials["Glass_Panel.001"]}
          />
          <mesh
            name="Mesh130_23"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_23.geometry}
            material={materials["- WYA_Mainfreight_WP1_Barestone Internal.003"]}
          />
          <mesh
            name="Mesh130_24"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_24.geometry}
            material={materials["- WYA_CB1_Zincalume_Trimdek Cladding.001"]}
          />
          <mesh
            name="Mesh130_25"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_25.geometry}
            material={
              materials[
                "- WYA_Mainfreight_AL1_Blue Wall Aluminium Cladding.003"
              ]
            }
          />
          <mesh
            name="Mesh130_26"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_26.geometry}
            material={materials["- WYA_GL11_Clear glazing.003"]}
          />
          <mesh
            name="Mesh130_27"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_27.geometry}
            material={materials["- WYA_Visual Indicator Film_FLM11.003"]}
          />
          <mesh
            name="Mesh130_28"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_28.geometry}
            material={
              materials["Metal-Steel-Powdercoated-Matte Black_PW11.003"]
            }
          />
          <mesh
            name="Mesh130_29"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_29.geometry}
            material={materials["Glass_Panel.001"]}
          />
          <mesh
            name="Mesh130_30"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_30.geometry}
            material={materials["20336 - WYA_Powdercoat_Charcoal_PW1.003"]}
          />
          <mesh
            name="Mesh130_31"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_31.geometry}
            material={materials["Colorback Glass_GC1.003"]}
          />
          <mesh
            name="Mesh130_32"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_32.geometry}
            material={materials["Insulation.003"]}
          />
          <mesh
            name="Mesh130_33"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_33.geometry}
            material={materials["- WYA_CB1_Whitehaven_Kliplok Cladding.003"]}
          />
          <mesh
            name="Mesh130_34"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_34.geometry}
            material={materials["- WYA_Paint_Colorbond_whitehaven.003"]}
          />
          <mesh
            name="Mesh130_35"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_35.geometry}
            material={materials["- WYA_Visual Indicator Film_FLM.003"]}
          />
          <mesh
            name="Mesh130_36"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_36.geometry}
            material={
              materials["- WYA_Mainfreight_CBX_White Wall Cladding.003"]
            }
          />
          <mesh
            name="Mesh130_37"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_37.geometry}
            material={materials["metal.003"]}
          />
          <mesh
            name="Mesh130_38"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_38.geometry}
            material={materials["RESINA.003"]}
          />
          <mesh
            name="Mesh130_39"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_39.geometry}
            material={materials["Concrete - Cast In Situ.003"]}
          />
          <mesh
            name="Mesh130_40"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_40.geometry}
            material={
              materials["- WYA_Mainfreight_Paint P8_Basalt Door Paint.003"]
            }
          />
          <mesh
            name="Mesh130_41"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_41.geometry}
            material={materials["Skylight.003"]}
          />
          <mesh
            name="Mesh130_42"
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_42.geometry}
            material={materials["Metal - Steel.003"]}
          />
        </group>
        <group
          name="Solar_Real_Left"
          position={[49.97, 2.86, -14.51]}
          rotation={[1.53, 1.54, 0]}
          scale={0.02}
        >
          <mesh
            name="Mesh081"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081.geometry}
            material={materials["solar panels.025"]}
          />
          <mesh
            name="Mesh081_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_1.geometry}
            material={materials["wire_153228184.026"]}
          />
          <mesh
            name="Mesh081_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_2.geometry}
            material={materials["solar panels.026"]}
          />
          <mesh
            name="Mesh081_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_3.geometry}
            material={materials["wire_153228184.027"]}
          />
          <mesh
            name="Mesh081_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_4.geometry}
            material={materials["solar panels.027"]}
          />
          <mesh
            name="Mesh081_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_5.geometry}
            material={materials["wire_153228184.028"]}
          />
          <mesh
            name="Mesh081_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_6.geometry}
            material={materials["solar panels.028"]}
          />
          <mesh
            name="Mesh081_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_7.geometry}
            material={materials["wire_153228184.029"]}
          />
          <mesh
            name="Mesh081_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_8.geometry}
            material={materials["solar panels.029"]}
          />
          <mesh
            name="Mesh081_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_9.geometry}
            material={materials["wire_153228184.030"]}
          />
          <mesh
            name="Mesh081_10"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_10.geometry}
            material={materials["solar panels.001"]}
          />
          <mesh
            name="Mesh081_11"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_11.geometry}
            material={materials["wire_153228184.001"]}
          />
          <mesh
            name="Mesh081_12"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_12.geometry}
            material={materials["solar panels.002"]}
          />
          <mesh
            name="Mesh081_13"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_13.geometry}
            material={materials["wire_153228184.003"]}
          />
          <mesh
            name="Mesh081_14"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_14.geometry}
            material={materials["solar panels"]}
          />
          <mesh
            name="Mesh081_15"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_15.geometry}
            material={materials["wire_153228184.002"]}
          />
          <mesh
            name="Mesh081_16"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_16.geometry}
            material={materials["solar panels.003"]}
          />
          <mesh
            name="Mesh081_17"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_17.geometry}
            material={materials["wire_153228184.004"]}
          />
          <mesh
            name="Mesh081_18"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_18.geometry}
            material={materials["solar panels.004"]}
          />
          <mesh
            name="Mesh081_19"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_19.geometry}
            material={materials["wire_153228184.005"]}
          />
          <mesh
            name="Mesh081_20"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_20.geometry}
            material={materials["solar panels.005"]}
          />
          <mesh
            name="Mesh081_21"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_21.geometry}
            material={materials["wire_153228184.006"]}
          />
          <mesh
            name="Mesh081_22"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_22.geometry}
            material={materials["solar panels.006"]}
          />
          <mesh
            name="Mesh081_23"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_23.geometry}
            material={materials["wire_153228184.007"]}
          />
          <mesh
            name="Mesh081_24"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_24.geometry}
            material={materials["solar panels.007"]}
          />
          <mesh
            name="Mesh081_25"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_25.geometry}
            material={materials["wire_153228184.008"]}
          />
          <mesh
            name="Mesh081_26"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_26.geometry}
            material={materials["solar panels.008"]}
          />
          <mesh
            name="Mesh081_27"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_27.geometry}
            material={materials["wire_153228184.009"]}
          />
          <mesh
            name="Mesh081_28"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_28.geometry}
            material={materials["solar panels.009"]}
          />
          <mesh
            name="Mesh081_29"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_29.geometry}
            material={materials["wire_153228184.010"]}
          />
          <mesh
            name="Mesh081_30"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_30.geometry}
            material={materials["solar panels.010"]}
          />
          <mesh
            name="Mesh081_31"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_31.geometry}
            material={materials["wire_153228184.011"]}
          />
          <mesh
            name="Mesh081_32"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_32.geometry}
            material={materials["solar panels.011"]}
          />
          <mesh
            name="Mesh081_33"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_33.geometry}
            material={materials["wire_153228184.012"]}
          />
          <mesh
            name="Mesh081_34"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_34.geometry}
            material={materials["solar panels.012"]}
          />
          <mesh
            name="Mesh081_35"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_35.geometry}
            material={materials["wire_153228184.013"]}
          />
          <mesh
            name="Mesh081_36"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_36.geometry}
            material={materials["solar panels.013"]}
          />
          <mesh
            name="Mesh081_37"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_37.geometry}
            material={materials["wire_153228184.014"]}
          />
          <mesh
            name="Mesh081_38"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_38.geometry}
            material={materials["solar panels.014"]}
          />
          <mesh
            name="Mesh081_39"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_39.geometry}
            material={materials["wire_153228184.015"]}
          />
          <mesh
            name="Mesh081_40"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_40.geometry}
            material={materials["solar panels.015"]}
          />
          <mesh
            name="Mesh081_41"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_41.geometry}
            material={materials["wire_153228184.016"]}
          />
          <mesh
            name="Mesh081_42"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_42.geometry}
            material={materials["solar panels.016"]}
          />
          <mesh
            name="Mesh081_43"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_43.geometry}
            material={materials["wire_153228184.017"]}
          />
          <mesh
            name="Mesh081_44"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_44.geometry}
            material={materials["solar panels.017"]}
          />
          <mesh
            name="Mesh081_45"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_45.geometry}
            material={materials["wire_153228184.018"]}
          />
          <mesh
            name="Mesh081_46"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_46.geometry}
            material={materials["solar panels.018"]}
          />
          <mesh
            name="Mesh081_47"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_47.geometry}
            material={materials["wire_153228184.019"]}
          />
          <mesh
            name="Mesh081_48"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_48.geometry}
            material={materials["solar panels.019"]}
          />
          <mesh
            name="Mesh081_49"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_49.geometry}
            material={materials["wire_153228184.020"]}
          />
          <mesh
            name="Mesh081_50"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_50.geometry}
            material={materials["solar panels.020"]}
          />
          <mesh
            name="Mesh081_51"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_51.geometry}
            material={materials["wire_153228184.021"]}
          />
          <mesh
            name="Mesh081_52"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_52.geometry}
            material={materials["solar panels.021"]}
          />
          <mesh
            name="Mesh081_53"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_53.geometry}
            material={materials["wire_153228184.022"]}
          />
          <mesh
            name="Mesh081_54"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_54.geometry}
            material={materials["solar panels.022"]}
          />
          <mesh
            name="Mesh081_55"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_55.geometry}
            material={materials["wire_153228184.023"]}
          />
          <mesh
            name="Mesh081_56"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_56.geometry}
            material={materials["solar panels.023"]}
          />
          <mesh
            name="Mesh081_57"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_57.geometry}
            material={materials["wire_153228184.024"]}
          />
          <mesh
            name="Mesh081_58"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_58.geometry}
            material={materials["solar panels.024"]}
          />
          <mesh
            name="Mesh081_59"
            castShadow
            receiveShadow
            geometry={nodes.Mesh081_59.geometry}
            material={materials["wire_153228184.025"]}
          />
        </group>
        <group
          name="POWER_BOX_1"
          position={[-61.45, -10.27, -40.26]}
          rotation={[-Math.PI, -1.57, 0]}
          scale={-0.01}
        >
          <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials["Power Box.001"]}
          />
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials["Battery Box"]}
          />
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.Concrete}
          />
          <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.Color}
          />
          <mesh
            name="Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials["Substation Box"]}
          />
          <mesh
            name="Mesh_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={materials["Switch Box"]}
          />
        </group>
        <group
          name="POWER_BOX"
          position={[-61.45, -10.27, -43.33]}
          rotation={[-Math.PI, -1.57, 0]}
          scale={-0.01}
        >
          <mesh
            name="Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={materials["Power Box.001"]}
          />
          <mesh
            name="Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials["Battery Box"]}
          />
          <mesh
            name="Mesh002_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_2.geometry}
            material={materials.Concrete}
          />
          <mesh
            name="Mesh002_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_3.geometry}
            material={materials.Color}
          />
          <mesh
            name="Mesh002_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_4.geometry}
            material={materials["Substation Box"]}
          />
          <mesh
            name="Mesh002_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_5.geometry}
            material={materials["Switch Box"]}
          />
        </group>
        <group
          name="Genrator_1001"
          position={[-100.22, -9.45, -77.9]}
          rotation={[Math.PI, -0.06, Math.PI]}
          scale={0.01}
        >
          <mesh
            name="Generator_1001"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001.geometry}
            material={materials["logo.003"]}
          />
          <mesh
            name="Generator_1001_1"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001_1.geometry}
            material={materials["wire_153228184.033"]}
          />
          <mesh
            name="Generator_1001_2"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001_2.geometry}
            material={materials["BODY_GLOW.003"]}
          />
          <mesh
            name="Generator_1001_3"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001_3.geometry}
            material={materials["Plastic.002"]}
          />
          <mesh
            name="Generator_1001_4"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001_4.geometry}
            material={materials["Screen.002"]}
          />
          <mesh
            name="Generator_1001_5"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1001_5.geometry}
            material={materials["Blue.003"]}
          />
        </group>
        <group
          name="Generator_Hero"
          position={[-79.88, -8.07, -49.88]}
          rotation={[Math.PI, -0.01, Math.PI]}
          scale={0.02}
        >
          <mesh
            name="Generator_1"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1.geometry}
            material={materials["logo.002"]}
          />
          <mesh
            name="Generator_1_1"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1_1.geometry}
            material={materials["wire_153228184.031"]}
          />
          <mesh
            name="Generator_1_2"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1_2.geometry}
            material={materials["BODY_GLOW.002"]}
          />
          <mesh
            name="Generator_1_3"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1_3.geometry}
            material={materials["Plastic.001"]}
          />
          <mesh
            name="Generator_1_4"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1_4.geometry}
            material={materials["Screen.001"]}
          />
          <mesh
            name="Generator_1_5"
            castShadow
            receiveShadow
            geometry={nodes.Generator_1_5.geometry}
            material={materials["Blue.002"]}
          />
        </group>
      </group>
    </group>
  );
};

export default Model;

useGLTF.preload("/site-combined-model.gltf");
