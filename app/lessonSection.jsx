import { Text, View, SafeAreaView, Pressable  } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";

import { Canvas } from "@benjeau/react-native-draw";

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

const { itemLetter } = useLocalSearchParams();
const canvasRef = useRef(null);


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
const SVGItem = svgList[itemLetter];

export default function LessonSection({FPA, SPA, TPA, FoPA, ableToDraw}) {
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
}