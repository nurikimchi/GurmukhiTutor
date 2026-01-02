import React, { useRef, useState } from "react";
import { Text, View, SafeAreaView, Pressable  } from "react-native";
import { Canvas } from "@benjeau/react-native-draw";

import LessonButton from '../components/LessonButton.tsx'

import * as Progress from "react-native-progress";

import "react-native-gesture-handler";

import { db } from "../firebaseConfig.js";

import { useLocalSearchParams } from "expo-router";
import {euclideanDistance} from "../utils/euclideanDistance.js"

import {
	doc,
	getDoc,
	updateDoc,
} from "firebase/firestore";

import {
	getAuth,
} from "firebase/auth";

import { useRouter } from "expo-router";

import { PunjabiAlphabet } from "../constants/data";

export default function Feature() {
	const { itemLetter } = useLocalSearchParams();

	const currentLessonLetter = PunjabiAlphabet[itemLetter];
	const currentLessonLetter_SVG = currentLessonLetter?.design;
    const currentLessonLetter_coords = currentLessonLetter?.coords;
    
	const canvasRef = useRef(null);


	const handleUndo = () => {
		canvasRef.current?.undo();
	};

	const parseSvgPath = require("svg-path-parser");

	function getPathPoints(commands) {
		const points = [];
		let currentPoint = { x: 0, y: 0 };
		// For each passed in command, determine the type of SVG stroke. Convert each SVG stroke into its respective Cartesian coordinate.
		commands.forEach((cmd) => {
			if (cmd.code === "M" || cmd.code === "L" || cmd.code === "T" || cmd.code === "C") {
				currentPoint = { x: cmd.x, y: cmd.y };
				points.push(currentPoint);
			}
		});
		return points;
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
			const p1 = points1[i * step1]; // Select the index 
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

	const [status, setStatus] = React.useState("");

    const [ableToDraw, setAbleToDraw] = React.useState(true)
    
    const [completeButton, setCompleteButton] = React.useState(false)

	const handleGetPath = () => {
        console.log("currentLessonLetter_coords:", currentLessonLetter_coords);
        console.log("Type of currentLessonLetter_coords:", typeof currentLessonLetter_coords);

        if (globalCounter == currentLessonLetter_coords.length) {
            console.log("currentLessonLetter_coords, ", currentLessonLetter_coords)
            setAbleToDraw(false)
            return null;
        }

        if (globalCounter == currentLessonLetter_coords.length - 1) {
            setCompleteButton(true)
        }
        
		const handwritingPathData = canvasRef.current?.getPaths();
		console.log("handwritingPathData: ", handwritingPathData);
        console.log("globalCounter: ", globalCounter)


		const handwriting_parsedPath =
			handwritingPathData[globalCounter]?.path[0];
		const currentStencil_parsedPath = currentLessonLetter_coords[globalCounter]; //  BIG PROBLEM HERE. RESOLVED. currentLessonLetter_coords cannot be a string. It has to be a key value in one of the maps that convert.

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

    const router = useRouter();

    const handleCollectEXP = async(amount) => {
        console.log("@handleCollectEXP")
        try {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = getDoc(docRef);

            getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
                const currentData = docSnap.data();
          
                const currentEXP = currentData.exp || 0;
          
                const newEXP = currentEXP + 10;
          
                updateDoc(docRef, {
                  exp: newEXP,
                });

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
            });

            router.navigate('/')
        } catch (error) {
            console.log('error @handleCollectEXP')
            console.log(error)
        }
    }

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
				<View style={{ zIndex: 2, position: "absolute" }}>
					<currentLessonLetter_SVG
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
				</Pressable>
			</View>
			{/* {globalCounter >= ਕ.length ? <></> : <Button title="Get Path" onPress={handleGetPath} />} */}
            {completeButton && <LessonButton text="Collect 10 EXP" onPress={() => handleCollectEXP(10)}/>}
            
		</SafeAreaView>
	);
}
