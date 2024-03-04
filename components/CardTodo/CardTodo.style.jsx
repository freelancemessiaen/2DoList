import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    card: {

        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: 115,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,

    },
    txt: {
        fontSize: 25,
        

    },
    img: {
        width: 25,
        height: 25
    }

});

export { s };