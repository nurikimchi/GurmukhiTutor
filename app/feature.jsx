import React, { useRef, useState } from "react";
import { Text, View, SafeAreaView, Pressable  } from "react-native";
import { Canvas } from "@benjeau/react-native-draw";
import { GlobalStyles } from "./GlobalStyles";
import LessonButton from '../components/LessonButton.tsx'
import { Screen } from '@react-navigation/native';

import Design_ੳ_1 from "../constants/data/Design_ੳ_1.tsx";
import { coord_ੳ_1 } from "../constants/data/coord_ੳ_1.js";

import Design_ਅ_2 from "../constants/data/Design_ਅ_2.tsx";
import { coord_ਅ_2 } from "../constants/data/coord_ਅ_2.js";

import Design_ੲ_3 from "../constants/data/Design_ੲ_3.tsx";
import { coord_ੲ_3 } from "../constants/data/coord_ੲ_3.js";

import Design_ਸ_4 from "../constants/data/Design_ਸ_4.tsx";
import { coord_ਸ_4 } from "../constants/data/coord_ਸ_4.js";

import Design_ਹ_5 from "../constants/data/Design_ਹ_5.tsx";
import { coord_ਹ_5 } from "../constants/data/coord_ਹ_5.js";

import Design_ਕ_6 from "../constants/data/Design_ਕ_6.tsx";
import { coord_ਕ_6 } from "../constants/data/coord_ਕ_6.js";

import Design_ਖ_7 from "../constants/data/Design_ਖ_7.tsx";
import { coord_ਖ_7 } from "../constants/data/coord_ਖ_7.js";

import Design_ਗ_8 from "../constants/data/Design_ਗ_8.tsx";
import { coord_ਗ_8 } from "../constants/data/coord_ਗ_8.js";

import Design_ਘ_9 from "../constants/data/Design_ਘ_9.tsx";
import { coord_ਘ_9 } from "../constants/data/coord_ਘ_9.js";

import Design_ਙ_10 from "../constants/data/Design_ਙ_10.tsx";
import { coord_ਙ_10 } from "../constants/data/coord_ਙ_10.js";

import Design_ਚ_11 from "../constants/data/Design_ਚ_11.tsx";
import { coord_ਚ_11 } from "../constants/data/coord_ਚ_11.js";

import Design_ਛ_12 from "../constants/data/Design_ਛ_12.tsx";
import { coord_ਛ_12 } from "../constants/data/coord_ਛ_12.js";

import Design_ਜ_13 from "../constants/data/Design_ਜ_13.tsx";
import { coord_ਜ_13 } from "../constants/data/coord_ਜ_13.js";

import Design_ਝ_14 from "../constants/data/Design_ਝ_14.tsx";
import { coord_ਝ_14 } from "../constants/data/coord_ਝ_14.js";

import Design_ਞ_15 from "../constants/data/Design_ਞ_15.tsx";
import { coord_ਞ_15 } from "../constants/data/coord_ਞ_15.js";

import Design_ਟ_16 from "../constants/data/Design_ਟ_16.tsx";
import { coord_ਟ_16 } from "../constants/data/coord_ਟ_16.js";

import Design_ਠ_17 from "../constants/data/Design_ਠ_17.tsx";
import { coord_ਠ_17 } from "../constants/data/coord_ਠ_17.js";

import Design_ਡ_18 from "../constants/data/Design_ਡ_18.tsx";
import { coord_ਡ_18 } from "../constants/data/coord_ਡ_18.js";

import Design_ਢ_19 from "../constants/data/Design_ਢ_19.tsx";
import { coord_ਢ_19 } from "../constants/data/coord_ਢ_19.js";

import Design_ਣ_20 from "../constants/data/Design_ਣ_20.tsx";
import { coord_ਣ_20 } from "../constants/data/coord_ਣ_20.js";

import Design_ਤ_21 from "../constants/data/Design_ਤ_21.tsx";
import { coord_ਤ_21 } from "../constants/data/coord_ਤ_21.js";

import Design_ਥ_22 from "../constants/data/Design_ਥ_22.tsx";
import { coord_ਥ_22 } from "../constants/data/coord_ਥ_22.js";

import { coord_ਦ_23 } from "../constants/data/coord_ਦ_23.js";
import Design_ਦ_23 from "../constants/data/Design_ਦ_23.tsx";

import { coord_ਧ_24 } from "../constants/data/coord_ਧ_24.js";
import Design_ਧ_24 from "../constants/data/Design_ਧ_24.tsx";

import { coord_ਨ_25 } from "../constants/data/coord_ਨ_25.js";
import Design_ਨ_25 from "../constants/data/Design_ਨ_25.tsx";

import { coord_ਪ_26 } from "../constants/data/coord_ਪ_26.js";
import Design_ਪ_26 from "../constants/data/Design_ਪ_26.tsx";

import { coord_ਫ_27 } from "../constants/data/coord_ਫ_27.js";
import Design_ਫ_27 from "../constants/data/Design_ਫ_27.tsx";

import { coord_ਬ_28 } from "../constants/data/coord_ਬ_28.js";
import Design_ਬ_28 from "../constants/data/Design_ਬ_28.tsx";

import { coord_ਭ_29 } from "../constants/data/coord_ਭ_29.js";
import Design_ਭ_29 from "../constants/data/Design_ਭ_29.tsx";

import { coord_ਮ_30 } from "../constants/data/coord_ਮ_30.js";
import Design_ਮ_30 from "../constants/data/Design_ਮ_30.tsx";

import { coord_ਯ_31 } from "../constants/data/coord_ਯ_31.js";
import Design_ਯ_31 from "../constants/data/Design_ਯ_31.tsx";

import { coord_ਰ_32 } from "../constants/data/coord_ਰ_32.js";
import Design_ਰ_32 from "../constants/data/Design_ਰ_32.tsx";

import { coord_ਲ_33 } from "../constants/data/coord_ਲ_33.js";
import Design_ਲ_33 from "../constants/data/Design_ਲ_33.tsx";

import { coord_ਵ_34 } from "../constants/data/coord_ਵ_34.js";
import Design_ਵ_34 from "../constants/data/Design_ਵ_34.tsx";

import { coord_ੜ_35 } from "../constants/data/coord_ੜ_35.js";
import Design_ੜ_35 from "../constants/data/Design_ੜ_35.tsx";

/* completedLevels: [
{'ੳ': true}
{'ਅ': false}
{'ੲ': false}
{'ਸ': false}
{'ਹ': false}
{'ਕ': false}
{'ਖ': false}
{'ਗ': false}
{'ਘ': false}
{'ਙ': false}
{'ਚ': false}
{'ਛ': false}
{'ਜ': false}
{'ਝ': false}
{'ਞ': false}
{'ਟ': false}
{'ਠ': false}
{'ਡ': false}
{'ਢ': false}
{'ਣ': false}
{'ਤ': false}
{'ਥ': false}
{'ਦ': false}
{'ਧ': false}
{'ਨ': false}
{'ਪ': false}
{'ਫ': false}
{'ਬ': false}
{'ਭ': false}
{'ਮ': false}
{'ਯ': false}
{'ਰ': false}
{'ਲ': false}
{'ਵ': false}
{'ੜ': false}

]
*/
import * as Progress from "react-native-progress";

import "react-native-gesture-handler";

import { db } from "../firebaseConfig.js";

import { useLocalSearchParams } from "expo-router";
import { useSearchParams } from "expo-router";

import {
	doc,
	getDoc,
	updateDoc,
	collection,
	where,
	query,
	deleteDoc
} from "firebase/firestore";


import {
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
	updateProfile,
	getAuth,
	deleteUser,
} from "firebase/auth";

import { useRouter, useSegments, Slot } from "expo-router";


export default function Feature() {

	const lessons = [
		{ letter: "ੳ" },
		{ letter: "ਅ" },
		{ letter: "ੲ" },
		{ letter: "ਸ" },
		{ letter: "ਹ" },
		{ letter: "ਕ" },
		{ letter: "ਖ" },
		{ letter: "ਗ" },
		{ letter: "ਘ" },
		{ letter: "ਙ" },
		{ letter: "ਚ" },
		{ letter: "ਛ" },
		{ letter: "ਜ" },
		{ letter: "ਝ" },
		{ letter: "ਞ" },
		{ letter: "ਟ" },
		{ letter: "ਠ" },
		{ letter: "ਡ" },
		{ letter: "ਢ" },
		{ letter: "ਣ" },
		{ letter: "ਤ" },
		{ letter: "ਥ" },
		{ letter: "ਦ" },
		{ letter: "ਧ" },
		{ letter: "ਨ" },
		{ letter: "ਪ" },
		{ letter: "ਫ" },
		{ letter: "ਬ" },
		{ letter: "ਭ" },
		{ letter: "ਮ" },
		{ letter: "ਯ" },
		{ letter: "ਰ" },
		{ letter: "ਲ" },
		{ letter: "ਵ" },
		{ letter: "ੜ" },
	];

	const svgList = {
		ੳ: Design_ੳ_1,
		ਅ: Design_ਅ_2,
		ੲ: Design_ੲ_3,
		ਸ: Design_ਸ_4,
		ਹ: Design_ਹ_5,
		ਕ: Design_ਕ_6,
		ਖ: Design_ਖ_7,
		ਗ: Design_ਗ_8,
		ਘ: Design_ਘ_9,
		ਙ: Design_ਙ_10,
		ਚ: Design_ਚ_11,
		ਛ: Design_ਛ_12,
		ਜ: Design_ਜ_13,
		ਝ: Design_ਝ_14,
		ਞ: Design_ਞ_15,
		ਟ: Design_ਟ_16,
		ਠ: Design_ਠ_17,
		ਡ: Design_ਡ_18,
		ਢ: Design_ਢ_19,
		ਣ: Design_ਣ_20,
		ਤ: Design_ਤ_21,
		ਥ: Design_ਥ_22,
		ਦ: Design_ਦ_23,
		ਧ: Design_ਧ_24,
		ਨ: Design_ਨ_25,
		ਪ: Design_ਪ_26,
		ਫ: Design_ਫ_27,
		ਬ: Design_ਬ_28,
		ਭ: Design_ਭ_29,
		ਮ: Design_ਮ_30,
		ਯ: Design_ਯ_31,
		ਰ: Design_ਰ_32,
		ਲ: Design_ਲ_33,
		ਵ: Design_ਵ_34,
		ੜ: Design_ੜ_35,
	};

    const coordMap = {
		ੳ: coord_ੳ_1,
		ਅ: coord_ਅ_2,
		ੲ: coord_ੲ_3,
		ਸ: coord_ਸ_4,
		ਹ: coord_ਹ_5,
		ਕ: coord_ਕ_6,
		ਖ: coord_ਖ_7,
		ਗ: coord_ਗ_8,
		ਘ: coord_ਘ_9,
		ਙ: coord_ਙ_10,
		ਚ: coord_ਚ_11,
		ਛ: coord_ਛ_12,
		ਜ: coord_ਜ_13,
		ਝ: coord_ਝ_14,
		ਞ: coord_ਞ_15,
		ਟ: coord_ਟ_16,
		ਠ: coord_ਠ_17,
		ਡ: coord_ਡ_18,
		ਢ: coord_ਢ_19,
		ਣ: coord_ਣ_20,
		ਤ: coord_ਤ_21,
		ਥ: coord_ਥ_22,
		ਦ: coord_ਦ_23,
		ਧ: coord_ਧ_24,
		ਨ: coord_ਨ_25,
		ਪ: coord_ਪ_26,
		ਫ: coord_ਫ_27,
		ਬ: coord_ਬ_28,
		ਭ: coord_ਭ_29,
		ਮ: coord_ਮ_30,
		ਯ: coord_ਯ_31,
		ਰ: coord_ਰ_32,
		ਲ: coord_ਲ_33,
		ਵ: coord_ਵ_34,
		ੜ: coord_ੜ_35,
	};
  const lessonSections = [
		{
			stage: 1,
			section: 1,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						firstPathAssist={FPA}
						secondPathAssist={SPA}
						thirdPathAssist={TPA}
						fourthPathAssist={FoPA}
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
		{
			stage: 1,
			section: 2,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						firstPathAssist={FPA}
						secondPathAssist={SPA}
						thirdPathAssist={TPA}
						fourthPathAssist={FoPA}
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
		{
			stage: 1,
			section: 3,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						firstPathAssist={FPA}
						secondPathAssist={SPA}
						thirdPathAssist={TPA}
						fourthPathAssist={FoPA}
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
		{
			stage: 2,
			section: 4,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
		{
			stage: 2,
			section: 5,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
		{
			stage: 2,
			section: 6,
			renderLesson: function() {
				return (<><View style={{ zIndex: 2, position: "absolute" }}>
					<SVGItem
						visible={true}
						
					/>
				</View>
				<Pressable
					style={{ backgroundColor: "transparent", zIndex: 5 }}
					onPressIn={() => pauseAllAnimation()}
					onPressOut={() => handleGetPath()}
				>
				<Canvas
					ref={canvasRef}
					height={100}
					width={100}
					style={{
						backgroundColor: "transparent",
						position: "relative",
						zIndex: 3,
					}}
					zIndex={100}
          enabled={ableToDraw}
				/>
				</Pressable></>)
			},
		},
	]
	
	const canvasRef = useRef(null);

	const params = useLocalSearchParams();

	const handleUndo = () => {
		canvasRef.current?.undo();
	};

	const parseSvgPath = require("svg-path-parser");

	const { sqrt, pow } = Math;

	const { itemLetter } = useLocalSearchParams();
	function calcXPGained() {
		let total = 0;
		lessonSections.forEach((section)=>{
			if (section.stage == 1) {
				total+=5;
			} else if (section.stage == 2) {
				total+=10;
			} else if (section.stage == 3) {
				total+=15;
			}
		})
		return total;
	}
	function euclideanDistance(p1, p2) {
		return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
	}

	function getPathPoints(commands) {
		const points = [];
		let currentPoint = { x: 0, y: 0 };
		commands.forEach((cmd) => {
			if (cmd.code === "M" || cmd.code === "L" || cmd.code === "T") {
				currentPoint = { x: cmd.x, y: cmd.y };
				points.push(currentPoint);
			} else if (cmd.code === "C") {
				currentPoint = { x: cmd.x, y: cmd.y };
				points.push(currentPoint);
			}
		});
		return points;
	}
	function resetCanvas() {
		setGlobalCounter(0);
		canvasRef.current.clear();
		setCompleteButton(false)
		setCurrLesson(currLesson+1);
	}
	function compareSvgPaths(path1, path2) {
		const commands1 = parseSvgPath(path1);
		const commands2 = parseSvgPath(path2);

		const points1 = getPathPoints(commands1);
		const points2 = getPathPoints(commands2);

		const minLength = Math.min(points1.length, points2.length);
		const maxLength = Math.max(points1.length, points2.length);
		const step1 = Math.floor(points1.length / minLength);
		const step2 = Math.floor(points2.length / minLength);

		let totalDistance = 0;
		for (let i = 0; i < minLength; i++) {
			const p1 = points1[i * step1];
			const p2 = points2[i * step2];
			totalDistance += euclideanDistance(p1, p2);
		}

		const maxDistance = Math.sqrt(Math.pow(100, 2) + Math.pow(100, 2)); // 100x100 bounding box

		const averageDistance = totalDistance / minLength;

		const similarityScore = 1 - averageDistance / maxDistance;

		const normalizedSimilarityScore = Math.max(
			0,
			Math.min(1, similarityScore)
		);

		return normalizedSimilarityScore;
	}

	const [globalCounter, setGlobalCounter] = React.useState(0);
	const [currSection, setCurrSection] = React.useState(0); 
	const [status, setStatus] = React.useState("");
	const [currLesson, setCurrLesson] = React.useState(0);
	const sections = [
		{
			 
		},
		{
			
		}
	]
    const [ableToDraw, setAbleToDraw] = React.useState(true)
    
    const [completeButton, setCompleteButton] = React.useState(false)

    const itemLetter_Coord = coordMap[itemLetter];

		//manages pen and activate
	const handleGetPath = () => {
        console.log("itemLetter_Coord:", itemLetter_Coord);
        console.log("Type of itemLetter_Coord:", typeof itemLetter_Coord);

        if (globalCounter == itemLetter_Coord.length) {
            console.log("itemLetter_Coord, ", itemLetter_Coord)
            setAbleToDraw(false)
            return null;
        }

        if (globalCounter == itemLetter_Coord.length - 1) {
            setCompleteButton(true)
        }
        
		const handwritingPathData = canvasRef.current?.getPaths();
		console.log("AQUI! ", handwritingPathData);
        console.log("globalCounter", globalCounter)


		const handwriting_parsedPath =
			handwritingPathData[globalCounter]?.path[0];
		const currentStencil_parsedPath = itemLetter_Coord[globalCounter]; //  BIG PROBLEM HERE. RESOLVED. itemLetter_Coord cannot be a string. It has to be a key value in one of the maps that convert.

		const similarity = compareSvgPaths(
			handwriting_parsedPath,
			currentStencil_parsedPath
		);

		console.log("Similarity:", similarity);

		if (similarity > 0.74) {
			// setStatus('correct')
			handwritingPathData[globalCounter].color = "green";
			setGlobalCounter(globalCounter + 1);
		} else {
			// setStatus('incorrect')
			handwritingPathData[globalCounter].color = "red";
			handwritingPathData.pop();
		}

		canvasRef.current.clear();
		handwritingPathData.forEach((path) => {
			canvasRef.current.addPath(path);
		});
	};

    const auth = getAuth();
	const currentUser = auth.currentUser;


	const SVGItem = svgList[itemLetter];

	const [currentAudio, setCurrentAudio] = useState('../assets/audio/audioTest.wav')
	const [FPA, setFPA] = useState(false);
	const [SPA, setSPA] = useState(false);
	const [TPA, setTPA] = useState(false);
	const [FoPA, setFoPA] = useState(false);

	const handleAdvanceToFirst = () => {
		setFPA(true);
	};

	const handleAdvanceToSecond = () => {
		setFPA(false);
		setSPA(true);
	};

	const pauseAllAnimation = () => {
		setFPA(false);
		setSPA(false);
		setTPA(false);
		setFoPA(false);
	};
	const playPronunciationAudio = (audioPath) => {
		//JUMP: delete comment to unmute
		//new Audio(audioPath).play();
	}

    const router = useRouter();

    const handleCollectEXP = async(amount) => {
        try {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);
						let data = docSnap.data();
            getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
                const currentData = docSnap.data();
          
                const currentEXP = currentData.exp || 0;
          
                const newEXP = currentEXP + 10;
          
                updateDoc(docRef, {
                  exp: newEXP,
                });
								data.xp = newEXP;
                const completedLevels = currentData.completedLevels;

                const justCompletedLevel = completedLevels.findIndex(level => level.hasOwnProperty(itemLetter));
                console.log("justCompletedLevel, ", justCompletedLevel)

                if (justCompletedLevel) {
                    completedLevels[indexToUpdate][levelKey] = true;
    
                    updateDoc(docRef, {
                        completedLevels: completedLevels
                    });
                }


                // todo later, connect exp to a ui state that passes back up to Cards.jsx
                console.log(`Updated experience to ${newEXP}`)
								console.log(data.xp)
            });

            router.navigate('/')
        } catch (error) {
            console.log('error @handleCollectEXP')
            console.log(error)
        }
    }

    // React.useEffect(() => {
    //     setFPA(prev => {
    //         if (!prev) {
    //             console.log('setFPA = true');
    //             return true;
    //         }
    //         return prev;
    //     });
    // }, [])
    React.useEffect(() => {
        console.log("useEffect, ", globalCounter);
        switch (globalCounter) {
            case 0:
                setFPA(prev => {
                    if (!prev) {
                        console.log('setFPA = true');
                        return true;
                    }
                    return prev;
                });
                break;
            case 1:
                setFPA(false);
                setSPA(prev => {
                    if (!prev) {
                        console.log('setFPA = false, setSPA = true');
                        return true;
                    }
                    return prev;
                });
                break;
            case 2:
                setSPA(false);
                setTPA(prev => prev ? prev : true);  // Set to true only if it's not already true
                break;
            case 3:
                setTPA(false);
                setFoPA(prev => prev ? prev : true);
                break;
            default:
                setFPA(false);
                setSPA(false);
                setTPA(false);
                setFoPA(false);
        }
    }, [globalCounter]);
	React.useEffect(()=>{
		playPronunciationAudio(currentAudio)
	}, [])
	// Idea, have user's lvl. 4 unstenciled drawing replace the SVG to mark completion

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}
			>
				{lessonSections[currLesson]&&lessonSections[currLesson].renderLesson()}


				<View style={{
						display:'flex',
						alignItems: 'center'
					}}>
					<Text style={GlobalStyles.romanizationText}>Romanization Here</Text>
					</View>
				</View>
			<View style={GlobalStyles.audioIconDiv} onClick={()=>{
				playPronunciationAudio(currentAudio)

			}}>
			<svg style={GlobalStyles.audioIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
			</svg>				
			</View>
			{
			}
        {
				completeButton && (<LessonButton text={currLesson == lessonSections.length-1?`Collect ${calcXPGained()} EXP`:"Continue"} onPress={() => {
					if (currLesson == lessonSections.length-1) {
						handleCollectEXP(calcXPGained)
					}
					else if (currLesson < lessonSections.length) {
						resetCanvas();
					}
				}}/>)} 
		</SafeAreaView>
	);
}
