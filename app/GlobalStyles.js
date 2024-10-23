import { Button, StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
  {
    textBox: {
      fontFamily: "system-ui",
      color: "whitesmoke",
      backgroundColor: "#866a86",
      fontSize: 16,
      // fontWeight: 350,
      padding: 15,
      paddingBottom: 35,
      borderRadius: 10,
      textAlign: "center",
      margin: 15,
    },

    text: {
      fontSize: 14,
      fontFamily: "system-ui",
      margain: 20, 
      padding: 20,
      color: "gray",
      fontWeight: "bold",
    },

    statsTextBase: {
      fontSize: 24, // 'text-base'
      fontWeight: '600', // 'font-semibold'
      lineHeight: 24, // 'leading-6'
      color: '#111827', // 'text-gray-900'
    },
    statsGridContainer: {
      marginTop: 20, // 'mt-5'
      flexDirection: 'column',
      // flexWrap: 'wrap',
      justifyContent: 'space-between', // Equivalent to grid layout with gap
    },
    statsCard: {
      backgroundColor: '#ffffff', // 'bg-white'
      borderRadius: 10, // 'rounded-lg'
      paddingHorizontal: 16, // 'px-4'
      paddingVertical: 25, // 'py-5' originally 20
      boxShadow: '#000', // 'shadow'
      shadowOffset: { width: 0, height: 1 }, // For shadow
      shadowOpacity: 0.2, // For shadow
      shadowRadius: 1.41, // For shadow
      elevation: 2, // For Android shadow
      marginBottom: 10, // To replicate gap between items
      flexBasis: '30%', // To replicate sm:grid-cols-3
    },
    statsCardUpperHalf: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 45
    },
    statsCardTitle: {
      fontSize: 14, // 'text-sm'
      fontWeight: '500', // 'font-medium'
      color: '#6B7280', // 'text-gray-500'
    },
    statsCardStat: {
      marginTop: 4, // 'mt-1'
      fontSize: 30, // 'text-3xl'
      fontWeight: '600', // 'font-semibold'
      letterSpacing: -0.5, // 'tracking-tight'
      color: '#111827', // 'text-gray-900'
    },
    statsLinkContainer: {
      position: 'absolute',
      left: 0, right: 0, bottom: 0, // 'inset-x-0 bottom-0'
      backgroundColor: '#F9FAFB', // 'bg-gray-50'
      paddingHorizontal: 16, // 'px-4'
      paddingVertical: 16, // 'py-4'
      borderRadius: 10
    },
    statsLinkText: {
      fontSize: 14, // 'text-sm'
      fontWeight: '500', // 'font-medium'
      color: '#4F46E5', // 'text-indigo-600'
    },
    lessonsBgLight: {
      backgroundColor: '#f0f0f0',
      paddingVertical: 24,
    },
    lessonsContainer: {
      // marginHorizontal: 'auto',
      // maxWidth: 1400,
      // paddingHorizontal: 16,
      marginTop: 20, // 'mt-5'
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between', // Equivalent to grid layout with gap
    },
    lessonsHeader: {
      // marginHorizontal: 'auto',
      maxWidth: 800,
    },
    lessonTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      // textAlign: 'center',
    },
    lessonSubtitle: {
      marginTop: 12,
      fontSize: 18,
      lineHeight: 28,
      color: '#333',
      textAlign: 'center',
    },
    lessonsGrid: {
      marginTop: 20,
      // marginHorizontal: 'auto',
      // maxWidth: 800,
      justifyContent: 'space-between',
    },
    lessonCard: {
      flex: 1,
      margin: 8,
      alignItems: 'center',
    },
    lessonImage: {
      width: '100%',
      aspectRatio: 14 / 13,
      borderRadius: 16,
    },
    lessonName: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
    },
    lessonRole: {
      fontSize: 16,
      color: '#555',
    },
    lessonLocation: {
      fontSize: 14,
      color: '#777',
    },
    lessonButtonContainer: {
      backgroundColor: '#4f46e5', // indigo-600
      borderRadius: 8, // rounded-md
      paddingHorizontal: 10, // px-2.5
      paddingVertical: 6, // py-1.5
      alignItems: 'center',
      justifyContent: 'center',
    },
    lessonButtonContent: {
      flexDirection: 'row', 
      alignItems: 'center', 
      gap: 6, // gap-x-1.5
    },
    lessonButtonText: {
      color: '#ffffff', // text-white
      fontSize: 14, // text-sm
      fontWeight: '600', // font-semibold
    },
    lessonButtonIcon: {
      marginRight: 6, // -ml-0.5
    },
    lessonButtonShadow: {
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
      elevation: 5,
    },
    signInContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      paddingVertical: 48,
      marginBottom: 64
    },
    signInInnerContainer: {
      alignSelf: 'center',
      width: '100%',
      maxWidth: 400,
    },
    signInLogo: {
      alignSelf: 'center',
      height: 40,
      width: 'auto',
    },
    signInHeading: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 36,
      color: '#1F2937', // text-gray-900
    },
    signInForm: {
      marginTop: 40,
    },
    signInFormField: {
      marginBottom: 24,
    },
    signInLabel: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 24,
      color: '#1F2937', // text-gray-900
    },
    confirmationText: {
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 24,
      marginBottom: 10,
      color: '#1F2937', // text-gray-900
    },
    signInInput: {
      marginTop: 8,
      width: '100%',
      paddingVertical: 6,
      paddingLeft: 8,
      borderRadius: 8,
      backgroundColor: '#FFFFFF', // white background
      color: '#1F2937', // text-gray-900
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
      borderWidth: 1,
      borderColor: '#D1D5DB', // ring-gray-300
    },
    signInInputError: {
      marginTop: 8,
      width: '100%',
      paddingVertical: 6,
      paddingLeft: 8,
      borderRadius: 8,
      backgroundColor: '#FFFFFF', // white background
      color: '#1F2937', // red
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
      borderWidth: 1,
      borderColor: '#c30010', // ONLY DIFFERENCE
    },
    signInErrorMessage: {
      height: 16,
      fontSize: 14,
      fontWeight: 200,
      color: '#c30010',
      marginTop: 8
    }, 
    signInForgotPasswordLink: {
      fontSize: 14,
      fontWeight: 600,
      color: '#4F46E5', // text-indigo-600
    },
    signInSubmitButton: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#4F46E5', // bg-indigo-600
      paddingVertical: 6,
      paddingHorizontal: 12,
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF', // text-white
    },
    signInNoAccount: {
      // textAlign: 'center',
      fontSize: 14,
      color: '#6B7280', // text-gray-500
      fontWeight: '600',
      lineHeight: 24
    },
    signInNoAccountLink: {
      fontWeight: '600',
      color: '#4F46E5', // text-indigo-600
      fontSize: 14
    },
    leaderboardListItem: {
      paddingVertical: 16,  // equivalent to `py-4`
      paddingHorizontal: 16,  // equivalent to `px-4`
      borderBottomWidth: 1,  // equivalent to `divide-y`
      borderBottomColor: '#E5E7EB',  // equivalent to `divide-gray-200`
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-between'
      // alignContent: 'center',
      // justifyContent: 'center'
    },
    leaderboardTop3Number: {
      color: 'white',
    },
    avatarContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto'
    },
    avatarImage: {
      height: 24, // h-6 in Tailwind is 24px
      width: 24, // w-6 in Tailwind is 24px
      borderRadius: 4, // rounded-md in Tailwind
    },
    avatarBadgeContainer: {
      position: 'absolute',
      bottom: -4, // Slightly outside the bottom of the image
      right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 12 }, { translateY: 12 }], // translate-x-1/2 and translate-y-1/2 in Tailwind
      borderRadius: 3, // Large enough for full roundness
      borderWidth: 5, // border-2 in Tailwind
      borderColor: 'white',
      backgroundColor: 'transparent', // Ensure background is transparent
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarBadgeReg: {
      height: 16, // h-1.5 in Tailwind is 6px
      width: 16, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#d1d5db', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeGold: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#FFD700', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeSilver: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#C0C0C0', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeBronze: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#CD7F32', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    profileContainer: {
      flex: 1,
    },
    profileHeader: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.1)',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    profileHeading: {
      // color: 'white',
      fontSize: 24,
      fontWeight: '600',
    },
    profileContent: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 24,
      marginTop: 14
    },
    profileSection: {
      marginBottom: 72,
    },
    profileSectionTitle: {
      // color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
    profileSectionSubtitle: {
      color: 'rgba(156, 163, 175, 1)',
      fontSize: 14,
      marginTop: 4,
    },
    profileForm: {
      marginTop: 16,
    },
    profileFormGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
    },
    profileAvatar: {
      width: 96,
      height: 96,
      borderRadius: 8,
      backgroundColor: '#2d2d2d',
    },
    profileButton: {
      // backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: '#6366F1',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 4,
      marginLeft: 16,
    },
    profileButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    profileImageNote: {
      color: 'rgba(156, 163, 175, 1)',
      fontSize: 12,
      marginTop: 8,
    },
    profileInputGroup: {
      marginBottom: 16,
    },
    profileLabel: {
      // color: 'white',
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 4,
    },
    profileInput: {
      // backgroundColor: '#2d2d2d',
      borderColor: '#2d2d2d',
      borderWidth: 1,
      // color: 'white',
      paddingHorizontal: 8,
      paddingVertical: 12,
      borderRadius: 4,
      fontSize: 14,
    },
    profileInputError: {
      // backgroundColor: '#2d2d2d',
      borderColor: '#c30010',
      borderWidth: 1,
      // color: 'white',
      paddingHorizontal: 8,
      paddingVertical: 12,
      borderRadius: 4,
      fontSize: 14,
    },
    profileFormActions: {
      marginTop: 24,
    },
    profileSaveButton: {
      backgroundColor: '#6366F1',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    profileSaveButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
    },
    profileDeleteButton: {
      backgroundColor: 'rgb(221, 82, 76)',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      width: '70%'
    },
    audioIcon: {
      width: "35px",
    },
    audioIconDiv: {
      position: 'absolute',
      right: '10px',
      top: '10px'
    },
    romanizationText: {
      fontSize: "18px",
      fontStyle: 'italic',
      fontFamily: "system-ui",
      color:"#222",
      position: 'absolute',
      marginTop: '1em',
      whiteSpace: 'nowrap',
    }
  }
)